import { Injectable } from '@angular/core';
import { GoalType } from './goals/goal.type';

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private accountName = 'Max Mustermann';
    private accountEmail = 'max.mustermann@gmail.com';

    private goals: GoalType[] = [
        { title: 'Walk 5 km every day', progress: 0.6 },
        { title: 'Walk 50 km every week', progress: 0.2 },
        { title: 'Save 1.5 KG of CO2 every day', progress: 0.9 },
    ];

    public getGoals(): GoalType[] {
        return this.goals;
    }

    public editGoal(goal: GoalType, newGoalTitle: string): void {
        goal.title = newGoalTitle;
    }

    public deleteGoal(goalToDelete: GoalType): void {
        this.goals.forEach((goal, index) => {
            if (goalToDelete === goal) {
                this.goals.splice(index, 1);
            }
        });
    }

    public addGoal(goalTitle: string, goalProgress: number) {
        this.goals.push({title: goalTitle, progress: goalProgress / 100})
    }

    public getAccountEmail(): string {
        return this.accountEmail;
    }

    public getAccountName(): string {
        return this.accountName;
    }

    public saveAccountData(newName: string, newEmail: string) {
        this.accountName = newName;
        this.accountEmail = newEmail;
    }
}
