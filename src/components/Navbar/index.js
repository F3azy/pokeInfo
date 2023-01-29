import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput/SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <Flex as="nav" w="100%" bg="brand.primary" py="16px" justify="center" color="white">
        <Flex w={["100%", "60%"]} mx={["8px", "0"]} align="center" justify="space-between" fontSize="20px" columnGap="8px">
          <Link to="/"><Image src="images/PokeInfo.png" alt="PokeInfo Logo" w={["100px", "170px"]} /></Link>
          <SearchInput />
        </Flex>
      </Flex>
  );
};

export default Navbar;
