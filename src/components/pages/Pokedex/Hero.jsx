import { Flex, Heading } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../utils";
import DetailList from "./DetailList";

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
      border={{ base: "solid 8px", lg: "solid 12px" }}
      borderRadius="16px"
      borderColor={{ base: "brand.primary", lg: "brand.primary" }}
      direction="column"
      rowGap={{ base: "4px", md: "8px" }}
      basis="70%"
      p={{ base: "12px", md: "16px" }}
    >
      <Heading
        as="h1"
        size={{ base: "md", md: "3xl" }}
        color="brand.quaternary"
        borderBottom="solid 1px"
        paddingBottom={{ base: "8px", md: "12px" }}
      >
        {capitalizeFirstLetter(pokemon.name)} #{pokemon.id}
      </Heading>
      <DetailList details={pokemonDetails} />
    </Flex>
  );
};

export default Hero;
