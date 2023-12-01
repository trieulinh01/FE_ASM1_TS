import { useEffect, useState } from "react";
import  Product  from "../types/Product";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ManageProduct = () => {
  
  const navigate = useNavigate();
  const [productList, setProductList] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/products");
      setProductList(data);
    } catch (error) {
      console.log(error);
      toast.error("Get Product List Failed - " + error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");
    fetchProducts();
  }, []);
  const handleRemoveProduct = async (id: string) => {
    try {
      // confirm dialog
      if (confirm("Do you really remove product?")) {
        await axios.delete(`/products/${id}`);
        fetchProducts();
        toast.success("Delete Successfull - " + id);
      }
    } catch (error) {
      toast.error("Delete Failed - " + error);
    }
  };

  return (
   
<>
<Link to={"/admin/products/create"}>
        <button className="px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Create New Product
        </button>
</Link>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">

  <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Color
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
    {productList.map((ProductItem,index)=>{
      return (
        <tr key={index} className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
        {ProductItem.title}
        </th>
        <td className="px-6 py-4">
        {ProductItem.description}
        </td>
        <td className="px-6 py-4">
        {ProductItem.category}
        </td>
        <td className="px-6 py-4">
        {ProductItem.price}
        </td>
        <td className="flex px-6 py-4">
        <Link to={`/admin/products/edit/${ProductItem._id}`}>
                      <button className="w-10 py-2 mb-4 ml-2 text-white bg-green-500 rounded dark:text-red-500 hover:underline hover:bg-blue-700">
                        Edit
                      </button>
                    </Link>
  <button onClick={() => handleRemoveProduct(ProductItem._id)} className="py-2 mb-4 ml-2 text-white bg-red-500 rounded dark:text-red-500 hover:underline hover:bg-blue-700">
    Remove
  </button>
</td>
      </tr>
      )
    }
    )}

      
    </tbody>
  </table>
</div>
</>

  )
}

export default ManageProduct
