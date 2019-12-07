import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';
import { BetResolverService } from '../bet-api/bet-resolver.service';


const routes: Routes = [
  {
    path: 'create/:betId',
    component: ParticipationCreateComponent,
    resolve: {
      bet: BetResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipationRoutingModule {
}
