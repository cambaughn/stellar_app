import { post } from './getPostMethods';
let RNFS = require('react-native-fs');

const postAnswer = (video, callback) => {
  // console.log(video.path)
  RNFS.readFile(video.path, 'base64')
    .then(video => {
      post('/answers/new', {text: 'SENDING VIDEO'}, callback);
      console.log('wooooohooo')
    })
  // post('/answers/new', video, callback);
}


export { postAnswer };
