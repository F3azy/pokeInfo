import { Flex, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Move from "./Move";
import MoveModal from "./MoveModal";

const PokeMoreInfo = ({ moves }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [moveName, setMoveName] = useState(() => {return moves[0].move.name;});
  const [move, setMove] = useState(() => {return null;});
  const [query, setQuery] = useState(() => {return "https://pokeapi.co/api/v2/move/" + moveName;});
  const [loading, setLoading] = useState(() => {return true;});

  useEffect(() => {
    setQuery("https://pokeapi.co/api/v2/move/" + moveName);
  }, [moveName]);

  useEffect(() => {
    fetch(query)
      .then((response) => response.json())
      .then((mov) => {
        let timer = setTimeout(() => {
          setLoading(false);
        }, 1000);

        setMove(mov);

        return () => clearTimeout(timer);
      });
  }, [query, isOpen]);

  function showModal(e) {
    setLoading(true);
    setMoveName(e.target.value.toLowerCase());
    onOpen();
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
      >
      {moves.map((move) => (
          <GridItem key={move.move.name}>
            <Move
            moveName={move.move.name}
            fun={showModal}
            />
          </GridItem>
        ))}
      </Grid>

      <MoveModal
        isOpen={isOpen}
        onClose={onClose}
        move={move}
        moveName={moveName}
        loading={loading}
      />
    </Flex>
  );
};

export default PokeMoreInfo;
