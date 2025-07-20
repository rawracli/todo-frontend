import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between py-5 px-6">
        {/* Logo & Hamburger */}
        <div className="flex items-center justify-between w-full">
          <div className="font-semibold text-3xl text-yellow-400"><img src="logo.png" alt="" srcset="" className="w-12"/></div>
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
          <div className="hidden justify-center md:flex space-x-6 w-full items-center">
            <Link
              to="/"
              className="text-black hover:text-yellow-400 transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-black hover:text-yellow-400 transition"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-black hover:text-yellow-400 transition"
            >
              Contact
            </Link>
          </div>

        {/* Desktop Buttons */}
        <div className="hidden justify-end md:flex w-full space-x-2">
          <Link
            to="/login"
            className="bg-yellow-400 text-black px-4 py-1 rounded-sm hover:bg-yellow-500 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-gray-600 text-black px-4 py-1 rounded-sm hover:bg-gray-700 transition"
          >
            Daftar
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-3">
          <Link to="/" className="block text-black hover:text-yellow-400">
            Home
          </Link>
          <Link to="/about" className="block text-black hover:text-yellow-400">
            About
          </Link>
          <Link
            to="/contact"
            className="block text-black hover:text-yellow-400"
          >
            Contact
          </Link>
          <div className="flex flex-col pt-1">
            <Link
              to="/login"
              className="flex-1 text-center bg-yellow-400 text-black px-4 py-2 rounded-sm hover:bg-yellow-500 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 mt-4 text-center bg-gray-600 text-black px-4 py-2 rounded-sm hover:bg-gray-700 transition"
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
