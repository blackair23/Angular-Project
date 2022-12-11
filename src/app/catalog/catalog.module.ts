import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NewListingComponent } from './new-listing/new-listing.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    NewListingComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
  ],
  exports:[
    NewListingComponent
  ]
})
export class CatalogModule { }
