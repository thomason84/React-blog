import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

//reducers watch for actions to be triggered

//using lodash -.mapKeys function to turn array of post into object
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
                          //key interpolation, not an array
      return { ...state,  [action.payload.data.id]: action.payload.data }
    case FETCH_POSTS:
      //mapKeys allows you to view data as an object instead of an array
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
