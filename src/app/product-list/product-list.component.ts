import { Component, OnInit, OnDestroy } from '@angular/core';

import { Tube } from './tube';
import { TubesService } from './tubes.service';
import { Subscription } from 'rxjs';
import {startWith, switchMap} from "rxjs/operators";
import {interval} from "rxjs/internal/observable/interval";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tubes: Tube[];
  timeInterval: Subscription;

  constructor(private tubesService: TubesService) {}

  ngOnInit(): void {
    console.log("ngOnInit");
    this.timeInterval = interval(1000)
      .pipe(
        startWith(0),
        switchMap(() => this.tubesService.getTubes())
      ).subscribe(tubes => (this.tubes = tubes));
  }
  ;
  ngOnDestroy(): void {
    this.timeInterval.unsubscribe();
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
