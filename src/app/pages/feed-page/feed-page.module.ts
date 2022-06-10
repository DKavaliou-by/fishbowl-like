import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-page-routing.module';
import { FeedPageComponent } from './feed-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FeedPageService } from './services/feed-page.service';
import { StoreModule } from '@ngrx/store';
import { feedPageReducer, FEED_PAGE_REDUCER_KEY } from './store/feed-page.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FeedPageEffects } from './store/feed-page.effects';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MetaCardComponent } from './components/meta-card/meta-card.component';


@NgModule({
  declarations: [
    FeedPageComponent,
    PostCardComponent,
    MetaCardComponent
  ],
  imports: [
    InfiniteScrollModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    FeedPageRoutingModule,
    StoreModule.forFeature(FEED_PAGE_REDUCER_KEY, feedPageReducer),
    EffectsModule.forFeature([FeedPageEffects]),
  ],
  providers: [
    FeedPageService,
  ],
})
export class FeedPageModule { }
