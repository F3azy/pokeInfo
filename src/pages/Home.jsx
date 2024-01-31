import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { PaginationButtons, Pokeball } from "../components";
import { useNavigate, useParams } from "react-router-dom";

const POKEMON_LIMIT = 20;

const ACTIONS = {
  NEXT: "NEXT",
  PREVIOUS: "PREVIOUS",
  SET_PAGE: "SET",
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
  }, [query]);

  useEffect(() => {
    if(totalPages !== 0 && (page<=1 || page > totalPages)) navigate("/", { replace: true });
  }, [totalPages, page, navigate]);

  function pagination(ev, action) {
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
      case ACTIONS.SET_PAGE:
        if (ev.target.value > totalPages || ev.target.value < 1 || isNaN(ev.target.value)) break;
        if (ev.target.value === '1') navigate("/");
        else navigate(`/${ev.target.value}`);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <PaginationButtons
      currentPage={page}
      totalPages={totalPages}
      nextOnClick={(ev) => pagination(ev, ACTIONS.NEXT)}
      nextIsDisabled={page>=totalPages}
      prevOnClick={(ev) => pagination(ev, ACTIONS.PREVIOUS)}
      prevIsDisabled={page<=1}
      setPage={(ev) => pagination(ev, ACTIONS.SET_PAGE)}
      />

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
