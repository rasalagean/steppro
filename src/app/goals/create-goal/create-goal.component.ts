import { Component } from '@angular/core';
import { StoreService } from '../../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent {

  public goalTitle: string | undefined;
  public goalProgress = 0;

  constructor(private readonly storeService: StoreService,
              private readonly router: Router) { }

  public createGoal(): void {
    if (this.goalTitle) {
      this.storeService.addGoal(this.goalTitle, this.goalProgress);
      this.router.navigate(['/goals']);
    }
  }
}
