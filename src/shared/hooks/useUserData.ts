import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IUserData } from '../reducers/me/actions';
import { meRequestQuery } from '../reducers/me/meReducer';
import { RootState } from '../reducers/store';

export function useUserData() {
  const dispatch = useDispatch<any>();

  const loading = useSelector<RootState, boolean>((state) => state.meReducer.loading);
  const data = useSelector<RootState, IUserData>((state) => state.meReducer.me.data);
  const token = useSelector<RootState, string>((state) => state.tokenReducer.token);

  useEffect(() => {
    if (token && token !== 'undefined') {
      dispatch(meRequestQuery());
    }
  }, [token]);

  return {
    data,
    loading,
  };
}
