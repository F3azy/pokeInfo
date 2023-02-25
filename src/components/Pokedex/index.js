import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import PokeImg from './PokeImg';
import PokeBasicInfo from './PokeBasicInfo';
import PokeMoreInfo from './PokeMoreInfo';

const Pokedex = () => {
  let { state } = useLocation();

  const [query, setQuery] = useState(() => {return 'https://pokeapi.co/api/v2/pokemon/'+state.PokemonName});
  const [Pokemon, setPokemon] = useState(() => {return null});
  const [loading, setLoading] = useState(() => {return true});

  useEffect(() => {
    setQuery('https://pokeapi.co/api/v2/pokemon/'+state.PokemonName);
  }, [state.PokemonName]);

  useEffect(() => {
      setLoading(true);
      fetch(query)
      .then(response => response.json())
      .then(pokemon => {
          setLoading(false);
          setPokemon(pokemon);
      });
  }, [query]);

  if (loading) return "Loading...";

  return (
    <Flex w="100%" mx={["8px", "0"]} my={["12px", "24px"]} rowGap={["12px", "24px"]} direction="column">
      <Flex w="100%" direction={["column", "row"]} justify="center">
          <PokeImg url={Pokemon.sprites} />
          <PokeBasicInfo 
            name={Pokemon.name} 
            id={Pokemon.id} 
            height={Pokemon.height} 
            weight={Pokemon.weight} 
            types={Pokemon.types}
            stats={Pokemon.stats}
          />
      </Flex>
      <PokeMoreInfo moves={Pokemon.moves} />
    </Flex>
  )
};

export default Pokedex;