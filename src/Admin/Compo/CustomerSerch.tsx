import {
  Box,
  Flex,
  Heading,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function CustomerSerch() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [serch, setSerch] = useState<string[]>([""]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerch([e.target.value]);
  };

  useEffect(() => {
    let params: { userserch?: string[] } = {};

    if (serch[0] !== "") {
      params.userserch = serch;
    }

    setSearchParams(params);
  }, [serch]);

  return (
    <>
      <Box>
        <Heading>Customers</Heading>
        <Text color="teal">List of Customers</Text>
      </Box>

      <Box>
        <Flex
          justifyContent={"space-between"}
          p="10px"
          flexDirection={{ base: "column", sm: "row" }}
          gap="10px"
        >
          <Box>
            <Input
              type={"text"}
              placeholder="Search Customer.."
              color="teal"
              colorScheme="teal"
              borderColor={"teal"}
              onChange={handleOnChange}
              // onKeyDown={handleKeyDown}
              value={serch[0]}
            ></Input>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
