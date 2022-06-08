import { createReducer, on } from '@ngrx/store';
import { IPost } from 'src/app/shared/models/post';
import { PostsActions } from './posts.actions';

export const POSTS_REDUCER_KEY = 'Posts'
 
// TODO update State with EntityAdapter
// export const postsAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();
export interface IPostsState {
  posts: IPost[];
}

const initialState: IPostsState = {
  posts: [],
};


export const postsReducer = createReducer(
  initialState,
  on(
    PostsActions.getPostsSs,
    (state, {posts}): IPostsState => {
      return {
        ...state,
        posts: [
          ...state.posts,
          ...posts,
        ]
      }
    },
  ),
);
