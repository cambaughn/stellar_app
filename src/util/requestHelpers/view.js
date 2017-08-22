import { post } from '../getPostMethods';

const postView = (answerId, callback) => {
  post('/answer/view', { answerId }, callback);
}


export { postView };
