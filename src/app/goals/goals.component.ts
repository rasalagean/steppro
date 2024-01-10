import { Component, OnInit } from '@angular/core';
import { GoalType } from './goal.type';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
    public goals: GoalType[] = [];

    constructor(private readonly storeService: StoreService,
                private readonly router: Router) {
    }

    public ngOnInit(): void {
        this.goals = this.storeService.getGoals();
    }

    public onGoalEdited(goal: GoalType, newGoalTitle: string): void {
        this.storeService.editGoal(goal, newGoalTitle);
    }

    public onGoalDeleted(goalToDelete: GoalType): void {
        this.storeService.deleteGoal(goalToDelete);
    }

    public createGoal(): void {
        this.router.navigate(['/create-goal']);
    }
}
