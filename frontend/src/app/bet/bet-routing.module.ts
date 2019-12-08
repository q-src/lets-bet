import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BetCreateComponent} from './bet-create/bet-create.component';
import { BetEditComponent } from './bet-edit/bet-edit.component';
import { BetResolverService } from '../bet-api/bet-resolver.service';


const routes: Routes = [
  {
    path: ':betId',
    component: BetEditComponent,
    resolve: {
      bet: BetResolverService,
    }
  },
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
