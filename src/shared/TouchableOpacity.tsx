import React from "react";
import {
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = {
  children: React.ReactNode;
  onPress?: () => void;
} & TouchableOpacityProps;

const TouchableOpacity = ({ children, onPress }: Props) => {
  return (
    <RNTouchableOpacity activeOpacity={0.8} onPress={onPress}>
      {children}
    </RNTouchableOpacity>
  );
};

export default TouchableOpacity;
