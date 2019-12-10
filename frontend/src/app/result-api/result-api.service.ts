import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result';
import { ApiUrlFactoryService } from '../api-url-factory.service';
import { HttpClient } from '@angular/common/http';
import { ResultApiModule } from './result-api.module';

@Injectable({
  providedIn: ResultApiModule
})
export class ResultApiService {

  private static readonly PATH = '/result';

  constructor(
    private http: HttpClient,
    private urlFactory: ApiUrlFactoryService,
  ) { }

  public create(result: Result): Observable<Result> {
    return this.http.post<Result>(this.urlFactory.create(ResultApiService.PATH), result);
  }
}
