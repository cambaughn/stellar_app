
import { Navigation } from 'react-native-navigation';

import HomeContainer from '../../components/Home/HomeContainer';
import SearchContainer from '../../components/Search/SearchContainer';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('stellar.Home', () => HomeContainer, store, Provider);
  Navigation.registerComponent('stellar.Search', () => SearchContainer, store, Provider);
}





export { registerScreens };
