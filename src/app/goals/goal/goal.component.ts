import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent {
  @Input()
  public title: string | undefined;

  /* It describes the progress of the current goal. It must be a number between 0 and 1.*/
  @Input()
  public progress = 0;

  @Output()
  public goalEdited = new EventEmitter<string>();

  @Output()
  public goalDeleted = new EventEmitter<void>();

  public newTitle: string | undefined;
  public isEditMode = false;

  public enableEditMode(): void {
    this.newTitle = this.title;
    this.isEditMode = true;
  }

  public cancelEditMode(): void {
    this.isEditMode = false;
  }

  public editGoal(): void {
    this.title = this.newTitle;
    this.goalEdited.emit(this.newTitle);
    this.isEditMode = false;
  }

  public deleteGoal(): void {
    this.goalDeleted.emit();
  }
}
