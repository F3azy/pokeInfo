import { useEffect, useState } from "react";
import { POKEMON_LIMIT } from "../constans/PokemonLimit";
import { useParams } from "react-router-dom";
import useFetchTotalPages from "./useFetchTotalPages";

export default function useFetchPokemons() {
  const { page = 1 } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokemons, setPokemons] = useState(null);

  const { totalPages } = useFetchTotalPages();

  useEffect(() => {
    setLoading(true);
    setError("");
    setPokemons(null);
    const controller = new AbortController();

    const fetching = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}&offset=${
            (page - 1) * POKEMON_LIMIT
          }`,
          {
            signal: controller.signal,
          }
        );

        const json = await response.json();

        setPokemons(json.results);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("AbortError: Fetch request aborted");
        } else setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetching();

    return () => controller.abort();
  }, [page]);

  return { pokemons, loading, error, page: parseInt(page), totalPages };
}
