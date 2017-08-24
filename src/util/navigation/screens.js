
import { Navigation } from 'react-native-navigation';

import Home from '../../components/Home/Home';
import Search from '../../components/Search/Search';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('stellar.Home', () => Home, store, Provider);
  Navigation.registerComponent('stellar.Search', () => Search, store, Provider);
}





export { registerScreens };
