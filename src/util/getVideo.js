
import { get, post } from './getPostMethods';


function getVideoById(answerId, callback) {
  // let body = { answerId };
  get(`/answer/${answerId}`, callback);
}
