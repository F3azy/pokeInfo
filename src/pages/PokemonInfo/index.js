import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const PokemonInfo = () => {
  let { state } = useLocation();

  const [query, setQuery] = useState(() => {return 'https://pokeapi.co/api/v2/pokemon/'+state.PokemonName});
  const [pokemon, setPokemon] = useState(() => {return []});

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

  return (
    <div>{pokemon.name}</div>
  )
};

export default PokemonInfo;