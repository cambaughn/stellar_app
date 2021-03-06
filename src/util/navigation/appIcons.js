// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../design/colors';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'home': [25, colors.midGrey],
  'search': [25, colors.midGrey],
  'user': [25, colors.midGrey],
  'cog': [20, colors.midGrey],


  // Use other Icon provider, see the logic at L39
  'facebook': [30, '#bbb', FontAwesome],
  'facebook--active': [30, '#fff', FontAwesome],
}

const defaultIconProvider = FontAwesome;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

    // Call resolve (and we are done)
    resolve(true);
  })
});

export { iconsMap, iconsLoaded };
