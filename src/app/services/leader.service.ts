import { baseURL } from './../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Observable,of } from 'rxjs';
import { delay, catchError, map } from 'rxjs/operators';
import { ProcessHttpService } from './process-http.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHttpService: ProcessHttpService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership')
      .pipe(catchError(this.processHttpService.handleError));
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership' + id)
      .pipe(catchError(this.processHttpService.handleError));
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leadership?featured=true')
      .pipe(map(leaders => leaders[0]))
      .pipe(catchError(this.processHttpService.handleError));
  }
}
