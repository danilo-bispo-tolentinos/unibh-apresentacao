import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from '../components/components.module';
import { BottomSheetComponent, BottomSheetModule } from 'ionic-custom-bottom-sheet';

import { HomeComponent } from '../pages/modules/home/home.component';
import { AngularModule } from '../angular/angular.module';
import { SchedulingComponent } from '../pages/modules/scheduling/scheduling.component';
import { VehiclesComponent } from '../pages/modules/vehicles/vehicles.component';
import { StoreComponent } from '../pages/modules/store/store.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ComponentsModule,
    AngularModule,
    BottomSheetModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TabsPage, HomeComponent, SchedulingComponent, VehiclesComponent, StoreComponent],
  entryComponents: [BottomSheetComponent]
})
export class TabsPageModule {}
