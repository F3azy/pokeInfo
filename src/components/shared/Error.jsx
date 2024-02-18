import { Flex, Text } from "@chakra-ui/react";

const Error = ({ message }) => {
  return (
    <Flex
      h="100%"
      id="pokeLoad"
      direction="column"
      justify="center"
      align="center"
      letterSpacing="2px"
      columnGap="2px"
      color="brand.quaternary"
      fontSize={{ base: "70px", xl: "140px" }}
      fontWeight="bold"
    >
      <Text>{message}</Text>
    </Flex>
  );
};

export default Error;
