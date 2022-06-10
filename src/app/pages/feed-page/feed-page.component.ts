import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, map, Observable } from 'rxjs';
import { ICardType } from 'src/app/shared/models/cardType';
import { IMetaCard } from 'src/app/shared/models/meta-card';
import { IPost } from 'src/app/shared/models/post';
import { MetaCardsActions, PostsActions } from './store/feed-page.actions';
import { selectMetaCards, selectPostsToDisplay } from './store/feed-page.selectors';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent implements OnInit {
  public posts$!: Observable<IPost[]>;
  public cards$!: Observable<(IPost|IMetaCard)[]>;

  public ICardType: typeof ICardType = ICardType;

  constructor(
    private _store: Store,
  ) { }

  ngOnInit(): void {
    this.posts$ = this._store.select(selectPostsToDisplay);
    this.cards$ = combineLatest(
      this._store.select(selectPostsToDisplay),
      this._store.select(selectMetaCards),
    ).pipe(
      map(([posts, metas])=> {
        const allCards: (IPost| IMetaCard)[] = [...posts];
        metas.forEach((meta, i) => {
          if (!meta.position) {
            return;
          }

          if (!allCards[meta?.position] || allCards[meta?.position].cardType === ICardType.Post) {
            allCards[meta?.position] = {...meta};
          } else {
            if (
              (allCards[meta?.position] as IMetaCard).priority > meta.priority
            ) {
              allCards[meta?.position] = {...meta};
            }
          }
        });
        return allCards;
      }),
    );

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
