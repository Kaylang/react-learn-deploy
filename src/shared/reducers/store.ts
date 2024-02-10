import { MeState, meReducer } from './me/meReducer';
import { postsReducer } from './posts/postsReducer';
import { TokenState } from './token/actions';
import { tokenReducer } from './token/tokenReducer';

export type RootState = {
  postsReducer: any;
  tokenReducer: TokenState;
  meReducer: MeState;
};

export const rootState = {
  tokenReducer: tokenReducer,
  meReducer: meReducer,
  postsReducer: postsReducer,
};
