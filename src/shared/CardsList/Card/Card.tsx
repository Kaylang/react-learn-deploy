import React from "react";
import styles from "./card.css";
import {UserBlock} from "./UserBlock";
import {Menu} from "./Menu";
import {ControlBlock} from "./ControlBlock";
import {CounterBlock} from './CounterBlock';
import {PreviewBlock} from './PreviewBlock';
import {IPostsData} from '../../reducers/posts/actions';

interface ICardProps {
  post: IPostsData;
}

export function Card({post}: ICardProps) {

  const {id, score, num_comments} = post;
  const previewImg = post.thumbnail;
  return (
    <li className={styles.card + ' flex'} id={id}>
      <div className={styles.card__wrap + ' flex'}>
        <div className={styles.card__user + ' flex'}>
          <UserBlock data={post} />
          <Menu />
        </div>
      </div>
      <PreviewBlock previewImg={previewImg} />
      <div className={styles.card__controls + ' flex'}>
        <CounterBlock score={score} />
        <ControlBlock comments={num_comments} />
      </div>
    </li>
  );
}
