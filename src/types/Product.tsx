type Rate={
    rating: {
        rate: number;
        count: number;
      }
}

type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating:Rate
  };



  export default Product