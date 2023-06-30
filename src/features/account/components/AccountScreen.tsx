import { Alert, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import {
  Image,
  MainScreen,
  Row,
  Text,
  Column,
  Icon,
  TouchableOpacity,
  CheckUserConnected,
} from "_shared";
import { Size, Theme } from "_theme";
import VersionCheck from "../../version/VersionCheck";
import { AllMenu } from "./AllMenu";
import { useState } from "react";

export default function AccountScreen() {
  //const navigation = useNavigation<>();
  const theme = useTheme<Theme>();
  const { borderRadii, colors } = theme;
  const [isUserConnected, setIsUserConnected] = useState(true);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MainScreen
        typeOfScreen="tab"
        titleTabScreen={isUserConnected ? "Menu" : "Votre profil"}
      >
        <CheckUserConnected
          loggedIn={() => setIsUserConnected(true)}
          isUserLogged={isUserConnected}
          subTitleIfNotConnected="Connectez-vous pour explorer notre produit"
        >
          {/**Profil */}
          <TouchableOpacity onPress={() => Alert.alert("Affichage du profile")}>
            <Row
              borderBottomWidth={2}
              paddingBottom="s"
              marginTop="s"
              borderColor="offWhite"
              marginBottom="m"
            >
              <Image
                source={require("_images/Tiakou_logo.png")}
                style={{
                  width: Size.IMAGE_SMALL,
                  height: Size.IMAGE_SMALL,
                  borderRadius: borderRadii.lg,
                }}
              />
              <Column paddingHorizontal="s" flex={2}>
                <Text variant="title">Dama</Text>
                <Text variant="secondary">Afficher le profil</Text>
              </Column>
              <Icon
                name="chevron-right"
                size={Size.ICON_LARGE}
                color={colors.black}
              />
            </Row>
          </TouchableOpacity>

          <AllMenu loggedOut={() => setIsUserConnected(false)} />
          <VersionCheck />
        </CheckUserConnected>
      </MainScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
