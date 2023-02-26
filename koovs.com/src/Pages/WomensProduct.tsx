import { useEffect } from "react";
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
import WomenProductCard from "./WomenProductCard";
import { Checkbox } from "@chakra-ui/react";
import Footer from "../HomeComponent/Footer";

export default function WomensProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "sm";
  const dispatch = useAppDispatch();
  const womenProducts = useAppSelector(
    (store) => store.ProductReducer.womenData
  );

  useEffect(() => {
    if (womenProducts.length === 0) {
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
                <MenuItem>
                  <Checkbox>Bags (1)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Co-ords (10)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Hats (3)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Hats & Caps (5)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Hoodies & sweatshirts (3)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Jackets & coats (10)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Joggers (2)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Outwear (11)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Pants (20)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Sandals (4)</Checkbox>
                </MenuItem>
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
                <MenuItem>
                  <Checkbox>XXS (1)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>XS (10)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>S (3)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>M (5)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>L (3)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Jackets & coats (10)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>XL (2)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>XXL (11)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>6 (20)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>7 (4)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>8 (30)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>9 (42)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>9.5 (2)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>10 (29)</Checkbox>
                </MenuItem>
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
                <MenuItem>
                  <Checkbox>5ive (5)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Arkk Copenhagen (10)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>BALL (3)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Bravesoul (5)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Comatoes</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Essentials by Coovs (10)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Garcon (2)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>KEEN (11)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Kangol (20)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Koovs (4)</Checkbox>
                </MenuItem>
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
                <MenuItem>
                  <Checkbox>In stock (204)</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Out of stock (297)</Checkbox>
                </MenuItem>
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
          {womenProducts?.length > 0 &&
            womenProducts?.map((item) => (
              <WomenProductCard key={item.id} {...item} />
            ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
