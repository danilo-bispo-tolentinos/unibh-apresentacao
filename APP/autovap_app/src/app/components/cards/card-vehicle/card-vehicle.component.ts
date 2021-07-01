import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vehicle',
  templateUrl: './card-vehicle.component.html',
  styleUrls: ['./card-vehicle.component.scss'],
})
export class CardVehicleComponent implements OnInit {

  public detailsCar = '/detailVehicle';
  @Input() detailCar;
  constructor() {

  }

  ngOnInit() { }

}
