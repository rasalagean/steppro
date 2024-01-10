import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardComponent } from './rewards/reward/reward.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goals/goal/goal.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from './store.service';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { PasswordResetComponent } from './settings/password-reset/password-reset.component';
import { EditComponent } from './settings/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    SettingsComponent,
    RewardsComponent,
    RewardComponent,
    GoalsComponent,
    GoalComponent,
    CreateGoalComponent,
    PasswordResetComponent,
    EditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
