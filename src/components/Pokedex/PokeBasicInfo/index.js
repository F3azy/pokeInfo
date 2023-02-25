import React from 'react';
import { Flex, Heading, Text, Grid, GridItem  } from '@chakra-ui/react';
import { capitalizeFirstLetter } from '../../../utils';

const PokeBasicInfo = ({name, id, height, weight, types, stats}) => {
  return (
    <Flex border={["solid 8px", "solid 12px"]} borderRadius="16px" borderColor={["brand.primary", "brand.primary"]} direction="column" rowGap={["4px", "8px"]} basis="70%" ml={["", "16px"]} mt={["12px", ""]} p={["12px", "16px"]}>
        <Heading as="h1" size={["lg", "3xl"]} color="brand.quaternary" borderBottom="solid 1px" paddingBottom={["8px", "12px"]}>
            {capitalizeFirstLetter(name)} #{id}
        </Heading>
        <Grid color="white" fontSize={["16px", "20px"]}
            templateRows={['repeat(5, 1fr)', 'repeat(3, 1fr)']}
            templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
            rowGap={[4, 12]}
            columnGap={[4, 20]}
            >
            <GridItem><Text>Height: {height*10}cm</Text></GridItem>
            <GridItem><Text>Weight: {weight/10}Kg</Text></GridItem>
            <GridItem><Text>Type: {types.map((typ, idx) => typ.type.name.concat((types[idx+1]) ? ", " : ""))}</Text></GridItem>
            {stats.map(function(stat) {
              return <GridItem><Text key={stat.stat.name}>{(stat.stat.name=="hp") ? "HP:" : capitalizeFirstLetter(stat.stat.name)+":"} {stat.base_stat}</Text></GridItem>
            })}
        </Grid>
    </Flex>
  )
}

export default PokeBasicInfo;