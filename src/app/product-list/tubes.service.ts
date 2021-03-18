import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';

import { Tube } from './tube';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class TubesService {
  tubesUrl = '/v1/drones/traffic';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  /** GET tubes & traffic from the server */
  getTubes(): Observable<Tube[]> {
    return this.http.get<Tube[]>(this.tubesUrl);
  }
}


/*
 Copyright Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license
 */
