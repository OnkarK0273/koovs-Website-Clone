import React from 'react';
import {Box, Image, SimpleGrid, Divider} from "@chakra-ui/react";

// interface Props {
//     brands: string[];
// }

const Brands = () => {
    const brands = [
        "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_logo_for_brand_page-03.jpg?v=1668331785&width=360",
        "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/essentials_logo-02.jpg?v=1668331830&width=360",
        "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/kangol_logo-01.jpg?v=1668331868&width=360","https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-01.png?v=1668331907&width=360","https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-02.png?v=1668331923&width=360", "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Ball_logo.jpg?v=1668332152&width=360","https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-04.jpg?v=1668332188&width=360","https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-02.jpg?v=1668332226&width=360","https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-08.jpg?v=1668332439&width=360", "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-07.jpg?v=1668332432&width=360", "https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-09.jpg?v=1668332464&width=360","https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_3951c2d8-141f-43a4-8065-9cca52dac9dd.jpg?v=1668332482&width=360",
    
    ];
  return (
    <>
    <div style={{width:"85%", margin:"auto", marginBottom:"100px"}} >
    <SimpleGrid columns={{ sm: 2, md: 8}} gap={"30px"}>
    {brands.map((imageUrl) => (
        <Box key={imageUrl}>
            <Image src = {imageUrl} alt = "Image" width={150} height={70}/>
        </Box>
    ) )}
    </SimpleGrid>
    </div>
    <Divider h="4px" />
    </>
  )
}

export default Brands
