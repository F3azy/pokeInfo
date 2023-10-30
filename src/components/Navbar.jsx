import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      as="header"
      w="100%"
      bg="brand.primary"
      py="16px"
      justify="center"
      color="white"
    >
      <Flex
        as="nav"
        w={{ base: "100%", lg: "80%", '2xl': "60%" }}
        mx={{ base: "8px", md: "32px", lg: "0" }}
        align="center"
        justify="space-between"
        fontSize="20px"
        columnGap="8px"
      >
        <Link to="/">
          <Image
            src="images/PokeInfo.png"
            alt="PokeInfo Logo"
            w={{ base: "100px", md: "150px", lg: "170px" }}
          />
        </Link>
        <SearchInput />
      </Flex>
    </Flex>
  );
};

export default Navbar;
