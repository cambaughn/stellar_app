import { post } from './getPostMethods';


const postAnswer = (answer, callback) => {
  post('/answers/new', answer, callback);
}


export { postAnswer };
