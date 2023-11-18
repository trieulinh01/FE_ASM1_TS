export default function Footer(){
    return (
<>
<hr className="w-full h-3" />
<footer id="footer">
  <div className="footer-top">
    <div className="footer-left">
      <div className=" footer-logo">
        <img className="rounded-full" src="/logo.png"  />
      </div>
      <div className="card_1">
        <h3>CÔNG TY CP TM&amp;DV TACO VIỆT NAM</h3>
        <div>
          <i className="fa-sharp fa-solid fa-location-pin" />
          <p>
            Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng,
            Hà Nội.
          </p>
        </div>
        <div>
          <i className="fa-solid fa-phone-flip" />
          <p>1900.63.69.36</p>
        </div>
        <div>
          <i className="fa-solid fa-envelope" />
          <p>info@tocotocotea.com</p>
        </div>
        <p>Số ĐKKD: 0106341306. Ngày cấp: 16/03/2017.</p>
        <p>Nơi cấp: Sở kế hoạch và Đầu tư Thành phố Hà Nội.</p>
        <div className="icons">
          <i className="fa-brands fa-square-facebook" />
          <i className="fa-brands fa-square-instagram" />
          <i className="fa-brands fa-youtube" />
          <i className="fa-brands fa-square-twitter" />
          <i className="fa-brands fa-google-plus" />
        </div>
        <div className="images">
          <div className="image">
            <img src="/footer_googleplay.png"  />
          </div>
          <div className="image">
            <img src="/footer_appstore.png"  />
          </div>
        </div>
        <div className="image_3 image">
          <img src="/footer_thongbao.png"  />
        </div>
      </div>
    </div>
    <div className="footer-right">
      <div className="card_2">
        <h3>VỀ CHÚNG TÔI</h3>
        <a href="#">Giới thiệu về TocoToco</a>
        <a href="NhuongQuyen.html">Nhượng quyền</a>
        <a href="TinTuc_TTKM.html">Tin tức khuyến mại</a>
        <a href="CuaHang.html">Cửa hàng</a>
        <a href="#">Quy định chung</a>
        <a href="#">TT liên hệ &amp; ĐKKD</a>
      </div>
      <div className="card_3">
        <h3>CHÍNH SÁCH</h3>
        <a href="#">Chính sách thành viên</a>
        <a href="#">Hình thức thanh toán</a>
        <a href="#">Vận chuyển giao nhận</a>
        <a href="#">Đổi trả và hoàn tiền</a>
        <a href="#">Bảo vệ thông tin cá nhân</a>
        <a href="#">Bảo trì, bảo hành</a>
      </div>
    </div>
  </div>
  {/* footer section ends */}
  <section className="contact">
    <hr />
    <div className="contact-info">
      <h3>
        ToCoToCo - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản Việt
        Nam
      </h3>
      <p>Copyrights © 2019 by ToCoToCoTea. All rights reserved.</p>
    </div>
  </section>
</footer>

</>


    )
}