import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/serviceReview.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const { user, logout } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  useEffect(() => {
    setDisplayName(user?.displayName || "");
  }, [user]);

  return (
    <nav className="navbar bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-3 px-4 lg:px-12 shadow-lg dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-box w-52">
            <li>
              <NavLink to="/" className="hover:text-indigo-600 dark:hover:text-yellow-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-indigo-600 dark:hover:text-yellow-400">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/forum" className="hover:text-indigo-600 dark:hover:text-yellow-400">
                Community Forum
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-indigo-600 dark:hover:text-yellow-400">
                Contact
              </NavLink>
            </li>
            <li>
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                {theme === "light" ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-400" />}
              </button>
            </li>
          </ul>
        </div>
        <Link to="/" className="w-16 h-16">
          <img src={logo} className="w-full h-full rounded-full" alt="Logo" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink to="/" className="hover:text-yellow-300 dark:hover:text-yellow-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="hover:text-yellow-300 dark:hover:text-yellow-400">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/forum" className="hover:text-yellow-300 dark:hover:text-yellow-400">
              Community Forum
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-yellow-300 dark:hover:text-yellow-400">
              Contact
            </NavLink>
          </li>
          <li>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
            >
              {theme === "light" ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-400" />}
            </button>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center space-x-4">
            <div className="tooltip tooltip-bottom" data-tip={displayName}>
              <img
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                className="w-12 h-12 rounded-full cursor-pointer border-2 border-yellow-400 hover:shadow-lg"
                alt="User"
              />
            </div>
            <button
              onClick={logout}
              className="btn rounded-full bg-yellow-500 text-black font-bold shadow-md"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/auth/login" className="btn rounded-full bg-white text-black font-bold shadow-md">
              Login
            </Link>
            <Link to="/auth/register" className="btn rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold shadow-md">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
