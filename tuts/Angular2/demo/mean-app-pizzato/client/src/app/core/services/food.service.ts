import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Food } from '../models/food';

@Injectable({ providedIn: 'root' })
export class FoodService {
  private FoodsUrl = 'api/foods'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  /** GET foods from the server */
  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>(this.FoodsUrl).pipe(
      tap((_) => this.log('fetched foods')),
      catchError(this.handleError<Food[]>('getFoods', []))
    );
  }

  /** GET food by id. Return `undefined` when id not found */
  getFoodNo404<Data>(id: number): Observable<Food> {
    const url = `${this.FoodsUrl}/?id=${id}`;
    return this.http.get<Food[]>(url).pipe(
      map((foods) => foods[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} food id=${id}`);
      }),
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  /** GET food by id. Will 404 if id not found */
  getFood(id: number): Observable<Food> {
    const url = `${this.FoodsUrl}/${id}`;
    return this.http.get<Food>(url).pipe(
      tap((_) => this.log(`fetched food id=${id}`)),
      catchError(this.handleError<Food>(`getFood id=${id}`))
    );
  }

  /* GET foods whose name contains search term */
  searchFoods(term: string): Observable<Food[]> {
    if (!term.trim()) {
      // if not search term, return empty food array.
      return of([]);
    }
    return this.http.get<Food[]>(`${this.FoodsUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found foods matching "${term}"`)
          : this.log(`no foods matching "${term}"`)
      ),
      catchError(this.handleError<Food[]>('searchFoods', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new food to the server */
  addFood(food: Food): Observable<Food> {
    return this.http.post<Food>(this.FoodsUrl, food, this.httpOptions).pipe(
      tap((newFood: Food) => this.log(`added food w/ id=${newFood.id}`)),
      catchError(this.handleError<Food>('addFood'))
    );
  }

  /** DELETE: delete the food from the server */
  deleteFood(food: Food | number): Observable<Food> {
    const id = typeof food === 'number' ? food : food.id;
    const url = `${this.FoodsUrl}/${id}`;

    return this.http.delete<Food>(url, this.httpOptions).pipe(
      tap((_) => this.log(`deleted food id=${id}`)),
      catchError(this.handleError<Food>('deleteFood'))
    );
  }

  /** PUT: update the food on the server */
  updateFood(food: Food): Observable<any> {
    return this.http.put(this.FoodsUrl, food, this.httpOptions).pipe(
      tap((_) => this.log(`updated food id=${food.id}`)),
      catchError(this.handleError<any>('updateFood'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a FoodService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FoodService: ${message}`);
  }
}
