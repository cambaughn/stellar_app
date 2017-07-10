import { get, post } from './getPostMethods';


function getAllUsers(callback) {
  get('/users', callback);
}

function getUserById(userId, currentUserId, callback) {
  let body = { userId, currentUserId };
  post(`/user_profile`, body, callback);
}


export { getAllUsers, getUserById };
