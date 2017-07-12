import { postMedia, baseUrl } from './getPostMethods';
import { NativeModules } from 'react-native';

let RNFS = require('react-native-fs');
let RNUploader = NativeModules.RNUploader;

const postAnswer = (video, callback) => {
  // console.log(video.path)

  let path = video.path;

  let files = [
		{
			name: 'answer',
			filename: 'video1',
			filepath: path,  // image from camera roll/assets library
		},
	];



	let opts = {
		url: `${baseUrl}/answers/new`,
		files: files,
		method: 'POST',                             // optional: POST or PUT
		// headers: { 'Accept': 'application/json' },  // optional
		// params: { 'user_id': 1 },                   // optional
	};

	RNUploader.upload( opts, (err, response) => {
		if( err ){
			console.log(err);
			return;
		}

		let status = response.status;
		let responseString = response.data;
		let json = JSON.parse( responseString );

		console.log('upload complete with status ' + status);
	});

  // RNFS.readFile(video.path, 'base64')
  //   .then(video => {
  //     postMedia('/answers/new', {answer: 'Here is some text to save to a file'}, callback);
  //   })
  // post('/answers/new', video, callback);
}


export { postAnswer };
