//IMPORT FROM NODE_MODULES
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider, useTheme } from "@shopify/restyle";

//LOCAL IMPORT
import { stackNavigationConfig } from "./configStack";
import { StackParamList } from "./Types";
import { theme, darkTheme } from "_theme";

//IMPORT NAVIGATION TAB
import TabNavigation from "./TabNavigation";

//IMPORT SCREEN
import { ListingScreen } from "_features";
import { useSelector } from "react-redux";
import { RootState } from "_store";

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {

  const isDarkMode = useSelector((state: RootState) => state.functionnality.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"main_tabs"}>

        <Stack.Group screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}>
          <Stack.Screen name={"main_tabs"} component={TabNavigation} />
        </Stack.Group>

        <Stack.Group
          screenOptions={stackNavigationConfig.screenOptionsForDisplayedHeader}
        >
          <Stack.Screen name={"listing_screen"} component={ListingScreen} options={{title: "Details"}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default StackNavigation;
