import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent {
  @Input()
  public title: string | undefined;

  @Input()
  public imgSrc: string | undefined;
}
