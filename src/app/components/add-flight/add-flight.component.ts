import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import FlightDetails from 'src/app/Entity/FlightDetails';
import { FlightServiceService } from 'src/app/flight-service.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flightDetails :FlightDetails = new FlightDetails;
  addFlightForm = new FormGroup({
    airline: new FormControl(),
    flightNumber: new FormControl(),
    source: new FormControl(),
    destination : new FormControl(),
    departureTime: new FormControl(),
    arrivalTime: new FormControl(),
    instrumentUsed : new FormControl(),
    economySeats : new FormControl(),
    businessSeats: new FormControl(),
    economySeatsPrice: new FormControl(),
    businessSeatsPrice: new FormControl(),
    monday : new FormControl(),
    tuesday: new FormControl(),
    wednesday: new FormControl(),
    thursday : new FormControl(),
    friday : new FormControl(),
    saturday : new FormControl(),
    sunday: new FormControl(),
    meal: new FormControl(),
    days : new FormControl()
  })
  constructor(public flightService :FlightServiceService) { }

  ngOnInit(): void {
  }

  display(){
    console.log(this.addFlightForm.value);
    this.flightDetails.airline = this.addFlightForm.value.airline;
    this.flightDetails.flightNumber = this.addFlightForm.value.flightNumber;
    this.flightDetails.source = this.addFlightForm.value.source;
    this.flightDetails.destination = this.addFlightForm.value.destination;
    this.flightDetails.departureTime = this.addFlightForm.value.departureTime;
    this.flightDetails.arrivalTime = this.addFlightForm.value.arrivalTime;
    this.flightDetails.instrumentsUsed = this.addFlightForm.value.instrumentUsed;
    this.flightDetails.economySeats = this.addFlightForm.value.economySeats;
    this.flightDetails.businessSeats = this.addFlightForm.value.businessSeats;
    this.flightDetails.economySeatsPrice = this.addFlightForm.value.economySeatsPrice;
    this.flightDetails.businessSeatsPrice = this.addFlightForm.value.businessSeatsPrice;
    let days = "";
    if(this.addFlightForm.value.monday == true)
      days += ",Monday";
      if(this.addFlightForm.value.tuesday == true)
      days += ",Tuesday";
      if(this.addFlightForm.value.wednesday == true)
      days += ",Wednesday";
      if(this.addFlightForm.value.thursday == true)
      days += ",Thursday";
      if(this.addFlightForm.value.friday == true)
      days += ",Friday";
      if(this.addFlightForm.value.saturday == true)
      days += ",Saturday";
      if(this.addFlightForm.value.sunday == true)
      days += ",Sunday";
    this.flightDetails.days = days;
    console.log(this.flightDetails);
    const observable = this.flightService.addFlight(this.flightDetails);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        let flightId = response as number;
        alert("Flight Added successfully, flight ID : "+flightId);
      },
      function (error) {
        console.log(error);
        alert('Something went wrong please try again!');
      }
  );
    }
}
