import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightServiceService } from 'src/app/flight-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  constructor(public flightService :FlightServiceService, private router :Router) { }

  ngOnInit(): void {
  }

  validate(){
    const observable = this.flightService.validateAdmin(this.adminForm.value.username,this.adminForm.value.password);
    observable.subscribe(
      (response: any) => {
        console.log(response);
        let login = response as number;
        if(login === 1){
          console.log("logged in");
          this.router.navigate(['/addFlight']);
        }
        if(login === 0){
          console.log("logged in");
          alert("Incorrect username or password");
        }
      },
      function (error) {
        console.log(error);
        alert('Something went wrong please try again!');
      }
  );
  }

}
