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
        <div className="navbar bg-base-100  px-4 lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        {user ? (
                        <>
                            <li><NavLink to="/add-service">Add Service</NavLink></li>
                            <li><NavLink to="/my-reviews">My Reviews</NavLink></li>
                        </>
                    ) : null}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost  text-xl">Service Review</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    {user ? (
                        <>
                            <li><NavLink to="/add-service">Add Service</NavLink></li>
                            <li><NavLink to="/my-reviews">My Reviews</NavLink></li>
                        </>
                    ) : null}
                </ul>
            </div>
            <div className="navbar-end">
                 {/* User Profile or Login/Register */}
          {user && user?.email ? (
            <div  className="flex flex-col md:flex-row justify-center gap-1 items-center space-x-2 ">
              <div className="tooltip tooltip-bottom" data-tip={displayName}>
                <img
                  referrerPolicy='no-referrer' 
                  src={user?.photoURL}
                  className="w-12 h-12 rounded-full cursor-pointer border-2 border-yellow-400"
                  alt="User"
                />
              </div>
                        <button onClick={logout} className="btn btn-sm btn-outline mr-2">Log Out</button>
                    </div>
                ) : (
                    <div className="flex items-center">
                        <Link to="/auth/login" className="btn btn-sm btn-outline mr-2">Login</Link>
                        <Link to="/auth/register" className="btn btn-sm btn-outline">Register</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
