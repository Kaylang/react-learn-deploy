import {ActionCreator} from 'redux';

export const ME_START_REQUEST = 'ME_START_REQUEST';
export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';
export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export type MeRequestAction = {
  type: typeof ME_START_REQUEST;
}

export const meRequestStart: ActionCreator<MeRequestAction> = () => ({
  type: ME_START_REQUEST,
})

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string,
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})

export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData,
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
})
