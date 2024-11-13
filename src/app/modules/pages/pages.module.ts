import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import FooterComponent from '../../layouts/pages-layouts/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    AboutComponent, 

  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
