import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PassengerInfo from './Entity/PassengerInfo';
import SelectedFlight from './Entity/SelectedFlight';

const BASE_URL = 'http://ec2-13-52-77-255.us-west-1.compute.amazonaws.com:8091/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  bookFlight(selectedFlight :SelectedFlight, passengerInfo :PassengerInfo){
    return this.http.post(BASE_URL+"/bookFlight",selectedFlight);
  }
  getBookingHistory(email:String){
    return this.http.get(BASE_URL+"/getBookingHistory/"+email);
  }
  getPassengerDetails(pnr:String){
    return this.http.get(BASE_URL+"/getPassengerDetails/"+pnr);
  }
  getBookingInfo(pnr:String){
    return this.http.get(BASE_URL+"/getBookingInfo/"+pnr);
  }
  cancelTicket(pnr:string){
    return this.http.put(BASE_URL+"/cancelTicket/"+pnr,undefined);
  }
  constructor(public http: HttpClient) { }
}
