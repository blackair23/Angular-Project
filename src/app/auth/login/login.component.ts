import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {  
    
  }

  loginHandler(form: NgForm): void{
    if(form.invalid) {return;}
    console.log(form.value);
    const { email, password } = form.value;
    this.authService.login(email!, password!).subscribe(user => {
      console.log('>>>',user);
      sessionStorage.setItem("userData",JSON.stringify(user));
      this.router.navigate(['/'])
    });
  };

}
