import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NewListingComponent } from './new-listing/new-listing.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { DetailsComponent } from './details/details.component';
import { AllListingsComponent } from './all-listings/all-listings.component';
import { AuthModule } from '../auth/auth.module';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    NewListingComponent,
    DetailsComponent,
    AllListingsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    AuthModule,
  ],
  exports:[
    NewListingComponent
  ]
})
export class CatalogModule { }
