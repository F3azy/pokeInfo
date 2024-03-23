import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  overlay: {
    bg: "none",
    backdropFilter: "auto",
    backdropBlur:   "2px",
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
  dialog: {
    borderRadius: "lg",
    border: "solid 4px",
    borderColor: "brand.primary",
  },
  body: {
    borderBottomRadius: "sm",
    bg: "brand.secondary",
    color: "white",
  }
})

const modalTheme = defineMultiStyleConfig({
    baseStyle,
  });

  export default modalTheme;