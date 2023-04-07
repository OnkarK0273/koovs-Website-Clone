import React from 'react'
import { Box, Button, Image, Skeleton, Stack, Text } from "@chakra-ui/react";
import { Product } from '../../utils/types';
import { useAppSelector } from '../../Redux/store';
interface ListingtableProp{
    data:Product,
    handleToggle:(id:string,val:boolean)=>void
    handleOpenDetails:(id:string, image:string, price:number, title:string)=>void
   
   
}
export default function ListingTable({data,handleToggle,handleOpenDetails}:ListingtableProp) {
    const loading = useAppSelector((store)=>store.adminReducer.loading)
    
    // console.log('loading',loading)
   


  return (

    <>
        {
            loading? <Stack direction={'row'} w='100%' >
            <Skeleton height='20px' p='20px' m='5px' w='100%' startColor='#439A97' endColor='#97DECE' />
            </Stack>:<Box
            // boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            cursor={"pointer"} border='1px solid teal'
            >   

            <Box
                display={{ base: "none", md: "flex" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                textAlign={"left"}
                padding={"10px"}
            >



                <Box
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                <Text>{data.id}</Text>
                </Box>
                <Box
                width={{ base: "5%", md: "13%", lg: "10%" }}
                  onClick={() => {
                    handleOpenDetails(data.id.toString(),data.img1,data.price,data.title);
                  }}
                >
                <Image width={"80%"} src={data.img1 || data.img2 } alt={'category'}></Image>
                </Box>
              
                <Box
                    width={{ base: "10%", md: "27%", lg: "25%" }}
                    fontSize={{ base: "12px", md: "12px", lg: "md" }}
                    onClick={() => {
                        handleOpenDetails(data.id.toString(),data.img1,data.price,data.title);
                      }}
                    >
                    <Text>{data.title}</Text>
                </Box>


                <Box
                width={{ base: "5%", md: "10%", lg: "8%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
                onClick={() => {
                    handleOpenDetails(data.id.toString(),data.img1,data.price,data.title);
                  }}
                >
                <Text>₹ {data.price}</Text>
                </Box>
                <Box
                width={{ base: "5%", md: "15%", lg: "15%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
                >
                <Text>{data.category}</Text>
                </Box>
                <Box w={{ base: "5%", md: "15%", lg: "10%" }}>
                <Button
                    onClick={() => {
                      handleToggle(data.id.toString(), data.active);
                    }}
                    size={{ base: "sm", md: "sm", lg: "md" }}
                    colorScheme={data.active ? "green" : "red"}
                >
                    {data.active ? "Active" : "Inactive"}
                </Button>
                </Box>
            </Box>
            {/* ```````````````````````````````small screen ``````````````````````````````````*/}

            <Box
                display={{ base: "flex", md: "none" }}
                justifyContent={"space-between"}
                p={"10px"}
            >
                {/* ````````````````````````````````````left Div ``````````````````````````````````*/}
                <Box
                width={{ base: "50%", sm: "40%" }}
                onClick={() => {
                    handleOpenDetails(data.id.toString(),data.img1,data.price,data.title);
                  }}
                >
                <Box
                    h="25px"
                    width={"58px"}
                    border={data.active ? "1px solid Green" : "1px solid red"}
                    bg={data.active ? "green.300" : "red.300"}
                    mb={"10px"}
                    color="black"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    {data.active ? (
                    <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                        Active
                    </Text>
                    ) : (
                    <Text as="b" fontSize={{ base: "10px", sm: "12px" }}>
                        Inactive
                    </Text>
                    )}
                </Box>
                <Image
                    width={{ base: "60%", sm: "40%" }}
                    src={data.img1 }
                    alt={'category'}
                ></Image>
                <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
                ₹{data.price}
                </Text>
                </Box>
                {/* ```````````````````````````````````right Div````````````````````````````` */}
                <Box
                w={{ base: "50%", sm: "60%" }}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
                >
                <Box>
                    <Text as="b" fontSize={{ base: "13px", sm: "14px" }}>
                    {data.title}
                    </Text>
                    <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
                    {data.category}
                    </Text>
                    <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
                    ID- {data.id}
                    </Text>
                </Box>

                <Button
                    mt={"10px"}
                    onClick={() => {
                        handleToggle(data.id.toString(), data.active);
                      }}
                    size={"sm"}
                    colorScheme={data.active ? "green" : "red"}
                >
                    {data.active ? "Active" : "Inactive"}
                </Button>
                </Box>
            </Box>
        </Box>
        }
        

    </>
  )
}
