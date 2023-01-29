import React, { useState, useEffect } from 'react'
import Pokeball from './Pokeball';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

function PokeballList() {
    const [query, setQuery] = useState(() => {return 'https://pokeapi.co/api/v2/pokemon'});
    const [next, setNext] = useState();
    const [previous, setPrevious] = useState();
    const [pokemons, setPokemons] = useState(() => {return []});

    useEffect(() => {
        fetch(query)
        .then(response => response.json())
        .then(allPokemon => {
            setPokemons(allPokemon.results);
            setNext(allPokemon.next);
            setPrevious(allPokemon.previous);
        });
    }, [query]);

  return (
    <Flex w="100%" my={["36px", "20px"]} direction="column" align="center">
        <Flex w={["100%", "60%"]} direction="column" rowGap={["40px", "28px"]}>
            <Flex wrap="wrap" justify="space-between" mx={["8px", "0"]} gap={["32px 0", "16px 100px"]}>
                {pokemons.map(pokemon => (<Pokeball key={pokemon.name} name={pokemon.name} />))}
            </Flex>

            <Flex justify="space-between" mx={["8px", "0"]}>
                <Button onClick={() => setQuery(previous)} colorScheme="yellow" isDisabled={!previous} leftIcon={<ArrowBackIcon />}>Previous</Button>
                <Button onClick={() => setQuery(next)} colorScheme="yellow" isDisabled={!next} rightIcon={<ArrowForwardIcon />}>Next</Button>
            </Flex>
        </Flex>
    </Flex>
  )
};

export default PokeballList;