import React from 'react'
import { Flex } from '@chakra-ui/react';
import { Pokedex } from '../components';

const PokemonInfo = () => {

  return (
    <Flex w="100%" justify="center">
      <Flex w={["100%", "60%"]}>
        <Pokedex />
      </Flex>
    </Flex>
  )
};

export default PokemonInfo;