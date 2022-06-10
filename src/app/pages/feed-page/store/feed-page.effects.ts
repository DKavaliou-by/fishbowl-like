import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { FeedPageService } from '../services/feed-page.service';
import { MetaCardsActions, PostsActions } from './feed-page.actions';
import { selectPostsCount } from './feed-page.selectors';
import { isUndefined } from 'lodash';



@Injectable()
export class FeedPageEffects {
  public posts$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PostsActions.getPostsRq),
      withLatestFrom(this._store$.select(selectPostsCount)),
      switchMap(([{count, init}, postsCount]) => {
        let getPostServiceRq;
        if (init) {
          getPostServiceRq = this._feedPageService.getPosts(count, 0);
        } else {
          getPostServiceRq = this._feedPageService.getPosts(count, postsCount);
        }

        return getPostServiceRq.pipe(
          map((posts) =>
            PostsActions.getPostsSs({posts})
          ),
          catchError((error: HttpErrorResponse) =>
            of(PostsActions.getPostsEr({ error}))
          )
        )
      })
    );
  });

  public meta$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(MetaCardsActions.getMetaCardsRq),
      switchMap(() =>
        this._feedPageService.getMeta().pipe(
          map((metaCards) =>
            MetaCardsActions.getMetaCardsSs({metaCards})
          ),
          catchError((error: HttpErrorResponse) =>
            of(PostsActions.getPostsEr({ error}))
          )
        )
      )
    );
  });

  constructor(
    private _actions$: Actions,
    private _store$: Store,
    private _feedPageService: FeedPageService,
  ) {}
}
