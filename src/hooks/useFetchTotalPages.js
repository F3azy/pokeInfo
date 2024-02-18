import { useEffect, useState } from "react";
import { POKEMON_LIMIT } from "../constans/PokemonLimit";

export default function useFetchTotalPages() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    setTotalPages(0);

    const fetching = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_LIMIT}`
        );

        const json = await response.json();
        setTotalPages(Math.ceil(json.count / POKEMON_LIMIT));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, []);

  return { totalPages, loading, error };
}
