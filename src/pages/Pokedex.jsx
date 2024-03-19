import { VStack } from "@chakra-ui/react";
import { Hero, Moves, Loading, Error } from "../components";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";

const Pokedex = () => {
  const { pokemon, loading, error } = useFetchPokemonDetails();

  return (
    <VStack minH="100%" gap={{ base: "12px", lg: "4px" }}>
      {loading && <Loading />}
      {error !== "" && <Error message={error} />}
      {pokemon && (
        <>
          <Hero pokemon={pokemon} />
          <Moves moves={pokemon.moves} />
        </>
      )}
    </VStack>
  );
};

export default Pokedex;
