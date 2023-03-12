import { RouterModule, Routes } from '@angular/router'
import { AuthActivate } from '../shared/guards/auth.activate'
import { AllListingsComponent } from './all-listings/all-listings.component'
import { DetailsComponent } from './details/details.component'
import { EditComponent } from './edit/edit.component'
import { NewListingComponent } from './new-listing/new-listing.component'

const routes: Routes = [
    {
        path: 'catalog',
        component: AllListingsComponent,
        title: 'Catalog',
    },
    {
        path: 'catalog/create',
        component: NewListingComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: true,
        },
        title: 'Create Listing',
    },
    {
        path: 'catalog/detail/:id',
        component: DetailsComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: true,
        },
        title: 'Details',
    }, 
    {
        path: 'catalog/edit/:id',
        component: EditComponent,
        canActivate: [AuthActivate],
        data: {
            loginRequired: true,
        },
        title: 'Edit',
    }, 

]

export const CatalogRoutingModule = RouterModule.forChild(routes)