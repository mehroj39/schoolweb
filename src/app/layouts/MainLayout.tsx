import { Outlet } from "react-router-dom";
import Navbar from "../../Widgets/Navbar";
import Footer from "../../Widgets/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
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