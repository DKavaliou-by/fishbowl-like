import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { IPost } from 'src/app/shared/models/post';
import { FeedPageService } from '../services/feed-page.service';
import { PostsActions } from './posts.actions';



@Injectable()
export class PostsEffects {
  public posts$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(PostsActions.getPostsRq),
      switchMap(({count, start}) =>
        this._feedPageService.getPosts(count, start).pipe(
          map((rq) =>
            PostsActions.getPostsSs({posts: rq.posts})
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
    private _feedPageService: FeedPageService,
  ) {}
}
