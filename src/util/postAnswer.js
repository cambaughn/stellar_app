import { postMedia } from './getPostMethods';
let RNFS = require('react-native-fs');

const postAnswer = (video, callback) => {
  // console.log(video.path)

  let path = video.path;
  RNFS.readFile(video.path, 'base64')
    .then(video => {
      postMedia('/answers/new', {answer: 'Here is some text to save to a file'}, callback);
    })
  // post('/answers/new', video, callback);
}


export { postAnswer };
