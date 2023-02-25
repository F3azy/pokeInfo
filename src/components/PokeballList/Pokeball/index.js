import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import PokeballIcon from '../../../icons/PokeballIcon';
import '../../../styles/PokeballAnimation.css'
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from '../../../utils';

function Pokeball({name}) {

  return (
    <Link to="/pokemonInfo" state={{PokemonName: name}}>
      <Flex className='pokeball' w={["88px", "122px"]} direction="column" align="center" rowGap="4px" color="white">
        <PokeballIcon size={["60px", "122px"]}/>
        <Text fontSize={["16px", "20px"]}>{capitalizeFirstLetter(name)}</Text>
      </Flex>
    </Link>
  )
};

export default Pokeball;