import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';


const routes: Routes = [
  {
    path: 'create/:betId',
    component: ParticipationCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipationRoutingModule { }
