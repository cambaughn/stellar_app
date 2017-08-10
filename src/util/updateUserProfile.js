import { post } from './getPostMethods';


const updateUser = (user, callback) => {
  post('/users/update', user, callback);
}


export { updateUser };
