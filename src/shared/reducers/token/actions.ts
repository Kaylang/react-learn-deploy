import { ActionCreator, AnyAction } from 'redux';

export const SET_TOKEN = 'SET_TOKEN';

export type TokenState = {
  laoding: boolean;
  error?: string;
  token: string;
};

export const tokenState: TokenState = {
  laoding: false,
  error: '',
  token: '',
};

export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  token,
});
