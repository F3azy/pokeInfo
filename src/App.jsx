import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./styles/theme";
import "./styles/globals.css";
import { Layout } from "./pages";
import { Home, Pokedex } from "./pages";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path=":page?" element={<Home />} />
            <Route path="pokedex" element={<Pokedex />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
