import { Button, Box, InputGroup, InputLeftElement, InputRightElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import React from 'react'

const SearchInput = () => {
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
            />

            <InputRightElement w="64px">
                <Button colorScheme="yellow">
                        Search
                </Button>
            </InputRightElement>
        </InputGroup>
    </Box>
  )
};

export default SearchInput;