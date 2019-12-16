import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';
import { BetApiModule } from '../bet-api/bet-api.module';
import { ParticipationFormComponent } from './participation-form/participation-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatListModule, MatTabsModule } from '@angular/material';
import { ParticipationApiModule } from '../participation-api/participation-api.module';
import { ParticipationListComponent } from './participation-list/participation-list.component';
import { ParticipationEditComponent } from './participation-edit/participation-edit.component';


@NgModule({
  declarations: [ParticipationCreateComponent, ParticipationFormComponent, ParticipationListComponent, ParticipationEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule,
    BetApiModule,
    ParticipationApiModule,
    ParticipationRoutingModule
  ]
})
export class ParticipationModule {
}
