import {
  Button,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [pokemonName, setPokemonName] = useState("");

  const navigate = useNavigate();

  function getName(ev) {
    setPokemonName(ev.target.value.toLowerCase());
  }

  function searchOnEnter(ev) {
    if (ev.key === "Enter") {
      ev.preventDefault();
      ev.target.blur();
      search();
    }
  }

  function search() {
    if (pokemonName.length > 0)
      navigate({
        pathname: "/pokedex",
        search: `?name=${pokemonName}`,
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
          _groupActive={{ borderColor: "yellow.500" }}
          type="text"
          color="yellow.200"
          placeholder="Pokemon name..."
          _placeholder={{ opacity: 0.4, color: "yellow.200" }}
          onChange={getName}
          onKeyDown={searchOnEnter}
          enterKeyHint="Go"
        />

        <InputRightElement w="60px">
          <Button
            w="60px"
            bg="yellow.200"
            color="black"
            onClick={search}
            borderRadius="0 8px 8px 0"
            _groupHover={{ bg: "yellow.400" }}
            _groupActive={{ bg: "yellow.500" }}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
