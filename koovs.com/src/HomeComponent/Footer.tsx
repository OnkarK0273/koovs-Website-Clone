import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Input,
    InputLeftElement,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    Divider,
    Button,
  } from "@chakra-ui/react";
  import { FiArrowRight } from "react-icons/fi";
  import { MdOutlineMail } from "react-icons/md";
  import { FaInstagram, FaFacebook } from 'react-icons/fa';

  type ChildrenProps  = {
        children : string
  }

 
  
  const ListHeader = ({children}:ChildrenProps) => {
    return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
     
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        fontSize={14}
      >
         <Divider sx={{ borderColor: "gray.300", height: "0px" }} />
        <Container as={Stack} maxW={"100%"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <ListHeader>About</ListHeader>
                <Link href={"#"}>Our story</Link>
                <Link href={"#"}>Contact us</Link>
                <Link href={"#"}>carrers</Link>
                <Link href={"#"}>Privacy policy</Link>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "gray.300", height: "350px" }}
              />
            </Flex>
  
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <ListHeader>Support</ListHeader>
                <Link href={"#"}>Payments</Link>
                <Link href={"#"}>Returns/Exchange</Link>
                <Link href={"#"}>Shipment</Link>
                <Link href={"#"}>Terms & conditions</Link>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "gray.300", height: "350px" }}
              />
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <ListHeader>Customer Care</ListHeader>
                <Text>Timings: 10 AM - 6 PM (Mon - Sat)</Text>
                <Text>Call: +91 7011263423</Text>
                <Text>E-Mail: care@koovs.com</Text>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "gray.300", height: "350px" }}
              />
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <ListHeader>Subscribe</ListHeader>
                <Text>
                  Enter your email below to be the first to know about new{" "}
                </Text>
                <Text>collections and product launches.</Text>
                <Stack width="100%">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="black.300"
                      fontSize="1.2em"
                      children={<MdOutlineMail/>}
                    />
                    <Input placeholder="Enter your email" />
                    <InputRightElement
                      children={<FiArrowRight color="green.500" />}
                    />
                  </InputGroup>
                </Stack>
              </Stack>
            </Flex>
          </SimpleGrid>
          <Divider sx={{ borderColor: "gray.300", height: "0px" }} />
        </Container>
        <Container
          as={Stack}
          maxW={'100%'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }} 
          align={{ base: 'center', md: 'center' }}>
            <Stack direction={'row'} spacing={1}>
            <Button>
              <FaFacebook /> 
            </Button>
            
            <Button>
              <FaInstagram />
            </Button>
          </Stack>
          <Text>© NEWBRAVE VENTURE PRIVATE _limitED</Text>
          <Text>jhgidfgfiudg</Text>
          
        </Container>
        
      </Box>
    );
  }