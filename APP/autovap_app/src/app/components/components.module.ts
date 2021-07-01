import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './header/header-home/header-home.component';
import { CardListOneComponent } from './cards/card-list-one/card-list-one.component';
import { CardVehicleComponent } from './cards/card-vehicle/card-vehicle.component';



@NgModule({
  declarations: [
    HeaderHomeComponent,
    CardListOneComponent,
    CardVehicleComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HeaderHomeComponent,
    CardListOneComponent,
    CardVehicleComponent
  ]
})
export class ComponentsModule { }
