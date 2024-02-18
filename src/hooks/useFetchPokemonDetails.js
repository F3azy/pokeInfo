import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useFetchPokemonDetails(name) {
  const [searchParams] = useSearchParams();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setPokemon(null);

    const fetching = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchParams.get("name")}`
        );

        if (!response.ok) throw new Error("Pokemon not found");

        const json = await response.json();

        setPokemon(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetching();
  }, [searchParams]);

  return { pokemon, loading, error };
}
