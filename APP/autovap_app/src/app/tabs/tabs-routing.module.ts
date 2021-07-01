import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailVehicleComponent } from '../pages/modules/detail-vehicle/detail-vehicle.component';
import { HistoricComponent } from '../pages/modules/historic/historic.component';
import { HomeComponent } from '../pages/modules/home/home.component';
import { ProfileComponent } from '../pages/modules/profile/profile.component';
import { SchedulingComponent } from '../pages/modules/scheduling/scheduling.component';
import { StoreComponent } from '../pages/modules/store/store.component';
import { VehiclesComponent } from '../pages/modules/vehicles/vehicles.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'scheduling',
        component: SchedulingComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'myVehicles',
        component: VehiclesComponent
      },
      {
        path: 'detailVehicle',
        component: DetailVehicleComponent
      },
      {
        path: 'historic',
        component: HistoricComponent
      },
      {
        path: 'store',
        component: StoreComponent
      },
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
