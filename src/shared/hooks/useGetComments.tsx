import axios from 'axios';
import {useEffect, useState} from 'react';
import {IComments, clearComments} from '../../utils/react/clearComments';

export function useGetComments(id: string, subreddit: string) {
  const [data, setData] = useState<Array<IComments>>();

  useEffect(() => {
    axios.get(`https://api.reddit.com/r/${subreddit}/comments/${id}`, {
    })
      .then((resp) => {
        const commentsData = resp.data;

        if (commentsData || commentsData.length !== 0) {
          const comments = clearComments(commentsData[1].data.children);
          setData(comments);
        }
      })
      .catch(console.error);
  }, [])

  if (data) {
    return data
  };
}
