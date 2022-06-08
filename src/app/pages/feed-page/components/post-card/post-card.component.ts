import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent {
  @Input()
  public post: IPost | undefined;

  constructor() { }

}
