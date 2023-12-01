

type Product = {
    _id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rate:number
  };


  export type ProductFormParams = Omit<Product, "_id" | "category"> & {
    category: string;
  };

  export default Product