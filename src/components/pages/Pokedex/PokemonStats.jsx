import { Grid, GridItem } from "@chakra-ui/react";
import PokemonStat from "./PokemonStat";

const PokemonStats = ({ pokemonStats }) => {
  return (
    <Grid
      color="white"
      fontSize={{ base: "16px", md: "20px" }}
      templateRows={{ base: "repeat(5, 1fr)", md: "repeat(3, 1fr)" }}
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      rowGap={{ base: 4, md: 6 }}
      columnGap={10}
      py="8px"
      alignItems="center"
    >
      {pokemonStats.map((stat) => (
        <GridItem key={stat.label}>
            <PokemonStat label={stat.label} value={stat.value}  />
        </GridItem>
      ))}
    </Grid>
  );
};

export default PokemonStats;
