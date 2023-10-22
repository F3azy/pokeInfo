import React from 'react'
import { PokeballList } from '../components'
import { Flex } from '@chakra-ui/react';

const Home = () => {
  return (
    <Flex w="100%" my={["36px", "20px"]} direction="column" align="center">
        <Flex w={["100%", "60%"]} direction="column" rowGap={["40px", "28px"]}>
            <PokeballList />
        </Flex>
    </Flex>
  )
}

export default Home