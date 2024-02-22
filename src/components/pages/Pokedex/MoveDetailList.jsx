import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Detail from "./Detail";

const MoveDetailList = ({ moveDetails }) => {
  return (
    <Grid
      color="white"
      fontSize={{ base: "16px", lg: "20px" }}
      templateColumns={{
        base: "repeat(2, 1fr)",
        lg: "repeat(3, auto)",
      }}
      rowGap={{ base: 4, lg: 8 }}
      columnGap={{ base: 10, lg: 2 }}
      justifyContent={{ base: "start", lg: "space-between" }}
    >
      {moveDetails.map((detail, idx) => (
        <GridItem
          key={detail.label}
          {...(idx === moveDetails.length - 1
            ? { colSpan: { base: 2, lg: 3 } }
            : "")}
        >
          <Detail label={detail.label} value={detail.value} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default MoveDetailList;
