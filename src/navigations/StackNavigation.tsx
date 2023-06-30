//IMPORT FROM NODE_MODULES
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//LOCAL IMPORT
import { stackNavigationConfig } from "./configStack";
import { StackParamList } from "./Types";

//IMPORT NAVIGATION TAB
import TabNavigation from "./TabNavigation";

//IMPORT SCREEN
import { DetailBook } from "_features";

const Stack = createStackNavigator<StackParamList>();

const StackNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"main_tabs"}>

        <Stack.Group screenOptions={stackNavigationConfig.screenOptionsForHiddenHeader}>
          <Stack.Screen name={"main_tabs"} component={TabNavigation} />
        </Stack.Group>

        <Stack.Group
          screenOptions={stackNavigationConfig.screenOptionsForDisplayedHeader}
        >
          <Stack.Screen name={"details_book"} component={DetailBook} options={{title: "Details"}} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
