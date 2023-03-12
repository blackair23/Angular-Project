import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }
  constructor(private authService: AuthService) { 
    
  }

  ngOnInit(): void {
  }

}
