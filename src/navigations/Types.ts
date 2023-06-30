import { StackNavigationOptions } from "@react-navigation/stack";

export interface StackNavigationConfig {
  screenOptionsForDisplayedHeader: StackNavigationOptions;
  screenOptionsForHiddenHeader: StackNavigationOptions;
}

export type StackParamList = {
  main_tabs: undefined;
  listing_screen: undefined;
  details_screen: undefined;
  achat_screen: undefined;
};

export type TabParamList = {
  search_screen: undefined;
  favorite_screen: undefined;
  publish_screen: undefined;
  inbox_screen: undefined;
  account_screen: undefined;
};

export type TopParamList = {
  message_screen: undefined;
  notification_screen: undefined;
};
