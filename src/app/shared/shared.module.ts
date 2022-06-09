import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ReactionCountComponent } from './components/reaction-count/reaction-count.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ReactionCountComponent,
  ],
  exports: [
    HeaderComponent,
    ReactionCountComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
