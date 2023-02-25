import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import PokeballIcon from '../../icons/PokeballIcon';

const NotFound = () => {
  return (
    <Flex width="100%" id="pokeLoad" my={["256px","96px"]} direction="column" justify="center" align="center" letterSpacing="2px" columnGap="2px" color="brand.quaternary" fontSize={["70px","196px"]} fontWeight="bold">
        <Text>P<PokeballIcon />kemon</Text>
        <Text>Not Found</Text>
    </Flex> 
  )
};

export default NotFound;