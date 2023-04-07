import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Grid,
  Box,
  Icon,
  Center,
  Heading
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { useLocation, useSearchParams } from 'react-router-dom'
import {
  getProducts,
  updateMensProduct,
} from "../Redux/Product/product.action";
import MenProductCard from "./MenProductCard";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { TfiLayoutColumn4Alt,TfiLayoutColumn3Alt } from "react-icons/tfi";
import { Product } from "../utils/types";

export default function MensProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "sm";
  const [page,setPage] = useState(1)
  const [gridsize,setSize] = useState('4')
  const location = useLocation()
  const dispatch = useAppDispatch();
  const menProducts = useAppSelector((store) => store.ProductReducer.mensData);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFIlterValues = searchParams.getAll("filter");
  const initialFIlterValues2 = searchParams.getAll("filter1");
  const [filterValues, setFilterValues] = useState<string[]>(
    initialFIlterValues || []
  );
  const [filterValues2, setFilterValues2] = useState<string[]>(
    initialFIlterValues2 || []
  );


  const handleFilterChange = (value: string[]) => {
    setFilterValues(value);
  };

  const handleFilterChange2 = (value: string[]) => {
    setFilterValues2(value);
  };

  useEffect(() => {
    if(menProducts.length ===0){
      dispatch(getProducts());
    }
    // eslint-disable-next-line
  }, []);

  useEffect(()=>{

    if(initialFIlterValues || initialFIlterValues2 ){

      const getMensParam = {
        params: {
          category:initialFIlterValues,
          brand:initialFIlterValues2,
          _limit:12,
          _page:page,

        }
      }


      dispatch(getProducts(getMensParam));


    }

  },[location.search,page])
  

  useEffect(() => {
    let params: { filter?: string[],filter1?: string[] } = {};
    if (filterValues.length || filterValues2.length){
      params.filter = filterValues;
      params.filter1 = filterValues2;
    } 
    setSearchParams(params);
  }, [filterValues, setSearchParams,filterValues2]);

  // console.log(menProducts)

  const handleSortAZ = () => {
    const sortProducts = [...menProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    dispatch(updateMensProduct(sortProducts));
  };

  const handleSortZA = () => {
    const sortProducts = [...menProducts].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    dispatch(updateMensProduct(sortProducts));
  };

  const handleHighToLow = () => {
    const priceData = [...menProducts].sort((a, b) => b.price - a.price);
    dispatch(updateMensProduct(priceData));
  };

  const handleLowToHigh = () => {
    const priceData = [...menProducts].sort((a, b) => a.price - b.price);
    dispatch(updateMensProduct(priceData));
  };

  return (
    <>
      <Flex  justifyContent={"space-between"} alignItems={"center"} p='20px' >
        <Box>
          <Button colorScheme="black"  variant='outline'  color={"black"} onClick={onOpen}>
            Filter
          </Button>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={size}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Filter</DrawerHeader>

              <DrawerBody display={"flex"} justifyContent="space-between">
              
            
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    colorScheme='teal'
                    variant='outline'
                    width="100%"
                    textAlign={"left"}
                    marginTop="15px"
                  >
                    Category
                  </MenuButton>
                  <MenuList bg='teal.400' >
                    <CheckboxGroup
                      value={filterValues}
                      onChange={handleFilterChange}
                    >
                      <MenuItem>
                        <Checkbox value="shoes">Shoes (26)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="pants">Pants (26)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="t-shirt">T-Shirt (28)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="hoodes">Hoodes (53)</Checkbox>
                      </MenuItem>
                    
                    </CheckboxGroup>
                  </MenuList>
                </Menu>
    
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    colorScheme='orange'
                    variant='outline'
                    width="100%"
                    textAlign={"left"}
                    marginTop="15px"
                  >
                    Brand
                  </MenuButton>
                  <MenuList  bg='orange'>
                    <CheckboxGroup
                      value={filterValues2}
                      onChange={handleFilterChange2}
                    >
                      <MenuItem>
                        <Checkbox value="Comatoes">Comatoes(5)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="Bravesoul">Bravesoul (40)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="Nike">Nike (15)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="KEEN">KEEN (4)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="BALL">BALL (37)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="Garcon">
                        Garcon (7)
                        </Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="The Couture Club">The Couture Club (10)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="Kangol">Kangol (1)</Checkbox>
                      </MenuItem>
                      <MenuItem>
                        <Checkbox value="Essentials By Koovs">Essentials By Koovs (12)</Checkbox>
                      </MenuItem>
                    </CheckboxGroup>
                  </MenuList>
                </Menu>
              
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Menu>
            <MenuButton
              as={Button}
              colorScheme="black"  variant='outline' 
              ml='10px'
              rightIcon={<ChevronDownIcon />}
              backgroundColor="white"
            >
              Featured
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleSortAZ}>Alphabetically, A-Z</MenuItem>
              <MenuItem onClick={handleSortZA}>Alphabetically, Z-A</MenuItem>
              <MenuItem onClick={handleLowToHigh}>Price, low to high</MenuItem>
              <MenuItem onClick={handleHighToLow}>Price, high to low</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box display={{base:'none',lg:"flex"}} >
            <Icon as={TfiLayoutColumn4Alt} boxSize='8' onClick={()=>{setSize('4')}} cursor='pointer'  />
            <Icon as={TfiLayoutColumn3Alt}  boxSize='8'ml='10px' onClick={()=>{setSize('3')}} cursor='pointer' />
        </Box>
      </Flex>
      <Box  >
        <Grid  templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:`repeat(${gridsize}, 1fr)`}}  >
          {menProducts?.length > 0 &&
            menProducts?.map((item: Product) =>
              item.active ? <MenProductCard key={item.id} {...item} /> : false
            )}
        </Grid>
      </Box>
      <Center  >
            <Button onClick={()=>{setPage(page-1)}}  isDisabled={page===1}   colorScheme="black"  variant='outline'>Prev</Button>
            <Heading p='10px'>{page}</Heading>
            <Button onClick={()=>{setPage(page+1)}}  isDisabled={menProducts.length !== 12} colorScheme="black"  variant='outline'>Next</Button>
      </Center>

    </>
  );
}
