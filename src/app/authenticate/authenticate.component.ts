import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  get token() {
    return JSON.parse(sessionStorage.getItem('userData') as string);
  }

  isAuthenticating = true;

  constructor(private authService: AuthService, public http: HttpClient) { }

  ngOnInit(): void {
    let token = this.authService.token;
    if(token !== null){
      let id = token._id;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': `${token.accessToken}`,
      });  
      const requestOptions = { headers: headers };
      this.authService.getProfile(requestOptions, id ).subscribe({
        next: () => {
          // this.authService.user = user;
          this.isAuthenticating = false;
        },
        error: () => {
          // this.authService.user = null;
          this.isAuthenticating = false;
        }
      })
    } else {
      let id = '123';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });  
      const requestOptions = { headers: headers };
      this.authService.getProfile(requestOptions, id ).subscribe({
        next: () => {
          // this.authService.user = user;
          this.isAuthenticating = false;
        },
        error: () => {
          // this.authService.user = null;
          this.isAuthenticating = false;
        }
      })
    }
      
      
    // this.authService.getProfile(requestOptions, id ).subscribe({
    //   next: () => {
    //     // this.authService.user = user;
    //     this.isAuthenticating = false;
    //   },
    //   error: () => {
    //     // this.authService.user = null;
    //     this.isAuthenticating = false;
    //   }
    // }) 
  }

}
