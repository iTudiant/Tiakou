import { Icon } from "@rneui/themed";
import { ListRenderItem } from "@shopify/flash-list";
import React from "react";
import { Text, Column } from "_shared";
import { Size } from "_theme";

type PropsCategorie = {
  id: number;
  name: "string";
  description: "string";
};

export const UnitCategorie: ListRenderItem<PropsCategorie> = ({
  item,
}: {
  item: PropsCategorie;
}) => {
  return (
    <Column
      backgroundColor="offWhite"
      key={item.id}
      style={{ height: 100, width: 80 }}
      marginHorizontal="s"
      paddingVertical="l"
      borderRadius="sm"
      alignItems={"center"}
      justifyContent="space-between"
    >
      <Icon name="shopping-cart" color="green" size={Size.ICON_SMALL} />
      <Text variant={"primary"} color="green">
        {item.name}
      </Text>
    </Column>
  );
};
