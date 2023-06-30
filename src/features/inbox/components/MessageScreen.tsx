import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, MainScreen, Text } from "_shared";

export default function MessageScreen() {
  //const navigation = useNavigation<>();

  return (
    <MainScreen typeOfScreen="stack">
      <Text variant="secondary">Message </Text>
      <Text variant="tertiary">Show message book</Text>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
