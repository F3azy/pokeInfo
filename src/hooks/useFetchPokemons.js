import { useEffect, useState } from "react";
import { POKEMON_LIMIT } from "../constans/PokemonLimit";

export default function useFetchPokemons(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokemons, setPokemons] = useState(null);

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

  return { pokemons, loading, error };
}
