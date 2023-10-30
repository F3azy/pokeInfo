import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Grid
      minH="100vh"
      templateAreas={`"header"
                      "main"
                      "footer"`}
      gridTemplateRows="auto 1fr auto"
      alignItems="center"
    >
      <GridItem area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Flex as="main" w="100%" justify="center">
          <Flex
            direction="column"
            w={{ base: "100%", lg: "80%", '2xl': "60%" }}
            mx={{ base: "8px", md: "32px", lg: "0" }}
            my={{ base: "36px", lg: "20px" }}
            rowGap={{ base: "40px", lg: "28px" }}
          >
            <Outlet />
          </Flex>
        </Flex>
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
