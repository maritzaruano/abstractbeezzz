import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  // Método para alternar el estado del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
