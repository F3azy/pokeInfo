import { Flex, Text } from "@chakra-ui/react";
import { PokeballIcon } from "../../icons";
import { useDelayRender } from "../../hooks/useDelayRender";

const Loading = () => {
  const show = useDelayRender(50);

  return (
    <Flex
      h="100%"
      id="pokeLoad"
      justify="center"
      align="center"
      letterSpacing="2px"
      columnGap="2px"
      color="brand.quaternary"
      fontSize={{ base: "50px", lg: "200px" }}
      fontWeight="bold"
    >
      {show && (
        <>
          <Text>L</Text>
          <PokeballIcon />
          <Text>ADING...</Text>
        </>
      )}
    </Flex>
  );
};

export default Loading;
