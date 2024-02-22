import { Grid, GridItem } from "@chakra-ui/react";
import Detail from "./Detail";

const DetailList = ({ details }) => {
  return (
    <Grid
      color="white"
      fontSize={{ base: "16px", md: "20px" }}
      templateRows={{ base: "repeat(5, 1fr)", md: "repeat(3, 1fr)" }}
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
      rowGap={{ base: 4, md: 6 }}
      columnGap={10}
      py="8px"
      alignItems="center"
    >
      {details?.map((detail) => (
        <GridItem key={detail.label}>
            <Detail label={detail.label} value={detail.value}  />
        </GridItem>
      ))}
    </Grid>
  );
};

export default DetailList;
