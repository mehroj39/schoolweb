import { Outlet } from "react-router-dom";
import Navbar from "../../Widgets/Navbar";
import Footer from "../../Widgets/Footer";
import ScrollToTop from "../../Widgets/ScrollToTop"; // 🔥 qo‘shildi

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <ScrollToTop /> {/* 🔥 SHU HAL QILADI MUAMMONI */}

      {/* HEADER */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default MainLayout;