import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const handleClickMenu = async () => {
    await setHiddenMenu(!hiddenMenu);
  };

  return (
    // Navbar goes here
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Website Logo  */}
            <div className="">
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-pink-500 text-2xl">
                  {"</>"} The Judas Blog
                </span>
              </Link>
            </div>
          </div>
          {/* Secondary Navbar items  */}
          <div className="hidden md:flex items-center space-x-3 ">
            <Link
              to="/"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/create"
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              New Blog
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleClickMenu}
            >
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="md:hidden mobile-menu" hidden={hiddenMenu}>
        <ul className="">
          <li>
            <Link
              to="/"
              className="block text-sm px-2 py-4 text-gray-600 font-semibold hover:bg-green-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="block text-sm px-2 py-4 text-gray-600 font-semibold hover:bg-green-500 transition duration-300"
            >
              New Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
