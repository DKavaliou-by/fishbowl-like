import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/models/post';
import { PostsActions } from './store/posts.actions';
import { selectPosts } from './store/posts.selectors';

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
    this.posts$ = this._store.select(selectPosts);
    this._store.dispatch(PostsActions.getPostsRq({count: 20, start: 0}));
  }

}
