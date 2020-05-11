import { ProcessHttpService } from './process-http.service';
import { Dish } from './../shared/dish';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
// import { delay, catchError } from 'rxjs/operators';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor(private http: HttpClient,
    private processHttpService: ProcessHttpService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(baseURL + 'dishes')
      .pipe(catchError(this.processHttpService.handleError));
    };

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes/' + id)
      .pipe(catchError(this.processHttpService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    return  this.http.get<Dish>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
    .pipe(catchError(this.processHttpService.handleError));
  }

  getDishIds(): Observable<string[] | any> {
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
    .pipe(catchError(error=>error));
  }
}