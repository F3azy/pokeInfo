import { extendTheme } from "@chakra-ui/react";
import Modal from "./components/Modal";
import Drawer from "./components/Drawer";

export const theme = extendTheme({
    colors : {
        brand: {
            primary: "#0A285F",
            secondary: "#0075BE",
            tertiary: "#D5A100",
            quaternary: "#FFCC00",
        },
        red: "#EF2E2E",
    },
    styles: {
        global: () => ({
            body: {
                bg: "#0075BE",
                minH: "100vh",
            },
            html: {
                bg: "#0075BE",
                minH: "100vh",
            },
        }),
    },
    components: {
        Modal: Modal,
        Drawer: Drawer,
      }
});