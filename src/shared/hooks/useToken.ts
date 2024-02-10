import { useEffect } from 'react';
import { saveToken } from '../reducers/token/tokenReducer';
import { useDispatch } from 'react-redux';
import { RootState } from '../reducers/store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export function useToken() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch<any>();

  useEffect(() => {
    dispatch(saveToken());
  }, []);
}
