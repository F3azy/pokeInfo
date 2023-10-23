import React, { useState, useEffect } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { Pokeball, Loading } from "../components";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";

const Home = () => {
  const [query, setQuery] = useState(() => {return "https://pokeapi.co/api/v2/pokemon?limit=20";});
  const [next, setNext] = useState(() => { return "";});
  const [previous, setPrevious] = useState(() => {return "";});
  const [pokemons, setPokemons] = useState(() => {return [];});
  const [loading, setLoading] = useState(() => {return true;});

  useEffect(() => {
    setLoading(true);
    fetch(query)
      .then((response) => response.json())
      .then((allPokemon) => {
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

    if(loading) return <Loading />;

  return (
    <Flex
      direction="column"
      my={{ base: "36px", lg: "20px" }}
      rowGap={{ base: "40px", lg: "28px" }}
      mx={{ base: "8px", md: "32px", lg: "0" }}
    >
      <Flex
        wrap="wrap"
        justify="space-between"
        gap={{ base: "32px 0", md: "60px", lg: "16px 100px" }}
      >
        {pokemons.map((pokemon) => (
          <Pokeball key={pokemon.name} name={pokemon.name} />
        ))}
      </Flex>

      <Flex justify="space-between" >
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
    </Flex>
  );
};

export default Home;
