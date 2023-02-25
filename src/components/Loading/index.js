import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import PokeballIcon from '../../icons/PokeballIcon';

const Loading = ({marginHorizontal}) => {
  return (
    <Flex width="100%" id="pokeLoad" my={marginHorizontal} justify="center" align="center" letterSpacing="2px" columnGap="2px" color="brand.quaternary" fontSize={["50px","200px"]} fontWeight="bold">
        <Text>L</Text><PokeballIcon /><Text>ADING...</Text>
    </Flex>
  )
};

export default Loading;