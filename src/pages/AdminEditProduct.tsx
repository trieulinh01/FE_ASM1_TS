import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import  Product from "../types/Product";
import { Category } from "../types/Category";
import { useEffect, useState } from "react";
type ProductFormParams = {
    title: string;
    category: string;
    image: string;
    price: number;
    rate: number;
    description: string;
  };
const AdminEditProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [productEdit, setProductEdit] = useState<ProductFormParams>({
    title: "",
    category: "",
    image: "",
    price: 0,
    rate: 0,
    description: "",
  });

  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [errors, setErrors] = useState<Partial<ProductFormParams>>({});
 console.log(categoryList);
 
  const fetchProductAndCategoryList = async (id: string) => {
    try {
      const [ { data: productRes }] = await Promise.all([
        // axios.get("/categories"),
        axios.get(`/products/${id}`),
      ]);
      // setCategoryList(categoriesRes);
      setProductDetail(productRes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!productDetail) return;
    const { title, image, description, rate, price, category } = productDetail;
    setProductEdit({
      title,
      image,
      description,
      rate,
      price,
      category: category,
    });
  }, [productDetail]);

  useEffect(() => {
    if (!productId) return;
    fetchProductAndCategoryList(productId);
  }, []);

  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setProductEdit({ ...productEdit, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: undefined }); // Clear previous errors
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ProductFormParams> = {};
    if (!productEdit.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { data } = await axios.put(`/products/${productId}`, productEdit);
      toast.success("Update Product Successful!", data.title);
      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      toast.error("Update Product Failed!");
    }
  };

        return (
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
              <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                Update Product
              </h2>
              <form onSubmit={handleSubmitForm}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Title
                    </label>
                    <input
                      value={productEdit.title}
                      onChange={handleChangeForm}
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product name"
                    />
                    <div className="text-red-500">
        {errors.title && <p>{errors.title}</p>}
   
      </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="image"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Image
                    </label>
                    <input
                      value={productEdit.image}
                      onChange={handleChangeForm}
                      type="text"
                      name="image"
                      id="image"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Type product image"
                      />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Product Description
                        </label>
                        <input
                          value={productEdit.description}
                          onChange={handleChangeForm}
                          type="text"
                          name="description"
                          id="description"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Type product description"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="category"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Category
                        </label>
                        <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <input
                value={productEdit.category}
                onChange={handleChangeForm}
                type="text"
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product Category"
              />
            </div>
                        </div>
          <div className="w-full">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              value={productEdit.price}
              onChange={handleChangeForm}
              type="number"
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$2999"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="rate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rate
            </label>
            <input
              value={productEdit.rate}
              onChange={handleChangeForm}
              type="number"
              name="rate"
              id="rate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="5*"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
              Update product
        </button>
      </form>
    </div>
  );
};
export default AdminEditProduct;