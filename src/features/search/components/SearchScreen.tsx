import { FAB, Input } from "@rneui/themed";
import { useTheme } from "@shopify/restyle";
import { Alert, Pressable, StyleSheet } from "react-native";
import {
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

export default function SearchScreen() {
  const theme = useTheme<Theme>();
  const { colors, sizes } = theme;
  const { isStartRecord, textFromSpeech, startSpeechToText, stopSpeechToText } =
    useSpeechToText();
  const dispatch = useDispatch();

  const valueSearch = useSelector((state: RootState) => state.search.listGoodies)
  return (
    <MainScreen typeOfScreen="tab">
      <TouchableOpacity onPress={() => Alert.alert("touché")}>
        <Row alignItems="flex-end">
          <Input placeholder="Rechercher" containerStyle={[{
            width: "80%",
            backgroundColor: colors.offWhite,
          }, styles.container_input]} />
          
          {!isStartRecord ? (
            <Icon
              name="mic"
              size={Size.ICON_SMALL}
              containerStyle={[styles.icon, {backgroundColor: colors.primary}]}
              color={colors.white}
              onPress={startSpeechToText}
            />
          ) : null}
          {isStartRecord ? (
            <Icon
              name="stop"
              size={Size.ICON_SMALL}
              containerStyle={[styles.icon, {backgroundColor: colors.primary}]}
              color={colors.white}
              onPress={stopSpeechToText}
            />
          ) : null}
        </Row>
        <Row>
          {textFromSpeech && (
            <Text variant={"primary"}>
              Vous avez prononcé : {textFromSpeech}
            </Text>
          )}
        </Row>
        <Row>
          <Text> goodies : {valueSearch}</Text>
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
  container_input: {
    borderRadius: 16,
    paddingHorizontal: '3%',
  },
  icon: {
    borderRadius: 8,
    padding: "5%"
  }
});
