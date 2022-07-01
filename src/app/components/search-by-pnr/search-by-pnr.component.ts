import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import BookingInfo from 'src/app/Entity/BookingInfo';
import PassengerInfo from 'src/app/Entity/PassengerInfo';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-search-by-pnr',
  templateUrl: './search-by-pnr.component.html',
  styleUrls: ['./search-by-pnr.component.css']
})
export class SearchByPnrComponent implements OnInit {
  passengerInfo :PassengerInfo[] = [];
  bookingInfo :BookingInfo = new BookingInfo();
  cancelButton :boolean = false;
  pnr = new FormControl();
  constructor(public userService :UserServiceService) { }

  ngOnInit(): void {
  }

  getPassengerInfo(){
    this.getBookingInfo();
    const promise = this.userService.getPassengerDetails(this.pnr.value);
    promise.subscribe((response) => {
      console.log(response);
      this.passengerInfo = response as PassengerInfo[];
      let date = Date.now();
      console.log(date);
      console.log(this.bookingInfo.departureTime);
      if(this.bookingInfo.departureTime < Date.now() && this.bookingInfo.status != 'cancelled'){
        this.bookingInfo.status = "completed";
      }else{
        if(this.bookingInfo.status != 'cancelled')
          this.cancelButton = true;
      }
      console.log(this.cancelButton);
      if(this.passengerInfo.length == 0){
        alert("PNR not found");
      }
    });
  }

  getBookingInfo(){
    const promise = this.userService.getBookingInfo(this.pnr.value);
    promise.subscribe((response) => {
      console.log(response);
      this.bookingInfo = response as BookingInfo;
      if(this.bookingInfo.airline === ""){
        alert("PNR not found");
      }
    });
  }

  cancelTicket(){
    const promise = this.userService.cancelTicket(this.pnr.value);
    promise.subscribe((response) => {
      console.log(response);
      let isCancelled = response as number;
      if(isCancelled == 1){
        alert("Ticket with PNR: "+this.pnr.value+" is cancelled");
      }
      else{
        alert("Something went wrong");
      }
    });
  }

}
