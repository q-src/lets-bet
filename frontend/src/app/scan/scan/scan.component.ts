import { Component } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  public process(data: string) {
    if (!data || !data.startsWith(window.location.origin)) {
      return;
    }
    window.location.href = data;
  }

}
