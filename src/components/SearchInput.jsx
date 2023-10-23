import {
  Button,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [pokemonName, setPokemonName] = useState(() => {return "";});
  const [input, setInput] = useState(() => {return "";});

  function getName(ev) {
    setInput(ev.target.value);
    setPokemonName(ev.target.value.toLowerCase());
  }

  return (
    <Box>
      <InputGroup role="group">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="yellow.200" />}
        />

        <Input
          borderWidth="2px"
          borderColor="yellow.200"
          focusBorderColor="yellow.200"
          _groupHover={{ borderColor: "yellow.400" }}
          type="text"
          color="yellow.200"
          placeholder="Pokemon name..."
          _placeholder={{ opacity: 0.4, color: "yellow.200" }}
          value={input}
          onChange={getName}
        />

        <InputRightElement w="60px">
          <Link
            to={input.length > 0 && "/pokedex"}
            state={{ PokemonName: pokemonName }}
          >
            <Button
              w="60px"
              bg="yellow.200"
              color="black"
              {...(input.length > 0 && { onClick: () => setInput("") })}
              borderRadius="0 8px 8px 0"
              _groupHover={{ bg: "yellow.400" }}
            >
              Search
            </Button>
          </Link>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
