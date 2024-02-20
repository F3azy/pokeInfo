import { Button } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../utils";

const Move = (props) => {
  const { name } = props;

  return (
    <Button
      w="100%"
      {...props}
      bg="brand.tertiary"
      _hover={{ bg: "brand.quaternary" }}
      flexBasis={{ base: "48%", md: "12.5%" }}
    >
      {name && capitalizeFirstLetter(name)}
    </Button>
  );
};

export default Move;
