
import { get, post, getMedia } from './getPostMethods';


function getVideoById(answerId, callback) {
  // let body = { answerId };
  getMedia(`/answer/${answerId}`, callback);
}


export { getVideoById };
