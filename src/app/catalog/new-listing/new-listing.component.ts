import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})

export class NewListingComponent  {
  // img = 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600'; 
  @ViewChild('selectFile', { static: false })

  listing = {
    title: {},
    price: '',
    location: '',
    description: '',
    imgFile: {},
  }

  images: any;
  

  constructor(private sanitaizer:DomSanitizer, private router: Router, private catalogService: CatalogService,private authService: AuthService) { }

  createHandler(form: NgForm): void{
    if(form.invalid) {return;}
    const formData = new FormData();
    formData.set('imgFile', this.images);
    formData.set('title', form.value.title);
    formData.set('price', form.value.price);
    formData.set('description', form.value.description);
    formData.set('location', form.value.location);
    formData.set('service1', form.value.service1);
    formData.set('service2', form.value.service2);
    formData.set('service3', form.value.service3);
    formData.set('service4', form.value.service4);
    
    form.value.imgFile = this.listing.imgFile;
    let token = this.authService.token;
    if(token !== null){
      // let id = token._id;
      const headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data boundary=MyBoundary',
        'X-Authorization': `${token.accessToken}`,
      });  
      const requestOptions = { headers: headers };
    console.log('form data >',form.value);
    this.catalogService.addListing( formData, requestOptions ).subscribe(()=> {
      this.router.navigate([`/`]);
    })
  } else{

  }

  };
  onFileSelected(event: any): void{
    if(event.target.files){
      // form.patchValue({ image: file });
      let file = event.target.files[0];
      this.images = file;
      interface FileHandle{
        file: File,
        url: SafeUrl,
      }

    const fileHandle: FileHandle= {
      file: file,
      url: this.sanitaizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file) 
      )
    }
    this.listing.imgFile = fileHandle.url; 
    this.listing.title = fileHandle.file; 
    // console.log(fileHandle.file);
    }
  };



}
