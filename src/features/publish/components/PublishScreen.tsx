import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Column, Icon, MainScreen, Row, Text } from "_shared";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { useSelector } from "react-redux";
import { RootState } from "_store";

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

export default function PublishScreen() {
  //const navigation = useNavigation<>();

  const carts = useSelector(
    (state: RootState) => state.cart.carts,
  ) as PropsProduct[];

  const renderItemProduct: ListRenderItem<PropsProduct> = ({ item }) => {
    return (
      <Box
        key={item.id}
        borderRadius="sm"
        backgroundColor={"white"}
        marginBottom="s"
        style={styles.card_cart}
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
              {item.prix} x2
            </Text>
          </Column>
          <Text variant="primary" color={"secondary"} fontWeight={"bold"}>
            10000 Ar
          </Text>
        </Row>
      </Box>
    );
  };

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Panier">
      <Box flex={1}>
        <FlashList
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={60}
          data={carts}
          renderItem={renderItemProduct}
        />
      </Box>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  card_cart: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
