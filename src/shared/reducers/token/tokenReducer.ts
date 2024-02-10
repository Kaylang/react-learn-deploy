import { Action, Reducer } from 'redux';
import { TokenState, tokenState, SET_TOKEN, setToken } from './actions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

let code: string | null = '';
if (typeof window !== 'undefined') {
  code = new URLSearchParams(window.location.href).get('code');
}

export const tokenReducer: Reducer<TokenState> = (state = tokenState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  if (!window.__token__ || window.__token__ === 'undefined') {
    const lsToken = localStorage.getItem('redditToken');
    if (lsToken && lsToken !== 'undefined') dispatch(setToken(lsToken));
  }
  if (window.__token__ && window.__token__ !== 'undefined') {
    dispatch(setToken(window.__token__));
    localStorage.setItem('redditToken', window.__token__);
  }
};
