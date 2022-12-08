import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-bookings',
  templateUrl: './top-bookings.component.html',
  styleUrls: ['./top-bookings.component.css']
})
export class TopBookingsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.loadTopBookings().subscribe((value) => {
      console.log(value);
    })
  }

}
