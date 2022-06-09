import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IReactionCounterType } from '../../models/post';

@Component({
  selector: 'app-reaction-count',
  templateUrl: './reaction-count.component.html',
  styleUrls: ['./reaction-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactionCountComponent {
  @Input()
  public reactions: string[] = [];

  @Input()
  public reactionsCount: number = 0;

  constructor() { }
  // ngOnChanges(changes: SimpleChanges): void {
  //   if(changes['reactions'] && changes['reactions'].currentValue) {
  //     this._setReactionsToDisplay(changes['reactions'].currentValue);
  //   }
  // }

  // private _setReactionsToDisplay(reactions: IReactionCounterType){
  //   this.reactionsToDisplay = [];
  //   Object.entries(reactions).forEach(([key, value]) => {
  //     if (value) {
  //       this.reactionsToDisplay.push(key);
  //     }
  //   });
  //   Object.values(reactions).reduce((prev, curr) => )
  // }

}
