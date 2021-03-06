import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';
import { BetResolverService } from '../bet-api/bet-resolver.service';
import { ParticipationListComponent } from './participation-list/participation-list.component';
import { ParticipationListResolverService } from '../participation-api/participation-list-resolver.service';
import { ParticipationEditComponent } from './participation-edit/participation-edit.component';
import { ParticipationResolverService } from '../participation-api/participation-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: ParticipationListComponent,
    resolve: {
      participations: ParticipationListResolverService,
    }
  },
  {
    path: ':id',
    component: ParticipationEditComponent,
    resolve: {
      participation: ParticipationResolverService,
    }
  },
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
