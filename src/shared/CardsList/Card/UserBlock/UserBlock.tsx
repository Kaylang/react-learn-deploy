import React from 'react';
import styles from './userblock.css';
import {CardTitle} from './CardTitle';
import avatar1 from './avatar-1.png';
import {DeleteIcon, ViewsIcon} from '../../../icons';
import {Text} from '../../../Text';
import {getDatePublished} from '../../../../utils/js/getDatePublished';
import {IPostsData} from '../../../reducers/posts/actions';

export interface IUserBlock {
  data: IPostsData,
}

export function UserBlock(props: IUserBlock) {
  const {author, created, id} = props.data;
  const {icon_img} = props.data.sr_detail;

  return (
    <div className={styles.userBlock + ' flex'}>
      <CardTitle data={props.data} id={id} />
      <div className={styles.userBlock__wrap + ' flex'}>
        <img className={styles.avatarImage} src={icon_img !== '' ? icon_img : avatar1} alt="Аватар автора" />
        <a className={styles.username + ' link-reset'} href='#user-url'>{author}</a>
        <div className={styles.published}>
          <span className={styles.published__span}> опубликовано</span>
          <span className={styles.published__time}> {getDatePublished(created)}</span>
        </div>
      </div>
      <div className={styles.looked}>
        <ViewsIcon />
        <Text size={14}>1 час назад</Text>
      </div>
      <div className={styles.removeItem}>
        <DeleteIcon />
        <Text size={14}>Убрать из списка</Text>
      </div>
    </div>

  );
}
