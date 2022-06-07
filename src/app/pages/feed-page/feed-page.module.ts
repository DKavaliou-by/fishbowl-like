import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedPageRoutingModule } from './feed-page-routing.module';
import { FeedPageComponent } from './feed-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';


@NgModule({
  declarations: [
    FeedPageComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    FeedPageRoutingModule
  ]
})
export class FeedPageModule { }
