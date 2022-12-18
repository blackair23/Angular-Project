import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AuthModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
