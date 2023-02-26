import React from 'react'
import { Product } from '../../utils/types'
import ListingTable from './ListingTable'
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Pagination from './Pagination';
import { useAppDispatch } from '../../Redux/store';
import { getAdminWomenToggle } from '../../Redux/admin/admin.action';
interface listingListProps{
  setPage:(page:number)=>void
  page:number
  data:Product[]
}
export default function ListingItems1({data,setPage,page}:listingListProps) {
  const dispatch = useAppDispatch()
  const handleToggle = (id:string,val:boolean)=>{

    dispatch(getAdminWomenToggle(id,val))

  }

  
  return (
    <>
    
    <Box>
    <SimpleGrid gap={4} p='4px'  >
            <Box
              display={{ base: "none", md: "flex" }}
              justifyContent={"space-between"}
              alignItems={"center"}
              textAlign={"left"}
              // boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
              padding={"10px"}
              mt={"20px"}
              border='1px solid teal'
              
            >
              {/* <Box
                width={"6%"}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>S.NO</Text>
              </Box> */}
              <Box
                width={{ base: "10%", md: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>ID</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>IMAGE</Text>
              </Box>
              <Box
                width={{ base: "10%", md: "27%", lg: "25%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRODUCTS</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "7%", lg: "8%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>PRICE</Text>
              </Box>
              <Box
                width={{ base: "5%", md: "15%", lg: "15%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>CATEGORY</Text>
              </Box>
              <Box
                w={{ base: "5%", md: "13%", lg: "10%" }}
                fontSize={{ base: "12px", md: "12px", lg: "md" }}
              >
                <Text>STATUS</Text>
              </Box>
            </Box>
          
            {data?.map((el, i) => (
              <ListingTable
                key={el.id}
                data={el}
                handleToggle={handleToggle}
                // i={i}
                // {...el}
                // handleOpenDetails={handleOpenDetails}
                // handleToggleStatus={handleToggleStatus}
              />
            ))}
            <Pagination page={page} setPage={setPage}/>
          </SimpleGrid>
    </Box>
    
    {/* {
      data?.map((el)=>(<ListingTable key={el.id} data={el} />))
    } */}

    </>
  )
}
