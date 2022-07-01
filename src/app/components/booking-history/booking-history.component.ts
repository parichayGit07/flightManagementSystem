import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import BookingInfo from 'src/app/Entity/BookingInfo';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  bookingInfo :BookingInfo[] = [];
  email = new FormControl();
  currentTime = Math.round((new Date()).getTime() / 1000);
  constructor(public userService : UserServiceService) { }

  ngOnInit(): void {
  }

  getBookingHistory(){
    const promise = this.userService.getBookingHistory(this.email.value);;
    promise.subscribe((response) => {
      console.log(response);
      this.bookingInfo = response as BookingInfo[];
      this.sort();
      if(this.bookingInfo.length == 0){
        alert("No Bookings found");
      }
    }); 
  }

  sort() {
    this.bookingInfo.sort(function (b1, b2) {
      return b2.departureTime - b1.departureTime;
    })
  }

  getStatus(bookingInfo :BookingInfo){
    let status = bookingInfo.status;
    let date = Date.now();
      console.log(date);
      console.log(bookingInfo.departureTime);
      if(bookingInfo.departureTime < Date.now() && bookingInfo.status != 'cancelled'){
        status = "completed";
      }
    return status;
  }

}
