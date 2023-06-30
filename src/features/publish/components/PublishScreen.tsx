import { Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Column, Icon, MainScreen, Row, Text } from "_shared";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { useSelector } from "react-redux";
import { RootState } from "_store";
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
                    120 000 Ar
                  </Text>
                </Row>
                <Row justifyContent="space-between">
                  <Text variant="primaryBold" color="white">
                    Quantité total des produits :
                  </Text>
                  <Text variant="primaryBold" color="white">
                    12
                  </Text>
                </Row>
              </Box>
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
                  <Image
                    source={require("_images/mug.jpg")}
                    style={styles.image_payment}
                  />
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
                    source={require("_images/mug.jpg")}
                    style={styles.image_payment}
                  />
                </Box>
              </Row>
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
    backgroundColor: "red",
    height: 50,
    width: 130,
  },
});
