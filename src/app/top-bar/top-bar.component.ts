import { Component } from '@angular/core';
import { SimulationState } from './simulation-state';
import { SimulationService } from './simulation.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private simulationService: SimulationService) {}

  iconValue: string = "play_circle";

  startSimulation() {
    console.log('in component function');

    const simulationState: SimulationState = {
      state:'start'
    };

    if (this.iconValue == "play_circle") {
      this.iconValue = "stop_circle";
    } else {
      simulationState.state = "stop";
      this.iconValue = "play_circle";
    }

    this.simulationService.triggerSimulation(simulationState);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
