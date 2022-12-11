import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {  
    
  }

  loginHandler(form: NgForm): void{
    if(form.invalid) {return;}
    console.log(form.value);
  };

}
