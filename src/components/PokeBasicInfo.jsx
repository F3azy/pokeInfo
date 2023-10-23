import React from "react";
import { Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { capitalizeFirstLetter } from "../utils";

const PokeBasicInfo = ({ name, id, height, weight, types, stats }) => {
  return (
    <Flex
      border={{base: "solid 8px", md:"solid 12px"}}
      borderRadius="16px"
      borderColor={{base: "brand.primary", md:"brand.primary"}}
      direction="column"
      rowGap={{base: "4px", md:"8px"}}
      basis="70%"
      mt={{base: "12px", md:""}}
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
        rowGap={{base: 4, md:12}}
        columnGap={{base: 4, md:20}}
      >
        <GridItem>
          <Text>Height: {height * 10}cm</Text>
        </GridItem>
        <GridItem>
          <Text>Weight: {weight / 10}Kg</Text>
        </GridItem>
        <GridItem>
          <Text>
            Type:{" "}
            {types.map((typ, idx) =>
              typ.type.name.concat(types[idx + 1] ? ", " : "")
            )}
          </Text>
        </GridItem>
        {stats.map((stat) => {
          return (
            <GridItem key={stat.stat.name}>
              <Text>
                {stat.stat.name === "hp"
                  ? "HP:"
                  : capitalizeFirstLetter(stat.stat.name) + ":"}{" "}
                {stat.base_stat}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default PokeBasicInfo;
