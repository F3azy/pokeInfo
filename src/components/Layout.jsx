import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box h={{ lg: "100vh" }} position="relative">
      <Navbar />
      <Box as="main" w="100%">
        <Box w={{ base: "100%", lg: "80%", xl: "60%" }} mx="auto">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;