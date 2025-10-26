import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Contexts/AuthContext/AuthContext";
import {
  Menu,
  Home,
  Info,
  PlusCircle,
  ClipboardList,
  Layers,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const activeRoute = (path) => location.pathname === path;

  const handleLogout = () => {
    logOut().then(() => navigate("/")).catch(console.error);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-[#1b2831]/95 backdrop-blur shadow-xl px-6 text-white">

        {/* LEFT SECTION */}
        <div className="navbar-start flex items-center gap-3">
          {/* DROPDOWN MOBILE */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle hover:bg-[#273742]">
              <Menu />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#273742] rounded-xl shadow-lg mt-3 w-56 p-3 space-y-2"
            >
              <li className={`${activeRoute("/") && "bg-[#3c5d70] text-white rounded-md"}`}>
                <Link to="/"><Home size={16}/> Home</Link>
              </li>

              <li className={`${activeRoute("/availableFood") && "bg-[#3c5d70] text-white rounded-md"}`}>
                <Link to="/availableFood"><Layers size={16}/> Available Foods</Link>
              </li>

              <li className={`${activeRoute("/about") && "bg-[#3c5d70] text-white rounded-md"}`}>
                <Link to="/about"><Info size={16}/> About Us</Link>
              </li>

              {user && (
                <>
                  <li className={`${activeRoute("/addFood") && "bg-[#3c5d70] text-white rounded-md"}`}>
                    <Link to="/addFood"><PlusCircle size={16}/> Add Food</Link>
                  </li>
                  <li className={`${activeRoute("/manageFood") && "bg-[#3c5d70] text-white rounded-md"}`}>
                    <Link to="/manageFood"><ClipboardList size={16}/> Manage My Foods</Link>
                  </li>
                  <li className={`${activeRoute("/myFood") && "bg-[#3c5d70] text-white rounded-md"}`}>
                    <Link to="/myFood"><ClipboardList size={16}/> My Requests</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* BRAND */}
          <img className="w-11 h-11 rounded-full shadow-lg border border-white/40" src={logo} alt="Logo" />
          <h2 className="text-xl font-bold tracking-wide drop-shadow">Share A Bite</h2>
        </div>

        {/* CENTER LINKS - DESKTOP */}
        <div className="navbar-center hidden md:flex space-x-7 font-medium text-sm">

          <Link
            to="/"
            className={`flex items-center gap-1 pb-1 transition ${
              activeRoute("/") 
                ? "text-[#8fd5ff] border-b-2 border-[#8fd5ff]" 
                : "hover:text-[#8fd5ff]"
            }`}
          >
            <Home size={17}/> Home
          </Link>

          <Link
            to="/availableFood"
            className={`flex items-center gap-1 pb-1 transition ${
              activeRoute("/availableFood")
                ? "text-[#8fd5ff] border-b-2 border-[#8fd5ff]" 
                : "hover:text-[#8fd5ff]"
            }`}
          >
            <Layers size={17}/> Available
          </Link>

          <Link
            to="/about"
            className={`flex items-center gap-1 pb-1 transition ${
              activeRoute("/about")
                ? "text-[#8fd5ff] border-b-2 border-[#8fd5ff]" 
                : "hover:text-[#8fd5ff]"
            }`}
          >
            <Info size={17}/> About
          </Link>

          {user && (
            <>
              <Link
                to="/addFood"
                className={`flex items-center gap-1 pb-1 transition ${
                  activeRoute("/addFood")
                    ? "text-[#8fd5ff] border-b-2 border-[#8fd5ff]" 
                    : "hover:text-[#8fd5ff]"
                }`}
              >
                <PlusCircle size={17}/> Add Food
              </Link>

              <Link
                to="/manageFood"
                className={`flex items-center gap-1 pb-1 transition ${
                  activeRoute("/manageFood")
                    ? "text-[#8fd5ff] border-b-2 border-[#8fd5ff]" 
                    : "hover:text-[#8fd5ff]"
                }`}
              >
                <ClipboardList size={17}/> Manage
              </Link>

              <Link
                to="/myFood"
                className={`flex items-center gap-1 pb-1 transition ${
                  activeRoute("/myFood")
                    ? "text-[#8fd5ff] border-b-2 border-[#8fd5ff]" 
                    : "hover:text-[#8fd5ff]"
                }`}
              >
                <ClipboardList size={17}/> My Requests
              </Link>
            </>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-end flex items-center gap-5">

          {user ? (
            <>
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img
                  src={user.photoURL || "https://i.ibb.co/2d1S8L7/avatar.png"}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#8fd5ff] shadow-lg"
                />
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-[#273742] px-4 py-2 rounded-lg hover:bg-[#354c57] transition"
              >
                <LogOut size={18}/> Logout
              </button>
            </>
          ) : (
            <>
              <Link className="flex items-center gap-2 bg-[#273742] px-4 py-2 rounded-lg hover:bg-[#354c57] transition" to="/login">
                <LogIn size={18}/> Login
              </Link>
              <Link className="flex items-center gap-2 bg-[#273742] px-4 py-2 rounded-lg hover:bg-[#354c57] transition" to="/signUp">
                <UserPlus size={18}/> SignUp
              </Link>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default Navbar;