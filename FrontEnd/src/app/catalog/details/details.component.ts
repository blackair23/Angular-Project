import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IListing } from 'src/app/interfaces/listing';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService ,private catalogService: CatalogService, private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  list: IListing[] | any;

  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }

  owner: boolean | undefined | null;
  // deleteListing(){
  //   let token = this.authService.token;
  //   if(token !== null){
  //     // let id = token._id;
  //     const headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-Authorization': `${token.accessToken}`,
  //     });  
  //     const requestOptions = { headers: headers };
  //     const id = this.activatedRoute.snapshot.paramMap.get('id');
  //     this.catalogService.deleteList( id!, requestOptions ).subscribe(()=> {
  //     this.router.navigate(['/catalog']);
  //   })
  // } else{
  // }
  // //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  // //   this.catalogService.deleteList(id!, ).subscribe(() => {
  // //     this.router.navigate(['/catalog']);
  // //  })
  // }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
      this.catalogService.getList(id!).subscribe({
        next: (value) => {
          this.list = value;
          console.log(this.user._id,' = ', value._ownerId._id )
          if (this.user._id === this.list._ownerId._id) {
            this.owner = true;
          }else{
            this.owner = null;
          }
        },
        error: (err) => {
          console.error(err);
        }
     })
  }

}
