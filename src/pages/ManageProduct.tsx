import { useEffect, useState } from 'react';
import Product from '../types/Product';
import { list } from '../api/product';
import axios from 'axios';
import { toast } from 'react-toastify';


const ManageProduct = () => {

  const [ProductList, setProductList] = useState<Product[]>([]);

  const fetchProduct = async () => {
    try {
      const { data } = await list();
      setProductList(data);
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };
  console.log(ProductList);
  useEffect(() => {
    fetchProduct();
  }, []);
  const handleRemove=async (id:string) => {
    try{
      await axios.delete(`/products/${id}`);
      fetchProduct();
      toast.success('Product removed successfully')
    }catch (error) {
      toast.error("Error fetching product list"+error);
    }
  }
  return (
   

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
    {ProductList.map((ProductItem,index)=>{
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
        <td className="px-6 py-4">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
        <button onClick={()=>handleRemove(ProductItem.id)} className="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">
         Remove
        </button>
      </tr>
      )
    }
    )}

      
    </tbody>
  </table>
</div>


  )
}

export default ManageProduct
