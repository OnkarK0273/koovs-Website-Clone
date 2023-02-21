import { Box, Tooltip, Text } from "@chakra-ui/react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import { RiCoupon4Line } from "react-icons/ri";

const NoteforSeller = () => {
  return (
    <Box>
      <Tooltip
        hasArrow
        label="Add note for seller"
        bg="gray.300"
        color="black"
        placement="top"
      >
        <Box fontSize={"13px"}>
          <Box fontSize={"30px"}>
            <SlPencil />
          </Box>
          <Text fontWeight={"bold"}>Note</Text>
        </Box>
      </Tooltip>
    </Box>
  );
};

const EstShippingRates = () => {
  return (
    <Box>
      <Tooltip
        hasArrow
        label="Estimate shipping rates"
        bg="gray.300"
        color="black"
        placement="top"
      >
        <Box fontSize={"13px"}>
          <Box fontSize={"30px"}>
            <MdOutlineLocalShipping />
          </Box>
          <Text fontWeight={"bold"}>Shipping</Text>
        </Box>
      </Tooltip>
    </Box>
  );
};

const AddDiscountCode = () => {
  return (
    <Box>
      <Tooltip
        hasArrow
        label="Add a discount code"
        bg="gray.300"
        color="black"
        placement="top"
      >
        <Box fontSize={"13px"}>
          <Box fontSize={"30px"}>
            <RiCoupon4Line />
          </Box>
          <Text fontWeight={"bold"}>Coupon</Text>
        </Box>
      </Tooltip>
    </Box>
  );
};

export { NoteforSeller, EstShippingRates, AddDiscountCode };
