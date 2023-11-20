import { useEffect, useState } from "react";
import Product from "../types/Product";
import { list } from "../api/product";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProduct = async () => {
    try {
      const { data } = await list();
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