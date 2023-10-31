import React, { useState, useEffect } from "react";
import { Flex, Button, Grid, GridItem } from "@chakra-ui/react";
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

      <Grid
        templateColumns={{base: "repeat(4, auto)", lg:"repeat(5, auto)"}}
        justifyContent="space-between"
        rowGap={{base: 7, lg: 5}}
      >
        {pokemons.map((pokemon) => (
          <GridItem key={pokemon.name}>
            <Pokeball name={pokemon.name} />
          </GridItem>
        ))}
      </Grid>
      </>
  );
};

export default Home;
