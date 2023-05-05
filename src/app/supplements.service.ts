import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Supplement } from './models/supplement';

const baseUrl = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})

export class SupplementsService {
  // configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Supplement[]>{
    return this.http.get<Supplement[]>(baseUrl + 'supplements');
  }

  getOne(supplement: String): Observable<Supplement[]>{
    return this.http.get<Supplement[]>(baseUrl + 'supplements/' + supplement);
  }
  // getSupplements() {
  //   return this.http.get("http://localhost:3000/" + 'supplements');
  // }
}
