import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCreateComponent } from './bet-create/bet-create.component';
import { BetFormComponent } from './bet-form/bet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatStepperModule } from '@angular/material';
import { BetApiModule } from '../bet-api/bet-api.module';
import { BetEditComponent } from './bet-edit/bet-edit.component';
import { BetListComponent } from './bet-list/bet-list.component';
import { BetQrcodeComponent } from './bet-qrcode/bet-qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';
import { BetResultFormComponent } from './bet-result-form/bet-result-form.component';
import { ResultApiModule } from '../result-api/result-api.module';


@NgModule({
  declarations: [BetCreateComponent, BetFormComponent, BetEditComponent, BetListComponent, BetQrcodeComponent, BetResultFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    QRCodeModule,
    BetApiModule,
    ResultApiModule,
    BetRoutingModule
  ]
})
export class BetModule {
}
