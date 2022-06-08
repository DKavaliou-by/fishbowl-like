import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostsState, POSTS_REDUCER_KEY } from './posts.reducer';

const selectGetFeatureState =
  createFeatureSelector<IPostsState>(POSTS_REDUCER_KEY);

export const selectPosts = createSelector(
  selectGetFeatureState,
  (state) => state.posts,
);