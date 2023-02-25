import { useEffect, useState } from "react";
import {
  Button,
  Input,
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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getProducts } from "../Redux/Product/product.action";
import MenProductCard from "./MenProductCard";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import Footer from "../HomeComponent/Footer";

export default function MensProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "sm";
  const dispatch = useAppDispatch();
  const menProducts = useAppSelector((store) => store.ProductReducer.mensData);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFIlterValues = searchParams.getAll("filter");
  const [filterValues, setFilterValues] = useState<string[]>(
    initialFIlterValues || []
  );

  const handleFilterChange = (value: string[]) => {
    setFilterValues(value);
  };

  useEffect(() => {
    let params: { filter?: string[] } = {};
    if (filterValues.length) params.filter = filterValues;
    setSearchParams(params);
  }, [filterValues, setSearchParams]);

  useEffect(() => {
    if (menProducts.length === 0) {
      dispatch(getProducts());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Button colorScheme="white" color={"black"} onClick={onOpen}>
        Filter
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody display={"flex"} justifyContent="space-between">
            <Input
              style={{ width: "40%" }}
              placeholder="₹                         0"
            />
            <Text>To</Text>
            <Input
              style={{ width: "40%" }}
              placeholder="₹              22995.0"
            />
          </DrawerBody>
          <DrawerBody style={{ marginTop: "-400px", width: "100%" }}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor="white"
                color="black"
                width="100%"
                textAlign={"left"}
                marginTop="15px"
              >
                Product type
              </MenuButton>
              <MenuList>
                <CheckboxGroup
                  value={filterValues}
                  onChange={handleFilterChange}
                >
                  <MenuItem>
                    <Checkbox value="bags">Bags (1)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="coords">Co-ords (10)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="hats">Hats (3)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="hatscaps">Hats & Caps (5)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="hoodies">
                      Hoodies & sweatshirts (3)
                    </Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="jackets">Jackets & coats (10)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="joggers">Joggers (2)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="outwear">Outwear (11)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="pants">Pants (20)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="sandals">Sandals (4)</Checkbox>
                  </MenuItem>
                </CheckboxGroup>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor="white"
                color="black"
                width="100%"
                textAlign={"left"}
                marginTop="15px"
              >
                Size
              </MenuButton>
              <MenuList>
                <CheckboxGroup
                  value={filterValues}
                  onChange={handleFilterChange}
                >
                  <MenuItem>
                    <Checkbox value="XXS">XXS (1)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="XS">XS (10)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="S">S (3)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="M">M (5)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="L">L (3)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="XL">XL (10)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="XXL">XXL (11)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="6">6 (20)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="7">7 (4)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="8">8 (30)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="9">9 (42)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="9.5">9.5 (2)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="10">10 (29)</Checkbox>
                  </MenuItem>
                </CheckboxGroup>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor="white"
                color="black"
                width="100%"
                textAlign={"left"}
                marginTop="15px"
              >
                Brand
              </MenuButton>
              <MenuList>
                <CheckboxGroup
                  value={filterValues}
                  onChange={handleFilterChange}
                >
                  <MenuItem>
                    <Checkbox value="5ive">5ive (5)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="arkk">Arkk Copenhagen (10)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="ball">BALL (3)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="bravesoul">Bravesoul (5)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="comatoes">Comatoes</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="essentials">
                      Essentials by Coovs (10)
                    </Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="garcon">Garcon (2)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="keen">KEEN (11)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="kangol">Kangol (20)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="koovs">Koovs (4)</Checkbox>
                  </MenuItem>
                </CheckboxGroup>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                backgroundColor="white"
                color="black"
                width="100%"
                textAlign={"left"}
                marginTop="15px"
              >
                Availability
              </MenuButton>
              <MenuList>
                <CheckboxGroup
                  value={filterValues}
                  onChange={handleFilterChange}
                >
                  <MenuItem>
                    <Checkbox value="instock">In stock (204)</Checkbox>
                  </MenuItem>
                  <MenuItem>
                    <Checkbox value="outofstock">Out of stock (297)</Checkbox>
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
          rightIcon={<ChevronDownIcon />}
          backgroundColor="white"
        >
          Featured
        </MenuButton>
        <MenuList>
          <MenuItem>Featured</MenuItem>
          <MenuItem>Best Selling</MenuItem>
          <MenuItem>Alphabetically, A-Z</MenuItem>
          <MenuItem>Alphabetically, Z-A</MenuItem>
          <MenuItem>Price, low to high</MenuItem>
          <MenuItem>Price, high to low</MenuItem>
          <MenuItem>Date, old to new</MenuItem>
          <MenuItem>Date, new to old</MenuItem>
        </MenuList>
      </Menu>

      <div style={{ width: "80%" }}>
        <Grid margin="auto" templateColumns="repeat(4, 1fr)">
          {menProducts?.length > 0 &&
            menProducts?.map((item) => (
              <MenProductCard key={item.id} {...item} />
            ))}
        </Grid>
      </div>
      {/* <Footer /> */}
    </>
  );
}
