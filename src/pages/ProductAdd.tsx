
// import { useForm, SubmitHandler } from "react-hook-form"
// import Product from "../types/Product"
// import { useNavigate } from "react-router-dom"

// type FormValue= {
//     title:string,
//     price:number
//      }
// type ProductAddProps={
//     onAdd:(product:Product)=>void
// }
// const ProductAdd = (props : ProductAddProps) => {
//     const {
//         register,// để lấy giá trị input
//         handleSubmit,
//         formState: { errors },
//       } = useForm<FormValue>();
//     const navigate = useNavigate();

//     const onSubmit: SubmitHandler<FormValue> = data => {
//         props.onAdd(data); 
//         navigate("/admin/products")
        
//     }
//   return (
//     <div className="max-w-md mx-auto my-8">
//   <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
//     <div className="mb-4">
//       <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="title">
//         Title
//       </label>
//       <input
//         type="text"
//         {...register('title', { required: true, minLength: 5 })}
//         className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
//         id="title"
//       />
//       {errors.title && errors.title.type === "required" && (
//         <p className="text-xs italic text-red-500">Title is required</p>
//       )}
//       {errors.title && errors.title.type === "minLength" && (
//         <p className="text-xs italic text-red-500">Title must be at least 5 characters</p>
//       )}
//     </div>
//     <div className="mb-4">
//       <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="price">
//         Price
//       </label>
//       <input
//         type="number"
//         {...register('price', { required: true })}
//         className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
//         id="price"
//       />
//       {errors.price && errors.price.type === "required" && (
//         <p className="text-xs italic text-red-500">Price is required</p>
//       )}
//     </div>
//     <div className="flex items-center justify-between">
//       <button
//         type="submit"
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//       >
//         Add
//       </button>
//     </div>
//   </form>
// </div>
//   )
// }

// export default ProductAdd
