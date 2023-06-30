import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Box, Icon, MainScreen, Text } from "_shared";
import { FlashList } from "@shopify/flash-list";

export default function PublishScreen() {
  //const navigation = useNavigation<>();

  return (
    <MainScreen typeOfScreen="tab" titleTabScreen="Panier">
      <Box flex={1}>
        <FlashList estimatedItemSize={60} data={} />
      </Box>
    </MainScreen>
  );
}

const styles = StyleSheet.create({});
