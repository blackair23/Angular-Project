import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from '../auth.service';
import { IListing } from 'src/app/interfaces/listing';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }
  
  listings: IListing[] | any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    let token = this.authService.token;
    if(token !== null){
      let id = token._id;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': `${token.accessToken}`,
      });  
      const requestOptions = { headers: headers };
      this.authService.getProfileListings(requestOptions, id ).subscribe({
        next: (value) => {
          this.listings = value;
        },
        error: (err) => {
          console.error(err);
        }
      })
    } else {
      // let id = '123';
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      // });  
      // const requestOptions = { headers: headers };
      // this.authService.getProfile(requestOptions, id ).subscribe({
      //   next: () => {
      //     // this.authService.user = user;
      //     this.isAuthenticating = false;
      //   },
      //   error: (err) => {
      //     console.error(err);
      //   }
      // })
    }
  }

}
