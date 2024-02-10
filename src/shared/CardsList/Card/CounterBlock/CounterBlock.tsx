import React from 'react';
import styles from './counterblock.css';
import {ArrowIcon} from '../../../icons';
import {Text, EColor} from '../../../Text';

interface ICounterBlockProps {
  score?: number;
  classExt?: string;
}

export function CounterBlock({score, classExt}: ICounterBlockProps) {
  return (
    <div className={styles.counter + ' flex ' + classExt}>
      <button className={styles.counter__increment + ' flex'}>
        <ArrowIcon />
      </button>
      <Text size={14} mobileSize={12} color={EColor.grayC4}>{score}</Text>
      <button className={styles.counter__decrement + ' flex'}>
        <ArrowIcon />
      </button>
    </div>

  );
}
