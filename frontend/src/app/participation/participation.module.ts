import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { ParticipationCreateComponent } from './participation-create/participation-create.component';


@NgModule({
  declarations: [ParticipationCreateComponent],
  imports: [
    CommonModule,
    ParticipationRoutingModule
  ]
})
export class ParticipationModule { }
