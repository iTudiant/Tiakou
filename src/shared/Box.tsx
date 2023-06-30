import { createBox } from "@shopify/restyle";
import React from "react";
import { Theme } from "_theme";

const Box = createBox<Theme>();

export type BoxProps = React.Component<typeof Box>;

export default Box;
