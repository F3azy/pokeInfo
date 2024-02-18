import { Button } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../utils";

const Move = ({ moveName, fun }) => {
  return (
    <Button
    w="100%"
    value={moveName}
    onClick={fun}
    bg="brand.tertiary"
    _hover={{ bg: "brand.quaternary" }}
    flexBasis={{ base: "48%", md: "12.5%" }}
    >
      {capitalizeFirstLetter(moveName)}
    </Button>
  );
};

export default Move;
