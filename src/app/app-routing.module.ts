import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { HomeComponent } from './components/home/home.component';
import { SearchByPnrComponent } from './components/search-by-pnr/search-by-pnr.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';

const routes: Routes = [{path:'search' ,component: SearchFlightComponent},{path:'bookingPage' ,component: BookingInfoComponent},{path:'bookingHistory',component:BookingHistoryComponent},
{path:"searchByPnr", component:SearchByPnrComponent},{path:"addFlight",component:AddFlightComponent},{path:"adminLogin",component:AdminLoginComponent},{path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
