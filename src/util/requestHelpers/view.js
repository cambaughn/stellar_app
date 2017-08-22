import { post } from './getPostMethods';

const postQuestion = (answerId, callback) => {
  post('/answer/view', answerId, callback);
}
