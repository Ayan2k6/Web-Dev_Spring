import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <img [src]="product().imageUrl" [alt]="product().name" class="product-img">
      
      <div class="product-info">
        <h3><a [href]="product().link" target="_blank">{{ product().name }}</a></h3>
        <p class="description">{{ product().description }}</p>
        
        <div class="stats">
          <span class="rating">⭐ {{ product().rating }}</span>
          <span class="price">{{ product().price | number }} ₸</span>
        </div>

        <div class="actions">
          <button class="btn-like" (click)="like()">
            ❤️ {{ product().likes }}
          </button>
          
          <div class="share-links">
            <a [href]="getShareLink('whatsapp')" target="_blank" class="share-btn wa">WhatsApp</a>
            <a [href]="getShareLink('telegram')" target="_blank" class="share-btn tg">Telegram</a>
          </div>

          <button class="btn-delete" (click)="onDelete()">
            🗑️ Удалить
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card { border: 1px solid #ddd; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; align-items: center; transition: box-shadow 0.3s; background-color: #fff; }
    .product-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .product-img { width: 150px; height: 150px; object-fit: contain; margin-bottom: 12px; }
    .product-info { width: 100%; display: flex; flex-direction: column; gap: 8px; }
    h3 { margin: 0; font-size: 1.1rem; }
    h3 a { text-decoration: none; color: #e52d27; }
    .description { color: #666; font-size: 0.9rem; margin: 0; }
    .stats { display: flex; justify-content: space-between; font-weight: bold; }
    .actions { display: flex; flex-direction: column; gap: 8px; margin-top: 12px; }
    .btn-like { background: #ffebee; color: #d32f2f; border: none; padding: 8px; border-radius: 4px; cursor: pointer; font-weight: bold; }
    .btn-like:hover { background: #ffcdd2; }
    .btn-delete { background: #f44336; color: white; border: none; padding: 8px; border-radius: 4px; cursor: pointer; }
    .btn-delete:hover { background: #d32f2f; }
    .share-links { display: flex; gap: 8px; }
    .share-btn { flex: 1; text-align: center; padding: 6px; text-decoration: none; border-radius: 4px; color: white; font-size: 0.8rem; }
    .wa { background: #25D366; }
    .tg { background: #0088cc; }
  `]
})
export class ProductItemComponent {
  product = input.required<Product>();
  remove = output<number>();

  like() {
    this.product().likes++;
  }

  onDelete() {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
      this.remove.emit(this.product().id);
    }
  }

  getShareLink(platform: string): string {
    const text = encodeURIComponent(`Смотри, что я нашел: ${this.product().name} `);
    const url = encodeURIComponent(this.product().link);
    return platform === 'whatsapp' 
      ? `https://api.whatsapp.com/send?text=${text}${url}`
      : `https://t.me/share/url?url=${url}&text=${text}`;
  }
}