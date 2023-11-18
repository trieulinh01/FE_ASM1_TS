import {  Outlet } from "react-router-dom";
import AsideLayout from "../../components/AsideLayout";



const AdminLayout = () => {
    return (
            <>
          <div className="flex flex-row ">
          <AsideLayout />
  <div className="flex-auto ">
    <div className="flex flex-col">
      <div className="flex flex-col h-24 p-2 bg-white drop-shadow-2xl">
        <div className="flex flex-row space-x-3">
          <h4 className="p-1 font-bold text-gray-500 ">Dashboard</h4>
        </div>
        <p className="p-1 text-gray-400">30th October 2020 | 1st November 2020</p>
      </div>
      <Outlet />
    </div>
  </div>
</div>
            </>
    );
  }
  export default AdminLayout 