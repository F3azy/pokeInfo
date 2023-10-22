import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  Flex,
  Text,
  Link,
  Stack,
  Icon,
} from '@chakra-ui/react';

const Footer = () => {
  return (
      <Flex as="footer" w="100%" bg="brand.primary" p="20px 0" justify="center" color="white">
        <Flex w={["100%", "60%"]} justify="center" align="center" mx={["8px", "0"]}> 
            <Stack justify="space-between" align="center" direction={['column', 'row']} spacing={["24px", "32px"]} >
              
              <Text fontSize="20px">&copy; {new Date().getFullYear()} PokeINFO, Powered by <Link isExternal href='https://pokeapi.co/' _hover={{color: "brand.quaternary" }} textDecoration="underline">PokeAPI</Link></Text>
              
              <Stack direction="row" align="center" spacing="16px">
                <Text fontSize="20px">Designed by Francesco Carvelli</Text> 
                    <Link isExternal href="https://github.com/F3azy" _hover={{color: "brand.quaternary" }} h="24px"><Icon boxSize="24px" as={FaGithub}/></Link>
                    <Link isExternal href="" _hover={{color: "brand.quaternary" }} h="24px"><Icon boxSize="24px" as={FaLinkedin}/></Link>
              </Stack>

            </Stack>
        </Flex>
      </Flex>
  )
};

export default Footer;