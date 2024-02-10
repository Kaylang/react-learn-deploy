import React from 'react';
import styles from './controlblock.css';
import {CommentsIcon, DeleteGrayIcon, SaveGrayIcon, ShareGrayIcon, StatisticGrayIcon} from '../../../icons';
import {Text, EColor} from '../../../Text';

interface IControlBlockProps {
  comments?: number;
}

export function ControlBlock({comments}: IControlBlockProps) {
  return (
    <div className={'flex ' + styles.controlBlock}>
      <div className={'flex ' + styles.comments}>
        <button className={styles.comments__btn}>
          <CommentsIcon />
        </button>
        <Text size={12} color={EColor.grayC4}>{comments}</Text>
      </div>
      <div className={'flex ' + styles.controls}>
        <button className={'flex ' + styles.controls__btn + ' ' + styles.controls__stat}>
          <StatisticGrayIcon />
          <Text size={14} color={EColor.grayC4}>Статистика публикации</Text>
        </button>
        <button className={'flex ' + styles.controls__btn + ' ' + styles.controls__share}>
          <ShareGrayIcon />
          <Text size={14} color={EColor.grayC4}>Поделиться</Text>
        </button>
        <button className={'flex ' + styles.controls__btn + ' ' + styles.controls__del}>
          <DeleteGrayIcon />
          <Text size={14} color={EColor.grayC4}>Удалить</Text>
        </button>
        <button className={'flex ' + styles.controls__btn + ' ' + styles.controls__save}>
          <SaveGrayIcon />
        </button>
      </div>
    </div>
  );
}
