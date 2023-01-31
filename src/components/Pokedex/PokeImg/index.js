import React from 'react'
import { Flex, Image } from '@chakra-ui/react';
import BGPokeball from '../../../icons/BGPokeball';

const PokeImg = ({url}) => {
  return (
    <Flex boxSize={["", "340"]} justify="center" align="center" position="relative" border="solid" borderWidth={["8px", "16px"]} borderRadius='full' borderRightColor="#FB1B1B" borderTopColor="#FB1B1B" borderLeftColor="#F2F2F2" borderBottomColor="#F2F2F2">
        <Image boxSize={["", "260"]} m={["8px", "24px"]} src={url.front_default} onMouseOver={e => e.currentTarget.src = url.back_default} onMouseLeave={e => e.currentTarget.src = url.front_default} borderRadius='full' zIndex="1" alt="Pokemon Image" />
        <BGPokeball size={["100px", "280px"]} />
    </Flex>
  )
}

export default PokeImg