import { Flex, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import Move from "./Move";
import MoveModal from "./MoveModal";

const QUERY = "https://pokeapi.co/api/v2/move/";

const PokeMoreInfo = ({ moves }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [moveName, setMoveName] = useState("");
  const [move, setMove] = useState(null);
  const [loading, setLoading] = useState(true);

  function showModal(e) {
    setLoading(true);
    setMoveName(prev => prev = e.target.value.toLowerCase());

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
      <Grid 
      templateColumns={{base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(6, 1fr)'}}
      h="240px"
      overflowY="scroll"
      pt={{ base:"8px", lg:"12px"}}
      gap={{ base:"16px", md:"20px"}}
      css={{
        '&::-webkit-scrollbar': {
          width: '14px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: "#FFCC00",
          border: "4px solid rgba(0, 0, 0, 0)",
          backgroundClip: "padding-box",
          borderRadius: '24px',
        },
      }}
      >
      {moves.map((m) => (
          <GridItem key={m.move.name}>
            <Move
            moveName={m.move.name}
            fun={showModal}
            />
          </GridItem>
        ))}
      </Grid>

      <MoveModal
        isOpen={isOpen}
        onClose={closeModal}
        move={move}
        moveName={moveName}
        loading={loading}
      />
    </Flex>
  );
};

export default PokeMoreInfo;
