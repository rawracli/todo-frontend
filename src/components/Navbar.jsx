import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full top-0 left-0 z-50 pt-0.5">
      <div className="flex items-center justify-between py-2 px-6 md:items-start">
        {/* Logo & Hamburger */}
        <div className="flex items-center justify-between w-full">
          <div className="font-semibold text-3xl text-yellow-400 ml-4">
            <img src="logo.png" alt="" srcset="" className="w-12" />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden justify-center md:flex w-full items-center">
          <div className="py-2 bg-white rounded-2xl md:flex">
            <div className="transition px-2 border-r border-gray-200">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-sky-50 text-black text-xl px-3 py-1 rounded-box transition"
                    : "hover:bg-gray-50 text-black text-xl px-3 py-1 rounded-box transition"
                }
              >
                Home
              </NavLink>
            </div>

            <div className="transition px-2 border-r border-l border-gray-200">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-sky-50 text-black text-xl px-3 py-1 rounded-box transition"
                    : "hover:bg-gray-50 text-black text-xl px-3 py-1 rounded-box transition"
                }
              >
                About
              </NavLink>
            </div>

            <div className="transition px-2 border-l border-gray-200">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-sky-50 text-black text-xl px-3 py-1 rounded-box"
                    : "hover:bg-gray-50 text-black text-xl px-3 py-1 rounded-box transition"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden justify-end md:flex w-full space-x-2">
          <div>
            <NavLink
              to="/login"
              className="bg-gray-200 text-black px-2.5 py-0.5 rounded-sm hover:bg-sky-100 transition"
            >
              Login
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/register"
              className="bg-sky-200 text-black text-lg px-3 py-1 rounded-sm hover:bg-sky-300 transition"
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-3">
          <NavLink to="/" className="block text-black hover:text-yellow-400">
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-black hover:text-yellow-400"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-black hover:text-yellow-400"
          >
            Contact
          </NavLink>
          <div className="flex flex-col pt-1">
            <NavLink
              to="/login"
              className="flex-1 text-center bg-yellow-400 text-black px-4 py-2 rounded-sm hover:bg-yellow-500 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="flex-1 mt-4 text-center bg-gray-600 text-black px-4 py-2 rounded-sm hover:bg-gray-700 transition"
            >
              Daftar
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
