import axios from 'axios';
import { reducer as formReducer } from 'redux-form';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=paperclip12345';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPosts(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  .then(() => callback());
  return {
    type: CREATE_POSTS,
    payload: request,
  };
}
