import React from 'react'
import { Flex, Image } from '@chakra-ui/react';

const PokeImg = ({url}) => {
  return (
    <Flex border="solid 8px" borderColor="brand.primary">
        <Image boxSize={["", "180px"]} src={url} />
    </Flex>
  )
}

export default PokeImg