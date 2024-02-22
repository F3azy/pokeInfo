import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import MoveModal from "./MoveModal";
import MoveList from "./MoveList";

const QUERY = "https://pokeapi.co/api/v2/move/";

const PokemonMoves = ({ moves }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [move, setMove] = useState(null);
  const [loading, setLoading] = useState(true);

  function showModal(e) {
    setLoading(true);

    fetch(QUERY+e.target.value.toLowerCase())
    .then((response) => response.json())
    .then((move) => {
      setLoading(false);
      setMove(move);
    });

    onOpen();
  }

  function closeModal() {
    onClose();
    setMove(null);
  }

  return (
    <Flex
      w="100%"
      direction="column"
      border={{ base:"solid 8px", lg:"solid 12px"}}
      borderRadius="16px"
      borderColor={{ base:"brand.primary", lg:"brand.primary"}}
      p={{ base:"12px", lg:"16px"}}
    >
      <Heading
        as="h1"
        w="100%"
        size={{ base:"lg", lg:"3xl"}}
        color="brand.quaternary"
        borderBottom="solid 1px"
        paddingBottom={{ base:"8px", lg:"12px"}}
      >
        Moves
      </Heading>
      <MoveList moves={moves} showModal={showModal} />

      <MoveModal
        move={move}
        loading={loading}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </Flex>
  );
};

export default PokemonMoves;
