import { Image as RNImage, ImageProps as RNImageProps } from "react-native";
import React from "react";

const Image = ({ ...props }: RNImageProps) => <RNImage {...props} />;

export type ImageProps = React.ComponentProps<typeof Image>;
export default Image;
