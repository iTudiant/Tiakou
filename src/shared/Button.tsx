import { TouchableHighlight, ActivityIndicator } from "react-native";
import Text from "./Text";
import Box from "./Box";
import { Theme } from "_theme";
import React from "react";
import {
  border,
  BorderProps,
  BoxProps,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";

type ButtonProps = {
  onPress?: () => void;
  loading?: boolean;
  label: React.ReactNode;
  disabled?: boolean;
} & Partial<BoxProps<Theme>>;

type BoxButtonProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  VariantProps<Theme, "buttonVariants"> &
  React.ComponentProps<typeof Box>;

const BoxButton = createRestyleComponent<BoxButtonProps, Theme>(
  [spacing, border, createVariant({ themeKey: "buttonVariants" })],
  Box,
);

const Button: React.FC<ButtonProps> = ({
  onPress,
  loading,
  label,
  disabled,
  ...rest
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="transparent"
      disabled={disabled}
    >
      <BoxButton
        variant="primary"
        paddingVertical="s"
        paddingHorizontal="s"
        borderRadius={"xs"}
        {...rest}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text variant="button">{label}</Text>
        )}
      </BoxButton>
    </TouchableHighlight>
  );
};

export default Button;
