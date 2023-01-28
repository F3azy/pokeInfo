import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Flex w="100%" bg="brand.primary" p="10px" justify="center" color="white">
        <Flex w="60%" align="center" justify="space-between" fontSize="20px">
          <Image src="images/PokeInfo.png" alt="PokeInfo Logo" htmlWidth="120px" />
          <div>
            <input type="text" placeholder="Pokemon name..." />
            <button>Search</button>
          </div>
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
