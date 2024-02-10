import React from 'react';
import ReactDOM from 'react-dom';
import styles from './list.css';
import {useClickEvent} from '../../../../hooks/useClickEvent';

interface IList {
  children: React.ReactNode;
  onClick?: () => void;
  onClose?: () => void;
}

export function List(props: IList) {
  const {children} = props;

  const ref = useClickEvent();

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.list}>
      {children}
    </div>
  ), node);
}
