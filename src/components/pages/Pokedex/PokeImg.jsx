import { Flex, Image } from "@chakra-ui/react";
import { BGPokeball } from "../../../icons";

const PokeImg = ({ url }) => {
  return (
    <Flex
      boxSize={{base: "130px", md: "340px"}}
      justify="center"
      align="center"
      basis="30%"
      position="relative"
      left={{base: "50%", xl: "0"}}
      transform={{base: "translateX(-50%)", xl: "translateX(0)"}}
      border="solid"
      borderWidth={{base: "8px", md: "16px"}}
      borderRadius="full"
      borderRightColor="#FB1B1B"
      borderTopColor="#FB1B1B"
      borderLeftColor="#F2F2F2"
      borderBottomColor="#F2F2F2"
    >
      <Image
        boxSize={{base: "", md: "260px"}}
        m={{base: "8px", md: "24px"}}
        src={url.front_default}
        onMouseOver={(e) => (e.currentTarget.src = url.back_default)}
        onMouseLeave={(e) => (e.currentTarget.src = url.front_default)}
        borderRadius="full"
        zIndex="1"
        alt="Pokemon Image"
      />
      <BGPokeball size={{base: "100px", md: "280px"}} />
    </Flex>
  );
};

export default PokeImg;
