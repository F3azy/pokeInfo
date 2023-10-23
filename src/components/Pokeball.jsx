import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { PokeballIcon } from "../icons";
import "../styles/PokeballAnimation.css";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils";

function Pokeball({ name }) {
  return (
    <Link to="/pokedex" state={{ PokemonName: name }}>
      <Flex
        className="pokeball"
        w={{ base: "88px", md: "122px" }}
        direction="column"
        align="center"
        rowGap="4px"
        color="white"
      >
        <PokeballIcon size={{ base: "60px", md: "122px" }} />
        <Text fontSize={{ base: "16px", md: "20px" }}>
          {capitalizeFirstLetter(name)}
        </Text>
      </Flex>
    </Link>
  );
}

export default Pokeball;
