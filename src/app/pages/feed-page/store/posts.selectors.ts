import { createFeatureSelector, createSelector } from '@ngrx/store';
import { timeSinceNowHR } from 'src/app/shared/utils/date.utils';
import { IPostsState, POSTS_REDUCER_KEY } from './posts.reducer';

const selectGetFeatureState =
  createFeatureSelector<IPostsState>(POSTS_REDUCER_KEY);

export const selectPosts = createSelector(
  selectGetFeatureState,
  (state) => state.posts,
);

export const selectPostsToDisplay = createSelector(
  selectPosts,
  (posts) => posts.map(post => {
    return {
      ...post,
      dateSinceNowHM: post.date ? timeSinceNowHR(post.date) : '?',
      reactionsCount: post?.reactionCounters 
        ? Object.values(post?.reactionCounters).reduce((prev, curr) => {
            return prev+=curr;
          }, 0) 
        : 0,
      reactionCountersToShow: post?.reactionCounters
        ? Object.entries(post?.reactionCounters)
            .filter(([key, val]) => !!val)
            .map(([key, value]) => {return key})
        : [],

    }
  }),
);