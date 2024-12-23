import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");

  useEffect(() => {
    setDisplayName(user?.displayName || "");
  }, [user]);

  return (
    <nav className="navbar bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white py-3 px-4 lg:px-12 shadow-lg">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-gray-800 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-bold underline"
                    : "hover:text-indigo-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-bold underline"
                    : "hover:text-indigo-600"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forum"
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-bold underline"
                    : "hover:text-indigo-600"
                }
              >
                Community Forum
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/add-service"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-bold underline"
                        : "hover:text-indigo-600"
                    }
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-reviews"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-bold underline"
                        : "hover:text-indigo-600"
                    }
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-services"
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-bold underline"
                        : "hover:text-indigo-600"
                    }
                  >
                    My Services
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
        >
          Service Review
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
                  : "hover:text-yellow-300 transition duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
                  : "hover:text-yellow-300 transition duration-300"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
                  : "hover:text-yellow-300 transition duration-300"
              }
            >
              Community Forum
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-service"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300 transition duration-300"
                  }
                >
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-reviews"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300 transition duration-300"
                  }
                >
                  My Reviews
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1"
                      : "hover:text-yellow-300 transition duration-300"
                  }
                >
                  My Services
                </NavLink>
              </li>
            </>
          )}
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
              className="btn btn-sm bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold shadow-md"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              to="/auth/login"
              className="btn btn-sm bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold shadow-md"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn btn-sm bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold shadow-md"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
