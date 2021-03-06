import { SettingsComponent } from './settings/settings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DestinyComponent } from './destiny/destiny.component';
import { CarsComponent } from './cars/cars.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'car', component: CarsComponent },
  { path: 'destiny', component: DestinyComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'profile', component: SettingsComponent },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
