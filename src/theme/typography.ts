import { Size } from "./size";

export const Typography = {
  headerNavigation: {
    fontWeight: "600",
    fontSize: Size.TYPO.veryBig, //40
  },
  bigTitle: {
    fontWeight: "bold",
    fontSize: Size.TYPO.big, //24,
  },
  title: {
    fontWeight: "400",
    fontSize: Size.TYPO.big, //24,
  },
  primary: {
    fontSize: Size.TYPO.primary, //18,
  },
  secondary: {
    fontSize: Size.TYPO.secondary, //16
  },
  primaryBold: {
    fontSize: Size.TYPO.primary, //18,
    fontWeight: "bold",
  },
  tertiary: {
    fontSize: Size.TYPO.tertiary, //14
  },
  button: {
    fontSize: Size.TYPO.primary,
  },
  link: {
    fontSize: Size.TYPO.secondary,
    textDecorationLine: "underline",
    fontWeight: "600",
  },
};
