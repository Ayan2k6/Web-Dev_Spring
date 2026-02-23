import { Category, Product } from './models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Smartphones' },
  { id: 2, name: 'Laptops' },
  { id: 3, name: 'Headphones' },
  { id: 4, name: 'Tablets' }
];

export const PRODUCTS: Product[] = [
  // Smartphones (Category 1)
  { id: 1, categoryId: 1, name: 'Apple iPhone 15 Pro Max', description: '256GB, Titanium', price: 728571, rating: 5.0, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/' },
  { id: 2, categoryId: 1, name: 'Samsung Galaxy S24 Ultra', description: '256GB, Titanium Black', price: 649980 , rating: 4.9, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/' },
  { id: 3, categoryId: 1, name: 'Xiaomi 14', description: '12GB/512GB, Black', price: 213540, rating: 4.8, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p87/67214848.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-14-pro-12-gb-512-gb-chernyi-134217937/?c=750000000' },
  { id: 4, categoryId: 1, name: 'Google Pixel 8 Pro', description: '128GB, Obsidian', price: 420000, rating: 4.7, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h8f/85986943762462.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000' },
  { id: 5, categoryId: 1, name: 'OnePlus 12', description: '16GB/512GB, Green', price: 400000, rating: 4.8, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000' },

  // Laptops (Category 2)
  { id: 6, categoryId: 2, name: 'Apple MacBook Air 15', description: 'M2, 8GB/256GB', price: 650000, rating: 5.0, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p50/p93/50367860.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2025-16-gb-ssd-256-gb-macos-mc7a4-141775775/?c=750000000' },
  { id: 7, categoryId: 2, name: 'ASUS ROG Strix G16', description: 'Intel i7, RTX 4060', price: 750000, rating: 4.9, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-16-16-gb-ssd-1000-gb-dos-g614jv-n4071-90nr0c61-m005r0-109460263/?c=750000000' },
  { id: 8, categoryId: 2, name: 'Lenovo Legion Pro 5', description: 'Ryzen 7, RTX 4070', price: 800000, rating: 4.8, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p36/53999447.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-5-16irx10-16-32-gb-ssd-1000-gb-bez-os-83nn001krk-142787523/?c=750000000' },
  { id: 9, categoryId: 2, name: 'Acer Swift 3', description: 'Intel i5, 8GB/512GB', price: 300000, rating: 4.5, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha0/84623547727902.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/acer-swift-x-16-16-gb-ssd-1024-gb-dos-sfx16-61g-nx-kfper-001-115029075/?c=750000000' },
  { id: 10, categoryId: 2, name: 'HP Envy x360', description: 'Ryzen 5, 16GB/512GB', price: 400000, rating: 4.6, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h18/84480362872862.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/hp-envy-x360-13-3-16-gb-ssd-512-gb-win-11-13-bf0026ci-809p4ea-114483216/?c=750000000' },

  // Headphones (Category 3)
  { id: 11, categoryId: 3, name: 'Apple AirPods Pro 2', description: 'Active Noise Cancellation', price: 120000, rating: 5.0, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000' },
  { id: 12, categoryId: 3, name: 'Sony WH-1000XM5', description: 'Over-Ear, ANC', price: 180000, rating: 4.9, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000' },
  { id: 13, categoryId: 3, name: 'Samsung Galaxy Buds 2 Pro', description: 'TWS, ANC', price: 750000, rating: 4.8, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hb0/64157509746718.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-2-zelenyi-102046357/?c=750000000' },
  { id: 14, categoryId: 3, name: 'Marshall Major IV', description: '80+ hours wireless playtime', price: 65000, rating: 4.7, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000' },
  { id: 15, categoryId: 3, name: 'Sennheiser Momentum 4', description: 'Over-Ear, Premium Sound', price: 160000, rating: 4.8, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/hde/84609205698590.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-4-chernyi-114975824/?c=750000000' },

  // Tablets (Category 4)
  { id: 16, categoryId: 4, name: 'Apple iPad Pro 11', description: 'M2, 128GB, Wi-Fi', price: 450000, rating: 5.0, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000' },
  { id: 17, categoryId: 4, name: 'Samsung Galaxy Tab S9', description: '11", 128GB, Wi-Fi', price: 420000, rating: 4.9, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000' },
  { id: 18, categoryId: 4, name: 'Apple iPad Air 5', description: 'M1, 64GB, Wi-Fi', price: 320000, rating: 4.8, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium', link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000' },
  { id: 19, categoryId: 4, name: 'Xiaomi Pad 6', description: '11", 128GB, Wi-Fi', price: 180000, rating: 4.7, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000' },
  { id: 20, categoryId: 4, name: 'Lenovo Tab P11 Gen 2', description: '11.5", 128GB, Wi-Fi', price: 150000, rating: 4.5, likes: 0, imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium', link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000' }
];