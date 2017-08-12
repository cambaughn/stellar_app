import { get } from '../getPostMethods';


const searchUsers = (searchTerm, callback) => {
  if (searchTerm.length > 0) {
    get(`/search/${searchTerm}`, callback);
  } else {
    callback([]);
  }
}


export { searchUsers };
