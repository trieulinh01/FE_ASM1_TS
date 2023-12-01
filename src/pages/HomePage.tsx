import { useEffect, useState } from "react";
import Product from "../types/Product";

import ProductList from "../components/ProductList";
import axios from "axios";

const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get('/products');
      setProductList(data);
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      
      <ProductList products={productList.slice(0, 8)} />
    </div>
  );
};

export default HomePage;