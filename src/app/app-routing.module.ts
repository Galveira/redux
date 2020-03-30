import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { InfoComponent } from './info/info.component';
import { RulesComponent } from './rules/rules.component';
import { GuidesComponent } from './guides/guides.component';
import { ApplyComponent } from './apply/apply.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'beta', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'apply', component: ApplyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
