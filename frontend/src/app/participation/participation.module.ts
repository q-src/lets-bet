import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';
import { BetApiModule } from '../bet-api/bet-api.module';
import { ParticipationFormComponent } from './participation-form/participation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [ParticipationCreateComponent, ParticipationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    BetApiModule,
    ParticipationRoutingModule
  ]
})
export class ParticipationModule {
}
