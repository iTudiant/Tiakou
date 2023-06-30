import "expo-dev-client";
import { useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigation } from "_navigations";
import { theme } from "_theme";
import { StatusBar } from "react-native";
import { store } from '_store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={theme.colors.primary} />
        <StackNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
