import { HashRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./styles/theme";
import "./styles/globals.css";
import { Layout } from "./components";
import { Home, PokemonInfo } from "./pages";

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
