import { Component, input, output } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  template: `
    @if (products().length === 0) {
      <div class="empty-state">
        <p>В данной категории пока нет товаров.</p>
      </div>
    } @else {
      <div class="product-grid">
        @for (p of products(); track p.id) {
          <app-product-item 
            [product]="p" 
            (remove)="onRemove($event)">
          </app-product-item>
        }
      </div>
    }
  `,
  styles: [`
    .product-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px 0;
    }
    .empty-state {
      padding: 40px; text-align: center; color: #666; font-size: 1.2rem;
    }
  `]
})
export class ProductListComponent {
  products = input.required<Product[]>();
  productDeleted = output<number>();

  onRemove(productId: number) {
    this.productDeleted.emit(productId);
  }
}