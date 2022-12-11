import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent  {

  listing = {
    title: '',
    price: '',
    location: '',
    description: '',
    imgFile: {},
  }

  
  img = 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600'; 

  constructor(private sanitaizer:DomSanitizer) { }

  createHandler(form: NgForm): void{
    if(form.invalid) {return;}
    console.log(form.value);
  };
  onFileSelected(event: any): void{
    // console.log(event.target.files[0]);
    if(event.target.files){
      // if (event.target.files) {
      //   this.img = URL.createObjectURL(event.target.files[0]);
      //   this.listing.imgFile = this.img; 
      // }
      let file = event.target.files[0];
      
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
      
    }
  };



}
