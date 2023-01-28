import React from 'react';
import {
  Flex,
  ListItem,
  UnorderedList,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

const Footer = () => {
  return (
      <Flex w="100%" bg="brand.primary" p="20px" justify="center" color="white" position={["static", "absolute"]} bottom="0">
        <Flex w="60%" justify="center"> 
          <UnorderedList fontSize="20px">
            <Stack direction={['column', 'row']} spacing="32px">
              <Text styleType="none">Copyright © {new Date().getFullYear()}</Text>
              <ListItem>PokeInfo | Design by Francesco Carvelli</ListItem>
              <ListItem>Powered by <Link isExternal href='https://pokeapi.co/' _hover={{color: "brand.quaternary" }} textDecoration="underline">PokeAPI</Link></ListItem>
            </Stack>
          </UnorderedList>
        </Flex>
      </Flex>
  )
};

export default Footer;