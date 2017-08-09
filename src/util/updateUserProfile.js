import { post } from './getPostMethods';


const updateUser = (user, callback) => {
  console.log('UPDATING USER => ', user)
  // post('/users/update', user, callback);
}


export { updateUser };
