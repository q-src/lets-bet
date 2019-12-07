import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';
import { BetApiModule } from '../bet-api/bet-api.module';


@NgModule({
  declarations: [ParticipationCreateComponent],
  imports: [
    CommonModule,
    BetApiModule,
    ParticipationRoutingModule
  ]
})
export class ParticipationModule {
}
