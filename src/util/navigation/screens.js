
import { Navigation } from 'react-native-navigation';

import HomeContainer from '../../components/Home/HomeContainer';
import Search from '../../components/Search/Search';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('stellar.Home', () => HomeContainer, store, Provider);
  Navigation.registerComponent('stellar.Search', () => Search, store, Provider);
}





export { registerScreens };
