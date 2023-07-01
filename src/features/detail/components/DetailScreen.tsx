import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import { useTheme } from "@shopify/restyle";
import { ScrollView, ToastAndroid } from "react-native";
import { Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setProductsToCars } from "../../publish/publishSlice";
import { Box, Column, MainScreen, Row, Text, TouchableOpacity } from "_shared";
import { Size, Theme } from "_theme";
import { cartScreenNavigationType } from "../types";
import { useState } from "react";
import { StackParamList } from "_navigations/Types";
import { RootState } from "_store";
import { SpeakText } from "_utils";

type PropsProduct = {
  id: number;
  nom: "string";
  description: "string";
  image: string;
  prix: number;
  number: number;
  categorie: number;
  user: number;
  is_finished: boolean;
};

export default function DetailScreen() {
  const theme = useTheme<Theme>();
  const colors = theme.colors;
  const navigation = useNavigation<cartScreenNavigationType>();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isAddToCart, setAddToCart] = useState(false);
  const route = useRoute<RouteProp<StackParamList, "details_screen">>();
  const idProduct = route.params?.idProduct;
  const productsFromStore = useSelector(
    (state: RootState) => state.search.products,
  ) as PropsProduct[];

  const productToViewDetail = productsFromStore.filter(
    (product) => product.id === idProduct,
  );
  const [isSpeak, setIsSpeak] = useState(false);

  return (
    <MainScreen typeOfScreen="stack">
      <Row justifyContent="space-between" marginHorizontal="s">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-ios"
            size={Size.ICON_SMALL}
            color={colors.primary}
            containerStyle={[styles.icon, { backgroundColor: colors.offWhite }]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("publish_screen")}>
          <Icon
            name="shopping-cart"
            size={Size.ICON_SMALL}
            color={colors.primary}
            containerStyle={[
              styles.icon_cart,
              { backgroundColor: colors.offWhite },
            ]}
          />
        </TouchableOpacity>
      </Row>
      <Box style={{ marginTop: -40, zIndex: -1 }} marginBottom="s">
        <Image
          source={productToViewDetail[0].image}
          style={styles.image_banniere}
        />
      </Box>
      <Column>
        <Row alignItems="center" justifyContent="space-between">
          <Column>
            <Text variant="title" fontWeight="bold">
              {productToViewDetail[0].nom}
            </Text>
            <Box
              backgroundColor="primary"
              style={{ width: 100, marginVertical: 8 }}
              borderRadius="xs"
            >
              <Text
                variant={"secondary"}
                textAlign="center"
                fontWeight="bold"
                color="white"
                paddingVertical={"s"}
              >
                {productToViewDetail[0].prix} Ar
              </Text>
            </Box>
          </Column>
          <Icon
            name={!isSpeak ? "play-circle-filled" : "stop"}
            color={colors.primary}
            size={Size.ICON_MEDIUM}
            onPress={() => {
              SpeakText(true, productToViewDetail[0].description);
            }}
          />
        </Row>
        <ScrollView style={{ height: 200 }}>
          <Text variant="primary" textAlign={"justify"}>
            {productToViewDetail[0].description}
          </Text>
        </ScrollView>
        <Row marginVertical="m" justifyContent="space-between">
          <Row
            alignItems="center"
            justifyContent="space-between"
            style={{ width: 100 }}
          >
            <TouchableOpacity
              onPress={() => {
                if (count === 1) {
                  ToastAndroid.show(
                    `Le nombre minimum que tu peux commander est 1`,
                    ToastAndroid.LONG,
                  );
                  return setCount(1);
                }
                setCount(count - 1);
              }}
            >
              <Icon
                name="remove"
                size={20}
                color={colors.white}
                containerStyle={[
                  styles.icon_footer,
                  { backgroundColor: colors.primary },
                ]}
              />
            </TouchableOpacity>
            <Text variant="bigTitle">{count}</Text>
            <TouchableOpacity
              onPress={() => {
                if (count < productToViewDetail[0].number) {
                  setCount(count + 1);
                } else {
                  ToastAndroid.show(
                    `Le nombre maximum que tu peux commander est ${productToViewDetail[0].number}`,
                    ToastAndroid.LONG,
                  );
                }
              }}
            >
              <Icon
                name="add"
                size={20}
                color={colors.white}
                containerStyle={[
                  styles.icon_footer,
                  { backgroundColor: colors.primary },
                ]}
              />
            </TouchableOpacity>
          </Row>
          <Button
            radius={"xl"}
            type="solid"
            buttonStyle={{
              backgroundColor: colors.primary,
            }}
            loading={isAddToCart}
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
              setAddToCart(true);
              setTimeout(() => {
                dispatch(
                  setProductsToCars({
                    id: idProduct,
                    quantity: count,
                    prixUnity: productToViewDetail[0].prix,
                  }),
                );
                ToastAndroid.show(
                  `Votre commande a été ajouté dans votre panier`,
                  ToastAndroid.LONG,
                );
                setAddToCart(false);
              }, 3000);
            }}
          >
            <Icon
              name="shopping-bag"
              color={colors.white}
              size={Size.ICON_SMALL}
            />
            Ajouter au panier
          </Button>
        </Row>
      </Column>
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
  icon_cart: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 24,
  },
  image_banniere: {
    height: 400,
    borderRadius: 24,
    width: "100%",
  },
  icon_footer: {
    height: 36,
    borderRadius: 18,
    padding: 8,
  },
});
