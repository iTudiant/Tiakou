import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigations/Types";

/*Slice*/

export type SearchState = {
  categories: object[];
  influencys: object[];
  products: object[];
};

export type detailsScreenNavigationType = StackNavigationProp<
  StackParamList,
  "details_screen"
>;
