import { Grid, GridItem } from "@chakra-ui/react";
import Move from "./Move";
import MoveModal from "./MoveModal";
import useShowMoveDetails from "../../../hooks/useShowMoveDetails";

const MoveList = ({ moves }) => {
  const {move, loading, isOpen, hideMoveDetails, showMoveDetails} = useShowMoveDetails();

  return (
    <>
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
            <Move name={m.move.name} value={m.move.name} onClick={(e) => showMoveDetails(e)} />
          </GridItem>
        ))}
      </Grid>
      <MoveModal
        move={move}
        loading={loading}
        isOpen={isOpen}
        onClose={() => hideMoveDetails()}
      />
    </>
  );
};

export default MoveList;
