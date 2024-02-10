import React, {useEffect, useRef, useState} from 'react';
import {AnyAction} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import styles from './cardslist.css';
import {Card} from './Card/Card';
import {RootState} from '../reducers/store';
import {LoaderSpinner} from '../LoaderSpinner';
import {NoPosts} from '../NoPosts';
import {postsRequestQuery} from '../reducers/posts/postsReducer';
import {IPostsData} from '../reducers/posts/actions';
import {Route} from 'react-router-dom';
import {Post} from '../Post';

export function CardsList() {
  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch<any>();
  const token = useSelector<RootState>((state) => state.tokenReducer.token);

  const [postsData, setPostsData] = useState<Array<IPostsData>>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');

  const [refreshCounter, setRefreshCounter] = useState(-2);
  const [isMore, setIsMore] = useState(false);
  const bottomPoint = useRef<HTMLDivElement>(null);

  const after = String(useSelector<RootState>((state) => state.postsReducer.posts.after));
  const error = String(useSelector<RootState>((state) => state.postsReducer.posts.error));

  useEffect(() => {
    if (token && token !== 'undeifned') {
      setLoading(true);
      dispatch(postsRequestQuery());
    }
  }, [token]);

  const data = useSelector<RootState>((state) => state.postsReducer.posts.data) as IPostsData[];

  useEffect(() => {
    setPostsData(data);
    setLoading(false);
  }, [data])

  useEffect(() => {
    setErrorLoading(error);
    setLoading(false);
  }, [error])

  useEffect(() => {
    setNextAfter(after);
  }, [after])

  useEffect(() => {
    if (!loading) {
      if (refreshCounter < 1) {
        setRefreshCounter(prevState => prevState + 1);
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setLoading(true);
            dispatch(postsRequestQuery());
          }
        }, {
          rootMargin: '100px',
        })

        if (bottomPoint.current !== null) observer.observe(bottomPoint.current);

        return () => {
          if (bottomPoint.current !== null) observer.unobserve(bottomPoint.current);
        }
      } else {
        setIsMore(true);
      }
    }
  }, [bottomPoint.current, nextAfter, loading])

  function handlerClick() {
    setRefreshCounter(0);
    setIsMore(false);
    setLoading(true);
    dispatch(postsRequestQuery());
  }

  return (
    <div className={styles.cardsListWrapper}>
      {errorLoading && errorLoading}
      {typeof postsData !== 'undefined' && postsData.length === 0 && !loading && !errorLoading && <NoPosts />}
      {typeof postsData !== 'undefined' && postsData.length > 0 && (
        <ul className={styles.cardsList + (postsData.length === 0 && ' nodisplay')}>
          {postsData && postsData.map((item) => {
            return <Card post={item} key={item.id} />
          })}
        </ul>
      )}
      <div className={styles.messagesWrapper} ref={bottomPoint}>
        {refreshCounter < 3 && loading && !errorLoading && <LoaderSpinner />}
        {isMore && !errorLoading && (
          <div>
            <button className={styles.btnMore} onClick={handlerClick}>Загрузить ещё...</button>
          </div>
        )}
      </div>
      <Route path='/posts/:id'>
        <Post />
      </Route>
    </div>
  );
}
