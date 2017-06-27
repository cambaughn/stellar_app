import { get } from './getPostMethods';

const getUsers = {};

function getAllUsers(callback) {
  get('/users', callback);
}

function getUserById(userId, callback) {
  get(`/user/${userId}`, callback);
}


export { getAllUsers, getUserById };
