export interface Product {
  active: boolean;
  img1: string;
  img2: string;
  brand: string;
  title: string;
  price: number;
  description: string;
  category: string;
  is_best_seller: boolean;
  Order_status: string;
  isOrdered: boolean;
  size?: string;
}


export type CartItemType = {
  id: number;
  title: string;
  price: number;
  img1: string;
  category: string;
  size: string;
  color: string;
  quantity: number;
};

