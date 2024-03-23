import { Flex, Heading } from "@chakra-ui/react";
import MoveList from "./MoveList";

const Moves = ({ moves }) => {
  return (
    <Flex
      w="full"
      direction="column"
      border={{ base: "solid 8px", lg: "solid 12px" }}
      borderRadius="16px"
      borderColor={{ base: "brand.primary", lg: "brand.primary" }}
      p={{ base: "12px", lg: "16px" }}
    >
      <Heading
        as="h1"
        w="full"
        size={{ base: "lg", lg: "3xl" }}
        color="brand.quaternary"
        borderBottom="solid 1px"
        paddingBottom={{ base: "8px", lg: "12px" }}
      >
        Moves
      </Heading>
      <MoveList moves={moves} />
    </Flex>
  );
};

export default Moves;
