import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import styles from './commentformuncontroled.css';
import {Text, EColor} from '../Text';

interface ICommentForm {
  onClose?: () => void;
  author?: string;
}

export function CommentFormUncontroled(props: ICommentForm) {
  const refTextArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (refTextArea.current !== null) {
      const input = refTextArea.current;
      input.focus();
    }
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(refTextArea.current?.value);
  }

  return (
    <form className={'flex ' + styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} name="comment" ref={refTextArea}></textarea>
      <button className={styles.button}>
        <Text size={14} color={EColor.white} >
          Комментировать
        </Text>
      </button>
    </form>
  );
}
