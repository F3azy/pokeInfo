import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Move from "./Move";

const MoveList = ({ moves, showModal }) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        xl: "repeat(6, 1fr)",
      }}
      h="240px"
      overflowY="scroll"
      pt={{ base: "8px", lg: "12px" }}
      gap={{ base: "16px", md: "20px" }}
      css={{
        "&::-webkit-scrollbar": {
          width: "14px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#FFCC00",
          border: "4px solid rgba(0, 0, 0, 0)",
          backgroundClip: "padding-box",
          borderRadius: "24px",
        },
      }}
    >
      {moves?.map((m) => (
        <GridItem key={m.move.name}>
          <Move name={m.move.name} value={m.move.name} onClick={showModal} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default MoveList;
