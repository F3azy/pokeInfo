import React, { useState, useEffect } from 'react'
import Pokeball from './Pokeball/Pokeball';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

function PokeballList() {
    const [query, setQuery] = useState(() => { return 'https://pokeapi.co/api/v2/pokemon'});
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
    <Flex my="20px" justify="space-evenly" align="center">
        <Button onClick={() => setQuery(previous)} colorScheme="yellow" isDisabled={!previous} leftIcon={<ArrowBackIcon />}>Previous</Button>

        <Flex w="60%" wrap="wrap" justify="space-evenly" gap="16px 100px">
            {pokemons.map(pokemon => (<Pokeball key={pokemon.name} name={pokemon.name} size="148" />))}
        </Flex>

        <Button onClick={() => setQuery(next)} colorScheme="yellow" isDisabled={!next} rightIcon={<ArrowForwardIcon />}>Next</Button>
    </Flex>
  )
}

export default PokeballList