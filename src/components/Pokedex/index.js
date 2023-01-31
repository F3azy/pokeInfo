import React from 'react'
import { Flex, Image } from '@chakra-ui/react';
import PokeImg from './PokeImg';

const Pokedex = ({Pokemon}) => {

  return (
    <Flex w="100%" mx={["8px", "0"]} my="24px">
        <PokeImg url={Pokemon.sprites} />
        <Flex bg="red" grow="1" ml={["8px", "16px"]}>

        </Flex>
    </Flex>
  )
};

export default Pokedex;