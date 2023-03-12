import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }

  // get user() {
  //   return this.authService.user;
  // }

  constructor(public authService: AuthService) { 
    // console.log(this.user);
    // let user = JSON.parse(sessionStorage.getItem('userData') as any)
  }



}
