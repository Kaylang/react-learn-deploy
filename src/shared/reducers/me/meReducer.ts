import { Reducer } from 'redux';
import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  IUserData,
  ME_REQUEST_ERROR,
  ME_START_REQUEST,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction,
  meRequestError,
  meRequestSuccess,
  meRequestStart,
} from './actions';

export type MeState = {
  loading: boolean;
  me: {
    error: string;
    data: IUserData;
  };
};

export type MeActions = MeRequestAction | MeRequestErrorAction | MeRequestSuccessAction;

const meState: MeState = {
  loading: false,
  me: {
    error: '',
    data: {},
  },
};

export const meReducer: Reducer<MeState, MeActions> = (state = meState, action): MeState => {
  switch (action.type) {
    case ME_START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        me: {
          ...state.me,
          error: action.error,
        },
      };

    case ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        me: {
          ...state.me,
          data: action.data,
        },
      };
    default:
      return state;
  }
};

export const meRequestQuery = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequestStart());
  axios
    .get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `Bearer ${getState().tokenReducer.token}` },
    })
    .then((resp) => {
      const userData = resp.data;
      dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));
    })
    .catch((error) => {
      console.error(error);
      dispatch(meRequestError(String(error)));
    });
};
