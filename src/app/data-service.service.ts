import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import SelectedFlight from './Entity/SelectedFlight';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private defaultSelection = new BehaviorSubject<SelectedFlight>(new SelectedFlight());
  currentSelection = this.defaultSelection.asObservable();
  constructor() { }
  changeSelection(flightSelection : SelectedFlight){
    this.defaultSelection.next(flightSelection);
  }
}
