import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RewardsComponent } from './rewards/rewards.component';
import { GoalsComponent } from './goals/goals.component';
import { CreateGoalComponent } from './goals/create-goal/create-goal.component';
import { PasswordResetComponent } from './settings/password-reset/password-reset.component';
import { EditComponent } from './settings/edit/edit.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'edit', component: EditComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'rewards', component: RewardsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'create-goal', component: CreateGoalComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
