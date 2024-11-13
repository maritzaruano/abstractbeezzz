import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { PagesLayoutsComponent } from './layouts/pages-layouts/pages-layouts.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full' 
  },
  {
    path: 'home', // Define la ruta para home
    component: HomeComponent // Asocia la ruta con HomeComponent
  },

  {
    path: '**', // Para rutas no reconocidas
    redirectTo: '/home' // Redirige a home si no coincide ninguna ruta
  }

 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
