import * as Speech from "expo-speech";

export const SpeakText = (isPlaySpeech: boolean, txtToSpeak: string) => {
  if (!isPlaySpeech) {
    return Speech.stop();
  }
  Speech.speak(txtToSpeak);
};