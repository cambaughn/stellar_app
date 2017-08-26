
import { Navigation } from 'react-native-navigation';

import HomeContainer from '../../components/Home/HomeContainer';
import SearchContainer from '../../components/Search/SearchContainer';
import UserProfileContainer from '../../components/User/UserProfileContainer';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('stellar.Home', () => HomeContainer, store, Provider);
  Navigation.registerComponent('stellar.Search', () => SearchContainer, store, Provider);
  Navigation.registerComponent('stellar.UserProfile', () => UserProfileContainer, store, Provider);
}





export { registerScreens };
