import { CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../Redux/store'
import { logoutUser } from '../Redux/Auth/login.action'

const Account = () => {
    const {isAuth, details} = useAppSelector((store)=> store.loginReducer);
    const {fName, lName, email} = details;
    const [forceRefresh, setForceReferesh] = React.useState(false)
    const dispatch = useAppDispatch()
    // console.log(isAuth)

    const logoutfn = () => {

        dispatch(logoutUser())
        setForceReferesh(!forceRefresh)
    }

    if(!isAuth){
        return <Navigate to={"/login"}/>
    }
  return (
    <Box padding={"10px"} mt={"50px"} mb={"60px"}>
        <Heading size={"lg"} 
        textAlign={"center"}
       fontWeight={"semibold"}
       mb={"80px"}
       >
        My Account
      </Heading>

      <HStack>
        <Box display={{base: "none", md: "block"}}>
            <VStack mx={"80px"} justifyContent={"left"} gap={5}>
            <Link to={"/account"} style={{fontWeight:"bold"}}>Dashboard</Link>
            <Link to={"/wishlist"}>Wishlist</Link>
            <Button onClick={logoutfn} bgColor={"blackAlpha.900"} color={"white"} size={"sm"} _hover={{color: "black", bgColor: "gray.100"}}>Logout</Button>
            </VStack>
        </Box>

        <Box borderLeft={{base: "none",md:"1px solid gray"}} pl={{base: "0px", md: "30px", lg: "100px"}} width={{base: "95%",md:"70%"}}>
            <Text mb={"50px"}>Hello <span style={{fontWeight:"bold"}}>{fName} {lName}</span>! (Not <span style={{fontWeight:"bold"}}>{fName} {lName}?</span> <Button onClick={logoutfn} bgColor={"blackAlpha.900"} color={"white"} size={"sm"} _hover={{color: "black", bgColor: "gray.100"}}>Logout</Button>)</Text>
            <Heading size={"md"} mb={"20px"}>Order History</Heading>
            <Text mb={"60px"} bgColor={"green.100"} borderRadius={"5px"} fontSize={{base: "14px", md: "16px"}} p={1.5} width={{base: "90%", sm: "400px", md: "60%" }}> <CheckIcon color={"green.400"}  mr={3}/> <Link to={"/"} style={{textDecoration:"underline"}}>Make your first order.</Link> You haven't placed any orders yet.</Text>
            <Heading size={"md"} mb={"30px"}>Account Details</Heading>
            <Flex justifyContent={"space-between"} px={"20px"} width={{base: "90%", sm: "400px", md: "50%" }}>
                <Text>Name</Text>
                <Text color={"gray.500"}>{fName} {lName}</Text>
            </Flex>
        <Divider orientation='horizontal' w={"100%"} mt={"10px"} mb={"20px"} />
        <Flex justifyContent={"space-between"} px={"20px"} width={{base: "90%", sm: "400px", md: "50%" }}>
                <Text>Email</Text>
                <Text color={"gray.500"}>{email}</Text>
            </Flex>
        <Divider orientation='horizontal' w={"100%"} mt={"10px"} mb={"20px"} />

        </Box>
      </HStack>
    </Box>
  )
}

export default Account