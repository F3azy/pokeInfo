import { drawerAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "none",
    backdropFilter: "auto",
    backdropBlur: "2px",
  },
  header: {
    bg: "brand.primary",
    color: "brand.quaternary",
  },
  closeButton: {
    color: "brand.quaternary",
    _hover: {
      bg: "brand.secondary",
    },
  },
  body: {
    borderBottomRadius: "sm",
    bg: "brand.secondary",
    color: "white",
  },
});

const drawerTheme = defineMultiStyleConfig({
  baseStyle,
});

export default drawerTheme;
