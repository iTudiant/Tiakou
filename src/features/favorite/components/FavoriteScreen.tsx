import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { detailScreenNavigationType } from "../types/navigationTypes";
import { Icon, MainScreen, Text, TouchableOpacity } from "_shared";

export default function FavoriteScreen() {
  const navigation = useNavigation<detailScreenNavigationType>();

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Favoris">
      <Text variant="secondary">Tous vos favoris seront ici</Text>
      <TouchableOpacity
        style={{ display: "flex", flexDirection: "row" }}
        onPress={() => {
          navigation.navigate("details_book");
        }}
      >
        <Icon name="favorite" size={24} color="red" raised />
      </TouchableOpacity>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
