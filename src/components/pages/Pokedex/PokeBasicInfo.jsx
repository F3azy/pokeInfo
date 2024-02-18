import React from "react";
import { Flex, Heading, Grid, GridItem, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../../../utils";

const PokeBasicInfo = ({ name, id, height, weight, types, stats }) => {
  return (
    <Flex
      border={{ base:"solid 8px", lg:"solid 12px"}}
      borderRadius="16px"
      borderColor={{ base:"brand.primary", lg:"brand.primary"}}
      direction="column"
      rowGap={{base: "4px", md:"8px"}}
      basis="70%"
      p={{base: "12px", md:"16px"}}
    >
      <Heading
        as="h1"
        size={{base: "md", md:"3xl"}}
        color="brand.quaternary"
        borderBottom="solid 1px"
        paddingBottom={{base: "8px", md:"12px"}}
      >
        {capitalizeFirstLetter(name)} #{id}
      </Heading>
      <Grid
        color="white"
        fontSize={{base: "16px", md:"20px"}}
        templateRows={{base: "repeat(5, 1fr)", md:"repeat(3, 1fr)"}}
        templateColumns={{base: "repeat(2, 1fr)", md:"repeat(3, 1fr)"}}
        rowGap={{base: 4, md: 6}}
        columnGap={10}
        py="8px"
        alignItems="center"
      >
        <GridItem>
          <Stat>
            <StatLabel color="brand.quaternary">Height:</StatLabel>
            <StatNumber>{height * 10}cm</StatNumber>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
              <StatLabel color="brand.quaternary">Weight:</StatLabel>
              <StatNumber>{weight / 10}Kg</StatNumber>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
              <StatLabel color="brand.quaternary">Type:</StatLabel>
              <StatNumber>
              {types.map((typ, idx) =>
                typ.type.name.concat(types[idx + 1] ? ", " : "")
              )}
              </StatNumber>
          </Stat>
        </GridItem>
        {stats.map((stat) => {
          return (
            <GridItem key={stat.stat.name}>
              <Stat>
                <StatLabel color="brand.quaternary">
                {stat.stat.name === "hp"
                  ? "HP:"
                  : capitalizeFirstLetter(stat.stat.name) + ":"}
                </StatLabel>
                <StatNumber>{stat.base_stat}</StatNumber>
              </Stat>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default PokeBasicInfo;
