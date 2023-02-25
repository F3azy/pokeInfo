import { HashRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import {theme} from "./styles/theme"
import "./styles/globals.css"
import PokemonInfo from "./pages/PokemonInfo";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <HashRouter >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/pokemonInfo" element={<PokemonInfo />} />
            </Route>
          </Routes>
      </HashRouter >
    </ChakraProvider>
  );
}

export default App;
