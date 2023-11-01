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
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [pokemonName, setPokemonName] = useState(() => {return "";});
  const [input, setInput] = useState(() => {return "";});
  const navigate = useNavigate();

  function getName(ev) {
    setInput(ev.target.value);
    setPokemonName(ev.target.value.toLowerCase());
  }

  function searchOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();

      search()
    }
  }

  function search(ev) {
    if(input.length > 0)
      navigate({
        pathname: "/pokedex",
        search: `?name=${pokemonName}`
      });
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
          onKeyDown={searchOnEnter}
        />

        <InputRightElement w="60px">
            <Button
              w="60px"
              bg="yellow.200"
              color="black"
              onClick={search}
              borderRadius="0 8px 8px 0"
              _groupHover={{ bg: "yellow.400" }}
            >
              Search
            </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
