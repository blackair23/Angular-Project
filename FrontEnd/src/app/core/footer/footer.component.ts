import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }
  constructor(private authService: AuthService) { }

}
