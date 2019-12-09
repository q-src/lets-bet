import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetFormComponent } from './bet-form/bet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatListModule, MatStepperModule } from '@angular/material';
import { BetApiModule } from '../bet-api/bet-api.module';
import { BetEditComponent } from './bet-edit/bet-edit.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetQrcodeComponent } from './bet-qrcode/bet-qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [BetCreateComponent, BetFormComponent, BetEditComponent, BetListComponent, BetQrcodeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatStepperModule,
    QRCodeModule,
    BetApiModule,
    BetRoutingModule
  ]
})
export class BetModule {
}
