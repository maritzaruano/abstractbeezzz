import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.scss'
})
export class HeroBannerComponent implements OnInit{
  @Input() imageUrl: string = ''; // Ruta de la imagen
  @Input() title: string = ''; // Título del banner
  @Input() text: string = ''; // Texto del banner

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Detectar cambios en la ruta y actualizar el contenido del banner
    this.route.queryParams.subscribe(params => {
      if (params['imageUrl']) this.imageUrl = params['imageUrl'];
      if (params['title']) this.title = params['title'];
      if (params['text']) this.text = params['text'];
    });
  }
}
