import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BetCreateComponent} from './bet-create/bet-create.component';


const routes: Routes = [
  {
    path: 'create',
    component: BetCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetRoutingModule { }
