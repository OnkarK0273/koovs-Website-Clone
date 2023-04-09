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
  Name: string;
  Phone: string;
  Email: string;
  Image: string;
  Password: string;
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
  isAdmin: boolean;
}


// SIGNUP & LOGIN

export interface SignupDetail {
  fName: string;
  lName: string;
  email: string;
  password: string;
  isAdmin: boolean
  phone?: string;
  address?: string;
  image?: string;
}

export interface LoginDetail {
  email: string;
  password: string;
  fName?: string;
  lName?: string;
  phone?: string;
  address?: string;
  image?: string;

}

export interface AdminLoginDetails {
  email: string;
  password: string;
  fName?: string;
  lName?: string;
  phone?: string;
  address?: string;
  image?: string;
  isAdmin: boolean
}

export interface LoginState {
  isLoading: boolean;
  isError: boolean;
  isAuth: boolean;
  email: string;
  fName?: string;
  lName?: string;
  
  
}


