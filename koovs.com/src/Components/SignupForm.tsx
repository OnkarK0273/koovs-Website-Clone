import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import fb from "../utils/Images/fbIcon.png";
import google from "../utils/Images/googleIcon.png";
import { SignupDetail } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { signupSuccess, signupUserApi } from "../Redux/Auth/signup.actions";
import { useToast } from "@chakra-ui/react";

const SignupForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [signupDetails, setSignupDetails] = React.useState<SignupDetail>({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [insecurePassword, setInsecurePassword] =
    React.useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = React.useState<boolean>(false);
  const state = useAppSelector((store) => store.signupReducer);
  const toast = useToast();

  const handleDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDetails: SignupDetail = {
      ...signupDetails,
      [e.target.name]: e.target.value,
    };
    setInsecurePassword(false);
    setInvalidEmail(false);
    setSignupDetails(newDetails);
  };

  console.log(state);
  // console.log(signupDetails);

  const handleSignupFormSubmit = () => {
    if (
      signupDetails.email === "" ||
      signupDetails.fName === "" ||
      signupDetails.lName === "" ||
      signupDetails.password === ""
    ) {
      toast({
        title: "Warning! Form Incomplete",
        description: "Please fill all the details",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (!signupDetails.email.includes("@")) {
      setInvalidEmail(true);
      return;
    }
    if (
      signupDetails.password.length < 8 &&
      !signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
      setInsecurePassword(true);
      return;
    }

    dispatch(signupUserApi(signupDetails));
    toast({
      status: "success",
      title: "Congratulations!",
      description: "Your account has been created successfully",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack
      mb={"80px"}
      width={{ base: "90%", md: "50%" }}
      alignItems={"left"}
      padding={"10px"}
    >
      <Heading size={"md"} fontWeight={"semibold"}>
        Register
      </Heading>
      <Input
        type="text"
        placeholder="First Name"
        name="fName"
        onChange={(e) => handleDetails(e)}
      />
      <Text fontSize={"xs"} color={"white"}>
        Email should be valid and must have '@' special characters
      </Text>

      <Input
        type="text"
        placeholder="Last Name"
        name="lName"
        onChange={(e) => handleDetails(e)}
      />
      <Text fontSize={"xs"} color={"white"}>
        Email should be valid and must have '@' special characters
      </Text>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => handleDetails(e)}
      />
      <Text fontSize={"xs"} color={invalidEmail ? "red.500" : "white"}>
        Email should be valid and must have '@' special characters
      </Text>
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handleDetails(e)}
      />
      <Text fontSize={"xs"} color={insecurePassword ? "red.500" : "white"}>
        Password should be minimum 8 characters long and must have special
        characters like: !@#$%^
      </Text>
      <Text pt={"15px"} fontWeight={"normal"}>
        Sign up for early Sale access plus tailored new arrivals, trends and
        promotions. To opt out, click unsubscribe in our emails.
      </Text>
      <Button
        onClick={handleSignupFormSubmit}
        variant={"solid"}
        bgColor={"black"}
        color={"white"}
        w={"100%"}
        padding={"2px"}
        _hover={{ transform: "scale(1.03)" }}
        _active={{
          border: "1px solid black",
          bgColor: "white",
          color: "black",
        }}
      >
        Register
      </Button>
      <Link to="/login">
        <Button
          variant={"outline"}
          bgColor={"white"}
          color={"black"}
          w={"100%"}
          border={"1px solid black"}
          _hover={{
            border: "1px solid black",
            bgColor: "black",
            color: "white",
            transform: "scale(1.03)",
          }}
          _active={{
            border: "1px solid black",
            bgColor: "white",
            color: "black",
          }}
        >
          Log In
        </Button>
      </Link>
      <Flex
        alignItems={"center"}
        p={"1px"}
        paddingLeft={"15px"}
        borderRadius={"5px"}
        bgColor={"facebook.400"}
        color={"#fff"}
        fontWeight={"semibold"}
        justifyContent={"space-between"}
        _hover={{ opacity: "85%" }}
      >
        Sign in with Facebook
        <Image src={fb} maxH={"40px"} p="0px" />
      </Flex>
      <Flex
        alignItems={"center"}
        p={"3px"}
        paddingLeft={"15px"}
        borderRadius={"5px"}
        bgColor={"red.500"}
        color={"#fff"}
        fontWeight={"semibold"}
        justifyContent={"space-between"}
        _hover={{ opacity: "85%" }}
      >
        Sign in with Google
        <Image src={google} maxH={"34px"} p="0px" bgColor="red.400" />
      </Flex>
    </VStack>
  );
};

export default SignupForm;
