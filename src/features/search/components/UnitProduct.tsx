import { Icon } from "@rneui/themed";
import { ListRenderItem } from "@shopify/flash-list";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, Column, Box } from "_shared";
import { Size } from "_theme";

type PropsProduct = {
  id: number;
  nom: string;
  description: string;
  image: string;
  prix: number;
  categorie: number;
  user: number;
  is_finished: boolean;
};

export const UnitProduct: ListRenderItem<PropsProduct> = ({
  item,
}: {
  item: PropsProduct;
}) => {
  return (
    <Box
      key={item.id}
      style={{ width: 180 }}
      marginVertical="m"
      borderRadius="sm"
      alignItems={"center"}
      justifyContent="space-between"
    >
      <Image source={item.image} style={styles.image} />
      <Box
        style={{ marginTop: -30 }}
        backgroundColor={"primary"}
        padding="s"
        borderWidth={3}
        borderColor="white"
        borderRadius="lg"
      >
        <Icon name="shopping-bag" color="white" size={Size.ICON_MEDIUM} />
      </Box>
      <Column alignItems="center" justifyContent="center">
        <Text variant={"title"} color="black">
          {item.nom}
        </Text>
        <Text variant={"title"} color="primary" fontWeight={"bold"}>
          {item.prix}
        </Text>
      </Column>
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 170,
    borderRadius: 16,
  },
});
