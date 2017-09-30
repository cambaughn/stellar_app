import { post } from './getPostMethods';

const signup = (user, callback) => {
  post('/login/new_user', user, callback);
}

const login = (user, callback) => {
  post('/login', user, callback);
}


export { signup, login };
