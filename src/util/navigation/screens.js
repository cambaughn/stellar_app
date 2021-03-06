
import { Navigation } from 'react-native-navigation';

import HomeContainer from '../../components/Home/HomeContainer';
import SearchContainer from '../../components/Search/SearchContainer';
import SearchBarContainer from '../../components/Search/SearchBarContainer';
import UserProfileContainer from '../../components/User/UserProfileContainer';
import Settings from '../../components/Settings/Settings';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('stellar.Home', () => HomeContainer, store, Provider);
  Navigation.registerComponent('stellar.Search', () => SearchContainer, store, Provider);
  Navigation.registerComponent('stellar.UserProfile', () => UserProfileContainer, store, Provider);
  Navigation.registerComponent('stellar.Settings', () => Settings, store, Provider);
  Navigation.registerComponent('stellar.SearchBar', () => SearchBarContainer, store, Provider);
}





export { registerScreens };
