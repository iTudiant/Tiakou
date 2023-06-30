import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon, MainScreen, Text } from "_shared";

export default function NotificationScreen() {
  //const navigation = useNavigation<>();

  return (
    <MainScreen typeOfScreen="topTab">
      <Text variant="primary">Notification </Text>
      <Text variant="secondary">Show notification book</Text>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
