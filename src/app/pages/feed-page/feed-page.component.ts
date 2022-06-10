import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/models/post';
import { MetaCardsActions, PostsActions } from './store/feed-page.actions';
import { selectPostsToDisplay } from './store/feed-page.selectors';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent implements OnInit {
  public posts$!: Observable<IPost[]>;

  constructor(
    private _store: Store,
  ) { }

  ngOnInit(): void {
    this.posts$ = this._store.select(selectPostsToDisplay);
    this._store.dispatch(PostsActions.getPostsRq({count: 20, init: true}));
    this._store.dispatch(MetaCardsActions.getMetaCardsRq());
  }

  public trackByPostId(index: number, post: IPost): string {
    return post._id;
  }

  public onScrollDown(event: any){
    this._store.dispatch(PostsActions.getPostsRq({count: 20, init: false}));
  }

}
