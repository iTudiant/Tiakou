import { FAB } from "@rneui/themed";
import { useTheme } from "@shopify/restyle";
import { Alert, Pressable, StyleSheet } from "react-native";
import {
  Button,
  Column,
  Icon,
  Input,
  MainScreen,
  Row,
  Text,
  TouchableOpacity,
} from "_shared";
import { Size, Theme } from "_theme";
import { SpeakText } from "_utils";
import { useSpeechToText } from "_hooks";

export default function SearchScreen() {
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;
  const { isStartRecord, textFromSpeech, startSpeechToText, stopSpeechToText } =
    useSpeechToText();

  return (
    <MainScreen typeOfScreen="tab">
      <TouchableOpacity onPress={() => Alert.alert("touché")}>
        <Row alignItems="center" style={styles.card_shadow}>
          {!isStartRecord ? (
            <Icon
              name="mic"
              size={Size.ICON_SMALL}
              color={colors.primary}
              onPress={startSpeechToText}
            />
          ) : null}
          {isStartRecord ? (
            <Icon
              name="stop"
              size={Size.ICON_SMALL}
              color={colors.primary}
              onPress={stopSpeechToText}
            />
          ) : null}
          <Column flex={2} marginHorizontal="xs">
            <Text variant={"primaryBold"}>Destination</Text>
            <Text variant={"tertiary"}>
              N'importe où * faite vos recherches
            </Text>
          </Column>
          <Pressable
            onPress={() => console.log("tay ohh")}
            style={{
              borderWidth: 1,
              borderRadius: 20,
              borderColor: colors.offWhite,
              padding: 4,
            }}
          >
            <Icon name="tune" size={Size.ICON_SMALL} color={colors.primary} />
          </Pressable>
        </Row>
        <Row>
          {textFromSpeech && (
            <Text variant={"primary"}>
              Vous avez prononcé : {textFromSpeech}
            </Text>
          )}
        </Row>
      </TouchableOpacity>
      <FAB
        visible={true}
        onPress={() => SpeakText(true, "Bonjour")}
        placement="right"
        icon={{ name: "play-arrow", color: "white" }}
        color={colors.primary}
      />
    </MainScreen>
  );
}

const styles = StyleSheet.create({
  card_shadow: {
    padding: "3%",
    marginBottom: "4%",
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 5,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
