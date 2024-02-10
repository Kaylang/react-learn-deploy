import React, {useEffect, useRef} from 'react';
import styles from './commentform.css';
import {Text, EColor} from '../Text';
import {useFormik} from 'formik';

interface ICommentForm {
  onClose?: () => void;
  author?: string;
}

export function CommentForm(props: ICommentForm) {
  const {author} = props;

  const refTextArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (refTextArea.current !== null) {
      const input = refTextArea.current;
      input.setSelectionRange(input.value.length, input.value.length);
      input.focus();
    }
  });

  const formik = useFormik({
    initialValues: {
      comment: `${author}, `,
    },
    onSubmit: (values) => {
      console.log(values.comment);
      alert(values.comment)
    },
  });

  return (
    <form className={'flex ' + styles.form} onSubmit={formik.handleSubmit}>
      <textarea className={styles.input} name="comment" value={formik.values.comment} onChange={formik.handleChange} ref={refTextArea}></textarea>
      <button className={styles.button} type="submit">
        <Text size={14} color={EColor.white} >
          Комментировать
        </Text>
      </button>
    </form>
  );
}
