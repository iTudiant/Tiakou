import Voice, { SpeechErrorEvent } from "@react-native-voice/voice";
import { useState } from "react";
import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { VoiceResults } from "./types";

export const useSpeechToText = () => {
  /*function andd hook for speech-to-text*/
  let [isStartRecord, setIsStartRecord] = useState(false);
  let [textFromSpeech, setTextFromSpeech] = useState("");

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    if (await Voice.isAvailable()) {
      await Voice.start("fr-FR");
      setIsStartRecord(true);
    }

    if (!Voice.isAvailable()) {
      ToastAndroid.show(
        "Votre téléphone ne prends pas en compte les vocaux",
        ToastAndroid.LONG,
      );
    }
  };

  const stopSpeechToText = async () => {
    await Voice.stop();
    setIsStartRecord(false);
  };

  const onSpeechResults = (result: VoiceResults) => {
    if (result && result.value && result.value.length > 0) {
      setTextFromSpeech(result.value[0]);
    }
  };

  const onSpeechError = ({ error }: SpeechErrorEvent) => {
    console.log("error speech to text : ", error);
  };

  return { isStartRecord, textFromSpeech, startSpeechToText, stopSpeechToText };
};
