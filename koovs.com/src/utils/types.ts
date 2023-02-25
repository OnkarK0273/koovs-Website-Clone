export interface Product {
  id: number;
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
  quantity: number;
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

export interface Userdetails {
  id: number;
  Name: number;
  Phone: number;
  Email: string;
  Image: string;
  Password: String;
  IsPrime: boolean;
  IsAuth: boolean;
  Address: string;
}

export interface Admin {
  id: number;
  Name: string;
  EmailId: string;
  Image: string;
  Phone: string;
  Password: string;
  isAuth: boolean;
}


// SIGNUP & LOGIN

export interface SignupDetail {
  fName: string,
  lName: string,
  email: string,
  password: string
}

export interface LoginDetail {
  email: string,
  password: string
}