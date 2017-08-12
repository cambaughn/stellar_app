import { get } from '../getPostMethods';


const searchUsers = (searchTerm, callback) => {
  get(`/search/${searchTerm}`, callback);
}


export { searchUsers };
