import React from 'react';
import styles from './previewblock.css';
import preview from "./image1.jpg";

interface IPreviewBlock {
  previewImg: string
}

export function PreviewBlock(props: IPreviewBlock) {
  const {previewImg} = props;
  return (
    <div className={styles.previewBlock}>
      <img className={styles.previewImg} src={(previewImg !== '' && previewImg !== 'self') ? previewImg : preview} alt="Превью сообщения" />
    </div>
  );
}
