import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarritoServicios } from '../servicios/carrito-servicios';


@Component({
  imports: [
    RouterLink, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule
  ],
  selector: 'app-layout',
  styleUrl: './layout.component.scss',
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  protected cartService = inject(CarritoServicios)
}
