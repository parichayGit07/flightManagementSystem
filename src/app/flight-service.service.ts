import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import FlightDetails from './Entity/FlightDetails';

const BASE_URL = 'http://ec2-13-52-77-255.us-west-1.compute.amazonaws.com:8090/admin';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  getAvailableFlights(source :string,destination :string, date :string) {
    return this.http.get(BASE_URL+"/getAvailableFlights?source="+source+"&destination="+destination+"&date="+date);
  }
  addFlight(flightDetails :FlightDetails){
    return this.http.post(BASE_URL+"/addFlight",flightDetails);
  }
  validateAdmin(username :string,password :string){
    let admin = {userName:username, passWord:password};
    return this.http.post(BASE_URL+"/login",admin);
  }
    constructor(public http: HttpClient) { }
}
