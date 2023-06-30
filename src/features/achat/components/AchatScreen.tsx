import { Button, Icon, Input } from "@rneui/themed";
import { useTheme } from "@shopify/restyle";
import { ScrollView } from "react-native";
import { Image, StyleSheet } from "react-native";
import { Box, Column, MainScreen, Row, Text, TouchableOpacity } from "_shared";
import { Size, Theme } from "_theme";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ToastAndroid } from "react-native";

export default function AchatScreen() {
  const theme = useTheme<Theme>();
  const colors = theme.colors;
  const navigation = useNavigation();
  const [isPay, setIsPay] = useState(false);

  const payMyCart = () => {
    setTimeout(() => {
      setIsPay(false);
      ToastAndroid.show(
        "Votre commande a été payé avec succès",
        ToastAndroid.LONG,
      );
    }, 5000);
  };

  return (
    <MainScreen typeOfScreen="stack">
      <ScrollView style={{ flex: 1 }}>
        <Row>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-ios"
              size={Size.ICON_SMALL}
              color={colors.primary}
              containerStyle={[
                styles.icon,
                { backgroundColor: colors.offWhite },
              ]}
            />
          </TouchableOpacity>
        </Row>
        <Image
          source={require("_images/mug.jpg")}
          style={styles.banniere_orange}
        />
        <Text
          variant={"bigTitle"}
          color="primary"
          textAlign={"center"}
          marginBottom="s"
        >
          Votre payment se fait via Orange Money
        </Text>
        <Input
          placeholder="Votre numéro téléphone ici ..."
          style={{ fontSize: 24 }}
          errorMessage="0/10"
          errorStyle={{ color: colors.black }}
        />
        <Box
          paddingVertical={"s"}
          paddingHorizontal="s"
          backgroundColor={"offWhite"}
          borderRadius="sm"
          marginVertical={"s"}
        >
          <Row justifyContent="space-between" marginVertical="s">
            <Text variant="primaryBold" color="primary">
              Montant
            </Text>
            <Text variant="primaryBold" color="black">
              50 000
            </Text>
          </Row>

          <Row justifyContent="space-between" marginVertical="s">
            <Text variant="primaryBold" color="primary">
              Devise
            </Text>
            <Text variant="primaryBold" color="black">
              Ariary
            </Text>
          </Row>

          <Row justifyContent="space-between" marginVertical="s">
            <Text variant="primaryBold" color="primary">
              Numéro du destinataire
            </Text>
            <Text variant="primaryBold" color="black">
              +261 34 56 484 25
            </Text>
          </Row>

          <Row justifyContent="space-between" marginVertical="s">
            <Text variant="primaryBold" color="primary">
              Nom du destinataire
            </Text>
            <Text variant="primaryBold" color="black">
              Tiakou
            </Text>
          </Row>

          <Row justifyContent="space-between" marginVertical="s">
            <Text variant="primaryBold" color="primary">
              Description
            </Text>
            <Text variant="primaryBold" color="black">
              Achat via OrangeMoney
            </Text>
          </Row>

          <Row justifyContent="space-between" marginVertical="s">
            <Text variant="primaryBold" color="primary">
              Date
            </Text>
            <Text variant="primaryBold" color="black">
              01/06/2023
            </Text>
          </Row>
        </Box>
        <Row justifyContent="center">
          <Button
            radius={"xl"}
            title={"Payer"}
            buttonStyle={{
              backgroundColor: colors.primary,
              paddingVertical: 18,
            }}
            loading={isPay}
            containerStyle={{
              width: 150,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 6,
            }}
            onPress={() => {
              setIsPay(true);
              payMyCart();
            }}
          />
        </Row>
      </ScrollView>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 6,
    borderRadius: 24,
  },
  banniere_orange: {
    marginTop: 30,
    height: 180,
    marginBottom: 18,
    width: "100%",
  },
});
