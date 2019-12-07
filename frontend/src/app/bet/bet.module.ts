import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BetRoutingModule } from './bet-routing.module';
import { BetCreateComponent } from './bet-create/bet-create.component';


@NgModule({
  declarations: [BetCreateComponent],
  imports: [
    CommonModule,
    BetRoutingModule
  ]
})
export class BetModule { }
