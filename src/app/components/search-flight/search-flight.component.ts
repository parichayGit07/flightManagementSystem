import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import FlightDetails from 'src/app/Entity/FlightDetails';
import { FlightServiceService } from 'src/app/flight-service.service';
import { DataServiceService } from 'src/app/data-service.service';
import SelectedFlight from 'src/app/Entity/SelectedFlight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  flightSelected :SelectedFlight = new SelectedFlight();
  cities :string[] = ["Delhi","Mumbai","Kolkata","Chennai","banglore"];
  searchForm = new FormGroup({
    source: new FormControl(),
    destination: new FormControl(),
    date: new FormControl(),
    type : new FormControl()
  })
  flights :FlightDetails[] = [];
  constructor(public flightService : FlightServiceService, public dataService: DataServiceService, private router :Router) { }

  ngOnInit(): void {
  }

  display(){
    console.log(this.searchForm.value);
    const promise = this.flightService.getAvailableFlights(this.searchForm.value.source,this.searchForm.value.destination,this.searchForm.value.date);
    promise.subscribe((response) => {
      console.log(response);
      this.flights = response as FlightDetails[];
      if(this.flights.length == 0){
        alert("No Flights found.");
      }
    });
  }

  selectedFlight(flightDetail : FlightDetails){
    this.flightSelected.airline = flightDetail.airline;
    this.flightSelected.source = flightDetail.source;
    this.flightSelected.destination = flightDetail.destination;
    this.flightSelected.flightNumber = flightDetail.flightNumber;
    this.flightSelected.date = this.searchForm.value.date;
    this.flightSelected.type = this.searchForm.value.type;
    this.flightSelected.time = flightDetail.departureTime;
    this.flightSelected.price = flightDetail.economySeatsPrice;
    this.flightSelected.type = "Economy";
    this.dataService.changeSelection(this.flightSelected);
    this.router.navigate(['/bookingPage']);
  }

}
