import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WebsiteLayout = () => {
  return (
    <>
    
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
   
      <Footer />
      </footer>
      
    </>
   
  );
};

export default WebsiteLayout;