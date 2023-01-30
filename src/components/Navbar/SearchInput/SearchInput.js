import { Button, Box, InputGroup, InputLeftElement, InputRightElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const SearchInput = () => {
    const [pokemonName , setPokemonName] = useState(() => {return ""});


  return (
    <Box>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='yellow.200' />}
            />

            <Input
                borderWidth="2px" 
                borderColor="yellow.200" 
                focusBorderColor='yellow.200'
                _hover={{borderColor: 'yellow.400'}}
                type='text'
                color="yellow.200" 
                placeholder='Pokemon name...'
                _placeholder={{ opacity: 0.4, color: 'yellow.200' }} 
                onChange={(ev) => setPokemonName(ev.target.value.toLowerCase())}
            />

            <InputRightElement w="60px">
                <Link to="/pokemonInfo" state={{PokemonName: pokemonName}}>
                    <Button w="60px" colorScheme="yellow">
                            Search
                    </Button>
                </Link>
            </InputRightElement>
        </InputGroup>
    </Box>
  )
};

export default SearchInput;