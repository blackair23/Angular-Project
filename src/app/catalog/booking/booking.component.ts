import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IListing } from 'src/app/interfaces/listing';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService ,private catalogService: CatalogService, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  list: IListing[] | any;
  owner: boolean | undefined | null;
  booked: boolean | undefined | null;

  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }

  bookListing(form: NgForm): void {
    if(form.invalid) {return;}
    let token = this.authService.token;
    if(token !== null){
      console.log(token)
      console.log(form.value)
      // let id = token._id;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': `${token.accessToken}`,
      });
      const requestOptions = { headers: headers };
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.catalogService.bookList(id!, form.value, requestOptions).subscribe(()=> {
        // this.router.navigate(['/']);
        console.log('booked!')
      });
    } else {
      
    }
  }

  
  deleteListing(){
    let token = this.authService.token;
    if(token !== null){
      // let id = token._id;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Authorization': `${token.accessToken}`,
      });  
      const requestOptions = { headers: headers };
      const id = this.activatedRoute.snapshot.paramMap.get('id');
      this.catalogService.deleteList( id!, requestOptions ).subscribe(()=> {
      this.router.navigate(['/']);
    })
  } else{
  }
  //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  //   this.catalogService.deleteList(id!, ).subscribe(() => {
  //     this.router.navigate(['/catalog']);
  //  })
  }

  
  ngOnInit(): void {
    const hotelId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(hotelId);
      this.catalogService.getList(hotelId!).subscribe({
        next: (value) => {
          this.list = value;
          console.log(this.user._id,' = ', value._ownerId._id )
          if (this.user._id === this.list._ownerId._id) {
            this.owner = true;
          }else{
            let bookedUsersIds = value.bookUserId.includes(this.user._id);
            // console.log('booked or not?', bookedUsersIds);
            this.owner = null;
          }
        },
        error: (err) => {
          console.error(err);
        }
     })
  }

}
