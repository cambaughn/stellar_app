import { get, post } from './getPostMethods';

let route = 'user';

function getAllUsers(callback) {
  get(`/${route}/all`, callback);
}

function getUserById(userId, currentUserId, callback) {
  let body = { userId, currentUserId };
  post(`/${route}/profile`, body, callback);
}


export { getAllUsers, getUserById };
