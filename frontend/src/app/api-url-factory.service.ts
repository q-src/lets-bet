import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlFactoryService {

  public create(subPath: string): string {
    return 'http://localhost:8080' + subPath; // TODO: Use dynamic value
  }

}
