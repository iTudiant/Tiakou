import { Input as RNEInput } from "@rneui/themed";
import React from "react";
import Box from "./Box";

type Props = {
  width?: number;
};

const Input = ({ width, ...props }: Props) => {
  return (
    <Box width={width}>
      <RNEInput {...props} />
    </Box>
  );
};

export default Input;
