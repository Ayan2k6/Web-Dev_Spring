export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;     // Ссылка на главное изображение
  images: string[];  // Массив ссылок для галереи
  link: string;      // Ссылка на Kaspi
}