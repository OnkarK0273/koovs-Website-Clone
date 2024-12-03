import { Box, Tooltip, Text, Flex } from "@chakra-ui/react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { RiCoupon4Line } from "react-icons/ri";

const NoteforSeller = () => {
  return (
    <Box cursor={"pointer"}>
      <Tooltip
        hasArrow
        label="Add note for seller"
        bg="gray.300"
        color="black"
        placement="top"
      >
        <Flex direction={"column"} align={"center"} fontSize={"13px"}>
          <Box fontSize={"30px"}>
            <SlPencil />
          </Box>
          <Text fontWeight={"bold"}>Note</Text>
        </Flex>
      </Tooltip>
    </Box>
  );
};

const EstShippingRates = () => {
  return (
    <Box cursor={"pointer"}>
      <Tooltip
        hasArrow
        label="Estimate shipping rates"
        bg="gray.300"
        color="black"
        placement="top"
      >
        <Flex direction={"column"} align={"center"} fontSize={"13px"}>
          <Box fontSize={"30px"}>
            <MdOutlineLocalShipping />
          </Box>
          <Text fontWeight={"bold"}>Shipping</Text>
        </Flex>
      </Tooltip>
    </Box>
  );
};

const AddDiscountCode = () => {
  return (
    <Box cursor={"pointer"}>
      <Tooltip
        hasArrow
        label="Add a discount code"
        bg="gray.300"
        color="black"
        placement="top"
      >
        <Flex direction={"column"} align={"center"} fontSize={"13px"}>
          <Box fontSize={"30px"}>
            <RiCoupon4Line />
          </Box>
          <Text fontWeight={"bold"}>Coupon</Text>
        </Flex>
      </Tooltip>
    </Box>
  );
};

export { NoteforSeller, EstShippingRates, AddDiscountCode };
