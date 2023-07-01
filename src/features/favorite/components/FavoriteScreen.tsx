import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { listingScreenNavigationType } from "../types/navigationTypes";
import {
  Box,
  Column,
  Icon,
  Image,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { useTheme } from "@shopify/restyle";
import { Size, Theme } from "_theme";
import { RootState } from "_store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setFavorites } from "../favoriteSlice";

type PropsProduct = {
  id: number;
  nom: "string";
  description: "string";
  image: string;
  prix: number;
  categorie: number;
  user: number;
  is_finished: boolean;
};

type productsFavorites = {
  id: number;
  nom: "string";
  description: "string";
  image: string;
  prix: number;
  categorie: number;
  user: number;
  is_finished: boolean;
  isFavorite: boolean;
};

export default function FavoriteScreen() {
  const navigation = useNavigation<listingScreenNavigationType>();
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;

  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  ) as number[];

  const productsFromStore = useSelector(
    (state: RootState) => state.search.products,
  ) as PropsProduct[];

  const productsFavorites = productsFromStore.filter((product) =>
    favorites.includes(product.id),
  ) as unknown as productsFavorites[];

  const UnitProduct: ListRenderItem<productsFavorites> = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("details_screen")}>
        <Box
          key={item.id}
          style={{ width: 180 }}
          marginVertical="m"
          borderRadius="sm"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Row style={{ marginLeft: 120 }}>
            <TouchableOpacity onPress={() => dispatch(setFavorites(item.id))}>
              <Icon
                name={"favorite"}
                color={colors.primary}
                size={Size.ICON_MEDIUM}
              />
            </TouchableOpacity>
          </Row>
          <Row style={{ marginTop: -38, zIndex: -1 }}>
            <Image source={item.image} style={styles.image} />
          </Row>
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
            <Text variant={"primary"} color="black">
              {item.nom}
            </Text>
            <Text variant={"title"} color="primary" fontWeight={"bold"}>
              {item.prix}
            </Text>
          </Column>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Favoris">
      {/**product */}
      <Box style={{ flex: 1 }}>
        <FlashList
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={60}
          data={productsFavorites}
          renderItem={UnitProduct}
          numColumns={2}
          ListEmptyComponent={
            <Box alignItems={"center"} justifyContent="center">
              <Text variant="bigTitle" color={"primary"} fontWeight="bold">
                Vous n'avez rien dans votre favoris
              </Text>
            </Box>
          }
        />
      </Box>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 170,
    width: 170,
    borderRadius: 16,
  },
});
