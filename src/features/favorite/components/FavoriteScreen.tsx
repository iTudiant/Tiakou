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
import { useSelector } from "react-redux";

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

export default function FavoriteScreen() {
  const navigation = useNavigation<listingScreenNavigationType>();
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  ) as PropsProduct[];

  const UnitProduct: ListRenderItem<PropsProduct> = ({ item }) => {
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
            <Icon
              name="favorite"
              color={colors.primary}
              size={Size.ICON_MEDIUM}
            />
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
          data={favorites}
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
