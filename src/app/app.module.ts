import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { SearchByPnrComponent } from './components/search-by-pnr/search-by-pnr.component';
import { AddFlightComponent } from './components/add-flight/add-flight.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchFlightComponent,
    BookingInfoComponent,
    BookingHistoryComponent,
    SearchByPnrComponent,
    AddFlightComponent,
    AdminLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
