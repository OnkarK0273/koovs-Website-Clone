/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Flex, Heading, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
interface IpaginationProps {
  setPage: (page: number) => void;
  page: number;
}
export default function Pagination({ setPage, page }: IpaginationProps) {
  return (
    <Box p="10px">
      <Flex justifyContent={"center"} columnGap="10px">
        <Button
          isDisabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
          colorScheme="teal"
          variant="outline"
        >
          Prev
        </Button>
        <Heading size="lg">{page}</Heading>
        <Button
          isDisabled={page === 3}
          onClick={() => {
            setPage(page + 1);
          }}
          colorScheme="teal"
          variant="outline"
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}
