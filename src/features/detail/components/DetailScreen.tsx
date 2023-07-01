import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/themed";
import { useTheme } from "@shopify/restyle";
import { ScrollView } from "react-native";
import { Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setProductsToCars } from "../../publish/publishSlice";
import { Box, Column, MainScreen, Row, Text, TouchableOpacity } from "_shared";
import { Size, Theme } from "_theme";
import { achatScreenNavigationType } from "../types";
import { useState } from "react";

export default function DetailScreen() {
  const theme = useTheme<Theme>();
  const colors = theme.colors;
  const navigation = useNavigation<achatScreenNavigationType>();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

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
        <Icon
          name="shopping-cart"
          size={Size.ICON_SMALL}
          color={colors.primary}
          containerStyle={[
            styles.icon_cart,
            { backgroundColor: colors.offWhite },
          ]}
        />
      </Row>
      <Box style={{ marginTop: -40, zIndex: -1 }} marginBottom="s">
        <Image
          source={require("_images/pull.jpg")}
          style={styles.image_banniere}
        />
      </Box>
      <Column>
        <Text variant="title" fontWeight="bold">
          Mug Agrad
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
            10 000 Ar
          </Text>
        </Box>
        <ScrollView style={{ height: 200 }}>
          <Text variant="primary" textAlign={"justify"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            modi ducimus dolore excepturi, quo distinctio tempora pariatur nulla
            ipsam in, beatae incidunt accusantium! Culpa, quaerat at! Voluptatem
            labore enim repellendus!
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
            <TouchableOpacity onPress={() => setCount(count + 1)}>
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
            onPress={() =>
              dispatch(
                setProductsToCars({ id: 2, quantity: count, prixUnity: 400 }),
              )
            }
          >
            <Icon
              name="shopping-bag"
              color={colors.white}
              size={Size.ICON_SMALL}
            />
            Acheter
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
