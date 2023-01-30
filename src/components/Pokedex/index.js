import React from 'react'
import { Flex, Image } from '@chakra-ui/react';
import PokeImg from './PokeImg';

const Pokedex = ({Pokemon}) => {

  return (
    <Flex mx={["8px", "0"]}>
        <PokeImg url={Pokemon.sprites.front_default} />
    </Flex>
  )
};

export default Pokedex;