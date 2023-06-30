import { Button, Row, Text, TouchableOpacity } from "_shared";
import { Size, Theme } from "_theme";
import { UnitItemSectionLink } from "./UnitItemSectionLink";
import { Alert } from "react-native";
import { useTheme } from "@shopify/restyle";

type Props = {
  loggedOut?: () => void;
};

export const AllMenu = ({ loggedOut }: Props) => {
  return (
    <>
      {/**Actions */}
      <Row marginVertical="s">
        <Text variant="bigTitle">Paramètres</Text>
      </Row>
      <UnitItemSectionLink
        iconLeft="shopping-bag"
        label="Mes achats"
        onPress={() => Alert.alert("Menu cliqué!")}
      />
      <UnitItemSectionLink
        iconLeft="person-outline"
        label="Informations personnelles"
        onPress={() => Alert.alert("Menu cliqué!")}
      />

      {/**Assistance */}
      <Row marginTop="m">
        <Text variant="bigTitle">Assistance</Text>
      </Row>

      <UnitItemSectionLink
        iconLeft="help"
        label="Centre d'aide"
        onPress={() => Alert.alert("Menu cliqué!")}
      />
      <Row marginTop="l">
        <TouchableOpacity onPress={loggedOut}>
          <Text variant="link">Deconnexion</Text>
        </TouchableOpacity>
      </Row>
    </>
  );
};
