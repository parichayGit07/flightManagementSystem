import PassengerInfo from "./PassengerInfo";

export default class SelectedFlight {
    airline:String = "";
    flightNumber:String = "";
    source:String = "";
    destination:String = "";
    date:String = "";
    time:String = "";
    price:number =0;
    type:String="";
    name:String ="";
    email:String="";
    passengerInfo :PassengerInfo = new PassengerInfo();
}