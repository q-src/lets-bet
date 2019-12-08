import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan/scan.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [ScanComponent],
  imports: [
    CommonModule,
    ZXingScannerModule,
    ScanRoutingModule
  ]
})
export class ScanModule { }
