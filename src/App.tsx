import { BrowserRouter , Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import Dashboard from "./pages/Dashboard";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import AdminLayout from "./pages/layouts/AdminLayout";
import ShowInfor from "./pages/showInfor";
import './App.css';
// import ProductAdd from "./pages/ProductAdd";
import SignUp from "./pages/SignUp";
// import Product from "./types/Product";
// import { useEffect, useState } from "react";
// import { list } from "./api/product";
import ManageProduct from "./pages/ManageProduct";


function App() {
//   const [products, setProducts] = useState<Product[]>([]);
  // useEffect(() => {
  //   const getProducts = async () => {
  //       const { data } = await list();
  //       setProducts(data);
  //   };
  //   getProducts();
  // }, [])
//   const OnHandleAdd=(product:Product)=>{
//  console.log('app.js',product)
//  setProducts([...products,product]);
//   }
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/infor" element={<ShowInfor />} />
            <Route path="/products/:id" element={<DetailPage />} />
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/products/"  element={<ManageProduct/>} />
          {/* <Route path="/admin/products/add"  element={<ProductAdd onAdd={OnHandleAdd}/>} /> */}
          </Route>
          </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;