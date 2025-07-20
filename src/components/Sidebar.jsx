import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthController from "../controllers/AuthController";
import Swal from "sweetalert2";

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  const activeClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition text-white bg-yellow-400";
  const baseClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg mb-2 hover:text-yellow-800 transition text-white hover:bg-yellow-200";

  const logout = AuthController((state) => state.logout);
  const navigate = useNavigate();
  const user = AuthController((state) => state.user);

  const handleLogout = async () => {
    try {
      await logout();
      await navigate("/");
      Swal.fire({
        icon: "success",
        title: "Berhasil Logout",
        text: "Anda berhasil logout",
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Gagal Logout",
        text: "Silakan coba lagi",
      });
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 md:pt-6 bg-gray-900 flex flex-col justify-between z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } xl:translate-x-0`}
    >
      <div>
        {/* Tombol close (mobile only) */}
        <div className="flex justify-end xl:hidden p-4">
          <button onClick={onClose} className="text-white text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col items-center px-4 mb-6">
          <img
            src={
              user?.avatar
                ? `${import.meta.env.VITE_API_URL_IMAGE}/storage/${user.avatar}`
                : "/src/assets/profile-default.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400 mb-2"
          />
          <p className="text-white font-medium text-sm">
            Hallo, {user?.name || ""}
          </p>
        </div>

        <nav className="px-4">
          <Link
            to="/dashboard"
            className={
              location.pathname === "/dashboard" ? activeClass : baseClass
            }
          >
            <i className="fa-regular fa-home"></i> Dashboard
          </Link>
          <Link
            to="/todo-list"
            className={
              location.pathname === "/todo-list" ||
              location.pathname.startsWith("/todo-list-detail")
                ? activeClass
                : baseClass
            }
          >
            <i className="fa-regular fa-notebook"></i> Todo List
          </Link>
          <Link
            to="/profile"
            className={
              location.pathname === "/profile" ? activeClass : baseClass
            }
          >
            <i className="fa-regular fa-user"></i> Profile
          </Link>
          <Link
            to="/setting"
            className={
              location.pathname === "/setting" ? activeClass : baseClass
            }
          >
            <i className="fa-regular fa-gear"></i> Setting
          </Link>
        </nav>
      </div>

      <div className="px-4 pb-6">
        <button
          className="w-full gap-3 px-4 py-3 rounded-lg bg-red-400 text-red-800 hover:text-red-950 hover:bg-red-500 transition"
          onClick={handleLogout}
        >
          <i className="fa-regular fa-left-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
