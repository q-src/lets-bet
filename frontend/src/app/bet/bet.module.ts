import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetFormComponent } from './bet-form/bet-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [BetCreateComponent, BetFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BetRoutingModule
  ]
})
export class BetModule { }
