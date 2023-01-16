import React, { useState, useEffect } from 'react'
import Pokeball from './Pokeball';
import '../styles/PokeballList.css'

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
    <div className='pokeballListContainer'>
        {previous ? <button onClick={() => setQuery(previous)}>prev</button> : <button onClick={() => setQuery(previous)} disabled>prev</button>}

        <div className='pokeballList'>
            {pokemons.map(pokemon => (<Pokeball name={pokemon.name} size="148" />))}
        </div>

        {next ? <button onClick={() => setQuery(next)}>next</button> : <button onClick={() => setQuery(next)} disabled>next</button>}
    </div>
  )
}

export default PokeballList