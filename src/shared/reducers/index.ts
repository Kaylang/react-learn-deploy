import { combineReducers } from 'redux';
import { meReducer } from './me/meReducer';
import { tokenReducer } from './token/tokenReducer';
import { postsReducer } from './posts/postsReducer';

export default combineReducers({
  tokenReducer,
  meReducer,
  postsReducer,
});
