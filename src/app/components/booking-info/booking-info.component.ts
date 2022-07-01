import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';
import SelectedFlight from 'src/app/Entity/SelectedFlight';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import PassengerInfo from 'src/app/Entity/PassengerInfo';
import { UserServiceService } from 'src/app/user-service.service';
import { HttpHeaders } from '@angular/common/http';

const pnrConstant : string = 'FMS00';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {
  bookingID :number =0;
  pnr :string ="";
  selectedFlight :SelectedFlight = new SelectedFlight();
  passengerInfo :PassengerInfo = new PassengerInfo;
  bookingForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    firstName: new FormControl(),
    lastName : new FormControl(),
    gender: new FormControl(),
    age: new FormControl(),
    meal : new FormControl(),
    seatNumber : new FormControl()
  })

  constructor(public dataService: DataServiceService,public userService : UserServiceService) { }

  ngOnInit(): void {
    this.dataService.currentSelection.subscribe(selectedFlight => this.selectedFlight = selectedFlight);
    console.log(this.selectedFlight);
  }

  book(){
    this.passengerInfo.firstName = this.bookingForm.value.firstName;
    this.passengerInfo.lastName = this.bookingForm.value.lastName;
    this.passengerInfo.age = this.bookingForm.value.age;
    this.passengerInfo.gender = this.bookingForm.value.gender;
    this.selectedFlight.name = this.bookingForm.value.name;
    this.selectedFlight.email = this.bookingForm.value.email;
    this.selectedFlight.passengerInfo = this.passengerInfo;
    console.log(this.passengerInfo);
    const observable = this.userService.bookFlight(this.selectedFlight,this.passengerInfo);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        this.bookingID = response as number;
        this.pnr = pnrConstant+this.bookingID;
        alert("Booking successfull, PNR: "+this.pnr);
        console.log(this.pnr);
      },
      function (error) {
        console.log(error);
        alert('Something went wrong please try again!');
      }
    );
  }

}
