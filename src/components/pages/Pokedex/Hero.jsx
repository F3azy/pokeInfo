import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../utils";
import PokemonDetailList from "./PokemonDetailList";

const Hero = ({ pokemon }) => {
  const pokemonDetails = [
    {
      label: "Height",
      value: pokemon.height * 10 + "cm",
    },
    {
      label: "Weight",
      value: pokemon.weight / 10 + "Kg",
    },
    {
      label: "Type",
      value: pokemon.types.map((typ) => typ.type.name).join(", "),
    },
    ...pokemon.stats.map((stat) => {
      return {
        label:
          stat.stat.name === "hp"
            ? "HP:"
            : capitalizeFirstLetter(stat.stat.name),
        value: stat.base_stat,
      };
    }),
  ];

  return (
    <Flex
      w="full"
      border={{ base: "solid 8px", lg: "solid 12px" }}
      borderRadius="16px"
      borderColor={{ base: "brand.primary", lg: "brand.primary" }}
      p={{ base: "12px", md: "16px" }}
    >
      <Image
        boxSize={{ base: "160px", md: "260px" }}
        m={{ base: "8px", md: "24px" }}
        src={pokemon.sprites.front_default}
        onMouseOver={(e) => (e.currentTarget.src = pokemon.sprites.back_default)}
        onMouseLeave={(e) => (e.currentTarget.src = pokemon.sprites.front_default)}
        alt="Pokemon Image"
      />
      <Box w="full">
        <Heading
          as="h1"
          size={{ base: "md", md: "3xl" }}
          color="brand.quaternary"
          borderBottom="solid 1px"
          paddingBottom={{ base: "8px", md: "12px" }}
        >
          {capitalizeFirstLetter(pokemon.name)} #{pokemon.id}
        </Heading>
        <PokemonDetailList details={pokemonDetails} />
      </Box>
    </Flex>
  );
};

export default Hero;
