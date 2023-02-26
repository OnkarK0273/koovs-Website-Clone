import { ArrowUpIcon } from '@chakra-ui/icons'
import { Button,Box, Link } from '@chakra-ui/react'
import React from 'react'

const BackToTop = () => {
  return (
    <Link href="#home"><Button borderRadius="50%" w="30px" h="40px" bgColor={"black"} color="white" _hover={{bgColor:"gray.800", transform: "scale(1.2)"}} _active={{bgColor:"white", color: "black"}} position={"fixed"}top={"88%"} left={"95%"} zIndex={3} ><ArrowUpIcon fontSize={"30px"}/></Button></Link>
    )

}

export default BackToTop