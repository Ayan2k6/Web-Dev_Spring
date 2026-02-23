import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list';
import { Category, Product } from './models/product.model';
import { CATEGORIES, PRODUCTS } from './data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <header class="header">
      <h1>Онлайн Магазин (Lab 5)</h1>
    </header>

    <div class="container">
      <aside class="sidebar">
        <h2>Категории</h2>
        <ul class="category-list">
          @for (category of categories; track category.id) {
            <li 
              [class.active]="selectedCategory?.id === category.id"
              (click)="selectCategory(category)">
              {{ category.name }}
            </li>
          }
        </ul>
      </aside>

      <main class="content">
        @if (selectedCategory) {
          <h2>Товары в категории: {{ selectedCategory.name }}</h2>
          <app-product-list 
            [products]="filteredProducts" 
            (productDeleted)="onProductDeleted($event)">
          </app-product-list>
        } @else {
          <div class="welcome">
            <h2>Добро пожаловать!</h2>
            <p>Пожалуйста, выберите категорию слева, чтобы начать покупки.</p>
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    :host { font-family: Arial, sans-serif; display: block; color: #333; }
    .header { background-color: #e52d27; color: white; padding: 1rem 2rem; }
    h1, h2 { margin: 0; }
    .container { display: flex; min-height: 80vh; max-width: 1200px; margin: 0 auto; padding: 20px; gap: 30px; }
    .sidebar { width: 250px; flex-shrink: 0; }
    .category-list { list-style: none; padding: 0; margin-top: 20px; display: flex; flex-direction: column; gap: 10px; }
    .category-list li { 
      padding: 12px 16px; background: #f5f5f5; border-radius: 6px; cursor: pointer; transition: 0.2s; font-size: 1.1rem;
    }
    .category-list li:hover { background: #e0e0e0; }
    .category-list li.active { background: #e52d27; color: white; font-weight: bold; }
    .content { flex-grow: 1; }
    .welcome { padding: 40px; background: #f9f9f9; border-radius: 8px; text-align: center; margin-top: 20px;}
  `]
})
export class AppComponent {
  categories = CATEGORIES;
  allProducts = [...PRODUCTS]; 
  selectedCategory: Category | null = null;
  filteredProducts: Product[] = [];

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.updateFilteredProducts();
  }

  updateFilteredProducts() {
    if (this.selectedCategory) {
      this.filteredProducts = this.allProducts.filter(
        p => p.categoryId === this.selectedCategory!.id
      );
    }
  }

  onProductDeleted(productId: number) {
    // Удаляем из общего массива
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
    // Обновляем отображаемый список
    this.updateFilteredProducts();
  }
}