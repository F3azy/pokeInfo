import {
  Button,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useSearchNavigation from "../../hooks/useSearchNavigation";

const SearchInput = () => {
  const { getInput, searchOnEnter, search } = useSearchNavigation();

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
          onChange={(e) => getInput(e)}
          onKeyDown={(e) => searchOnEnter(e)}
          enterKeyHint="Go"
        />

        <InputRightElement w="60px">
          <Button
            w="60px"
            bg="yellow.200"
            color="black"
            onClick={() => search()}
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
