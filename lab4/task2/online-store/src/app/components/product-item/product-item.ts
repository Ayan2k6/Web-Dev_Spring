import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input() product!: Product;

  // Логика для галереи
  currentImageIndex: number = 0;

  nextImage() {
    if (this.currentImageIndex < this.product.images.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  setImage(index: number) {
    this.currentImageIndex = index;
  }

  // Логика для шеринга
  share(platform: string) {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Посмотри на этот товар: ${this.product.name}`);
    
    let shareUrl = '';
    
    if (platform === 'whatsapp') {
      shareUrl = `https://wa.me/?text=${text}%20${url}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    }

    window.open(shareUrl, '_blank');
  }
}