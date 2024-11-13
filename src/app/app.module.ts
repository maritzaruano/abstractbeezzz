import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import FooterComponent from './layouts/pages-layouts/footer/footer.component';
import { HeaderComponent } from './layouts/pages-layouts/header/header.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { PagesLayoutsComponent } from './layouts/pages-layouts/pages-layouts.component';
import { HeroBannerComponent } from './modules/pages/hero-banner/hero-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AdminLayoutsComponent,
    PagesLayoutsComponent,
    HeaderComponent,
    HeroBannerComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
