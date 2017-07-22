
import { get, post, getMedia } from './getPostMethods';


function getVideoById(answerPath, callback) {
  // let body = { answerId };
  getMedia(`/answer/${answerPath}`, callback);
}


export { getVideoById };
