import Box from "./Box";
import { BoxProps } from "./Box";
import React from "react";

type RowProps = Omit<BoxProps, "flexDirection"> & {
  children: React.ReactNode;
};

const Column: React.FC<RowProps> = ({ children, ...rest }) => {
  return (
    <Box flexDirection={"column"} {...rest} alignItems={"flex-start"}>
      {children}
    </Box>
  );
};

export default Column;
