export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<string>;
  category: Category;
}

export interface Cart extends Product {
  quantity: number;
}
