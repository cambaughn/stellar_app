
import { Navigation } from 'react-native-navigation';

import Home from '../../components/Home/Home';


const registerScreens = (store, Provider) => {
  Navigation.registerComponent('stellar.Home', () => Home, store, Provider);
}





export { registerScreens };
