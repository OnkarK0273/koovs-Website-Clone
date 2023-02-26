import { Heading, Image, SimpleGrid, Box, Text, Button, Center, } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import banner from "../assets/bannerKoolz.jpeg"
import Mens from "../HomeComponent/Mens";
import Womens from "../HomeComponent/Womens";
import Brands from "../HomeComponent/Brands";
import Shoes from "../HomeComponent/Shoes";
import Tshirts from "../HomeComponent/Tshirts";
import TopWomenCarousel from "../HomeComponent/TopWomenCarousel";
import TopMenCarousel from "../HomeComponent/TopMenCarousel";
import Shipping from "../HomeComponent/Shipping";

export default function Home() {
  return (
    <>
    <Box>
      <Image src={banner} alt ="banner"/>
    </Box>
     <Heading as="h3" size="lg" textAlign={"left"} mt={"20px"} mb={"30px"} ml={"30px"}>
        Shop Women's
      </Heading>
      <TopWomenCarousel/>

     <Heading as="h3" size="lg" textAlign={"left"} mt={"20px"} mb={"30px"} ml={"30px"}>
       Shop Men's
      </Heading>
      <TopMenCarousel/>

      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"}>
      Varsity Shirts
      </Heading>
      <Text textAlign={"center"} fontSize={15} mt={5} mb={5} textDecoration={"underline"}>The couture club</Text>
      <Tshirts/>

    
      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"}>
        Featured Brands
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} spacing={"20px"} width={"95%"} margin={"auto"}>
        <Box>
          <Image
            src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1007.jpg?v=1667990812&width=720"
            alt="essentails"
          />
          <Text fontWeight={"bold"} mt={4}>Essentials by KoolZ</Text>
        </Box>
        <Box>
          <Image
            src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3213-141.jpg?v=1667995128&width=720 "
            alt=" koolZ"
          />
          <Text fontWeight={"bold"} mt={4}> KoolZ</Text>
        </Box>
      </SimpleGrid>
      <Center>
      
        <Button as={Link} to={"/men"} transition="0.5s all ease-in-out"
              _hover={{ transform: "scale(1.1)" }}>View all</Button>
      
    </Center>
      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"}>
        Mens
      </Heading>
      <Mens/>
      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"}>
        Women
      </Heading>
      <Womens/>
      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"} textDecoration={"underline"}>
        Sneaker Edit
      </Heading>
      <Shoes/>
      <Heading as="h3" size="lg" textAlign={"center"} mt={"20px"} mb={"30px"}>
        Brands on KoolZ
      </Heading>
     
     
      <Brands/>
      <Shipping/>
    </>
  );
}