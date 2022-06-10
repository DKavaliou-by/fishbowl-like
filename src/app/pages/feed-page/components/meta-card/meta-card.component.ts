import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IMetaCard } from 'src/app/shared/models/meta-card';

@Component({
  selector: 'app-meta-card',
  templateUrl: './meta-card.component.html',
  styleUrls: ['./meta-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetaCardComponent {
  // TODO Update models structure to solve issues with incompatible IPost and IMetaCard models
  // Probable will be good to have separate model for car
  @Input()
  public meta: any;

  constructor() { }

}
