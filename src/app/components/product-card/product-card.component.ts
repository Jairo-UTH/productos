import { DecimalPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GetProductResponse } from '../../interfaces/produc';

@Component({
  imports: [MatCardModule, MatIconModule, MatButtonModule, DecimalPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.component.scss',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {

  readonly product = input.required<GetProductResponse>();
  readonly addToCart = output<GetProductResponse>();

  protected onAddToCart(): void {
    this.addToCart.emit(this.product())
  }

}
