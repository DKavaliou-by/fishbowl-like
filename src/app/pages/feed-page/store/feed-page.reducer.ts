import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { IMetaCard } from 'src/app/shared/models/meta-card';
import { IPost } from 'src/app/shared/models/post';
import { MetaCardsActions, PostsActions } from './feed-page.actions';

export const FEED_PAGE_REDUCER_KEY = 'Feed Page'
 
export const postsAdapter: EntityAdapter<IPost> = createEntityAdapter<IPost>();
export const metaCardsAdapter: EntityAdapter<IMetaCard> = createEntityAdapter<IMetaCard>();

export interface IFeedPageState {
  posts: EntityState<IPost>;
  metaCards: EntityState<IMetaCard>;
}


const postsReducer = createReducer(
  postsAdapter.getInitialState(),
  on(
    PostsActions.getPostsSs,
    (state, {posts}): EntityState<IPost> => {
      return postsAdapter.addMany(posts, state);
    },
  ),
);

const metaCardsReducer = createReducer(
  metaCardsAdapter.getInitialState(),
  on(
    MetaCardsActions.getMetaCardsSs,
    (state, {metaCards}): EntityState<IMetaCard> => {
      return metaCardsAdapter.setAll(metaCards, state)
    },
  ),
);


export const feedPageReducer = combineReducers({
  posts: postsReducer,
  metaCards: metaCardsReducer,
});
