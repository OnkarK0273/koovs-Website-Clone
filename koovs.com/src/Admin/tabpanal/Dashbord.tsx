import { Box } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import Piechart from '../Compo/Piechart'

export default function Dashbord() {
  
  


  useEffect(()=>{},[])
  return (
    <Box  pt={{ base: "80px", md: "20px" }} minH={"100vh"} >
        <Piechart/>
    </Box>
  )
}
