import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../Components/Logo";

const navLinks = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Coverage", path: "/coverage" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

const Header = () => {
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
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
       <Logo></Logo>
      </div>

      {/* CENTER: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-base font-medium gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Buttons */}
      <div className="navbar-end flex items-center gap-3">
        <Link
          to="/signin"
          className="btn btn-sm bg-base-100 border-base-300 text-base-content hover:bg-base-200"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="btn btn-sm btn-primary text-base-100 px-5"
        >
          Sign Up
        </Link>

        <button className="btn btn-sm btn-circle bg-neutral text-base-100 hover:bg-neutral-focus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
