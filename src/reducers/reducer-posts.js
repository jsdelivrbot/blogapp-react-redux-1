import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_POST:
    // const post = action.payload.data;
    // return newState = {...state} // take existing posts we have and put them into a new object and add in a new key-value pair of fetched post
    // newState[post.id] = post;
    // return newState;
  
      return { ...state, [action.payload.data.id]: action.payload.data }; // key interpolation; make a new key on object using value in [] and set value
    case FETCH_POSTS:
    // _.mapKeys(array, property you want to pull from each object to use as a key of the resulting object)
      return _.mapKeys(action.payload.data, 'id');
    default: return state;
  }

}
