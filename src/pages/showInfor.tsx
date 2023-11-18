
export default function ShowInfor(){
    return (
     <div className=" card shadow-2xl bg-[url('https://imbd.edu.vn/wp-content/uploads/2023/10/avatar-dep-2.jpg')] bg-[length:450px_200px] bg-no-repeat max-w-md mx-auto flex justify-center bg-white  rounded-xl p-6 mt-10 ">
  <div className="content">
    <div className="font">
      <div className="relative p-1 mx-auto mt-24 bg-pink-500 rounded-full shadow-xl w-36 h-36">
        <img src="https://i.pinimg.com/originals/4a/55/76/4a55768adc5e9c5bad96afcfb37a1707.jpg"className="w-full h-full rounded-full " />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-pink-400">Triệu Thị Khánh Linh</h2>
        <p className="text-gray-500">09/06/2003</p>
        <div className="flex justify-around mt-4">
          <div>
            <h3 className="text-xl font-bold text-blue-500">12</h3>
            <h4 className="text-gray-500 ">Followers</h4>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500">1000</h3>
            <h4 className="text-gray-500">Following</h4>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-yellow-400 rounded-full text-white px-4 py-2 w-[80%] my-4 hover:bg-pink-200 transition duration-300 font-bold text-lg ">Follow</button>
        </div>
        <p className="text-gray-500">
          Quê quán: Lập Thạch-Vĩnh Phúc <br />
          Định hướng : Lập trình Fontend <br />
          Ngôn ngữ đã học: JavaScript
        </p>
      </div>
      <div className="back">
        <img src="https://vnkings.com/wp-content/uploads/2020/06/df47bd458bf9c7b5e55a8c248cacde0e.jpg" />
      </div>
    </div>
  </div>
</div>
    )
}