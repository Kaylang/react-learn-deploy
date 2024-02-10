import React from 'react';
import styles from './notfound.css';
import {Link} from 'react-router-dom';
import {Text, EColor} from '../Text';

export function NotFound() {
  return (
    <div className={styles.wrapper + ' flex'}>
      <Text As={'h2'} size={76} color={EColor.red}>404</Text>
      <Text As={'p'} size={28}>Уп-с! Что-то пошло не так!</Text>
      <Text As={'p'} size={28}>Страница не найдена</Text>
      <Link to={'/posts'}>Вернуться на главную страницу!</Link>
    </div>
  );
}
