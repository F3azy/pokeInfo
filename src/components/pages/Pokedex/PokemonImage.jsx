import { Box, Flex, Image } from "@chakra-ui/react";
import { BGPokeball } from "../../../icons";

const PokemonImage = ({ url }) => {
  return (
    <Flex
      basis="30%"
      boxSize={{ base: "130px", md: "130px" }}
      justify="center"
      align="center"
      position="relative"
      left={{ base: "50%", xl: "0" }}
      transform={{ base: "translateX(-50%)", xl: "translateX(0)" }}
    >
      <Image
        boxSize={{ base: "160px", md: "260px" }}
        m={{ base: "8px", md: "24px" }}
        src={url.front_default}
        onMouseOver={(e) => (e.currentTarget.src = url.back_default)}
        onMouseLeave={(e) => (e.currentTarget.src = url.front_default)}
        position={{ base: "relative", xl: "absolute" }}
        top={{ base: "80px", xl: "-100px" }}
        zIndex="1"
        alt="Pokemon Image"
      />
      <Box
        as={BGPokeball}
        boxSize={{ base: "160px", md: "260px" }}
        position="absolute"
        zIndex="0"
        top={{xl: 0}}
        transform="rotate(30deg)  skewX(-30deg)"
        p={2}
        border="solid"
        borderWidth={{ base: "8px", md: "12px" }}
        borderRadius="full"
        borderRightColor="#FB1B1B"
        borderTopColor="#FB1B1B"
        borderLeftColor="#F2F2F2"
        borderBottomColor="#F2F2F2"
      />
    </Flex>
  );
};

export default PokemonImage;
