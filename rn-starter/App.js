import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import TextScreen from './src/screens/TextScreen';
import MarriageWelcomeScreen from "./src/screens/MarriageWelcomeScreen";
import CreateMarriagePlayersScreen from "./src/screens/CreateMarriagePlayersScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Text: TextScreen,
    MarriageWelcome: MarriageWelcomeScreen,
    CreateMarriagePlayers: CreateMarriagePlayersScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Card Point Counter"
    }
  }
);

export default createAppContainer(navigator);
