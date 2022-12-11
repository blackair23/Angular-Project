import { RouterModule, Routes } from '@angular/router'
import { DetailsComponent } from './details/details.component'
import { NewListingComponent } from './new-listing/new-listing.component'

const routes: Routes = [
    {
        path: 'catalog/create',
        component: NewListingComponent,
    },
    {
        path: 'catalog/detail/:id',
        component: DetailsComponent,
    },

]

export const CatalogRoutingModule = RouterModule.forChild(routes)