import React, {useState} from 'react';
import {getDatePublished} from '../../../utils/js/getDatePublished';
import styles from './commentslist.css';
import {Text, EColor} from '../../Text';
import {GenericList} from '../../../utils/react/genericList';
import {postControlList} from '../../../utils/react/postControlList';
import {merge} from '../../../utils/js/merge';
import {EIcons, Icon} from '../../Icon';
import {CounterBlock} from '../../CardsList/Card/CounterBlock';
import {CommentForm} from '../../CommentForm';

export interface ICommentsList {
  author: string;
  author_img?: string;
  body: string;
  body_html: string;
  created: number;
  id: number;
  children?: Array<ICommentsList>;
  score: number,
  subreddit: string;
}

export function createCommentsList(comments: ICommentsList[]) {

  const [openedFormIndex, setOpenedFormIndex] = useState<number | null>(null)

  const handleItemClick = (text: string) => {
    console.log(text);
  }

  const handleClick = (index: number) => {
    if (index === openedFormIndex) {
      setOpenedFormIndex(null);
    } else {
      setOpenedFormIndex(index);
    }
  }

  return (
    <ul className={styles.list}>
      {comments.map(element =>
        <li className={styles.item} key={element.id}>
          <header className={'flex ' + styles.header}>
            <CounterBlock score={element.score} classExt={styles.counter} />
            <div className={'flex ' + styles.authorBlock}>
              {(element.author_img && element.author_img !== '') && element.author_img}
              <div className={styles.author}>
                <a className={'link-reset '} href="#">
                  <Text size={14} color={EColor.orange}>
                    {element.author}
                  </Text>
                </a>
              </div>
              <div>{getDatePublished(element.created)}</div>
            </div>
          </header>

          <main className={styles.main}>
            <div className={styles.commentBody}>{element.body}</div>

            <div className={'flex ' + styles.footer}>
              <div className={'flex ' + styles.footer__controls}>
                <button className={'flex ' + styles.responseBtn} onClick={() => {handleClick(element.id)}} type='button'><Icon iconName={EIcons.comments} iconWidth={16} /> <Text size={14} color={EColor.gray99}>Ответить</Text></button>
                <ul className={'flex ' + styles.controlList}>
                  <GenericList list={(postControlList)
                    .filter(item => item.isResponce)
                    .map(merge({onClick: handleItemClick}))} />
                </ul>
              </div>
              {element.id === openedFormIndex && (
                <CommentForm onClose={() => {setOpenedFormIndex(element.id)}} author={element.author} />
              )}
            </div>
            {element.children && createCommentsList(element.children)}
          </main>
        </li>
      )}
    </ul>)
}

export function CommentsList(props: ICommentsList[]) {
  const comments = Object.values(props);
  return (
    <div>
      {createCommentsList(comments)}
    </div>
  )
}
