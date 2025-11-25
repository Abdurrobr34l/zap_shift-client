import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../Components/Logo";
import { FaArrowRight } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

const navLinks = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Coverage", path: "/coverage" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Send Parcel", path: "/send-parcel" },
  { id: 6, name: "Be a Rider", path: "/rider-apply" }
  // { id: 7, name: "Dashboard", path: "/dashboard" }
];

const Header = () => {
  const { user, logOut } = useAuth();
  console.log("USER:", user);

  return (
    <div className="navbar bg-white rounded-2xl lg:px-10">
      {/* LEFT: Logo */}
      <div className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile menu list */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-52 p-2 z-50"
          >
            {
              navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>{link.name}</NavLink>
                </li>
              ))
            }
            {user && (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Logo></Logo>
        {/* <span>{user?.email}</span> */}
      </div>

      {/* CENTER: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-medium gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? "active" : "")}>{link.name}</NavLink>
            </li>
          ))}
          {user && (
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          )}
        </ul>
      </div>

      {/* RIGHT: Buttons */}
      <div className="navbar-end flex items-center gap-3">
        {
          user ? (
            <Link
              onClick={logOut}
              className="btn btn-sm btn-white bg-base-100 border-base-300 text-base-content hover:bg-base-200"
            >
              LogOut
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm btn-white bg-base-100 border-base-300 text-base-content hover:bg-base-200"
            >
              Sign In
            </Link>
          )
        }

        <Link
          to={"/rider-apply"}
          className="btn btn-sm btn-accent text-base-100 px-5"
        >
          Be a rider
        </Link>


        <Link to={"/rider-apply"} className="btn btn-lg btn-circle bg-primary-content! group">
          <FaArrowRight className="text-xl  text-accent transition-transform duration-300 group-hover:text-white! group-hover:-rotate-14" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
