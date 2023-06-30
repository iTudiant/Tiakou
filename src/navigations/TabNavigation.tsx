//IMPORT FROM NODE_MODULES
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//LOCAL IMPORT
import { TabParamList } from "./Types";
import { Icon } from "_shared";
import { useTheme } from "@shopify/restyle";
import { Theme } from "_theme";
import {
  AccountScreen,
  FavoriteScreen,
  InboxScreen,
  PublishScreen,
  SearchScreen,
} from "_features";

const Tab = createBottomTabNavigator<TabParamList>();

//types
interface TabRouteTypes {
  name: keyof TabParamList;
  component: React.FC<unknown>;
  tabLabel: string;
  icon: string;
}

//routes
const TABROUTES: TabRouteTypes[] = [
  {
    name: "search_screen",
    component: SearchScreen,
    tabLabel: "Recherche",
    icon: "search",
  },
  {
    name: "favorite_screen",
    component: FavoriteScreen,
    tabLabel: "Favoris",
    icon: "favorite-border",
  },
  {
    name: "publish_screen",
    component: PublishScreen,
    tabLabel: "Publier",
    icon: "public",
  },
  {
    name: "inbox_screen",
    component: InboxScreen,
    tabLabel: "Boite de réception",
    icon: "chat-bubble-outline",
  },
  {
    name: "account_screen",
    component: AccountScreen,
    tabLabel: "Menu",
    icon: "person-outline",
  },
];

const TabNavigation = () => {
  const theme = useTheme<Theme>();
  const { primary, mainForeground, mainBackground } = theme.colors;
  return (
    <Tab.Navigator
      initialRouteName="search_screen"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: [{ backgroundColor: mainBackground }],
      }}
    >
      {TABROUTES.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            title: route.tabLabel,
            tabBarActiveTintColor: primary,
            tabBarInactiveTintColor: mainForeground,
            /*tabBarLabel: ({ focused }) =>
              focused ? (
                <Text style={{ color: "white" }}>{route.tabLabel}</Text>
              ) : (
                ""
              ),*/
            tabBarIcon: ({ focused, color }) => (
              <Icon name={route.icon} color={color} size={focused ? 32 : 22} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
