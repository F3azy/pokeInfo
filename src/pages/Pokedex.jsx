import { Flex, VStack } from "@chakra-ui/react";
import {
  PokemonImage,
  PokemonDetails,
  PokemonMoves,
  Loading,
  Error,
} from "../components";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";

const Pokedex = () => {
  const { pokemon, loading, error } = useFetchPokemonDetails();

  return (
    <VStack minH="100%" gap={{ base: "12px", lg: "20px" }}>
      {loading && <Loading />}
      {error !== "" && <Error message={error} />}
      {pokemon && (
        <>
          <Flex
            w="100%"
            direction={{ base: "column", xl: "row" }}
            justify="center"
            align={{ xl: "center" }}
            gap={{ base: "12px", lg: "24px" }}
          >
            <PokemonImage url={pokemon.sprites} />
            <PokemonDetails
              name={pokemon.name}
              id={pokemon.id}
              height={pokemon.height}
              weight={pokemon.weight}
              types={pokemon.types}
              stats={pokemon.stats}
            />
          </Flex>
          <PokemonMoves moves={pokemon.moves} />
        </>
      )}
    </VStack>
  );
};

export default Pokedex;
