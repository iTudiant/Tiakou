import "expo-dev-client";
import { useState } from "react";
import { ThemeProvider, useTheme } from "@shopify/restyle";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StackNavigation } from "_navigations";
import { theme, darkTheme } from "_theme";
import { StatusBar } from "react-native";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={theme.colors.primary} />
        <StackNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
