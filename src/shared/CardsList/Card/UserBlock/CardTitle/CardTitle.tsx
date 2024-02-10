import React from 'react';
import styles from './cardtitle.css';
import {Link} from 'react-router-dom';
import {IUserBlock} from '../UserBlock';

interface ICardTitle extends IUserBlock {
  id: string;
}

export function CardTitle(props: ICardTitle) {

  const {title, id} = props.data;

  const postLink = `/posts/${id}`;

  return (
    <h2 className={styles.cardTitle}>
      <Link className={styles.titleAncor} to={postLink}>
        {title}
      </Link>
    </h2>
  );
}
