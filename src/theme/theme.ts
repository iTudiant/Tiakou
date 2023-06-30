import { createTheme } from "@shopify/restyle";
import { Size } from "./size";
import { Typography } from "./typography";

//grenat : #b03043
//black : #141414
//vert : #125b49

//PALETTE
const palette = {
  grenatLight: "#F8AC71",
  grenatPrimary: "#b03043",
  grenatDark: "#C66316",

  redBordeaux: "#9B0409",

  white: "#F0F2F3",
  grey: "#939597",
  offWhite: "#DDD",
  black: "#141414",
  offBlack: "#252525",
  green: "#125b49",
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.grenatPrimary,
    grenatDark: palette.grenatDark,
    error: palette.redBordeaux,
    white: palette.white,
    black: palette.black,
    secondary: palette.grey, //grey
    offWhite: palette.offWhite,
    buttonPrimaryBackground: palette.grenatPrimary,
    buttonSecondaryBackground: palette.green,
    cardPrimaryBackground: palette.grenatPrimary,
    cardLightBackground: palette.grenatLight,
    text: palette.black,
    textPrimaryColor: palette.grenatPrimary,
    green: palette.green,
  },
  spacing: {
    none: "0%",
    xs: "2%",
    s: "4%",
    m: "8%",
    l: "16%",
    xl: "32%",
    xxl: "40%",
  },
  sizes: {
    ...Size.DIMENSIONS,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  borderRadii: {
    none: 0,
    xs: 8,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128,
  },
  textVariants: {
    ...Typography,
    button: {
      ...Typography.button,
      color: "white",
      textAlign: "center",
    },
    defaults: {
      fontSize: 12,
    },
  },
  buttonVariants: {
    primary: {
      backgroundColor: "primary",
      color: "white",
    },
    secondary: {
      backgroundColor: "buttonSecondaryBackground",
      color: "white",
    },
    tertiary: {
      backgroundColor: "white",
      color: "black",
      borderColor: "buttonSecondaryBackground",
    },
  },
});

const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    mainForeground: palette.white,
    primary: palette.grenatPrimary,
    secondary: palette.black, //grey
    error: palette.redBordeaux,
    white: palette.offWhite,
    black: palette.offBlack,
    text: palette.white,
  },
});

export type Theme = typeof theme;
export { theme, darkTheme };
