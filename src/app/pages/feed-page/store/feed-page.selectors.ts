import { createFeatureSelector, createSelector } from '@ngrx/store';
import { timeSinceNowHR } from 'src/app/shared/utils/date.utils';
import { FEED_PAGE_REDUCER_KEY, IFeedPageState, postsAdapter } from './feed-page.reducer';

const adapterEventsSelects = postsAdapter.getSelectors();

const selectGetFeatureState =
  createFeatureSelector<IFeedPageState>(FEED_PAGE_REDUCER_KEY);

const selectPostsEntityState = createSelector(
  selectGetFeatureState,
  (state) => state.posts,
);

const selectPosts = createSelector(
  selectPostsEntityState,
  adapterEventsSelects.selectAll
);

export const selectPostsCount = createSelector(
  selectPosts,
  (posts) => posts.length,
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