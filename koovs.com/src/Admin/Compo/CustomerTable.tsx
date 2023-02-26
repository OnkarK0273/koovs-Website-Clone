import { Avatar } from '@chakra-ui/avatar'
import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import { Userdetails } from '../../utils/types'
interface ListingtableProp{
    data:Userdetails,
    handleOpenDetails:(id:number, Image:string, Password:string, Name:string, Phone:string, Email:string )=>void,
    i:number
   
   
}
export default function CustomerTable({data,handleOpenDetails,i}:ListingtableProp) {
  return (
    <>
        <Box
          key={data.id}
          // boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          p="10px"
          border='1px solid teal'
          mb={"10px"}
          width={"100%"}
          cursor={"pointer"}
          onClick={() => {
            handleOpenDetails(
              data.id,
              data.Image,
              data.Password,
              data.Name,
              data.Phone,
              data.Email
            );
          }}
        >
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              width={{ base: "5%", md: "7%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>{i + 1}</Text>
            </Box>
            <Box
              width={{ base: "8%", md: "12%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Avatar src={data.Image} name={data.Name}></Avatar>
            </Box>
            <Box
              width={{ base: "7%", md: "15%", lg: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text>{data.Name}</Text>
            </Box>

            <Box
              width={{ base: "10%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
            >
              <Text textAlign={'center'} bg='teal.500' >{data.Phone}</Text>
            </Box>

            <Box
              width={{ base: "15%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{data.Email}</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "13%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{data.Password}</Text>
            </Box>
            <Box
              width={{ base: "20%", md: "15%" }}
              fontSize={{ base: "12px", md: "11px", lg: "14px" }}
              textAlign={"center"}
            >
              <Text>{data.Address}</Text>
            </Box>
          </Box>
          {/*``````````````````````````` Small Screen Data```````````````````````` */}
          <Box
            display={{ base: "flex", md: "none" }}
            justifyContent={"space-between"}
            p={"10px"}
          >
            {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
            <Box width={{ base: "30%", sm: "40%" }}>
              <Box
                h="25px"
                width={"78px"}
                border={"1px solid green"}
                bg={"green.500"}
                mb={"10px"}
                color="black"
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                  User Details
                </Text>
              </Box>
              <Avatar
                size={{ base: "lg", sm: "2xl" }}
                src={data.Image}
                name={data.Name}
              ></Avatar>
            </Box>
            {/* ```````````````````````````````````right Div````````````````````````````` */}
            <Box
              w={{ base: "60%", sm: "60%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-around"}
            >
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "13px", sm: "14px" }}
                >
                  {data.Name}
                </Text>
                <Text
                  as={"mark"}
                  mt={"10px"}
                  fontSize={{ base: "12px", sm: "13px" }}
                >
                  {data.Phone}
                </Text>
                <Text
                  fontWeight={"bold"}
                  mt={"10px"}
                  fontSize={{ base: "13px", sm: "14px" }}
                  color={"green.500"}
                >
                  Mail-{data.Email}
                </Text>
                <Text
                  fontWeight={"bold"}
                  mt={"10px"}
                  fontSize={{ base: "13px", sm: "14px" }}
                >
                  Pass-{data.Password}
                </Text>
                <Text mt={"10px"} fontSize={{ base: "13px", sm: "14px" }}>
                  {data.Address}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

    </>
  )
}
