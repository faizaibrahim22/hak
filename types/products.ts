export interface Product {
  _id: string;
  productsName: string;
  _type: "Product";
  image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  price: number;
  description?: string; 
  quantity?: number; 
  Features?:string
}
