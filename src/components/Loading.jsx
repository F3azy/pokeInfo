import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PokeballIcon } from "../icons";

const Loading = () => {
  return (
    <Flex
      width="100%"
      id="pokeLoad"
      h={{base: "90vh", xl: ""}}
      justify="center"
      align="center"
      letterSpacing="2px"
      columnGap="2px"
      color="brand.quaternary"
      fontSize={{base: "50px", lg: "200px"}}
      fontWeight="bold"
    >
      <Text>L</Text>
      <PokeballIcon />
      <Text>ADING...</Text>
    </Flex>
  );
};

export default Loading;
