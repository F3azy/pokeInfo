import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import PokeballIcon from '../../../icons/PokeballIcon';
import '../../../styles/PokeballAnimation.css'

function Pokeball({name}) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

  return (
      <Flex className='pokeball' w={["88px", "122px"]} direction="column" align="center" rowGap="4px" color="white">
        <PokeballIcon size={["60px", "122px"]}/>
        <Text fontSize={["16px", "20px"]}>{capitalizeFirstLetter(name)}</Text>
      </Flex>
  )
};

export default Pokeball;