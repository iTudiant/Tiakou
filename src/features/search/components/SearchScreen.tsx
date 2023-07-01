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
import { RootState, switchMode } from "_store";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { detailsScreenNavigationType } from "../types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { setFavorites } from "../../../features/favorite/favoriteSlice";

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

type PropsInfluency = {
  id: number;
  nom: "string";
  description: "string";
  choice: boolean;
};

type PropsCategorie = {
  id: number;
  nom: "string";
  description: "string";
  choice: boolean;
};

const filterGlobal = (
  array: Array<productsFavorites>,
  categorie: number | undefined | null,
  influency: number | undefined | null,
  query: string | undefined | null,
) => {
  let res =
    (categorie === null || categorie === undefined) &&
    (influency === null || influency === undefined) &&
    (query === null || query === undefined)
      ? []
      : array;

  if (categorie) {
    res = res.filter((_product) => _product.categorie !== categorie);
  }

  if (influency) {
    res = res.filter((_product) => _product.user === influency);
  }

  if (query) {
    res = res.filter(
      (_product) =>
        _product.nom.toLowerCase().includes(query.toLowerCase()) ||
        _product.description.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return res;
};

export default function SearchScreen() {
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;
  const { isStartRecord, textFromSpeech, startSpeechToText, stopSpeechToText } =
    useSpeechToText();
  const dispatch = useDispatch();
  const navigation = useNavigation<detailsScreenNavigationType>();
  const [valueForSearch, setValueForSearch] = useState("");
  const [catg, setCatg] = useState<number | null>();
  const [influ, setInflu] = useState<number>();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const categoriesFromStore = useSelector(
    (state: RootState) => state.search.categories,
  ) as PropsFIlter[];

  const [categories, setCategories] = useState(
    categoriesFromStore.map((ctg) => {
      return {
        ...ctg,
        choice: false,
      };
    }),
  );

  const influencysFormStore = useSelector(
    (state: RootState) => state.search.influencys,
  ) as PropsFIlter[];

  const [influencys, setInfluencys] = useState(
    influencysFormStore.map((inf) => {
      return {
        ...inf,
        choice: false,
      };
    }),
  );

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
    dispatch(switchMode());
  };

  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites,
  ) as number[];

  const productsFromStore = useSelector(
    (state: RootState) => state.search.products,
  ) as PropsProduct[];

  const [products, setProducts] = useState(
    productsFromStore.map((product) => {
      return {
        ...product,
        isFavorite: favorites.includes(product.id),
      };
    }),
  );

  const handleChooseInfluency = (idInfluency: number) => {
    setInfluencys((prevList) =>
      prevList.map((item) =>
        item.id === idInfluency
          ? { ...item, choice: !item.choice }
          : { ...item, choice: false },
      ),
    );
  };

  const handleChooseCategorie = (idCatg: number) => {
    setCategories((prevList) =>
      prevList.map((item) =>
        item.id === idCatg
          ? { ...item, choice: !item.choice }
          : { ...item, choice: false },
      ),
    );
  };

  const handleToogleFavorite = (id: number) => {
    dispatch(setFavorites(id));
    setProducts((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item,
      ),
    );
  };

  useFocusEffect(
    useCallback(() => {
      setProducts((prevList) =>
        prevList.map((item) => {
          return {
            ...item,
            isFavorite: favorites.includes(item.id),
          };
        }),
      );
    }, [favorites]),
  );

  useEffect(() => {
    setValueForSearch(textFromSpeech);
  }, [textFromSpeech]);

  useEffect(() => {
    if (catg || influ || valueForSearch) {
      setProducts(filterGlobal(products, catg, influ, valueForSearch));
    } else {
      setProducts(
        productsFromStore.map((product) => {
          return {
            ...product,
            isFavorite: favorites.includes(product.id),
          };
        }),
      );
    }
  }, [catg, influ, valueForSearch]);

  const UnitProduct: ListRenderItem<productsFavorites> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("details_screen", { idProduct: item.id })
        }
      >
        <Box
          key={item.id}
          style={{ width: 180 }}
          marginVertical="m"
          borderRadius="sm"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Row style={{ marginLeft: 120 }}>
            <TouchableOpacity onPress={() => handleToogleFavorite(item.id)}>
              <Icon
                name={item.isFavorite ? "favorite" : "favorite-outline"}
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
            <Text variant={"primary"} color="text">
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

  const UnitCategorie: ListRenderItem<PropsCategorie> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.choice) {
            handleChooseCategorie(item.id);
            setCatg(null);
          } else {
            handleChooseCategorie(item.id);
            setCatg(item.id);
          }
        }}
      >
        <Column
          backgroundColor={item.choice ? "green" : "offWhite"}
          key={item.id}
          style={{ height: 100, width: 80 }}
          marginHorizontal="xs"
          paddingVertical="l"
          borderRadius="sm"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Icon
            name="category"
            color={item.choice ? "white" : "green"}
            size={Size.ICON_SMALL}
          />
          <Text variant={"primary"} color={item.choice ? "white" : "black"}>
            {item.nom}
          </Text>
        </Column>
      </TouchableOpacity>
    );
  };

  const UnitInfluency: ListRenderItem<PropsInfluency> = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.choice) {
            handleChooseInfluency(item.id);
            setInflu(null);
          } else {
            handleChooseInfluency(item.id);
            setInflu(item.id);
          }
        }}
      >
        <Row
          backgroundColor={item.choice ? "green" : "offWhite"}
          key={item.id}
          style={{ height: 50, width: 100 }}
          marginHorizontal="xs"
          paddingVertical="l"
          borderRadius="sm"
          alignItems={"center"}
          justifyContent="center"
        >
          <Text
            variant={"primary"}
            color={item.choice ? "white" : "primary"}
            fontWeight={"bold"}
          >
            {item.nom}
          </Text>
        </Row>
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
          <Text variant="title" fontWeight={"bold"} color="text">
            Bienvenu sur Tiakou
          </Text>
        </Column>
        <TouchableOpacity onPress={() => changeMode()}>
          <Icon
            name={isDarkMode ? "nightlight-round" : "wb-sunny"}
            color={isDarkMode ? "white" : "black"}
            size={Size.ICON_MEDIUM}
          />
        </TouchableOpacity>
      </Row>

      {/**Recherche row */}
      <Row
        alignItems="flex-end"
        justifyContent="space-between"
        marginBottom="s"
      >
        <TextInput
          placeholder="Rechercher"
          value={valueForSearch}
          onChangeText={(text) => setValueForSearch(text)}
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
          extraData={categories}
          showsHorizontalScrollIndicator={false}
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
          showsHorizontalScrollIndicator={false}
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
          extraData={products}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={
            <Box alignItems={"center"} justifyContent="center">
              <Text variant="bigTitle" color={"primary"} fontWeight="bold">
                Pas de résultats
              </Text>
            </Box>
          }
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
