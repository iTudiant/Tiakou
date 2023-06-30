import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, MainScreen, Text } from "_shared";

export default function PublishScreen() {
  //const navigation = useNavigation<>();

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Publication">
      <Text variant="secondary">
        Si vous voulez publier, alors c'est ici...{" "}
      </Text>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
