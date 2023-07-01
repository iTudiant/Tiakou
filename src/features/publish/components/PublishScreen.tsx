import { Image, StyleSheet } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import {
  Box,
  Column,
  Icon,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "_store";
import { Size, Theme } from "_theme";
import { useCallback, useState } from "react";
import { useTheme } from "@shopify/restyle";
import { removeOneCart } from "../publishSlice";
import { achatScreenNavigationType } from "../types";

type PropsProduct = {
  id: number;
  nom: string;
  description: string;
  image: string;
  prix: number;
  categorie: number;
  user: number;
  is_finished: boolean;
  quantity: number;
};

type PropsCart = {
  id: number;
  quantity: number;
  prixUnity: number;
};

export default function PublishScreen() {
  const navigation = useNavigation<achatScreenNavigationType>();
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;
  const dispatch = useDispatch();

  const carts = useSelector(
    (state: RootState) => state.cart.carts,
  ) as PropsCart[];

  const productsFromStore = useSelector(
    (state: RootState) => state.search.products,
  ) as PropsProduct[];

  const [products, setProducts] = useState(
    productsFromStore
      .map((item) => {
        let cartItem = carts.find((cartItem) => {
          return cartItem.id === item.id;
        });

        if (cartItem) {
          return { ...item, quantity: cartItem.quantity };
        } else {
          return { ...item, quantity: 0 };
        }
      })
      .filter((product) => {
        return carts.some((cart) => cart.id === product.id);
      }),
  );

  const calculateTotalPrice = (cart: PropsCart[]) => {
    if (!cart) {
      return;
    }
    let prixTotal = 0;
    let totalPerProduct = cart.map((item) => {
      return item.quantity * item.prixUnity;
    });
    if (totalPerProduct.length > 0) {
      prixTotal = totalPerProduct.reduce((acc, curr) => {
        return acc + curr;
      });
    }

    return prixTotal;
  };

  const calculateTotalNumber = (cart: PropsCart[]) => {
    if (cart.length === 0) {
      return;
    }

    let numberTotal = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return numberTotal;
  };

  const handleRemoveOneCart = (id: number) => {
    dispatch(removeOneCart(id));
    setProducts((prevList) => prevList.filter((item) => item.id !== id));
  };

  useFocusEffect(
    useCallback(() => {
      console.log("ato oooo");
      setProducts(
        productsFromStore
          .map((item) => {
            let cartItem = carts.find((cartItem) => {
              return cartItem.id === item.id;
            });

            if (cartItem) {
              return { ...item, quantity: cartItem.quantity };
            } else {
              return { ...item, quantity: 0 };
            }
          })
          .filter((product) => {
            return carts.some((cart) => cart.id === product.id);
          }),
      );
    }, [productsFromStore, carts]),
  );

  const renderItemProduct: ListRenderItem<PropsProduct> = useCallback(
    ({ item }) => {
      return (
        <Box
          key={item.id}
          borderRadius="sm"
          backgroundColor={"white"}
          marginBottom="s"
          style={styles.card_shadow}
        >
          <Image
            source={item.image}
            style={{
              height: 60,
              width: "100%",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              resizeMode: "cover",
            }}
          />
          <Row
            alignItems="center"
            justifyContent="space-between"
            marginVertical="s"
            marginHorizontal="m"
          >
            <Column>
              <Text variant="primary" fontWeight={"bold"} color="primary">
                {item.nom}
              </Text>
              <Text variant={"title"} fontWeight={"bold"}>
                {item.prix} x {item.quantity}
              </Text>
            </Column>
            <Column>
              <TouchableOpacity onPress={() => handleRemoveOneCart(item.id)}>
                <Icon
                  name="delete"
                  color={colors.primary}
                  size={Size.ICON_SMALL}
                />
              </TouchableOpacity>
              <Text variant="primary" color={"secondary"} fontWeight={"bold"}>
                {item.prix * item.quantity} Ar
              </Text>
            </Column>
          </Row>
        </Box>
      );
    },
    [],
  );

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Panier">
      <Box flex={1}>
        <FlashList
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={60}
          data={products}
          extraData={products}
          renderItem={renderItemProduct}
          ListFooterComponent={
            <Column>
              <Box
                backgroundColor={"primary"}
                paddingHorizontal="s"
                height={120}
                borderRadius="sm"
                justifyContent="space-around"
              >
                <Row justifyContent="space-between">
                  <Text variant={"primaryBold"} color="white">
                    Prix total :
                  </Text>
                  <Text variant="primaryBold" color="white">
                    {carts.length > 0 ? calculateTotalPrice(carts) : 0} Ar
                  </Text>
                </Row>
                <Row justifyContent="space-between">
                  <Text variant="primaryBold" color="white">
                    Quantité total des produits :
                  </Text>
                  <Text variant="primaryBold" color="white">
                    {carts.length > 0 ? calculateTotalNumber(carts) : 0}
                  </Text>
                </Row>
              </Box>
              {products.length > 0 && (
                <Row marginVertical="s" justifyContent="space-between">
                  <Box
                    backgroundColor="white"
                    style={[
                      styles.card_shadow_payment,
                      {
                        height: 80,
                        width: "45%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 16,
                      },
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("achat_screen")}
                    >
                      <Image
                        source={require("_images/orangeMoney.png")}
                        style={styles.image_payment}
                      />
                    </TouchableOpacity>
                  </Box>

                  <Box
                    backgroundColor="white"
                    style={[
                      styles.card_shadow_payment,
                      {
                        height: 80,
                        width: "45%",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 16,
                      },
                    ]}
                  >
                    <Image
                      source={require("_images/paypal.png")}
                      style={styles.image_payment}
                    />
                  </Box>
                </Row>
              )}
            </Column>
          }
        />
      </Box>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  card_shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
  card_shadow_payment: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 4,
  },
  image_payment: {
    height: 50,
    width: 130,
  },
});
