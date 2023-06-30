import { Icon } from "@rneui/themed";
import { ListRenderItem } from "@shopify/flash-list";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, Column, Row } from "_shared";
import { Size } from "_theme";

type PropsInfluency = {
  id: number;
  name: "string";
  description: "string";
};

export const UnitInfluency: ListRenderItem<PropsInfluency> = ({
  item,
}: {
  item: PropsInfluency;
}) => {
  return (
    <Row
      backgroundColor="offWhite"
      key={item.id}
      style={{ height: 50, width: 100 }}
      marginHorizontal="xs"
      paddingVertical="l"
      borderRadius="sm"
      alignItems={"center"}
      justifyContent="center"
    >
      <Text variant={"primary"} color="green" fontWeight={"bold"}>
        {item.name}
      </Text>
    </Row>
  );
};

const styles = StyleSheet.create({});
