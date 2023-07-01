import { FAB } from "@rneui/themed";
import { useTheme } from "@shopify/restyle";
import { Alert, Image, Pressable, StyleSheet, TextInput } from "react-native";
import {
  Box,
  Button,
  Column,
  Icon,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { Size, Theme } from "_theme";
import { SpeakText } from "_utils";
import { useSpeechToText } from "_hooks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "_store";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { UnitCategorie } from "./UnitCategorie";
import { UnitInfluency } from "./UnitInfluency";
import { detailsScreenNavigationType } from "../types";
import { useNavigation } from "@react-navigation/native";

type PropsFIlter = {
  id: number;
  nom: "string";
  description: "string";
};

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

export default function SearchScreen() {
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;
  const { isStartRecord, textFromSpeech, startSpeechToText, stopSpeechToText } =
    useSpeechToText();
  const dispatch = useDispatch();
  const navigation = useNavigation<detailsScreenNavigationType>();

  const categories = useSelector(
    (state: RootState) => state.search.categories,
  ) as PropsFIlter[];

  const influencys = useSelector(
    (state: RootState) => state.search.influencys,
  ) as PropsFIlter[];

  const products = useSelector(
    (state: RootState) => state.search.products,
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
              name="favorite-outline"
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
    <MainScreen typeOfScreen="tab">
      {/**Header */}
      <Row alignItems="center" justifyContent="space-between" marginBottom="m">
        <Column>
          <Text variant={"headerNavigation"} color="primary">
            Bonjour,
          </Text>
          <Text variant="title">Bienvenu sur Tiakou</Text>
        </Column>
        <Icon name="wb-sunny" color="black" size={Size.ICON_MEDIUM} />
      </Row>

      {/**Recherche row */}
      <Row
        alignItems="flex-end"
        justifyContent="space-between"
        marginBottom="s"
      >
        <TextInput
          placeholder="Rechercher"
          style={[
            {
              backgroundColor: colors.offWhite,
            },
            styles.container_input,
          ]}
        />

        {!isStartRecord ? (
          <Icon
            name="mic"
            size={Size.ICON_SMALL}
            containerStyle={[styles.icon, { backgroundColor: colors.primary }]}
            color={colors.white}
            onPress={startSpeechToText}
          />
        ) : null}
        {isStartRecord ? (
          <Icon
            name="stop"
            size={Size.ICON_SMALL}
            containerStyle={[styles.icon, { backgroundColor: colors.primary }]}
            color={colors.white}
            onPress={stopSpeechToText}
          />
        ) : null}
      </Row>

      {/**Filter product */}
      <Box style={{ height: 100 }} marginBottom="s">
        <FlashList
          keyExtractor={(item, index) => item.id.toString()}
          estimatedItemSize={60}
          data={categories}
          renderItem={UnitCategorie}
          horizontal={true}
        />
      </Box>

      {/**Filter influenceur */}
      <Box style={{ height: 50 }} marginBottom="s">
        <FlashList
          keyExtractor={(item, index) => item.id.toString()}
          estimatedItemSize={60}
          data={influencys}
          renderItem={UnitInfluency}
          horizontal={true}
        />
      </Box>

      {/**product */}
      <Box style={{ flex: 1 }}>
        <FlashList
          keyExtractor={(item) => item.id.toString()}
          estimatedItemSize={60}
          data={products}
          renderItem={UnitProduct}
          numColumns={2}
        />
      </Box>
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  container_input: {
    borderRadius: 8,
    paddingHorizontal: "3%",
    width: "80%",
    paddingVertical: "5%",
    fontSize: 24,
  },
  icon: {
    borderRadius: 8,
    padding: "5%",
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 16,
  },
});
