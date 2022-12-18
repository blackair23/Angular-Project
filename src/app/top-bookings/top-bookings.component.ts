import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth/auth.service';
import { IListing } from '../interfaces/listing';

@Component({
  selector: 'app-top-bookings',
  templateUrl: './top-bookings.component.html',
  styleUrls: ['./top-bookings.component.css']
})
export class TopBookingsComponent implements OnInit {

  constructor(private apiService: ApiService, private authService: AuthService) { }

  listings: IListing[] | any;

  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }
  
  ngOnInit(): void {
    this.apiService.loadTopBookings().subscribe({
      next: (value) => {
        this.listings = value;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
