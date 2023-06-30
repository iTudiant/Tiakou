//SCREEN PRINCIPAL
import FavoriteScreen from "./favorite/components/FavoriteScreen";
import SearchScreen from "./search/components/SearchScreen";
import PublishScreen from "./publish/components/PublishScreen";
import MessageScreen from "./inbox/components/MessageScreen";
import NotificationScreen from "./inbox/components/NotificationScreen";
import InboxScreen from "./inbox/components/InboxScreen";
import AccountScreen from "./account/components/AccountScreen";

//COMPONENTS REUSABLE
import ListingScreen from "./listingScreen/components/ListingScreen";


//slice
import searchReducer from "./search/searchSlice";

export {
  //SCREEN PRINCIPAL
  FavoriteScreen,
  SearchScreen,
  PublishScreen,
  InboxScreen,
  NotificationScreen,
  MessageScreen,
  AccountScreen,
  //COMPONENT REUSABLE
  ListingScreen,
};


/*export slice*/
export {
  searchReducer
}