import React from 'react';
import styles from './threadtitle.css';
import {Text} from '../../Text';

export function ThreadTitle() {
  return (
    <h1 className={styles.threadTitle}><Text size={28} mobileSize={20}>Header</Text></h1>
  );
}
