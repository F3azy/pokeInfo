import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { PaginationButtons, Pokeball } from "../components";
import { useNavigate, useParams } from "react-router-dom";

const POKEMON_LIMIT = 20;

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


  function next() {
    if (page >= totalPages) return;
    navigate(`/${page + 1}`);
  }

  function prev() {
    if (page <= 1) return;
    if (page - 1 === 1) navigate("/");
    else navigate(`/${page - 1}`);
  }

  function setPage(ev) {
    if (ev.target.value > totalPages || ev.target.value < 1 || isNaN(ev.target.value)) return;
    if (ev.target.value === '1') navigate("/");
    else navigate(`/${ev.target.value}`);
  }

  return (
    <>
      <PaginationButtons
      currentPage={page}
      totalPages={totalPages}
      nextOnClick={() => next()}
      nextIsDisabled={page>=totalPages}
      prevOnClick={() => prev()}
      prevIsDisabled={page<=1}
      setPage={(ev) => setPage(ev)}
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
