import { ActionCreator } from 'redux';

export const POSTS_START_REQUEST = 'POSTS_START_REQUEST';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';

export interface IPostsData {
  author: string;
  created: number;
  id: string;
  num_comments: number;
  permalink: string;
  score: number;
  selftext: string;
  selftext_html: string;
  sr_detail: {
    icon_img: string;
    public_description: string;
  };
  subreddit: string;
  thumbnail: string;
  title: string;
  upvote_ratio: number;
  url?: string;
}

export type PostsRequestAction = {
  type: typeof POSTS_START_REQUEST;
};

export const postsRequestStart: ActionCreator<PostsRequestAction> = () => ({
  type: POSTS_START_REQUEST,
});

export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
};

export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data: IPostsData[];
  after: string;
};

export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: IPostsData[], after: string) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
  after,
});
