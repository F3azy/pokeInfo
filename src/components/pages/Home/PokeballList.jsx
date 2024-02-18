import { Grid, GridItem } from "@chakra-ui/react";
import Pokeball from "./Pokeball";

const PokeballList = ({ pokemons }) => {
  return (
    <Grid
      templateColumns={{ base: "repeat(4, auto)", lg: "repeat(5, auto)" }}
      justifyContent="space-between"
      rowGap={{ base: 7, lg: 5 }}
    >
      {pokemons?.map((pokemon) => (
        <GridItem key={pokemon.name}>
          <Pokeball name={pokemon.name} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PokeballList;
