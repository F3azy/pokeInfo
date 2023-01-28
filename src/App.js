import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import PokeballList from "./components/PokeballList/PokeballList";
import {theme} from "./styles/theme"
import "./styles/globals.css"

function App() {
  return (
    <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PokeballList />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
