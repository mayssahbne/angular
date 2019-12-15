//app-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionCreateComponent } from './mission-create/mission-create.component';
import { MissionEditComponent } from './mission-edit/mission-edit.component';
import { MissionListComponent } from './mission-list/mission-list.component';
import { DetailComponent } from './detail/detail.component';
import {UserAuthetificationComponent} from './user-authetification/user-authetification.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'create', component: MissionCreateComponent },
  { path: 'edit/:id', component: MissionEditComponent},
  { path: 'list', component: MissionListComponent },
  {path : 'authantification', component : UserAuthetificationComponent},
  {path: 'detail/:ville', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
