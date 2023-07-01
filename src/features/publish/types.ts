/*Slice*/

import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "src/navigations/Types";

export type PublishState = {
  carts: Cart[];
};

export type Cart = {
  id: number;
  quantity: number;
  prixUnity: number;
};

export type achatScreenNavigationType = StackNavigationProp<
  StackParamList,
  "achat_screen"
>;
