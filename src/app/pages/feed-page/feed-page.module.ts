import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-page-routing.module';
import { FeedPageComponent } from './feed-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FeedPageService } from './services/feed-page.service';
import { StoreModule } from '@ngrx/store';
import { POSTS_REDUCER_KEY, postsReducer } from './store/posts.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/posts.effects';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FeedPageComponent,
    PostCardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    FeedPageRoutingModule,
    StoreModule.forFeature(POSTS_REDUCER_KEY, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [
    FeedPageService,
  ],
})
export class FeedPageModule { }
