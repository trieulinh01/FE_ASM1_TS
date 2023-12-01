import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

type ProductFormParams = {
  title: string;
  category: string;
  image: string;
  price: number;
  rate: number;
  description: string;
};
const AdminCreateProduct = () => {
  const navigate = useNavigate();
  const [productAdd, setProductAdd] = useState<ProductFormParams>({
    title: "",
    category: "",
    image: "",
    price: 0,
    rate: 0,
    description: "",
  });
  const [errors, setErrors] = useState<Partial<ProductFormParams>>({});

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductAdd({ ...productAdd, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: undefined }); 
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProductFormParams> = {};
    if (!productAdd.title.trim()) {
      newErrors.title = "Title is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      // Validation failed
      return;
    }

    try {
      await axios.post("/products", productAdd);
      toast.success("Add Product Successful!");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Add Product Failed! - " + error);
      console.log(error);
    }
  };
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form onSubmit={handleSubmitForm}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Title
              </label>
              <input
                value={productAdd.title}
                onChange={handleChangeForm}
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product title"
              />
            <p className="text-red-500">  {errors.title && <p>{errors.title}</p>}</p>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Image
              </label>
              <input
                value={productAdd.image}
                onChange={handleChangeForm}
                type="text"
                name="image"
                id="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product Image"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                value={productAdd.category}
                onChange={handleChangeForm}
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product Category"
              />
                <p className="text-red-500">{errors.category && <p>{errors.category}</p>}</p>
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                value={productAdd.price}
                onChange={handleChangeForm}
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
              />
            </div>
            <p className="text-red-500">
            {errors.price && <p>{errors.price}</p>}
            </p>
            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Rate
              </label>
              <input
                value={productAdd.rate}
                onChange={handleChangeForm}
                type="number"
                name="rate"
                id="rate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            </div>
            {errors.rate && <p>{errors.rate}</p>}
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                value={productAdd.description}
                onChange={handleChangeForm}
                name="description"
                id="description"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminCreateProduct;