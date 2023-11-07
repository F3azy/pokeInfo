import React, { useState, useEffect } from "react";
import { Flex, Button, Grid, GridItem } from "@chakra-ui/react";
import { Pokeball } from "../components";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate, useParams } from "react-router-dom";

const POKEMON_LIMIT = 20;

const ACTIONS = {
  NEXT: "NEXT",
  PREVIOUS: "PREVIOUS",
};

const Home = () => {
  const { p = 1 } = useParams();
  const page = typeof p === "undefined" ? 1 : parseInt(p);
  const query = `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}&offset=${(page - 1) * POKEMON_LIMIT}`;

  const [totalPages, setTotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    fetch(query, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((allPokemon) => {
        setPokemons(allPokemon.results);
        setTotalPages(Math.ceil(allPokemon.count / POKEMON_LIMIT));

        return () => controller.abort();
      });
      // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    if(totalPages !== 0 && (page<=1 || page > totalPages)) navigate("/", { replace: true });
    // eslint-disable-next-line
  }, [totalPages]);

  function pagination(action) {
    switch (action) {
      case ACTIONS.NEXT:
        if (page >= totalPages) break;
        navigate(`/${page + 1}`);
        break;
      case ACTIONS.PREVIOUS:
        if (page <= 1) break;
        if (page - 1 === 1) navigate("/");
        else navigate(`/${page - 1}`);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Flex justify="space-between">
        <Button
          onClick={() => pagination(ACTIONS.PREVIOUS)}
          colorScheme="yellow"
          isDisabled={page<=1}
          leftIcon={<ArrowBackIcon />}
        >
          Previous
        </Button>
        <Button
          onClick={() => pagination(ACTIONS.NEXT)}
          colorScheme="yellow"
          isDisabled={page>=totalPages}
          rightIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Flex>

      <Grid
        templateColumns={{ base: "repeat(4, auto)", lg: "repeat(5, auto)" }}
        justifyContent="space-between"
        rowGap={{ base: 7, lg: 5 }}
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
