
import { useEffect, useState } from "react";
import Product from "../types/Product"
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const [product, setProduct] = useState<Product>();

  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { id } = useParams();
  //console.log(id);
  const fetchProduct = async () => {
    const { data } = await axios(`/products/${id}`);
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);
  
  const fetchRelatedProducts = async (category: string) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      //console.log(response)
      const data = await response.json();
      //console.log(data);
      const filteredProducts = data.filter((relatedProduct: Product) => relatedProduct._id !== String(id));
      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    if (product) {
      fetchRelatedProducts(product.category);
    }
  }, [product, id]);
  
    return (
    <div>
     {product && ( <section className="overflow-hidden text-gray-700 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap mx-auto lg:w-4/5">    
          <img
            alt="ecommerce"
            className="object-cover object-center w-full border border-gray-200 rounded hover:opacity-50 lg:w-1/2"
            src={product.image}
          />
          <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="text-sm tracking-widest text-gray-500 title-font">
              Linh'Store
            </h2>
            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
            {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-3 text-gray-600">4 Reviews</span>
              </span>
              <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
            {product.description}
            </p>
            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-200">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none" />
                <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none" />
                <button className="w-6 h-6 ml-1 bg-red-500 border-2 border-gray-300 rounded-full focus:outline-none" />
              </div>
              <div className="flex items-center ml-6">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="py-2 pl-3 pr-10 text-base border border-gray-400 rounded appearance-none focus:outline-none focus:border-red-500">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="text-2xl font-medium text-gray-900 title-font">
                ${product.price}
              </span>
              <button className="flex px-6 py-2 ml-auto text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600">
                Button
              </button>
              <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
  

{relatedProducts.length > 0 && (
        <section className="mt-8">
        
         
          <div className="grid justify-center grid-cols-1 mx-auto mt-10 mb-5 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14">
            {relatedProducts.map((relatedProduct: Product) => (
              <div key={relatedProduct._id} >
               
  <div className="duration-500 bg-white shadow-md w-72 rounded-xl hover:scale-105 hover:shadow-xl">
  <a href="#">
    <img src={relatedProduct.image} alt="Product" className="object-cover h-80 w-72 rounded-t-xl" />
    <div className="px-4 py-3 w-72">
      <span className="mr-3 text-xs text-gray-400 uppercase">Linh'Store</span>
      <p className="block text-lg font-bold text-black capitalize truncate">{relatedProduct.title}</p>
      <div className="flex items-center">
        <p className="my-3 text-lg font-semibold text-black cursor-auto">${relatedProduct.price}</p>
       
        <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg></div>
      </div>
    </div>
  </a>
</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
    
     )}
     </div>
    );
  }
  export default DetailPage