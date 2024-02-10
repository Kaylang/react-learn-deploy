import React, {useEffect, useState} from 'react';
import {hot} from 'react-hot-loader/root';
import {Layout} from './shared/Layout';
import {Header} from './shared/Header/Header';
import {Content} from './shared/Content';
import {CardsList} from './shared/CardsList';
import './main.global.css';
import {AnyAction, applyMiddleware, createStore} from 'redux';
import {Provider, useDispatch} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk, {ThunkDispatch} from 'redux-thunk';
import rootReducer from './shared/reducers';
import {RootState} from './shared/reducers/store';
import {saveToken} from './shared/reducers/token/tokenReducer';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {NotFound} from './shared/NotFound';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> =
    useDispatch<any>();

  useEffect(() => {
    dispatch(saveToken());
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Switch>
              <Route path='/404'>
                <NotFound />
              </Route>
              <Route path='/posts'>
                <Content>
                  <CardsList />
                </Content>
              </Route>
              <Redirect from='/auth' to='/posts' />
              <Redirect exact from='/' to='/posts' />
              <Redirect from='*' to='/404' />
            </Switch>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));

