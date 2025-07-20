import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PageTitle from "../routes/PageTitle";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function DashboardLayout() {
  PageTitle();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-950">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Konten utama */}
      <div className="flex-1">
        {/* Navbar Mobile */}
        <div className="bg-gray-900 text-white px-6 md:px-10 py-4 xl:hidden flex justify-between items-center sticky top-0 z-40 shadow-md">
          <button onClick={() => setSidebarOpen(true)} className="text-2xl">
            <i className="fa-solid fa-bars"></i>
          </button>
          <span className="text-yellow-400 font-semibold text-xl">TodoBee</span>
        </div>

        {/* Main Content */}
        <main className="py-6 px-6 md:px-10 xl:ml-64 transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
