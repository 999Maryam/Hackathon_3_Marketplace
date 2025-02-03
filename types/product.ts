export interface Product {
  inventory: number;
  category: string;
  id: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath: string;
  discountPercentage: number;
  isFeaturedProduct: number;
  name: string;
  image: any;
  _id: string;
  sizes:string[]; 
  slug : {
    _slug : string;
    current : string;
  }
}