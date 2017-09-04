import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    // _.mapKeys(array, property you want to pull from each object to use as a key of the resulting object)
      return _.mapKeys(action.payload.data, 'id');
    default: return state;
  }
}
