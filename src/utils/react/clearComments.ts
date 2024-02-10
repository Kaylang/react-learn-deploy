type TReplies = {
  data: {
    children: Array<ICommentsData>;
  }
}

export interface ICommentsData {
  data: {
    author: string;
    author_img?: string;
    body: string;
    body_html: string;
    created: number;
    id: number;
    replies?: TReplies | string;
    children?: Array<ICommentsData>;
    score: number,
    subreddit: string;
  };
}

export interface IComments {
    author: string;
    author_img?: string;
    body: string;
    body_html: string;
    created: number;
    id: number;
    children?: Array<IComments>;
    score: number;
    subreddit: string;
}

export function clearComments(comments: ICommentsData[]): IComments[] {
  const newArray: Array<IComments> = [];

  comments.forEach((comment) => {
    const cleared: IComments = {
        author: comment.data.author,
        author_img: comment.data.author_img ?? undefined,
        body: comment.data.body,
        body_html: comment.data.body_html,
        created: comment.data.created,
        id: comment.data.id,
        score: comment.data.score,
        subreddit: comment.data.subreddit,
    }
    if (typeof comment.data.replies !== 'string') {
      cleared.children = clearComments(comment.data.replies?.data.children ?? []);
    }
    newArray.push(cleared);
  })
  return newArray;
}
