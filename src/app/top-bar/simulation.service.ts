import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';

import { SimulationState } from './simulation-state';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class SimulationService {
  url = '/v1/drones/simulation';  // URL to web api
  tubesUrl = '/v1/drones/traffic';  // URL to web api

  constructor(
    private http: HttpClient) {
  }

  /** triggers a simulation run on  the server. I am putting a new sim state */
  triggerSimulation(simulationState:SimulationState): void {
    console.log('in service function, state of '+simulationState.state);
    this.http.put(this.url,simulationState).subscribe();
  }
}


/*
 Copyright Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at https://angular.io/license
 */
