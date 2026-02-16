import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13 128GB Midnight',
      description: 'Смартфон Apple iPhone 13 128Gb черный. Диагональ 6.1 дюйм. OLED дисплей.',
      price: 295000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      name: 'Xiaomi Redmi Note 13',
      description: 'Смартфон Xiaomi Redmi Note 13 8GB/256GB черный. Отличная камера и батарея.',
      price: 88000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h9d/84526902771742.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-8-gb-256-gb-chernyi-115449882/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'Беспроводные наушники Apple AirPods Pro 2 с USB-C. Активное шумоподавление.',
      price: 108000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая приставка Sony PlayStation 5 Slim. Объем памяти 1000 ГБ.',
      price: 240000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5d/h03/84558509801502.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5d/h03/84558509801502.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696087/'
    },
    {
      id: 5,
      name: 'Apple MacBook Air 13',
      description: 'Ноутбук Apple MacBook Air 13 2020 8 ГБ/256 ГБ SSD. Процессор M1.',
      price: 420000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mggn3-seryi-100797845/'
    },
    {
      id: 6,
      name: 'Умная колонка Яндекс Станция Лайт',
      description: 'Умная колонка с Алисой. Компактная, яркая и мощная.',
      price: 22000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/84656910794782.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h65/h41/84656910794782.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/yandex-stantsija-lait-fioletovyi-101807755/'
    },
    {
      id: 7,
      name: 'Кофемашина DeLonghi Dedica',
      description: 'Рожковая кофеварка эспрессо. Металлический корпус, компактный дизайн.',
      price: 89000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h6a/63826079940638.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h6a/63826079940638.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/delonghi-dedica-ec-685-m-serebristyi-11679018/'
    },
    {
      id: 8,
      name: 'Samsung Galaxy Watch 6',
      description: 'Смарт-часы Samsung Galaxy Watch 6 44 мм. Мониторинг здоровья и сна.',
      price: 115000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/h58/82823620886558.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h60/h58/82823620886558.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-44-mm-grafit-112368739/'
    },
    {
      id: 9,
      name: 'Пылесос Deerma DX700',
      description: 'Вертикальный пылесос 2-в-1. Мощное всасывание, легкий вес.',
      price: 15000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/'
    },
    {
      id: 10,
      name: 'Планшет Samsung Galaxy Tab A9',
      description: 'Планшет 8.7 дюймов, 4/64 GB. Идеален для фильмов и учебы.',
      price: 65000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h54/84180415381534.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h42/h54/84180415381534.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-8-7-4-gb-64-gb-serebristyi-113941490/'
    }
  ];
}