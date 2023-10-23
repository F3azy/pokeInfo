import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Flex, Text, Link, Stack, Icon } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      position={{ xl: "absolute" }}
      bottom="0"
      bg="brand.primary"
      p="20px 0"
      justify="center"
      color="white"
    >
      <Flex
        w={{ base: "100%", lg: "60%" }}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "space-between", lg: "center" }}
        gap={{ base: "24px", lg: "32px" }}
        align="center"
        mx={{ base: "8px", md: "32px", lg: "0" }}
      >
        <Text fontSize="20px">
          &copy; {new Date().getFullYear()}
          PokeINFO, Powered by&nbsp;
          <Link
            isExternal
            href="https://pokeapi.co/"
            _hover={{ color: "brand.quaternary" }}
            textDecoration="underline"
          >
            PokeAPI
          </Link>
        </Text>

        <Stack direction="row" align="center" spacing="16px">
          <Text fontSize="20px">Designed by Francesco Carvelli</Text>
          <Link
            isExternal
            href="https://github.com/F3azy"
            _hover={{ color: "brand.quaternary" }}
            h="24px"
          >
            <Icon boxSize="24px" as={FaGithub} />
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/fcarvelli/"
            _hover={{ color: "brand.quaternary" }}
            h="24px"
          >
            <Icon boxSize="24px" as={FaLinkedin} />
          </Link>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Footer;
