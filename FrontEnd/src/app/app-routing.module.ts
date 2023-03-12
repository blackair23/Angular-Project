import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    title: "Home",
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    title: "404",
  },
  {
    path: '**',
    redirectTo: '/not-found',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
