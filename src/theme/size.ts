import { Dimensions } from "react-native";

//import {isTablet} from './system';

const isTablet = false;

const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const _scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;

const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (_scale(size) - size) * factor;

const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

const scale = isTablet /*isTablet()*/ ? verticalScale : _scale;

const ICON_SMALL = scale(20);
const ICON_MEDIUM = scale(30);
const ICON_LARGE = scale(40);

const IMAGE_SMALL = scale(50);
const IMAGE_MEDIUM = scale(100);
const IMAGE_LARGE = scale(150);

const DIMENSIONS = {
  height: {
    xsmall: "25%",
    medium: "50%",
    large: "75%",
    full: "100%",
  },
  width: {
    small: "25%",
    medium: "50%",
    large: "75%",
    full: "100%",
  },
};

const TYPO = {
  veryBig: 40,
  big: 24,
  primary: 18,
  secondary: 16,
  tertiary: 14,
  verySmall: 12,
};

export const Size = {
  TYPO,
  ICON_LARGE,
  ICON_MEDIUM,
  ICON_SMALL,
  IMAGE_LARGE,
  IMAGE_MEDIUM,
  IMAGE_SMALL,
  DIMENSIONS,
};
