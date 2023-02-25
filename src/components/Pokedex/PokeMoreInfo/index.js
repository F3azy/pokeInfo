import { 
    Flex, 
    Heading,
    useDisclosure,
    } from '@chakra-ui/react';
import React, {useState, useEffect } from 'react';
import Move from './Move';
import MoveModal from './MoveModal';

const PokeMoreInfo = ({moves}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [moveName, setMoveName] = useState(() => {return moves[0].move.name});
    const [move, setMove] = useState(() => {return null});
    const [query, setQuery] = useState(() => {return 'https://pokeapi.co/api/v2/move/' + moveName});
    const [loading, setLoading] = useState(() => {return true});
  
    useEffect(() => {
      setQuery('https://pokeapi.co/api/v2/move/' + moveName);
    }, [moveName]);
  
    useEffect(() => {
        fetch(query)
        .then(response => response.json())
        .then(mov => {
            setLoading(false);
            setMove(mov);
        });
    }, [query]);

    function showModal(e) {
        setLoading(true);
        setMoveName(e.target.value.toLowerCase());
        onOpen();
    }

  return (
    <Flex w="100%" direction="column" border={["solid 8px", "solid 12px"]} borderRadius="16px" borderColor={["brand.primary", "brand.primary"]} p={["12px", "16px"]}>
        <Heading as="h1" w="100%" size={["lg", "3xl"]} color="brand.quaternary" borderBottom="solid 1px" paddingBottom={["8px", "12px"]}>
            Moves
        </Heading>
        <Flex w="100%" h="240px" wrap="wrap" rowGap="12px" justify={["space-between", "flex-start"]} columnGap={["", "52px"]} color="brand.primary" fontSize={["16px", "20px"]} pt={["8px", "12px"]} overflowY="scroll">
        {moves.map(move => (<Move key={move.move.name} moveName={move.move.name} fun={showModal} />))}
        </Flex>
        <MoveModal isOpen={isOpen} onClose={onClose} move={move} moveName={moveName} loading={loading} />
    </Flex>
  )
}

export default PokeMoreInfo;