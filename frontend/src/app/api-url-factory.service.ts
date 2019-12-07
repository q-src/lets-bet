import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlFactoryService {

  public create(...subPathSegments: string[]): string {
    return 'http://localhost:8080' + subPathSegments.join('/'); // TODO: Use dynamic value
  }
}
