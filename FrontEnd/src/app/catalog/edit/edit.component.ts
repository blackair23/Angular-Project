import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IListing } from 'src/app/interfaces/listing';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @ViewChild('selectFile', { static: false })

  listing = {
    title: {},
    price: '',
    location: '',
    description: '',
    imgFile: {},
  }

  images: any;

  list: IListing[] | any | undefined;
  pageId: string | null | undefined;

  get user() {
    return JSON.parse(sessionStorage.getItem('userData') as string)
  }
  
  owner: boolean | undefined | null;

  constructor(private activatedRoute:ActivatedRoute, private sanitaizer:DomSanitizer, private router: Router, private catalogService: CatalogService,private authService: AuthService) { }

  editHandler(form: NgForm): void{
    console.log("not set value",this.images);
    if(form.invalid) {return;}
    const formData = new FormData();
    if(!this.images){
      formData.set('imgFile',this.list.imgFile)
    }else{
      formData.set('imgFile', this.images);
    }
    formData.set('title', form.value.title);
    formData.set('price', form.value.price);
    formData.set('description', form.value.description);
    formData.set('location', form.value.location);
    formData.set('service1', form.value.service1);
    formData.set('service2', form.value.service2);
    formData.set('service3', form.value.service3);
    formData.set('service4', form.value.service4);
    
    // form.value.imgFile = this.listing.imgFile;
    let token = this.authService.token;
    if(token !== null){
      // let id = token._id;
      const headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data boundary=MyBoundary',
        'X-Authorization': `${token.accessToken}`,
      });  
      const requestOptions = { headers: headers };
    console.log('form data >',form.value);
    this.catalogService.editListing( this.pageId!, formData, requestOptions ).subscribe(()=> {
      this.router.navigate([`/auth/profile/${this.user._id}`]);
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

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pageId = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id);
      this.catalogService.getList(id!).subscribe({
        next: (value) => {
          this.list = value;
          console.log(this.user._id,' = ', value._ownerId._id )
          if (this.user._id === this.list._ownerId._id) {
            this.owner = true;
          }else{
            this.owner = null;
            this.router.navigate(['/auth/login']);
          }
        },
        error: (err) => {
          console.error(err);
        }
     })
  }

}
