import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';
import {useClickEvent} from '../hooks/useClickEvent';
import {EColor, Text} from '../Text';
import {useGetComments} from '../hooks/useGetComments';
import {CounterBlock} from '../CardsList/Card/CounterBlock';
import {CommentsList} from './CommentsList';
import {getDatePublished} from '../../utils/js/getDatePublished';
import {AnonimIcon} from '../icons';
import {GenericList} from '../../utils/react/genericList';
import {merge} from '../../utils/js/merge';
import {EIcons, Icon} from '../Icon';
import {postControlList} from '../../utils/react/postControlList';
import {declOfNum} from '../../utils/js/declOfNum';
import {SortBlock} from '../Header/SortBlock';
import {CommentForm} from '../CommentForm';
import {LoaderSpinner} from '../LoaderSpinner';
import {NoPosts} from '../NoPosts';
import {Redirect, useLocation} from 'react-router-dom';
import {IPostsData} from '../reducers/posts/actions';
import {useSelector} from 'react-redux';
import {RootState} from '../reducers/store';

export function Post() {
  const postsData = useSelector<RootState>((state) => state.postsReducer.posts.data) as IPostsData[];

  const location = useLocation()
  const id = location.pathname.slice(location.pathname.lastIndexOf('/') + 1);
  const postData = postsData.find(item => item.id === id);

  if (!postData) return <Redirect to='/404' />

  const [isLoaded, setIsLoaded] = useState(false);

  const {author, created, num_comments, score, selftext, subreddit, title, upvote_ratio, sr_detail} = postData as IPostsData;
  const {icon_img} = sr_detail;

  const ref = useClickEvent();

  const comments = useGetComments(id, subreddit);

  useEffect(() => {
    if (comments && comments.length !== 0) {
      setIsLoaded(true);
    }
  }, [comments])

  const handleItemClick = (text: string) => {
    console.log(text);
  }

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    (
      <div className={styles.modal} ref={ref}>
        <div className={'flex ' + styles.header}><div className={styles.counter}>
          {isLoaded &&
            <CounterBlock classExt={styles.counter} score={score} />
          }
        </div>
          <div className={'flex ' + styles.titleBlock}>
            <h2 className={styles.title}><Text size={20}>{title}</Text></h2>
            <div className={'flex ' + styles.userBlock}>
              <div className={styles.published}><Text size={14} color={EColor.gray99}>опубликовано {getDatePublished(created)}</Text></div>
              <div className={'flex ' + styles.user}><span className={styles.autorIcon}>{icon_img !== null && <AnonimIcon />}</span> <span className={styles.author}>{author}</span></div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className={styles.content}>
          {selftext !== '' && selftext}
        </div>
        <div className={styles.sortBlock}>
          <SortBlock />
        </div>
        <div className={'flex ' + styles.controlBlock}>
          <ul className={'flex ' + styles.controlList}>
            <li className={styles.controlItem}><Icon iconName={EIcons.comments} iconWidth={16} /> {num_comments} {declOfNum(num_comments, ['Комментарий', 'Комментария', 'Комментариев'])}</li>
            <GenericList list={(postControlList)
              .map(merge({onClick: handleItemClick}))} />
          </ul>
          <span className={styles.upvoteRatio}><Text size={14} color={EColor.gray99}>{upvote_ratio * 100}% Проголосовали</Text></span>
        </div>
        <CommentForm author={author} />
        {isLoaded && !comments && <NoPosts />}
        {comments && <CommentsList {...comments} />}
        <div className={styles.messagesWrapper}>
          {!isLoaded && <LoaderSpinner />}
        </div>
      </div>
    ),
    node);
}
