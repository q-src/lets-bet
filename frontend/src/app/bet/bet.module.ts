import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetFormComponent } from './bet-form/bet-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';
import {BetApiModule} from '../bet-api/bet-api.module';
import { BetEditComponent } from './bet-edit/bet-edit.component';


@NgModule({
  declarations: [BetCreateComponent, BetFormComponent, BetEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BetApiModule,
    BetRoutingModule
  ]
})
export class BetModule { }
