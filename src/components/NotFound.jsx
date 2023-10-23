import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { PokeballIcon } from "../icons";

const NotFound = () => {
  return (
    <Flex
      width="100%"
      id="pokeLoad"
      h={{base: "80vh", md: "90vh"}}
      direction="column"
      justify="center"
      align="center"
      letterSpacing="2px"
      columnGap="2px"
      color="brand.quaternary"
      fontSize={{base: "70px", xl:"140px"}}
      fontWeight="bold"
    >
      <Text>
        P<PokeballIcon />
        kemon
      </Text>
      <Text>Not Found</Text>
    </Flex>
  );
};

export default NotFound;
