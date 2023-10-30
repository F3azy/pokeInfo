import React, { useState, useEffect } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Pokeball } from "../components";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

const Home = () => {
  const [query, setQuery] = useState(() => {
    return "https://pokeapi.co/api/v2/pokemon";
  });
  const [next, setNext] = useState(() => {
    return "";
  });
  const [previous, setPrevious] = useState(() => {
    return "";
  });
  const [pokemons, setPokemons] = useState(() => {
    return [];
  });

  useEffect(() => {
    const controller = new AbortController();
    fetch(query, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((allPokemon) => {
        setPokemons(allPokemon.results);
        setNext(allPokemon.next);
        setPrevious(allPokemon.previous);

        return () => controller.abort();
      });
  }, [query]);

  return (
    <>
      <Flex
        wrap="wrap"
        justify="space-between"
        gap={{ base: "32px 0", md: "60px", lg: "16px 100px" }}
      >
        {pokemons.map((pokemon) => (
          <Pokeball key={pokemon.name} name={pokemon.name} />
        ))}
      </Flex>

      <Flex justify="space-between">
        <Button
          onClick={() => setQuery(previous)}
          colorScheme="yellow"
          isDisabled={!previous}
          leftIcon={<ArrowBackIcon />}
        >
          Previous
        </Button>
        <Button
          onClick={() => setQuery(next)}
          colorScheme="yellow"
          isDisabled={!next}
          rightIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Flex>
      </>
  );
};

export default Home;
