import { Reducer, Action } from 'redux';
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import {
  IPostsData,
  POSTS_REQUEST_ERROR,
  POSTS_START_REQUEST,
  POSTS_REQUEST_SUCCESS,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
  postsRequestError,
  postsRequestSuccess,
  postsRequestStart,
} from './actions';

export type PostsState = {
  loading: boolean;
  posts: {
    error: string;
    data: IPostsData[];
    after: string;
  };
};

export type PostsActions = PostsRequestAction | PostsRequestErrorAction | PostsRequestSuccessAction;

const postsState: PostsState = {
  loading: false,
  posts: {
    error: '',
    data: [],
    after: '',
  },
};

export const postsReducer: Reducer<PostsState, PostsActions> = (state = postsState, action): PostsState => {
  switch (action.type) {
    case POSTS_START_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          error: action.error,
        },
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          data: [...action.data],
          after: action.after,
        },
      };
    default:
      return state;
  }
};

export const postsRequestQuery = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  const nextAfter = getState().postsReducer.posts.after;
  const currentPosts: IPostsData[] = [];
  currentPosts.push(...getState().postsReducer.posts.data);
  dispatch(postsRequestStart());
  if (token && token !== 'undefined') {
    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: { Authorization: `bearer ${token}` },
        params: {
          limit: 10,
          after: nextAfter,
        },
      })
      .then((resp) => {
        const postsData = resp.data.data.children;

        if (postsData || postsData.length !== 0) {
          const posts = postsData.map((item: { data: IPostsData }) => {
            return {
              author: item.data.author,
              author_img: item.data.sr_detail.icon_img,
              created: item.data.created,
              id: item.data.id,
              score: item.data.score,
              selftext: item.data.selftext,
              selftext_html: item.data.selftext_html,
              sr_detail: {
                icon_img: item.data.sr_detail.icon_img,
                public_description: item.data.sr_detail.public_description,
              },
              subreddit: item.data.subreddit,
              title: item.data.title,
              thumbnail: item.data.thumbnail,
              num_comments: item.data.num_comments,
              upvote_ratio: item.data.upvote_ratio,
              url: item.data.url,
            };
          });
          currentPosts.push(...posts);
          dispatch(postsRequestSuccess(currentPosts, resp.data.data.after));
        }
      })
      .catch((error) => {
        console.error(error);
        dispatch(postsRequestError(String(error)));
      });
  }
};
