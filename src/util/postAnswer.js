import { postMedia, baseUrl } from './getPostMethods';
import { NativeModules } from 'react-native';

let RNUploader = NativeModules.RNUploader;

const postAnswer = (video, questionId, callback) => {

  let path = video.path;

  let files = [
		{
			name: 'answer',
			filename: 'video1.mov',
			filepath: path,  // video from camera roll/assets library or memory
      filetype: 'video/mov',
		},
	];



	let options = {
		url: `${baseUrl}/answer/new`,
		files: files,
		method: 'POST',                             // optional: POST or PUT
		// headers: { 'Accept': 'application/json' },  // optional
		params: { 'questionId': questionId },                   // optional
	};

	RNUploader.upload( options, (err, response) => {
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
