import { Link } from "react-router-dom";
const AsideLayout = () => {
  return (
  <div className="flex flex-col justify-between min-h-screen px-2 py-4 space-y-5 w-60 bg-gray-50">
  <Link to={'/admin'} className="flex items-center justify-between px-5 text-3xl text-gray-600 "><b>Dashboard</b></Link>
  <div className="flex flex-col flex-auto">
  <div className="p-2 hover:bg-pink-100 ">
      <div className="flex flex-row space-x-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-500 " viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        < Link to={'/admin/products'}><h4 className="font-bold text-gray-500 hover:text-pink-600 ">List Product</h4></Link>
      </div>
    </div>
    <div className="p-2 hover:bg-pink-100">
      <div className="flex flex-row space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
       < Link to={'/admin/products/add'}><h4 className="font-bold text-gray-500 hover:text-pink-600 ">Add Product</h4></Link>
      </div>
    </div> 
    <div className="p-2 hover:bg-pink-100">
      <div className="flex flex-row space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        <Link to={'/admin/products/edit'}  className="font-bold text-gray-500 hover:text-pink-600 " ><b>Edit</b></Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col mb-36">
    <Link to={'/'} className="py-2 text-lg font-bold text-center text-white bg-pink-500 rounded-full">Trang chủ</Link>
  </div>
</div>
  )
}
export default AsideLayout
