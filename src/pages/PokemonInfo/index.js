import React, { useState, useEffect } from 'react'
import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import Pokedex from '../../components/Pokedex';

const PokemonInfo = () => {
  let { state } = useLocation();

  const [query, setQuery] = useState(() => {return 'https://pokeapi.co/api/v2/pokemon/'+state.PokemonName});
  const [pokemon, setPokemon] = useState(() => {return null});

  useEffect(() => {
    setQuery('https://pokeapi.co/api/v2/pokemon/'+state.PokemonName);
  }, [state.PokemonName]);

  useEffect(() => {
      fetch(query)
      .then(response => response.json())
      .then(Pokemon => {
          setPokemon(Pokemon);
      });
  }, [query]);

  // console.log(pokemon);

  return (
    <Flex w="100%" justify="center">
      <Flex w={["100%", "60%"]}>
        {pokemon ? <Pokedex Pokemon={pokemon} /> : "Loading..."}
      </Flex>
    </Flex>
  )
};

export default PokemonInfo;