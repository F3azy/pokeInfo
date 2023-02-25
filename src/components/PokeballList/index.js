import React, { useState, useEffect } from 'react'
import Pokeball from './Pokeball';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Loading from '../Loading';

function PokeballList() {
    const [query, setQuery] = useState(() => {return 'https://pokeapi.co/api/v2/pokemon?limit=20'});
    const [next, setNext] = useState(() => {return ''});
    const [previous, setPrevious] = useState(() => {return ''});
    const [pokemons, setPokemons] = useState(() => {return []});
    const [loading, setLoading] = useState(() => {return true});

    useEffect(() => {
        setLoading(true);
        fetch(query)
        .then(response => response.json())
        .then(allPokemon => {
            let timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            // setLoading(false);
            setPokemons(allPokemon.results);
            setNext(allPokemon.next);
            setPrevious(allPokemon.previous);
            return () => clearTimeout(timer);
        });
    }, [query]);

    if(loading) return <Loading marginHorizontal={["300px","220px"]} />;

  return (
        <>
            <Flex wrap="wrap" justify="space-between" mx={["8px", "0"]} gap={["32px 0", "16px 100px"]}>
                {pokemons.map(pokemon => (<Pokeball key={pokemon.name} name={pokemon.name} />))}
            </Flex>

            <Flex justify="space-between" mx={["8px", "0"]}>
                <Button onClick={() => setQuery(previous)} colorScheme="yellow" isDisabled={!previous} leftIcon={<ArrowBackIcon />}>Previous</Button>
                <Button onClick={() => setQuery(next)} colorScheme="yellow" isDisabled={!next} rightIcon={<ArrowForwardIcon />}>Next</Button>
            </Flex>
        </>  
  )
};

export default PokeballList;