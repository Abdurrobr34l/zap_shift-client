import React from "react";
import { Outlet, Link, useLocation } from "react-router";
import {
  MdDashboard,
  MdLocalShipping,
  MdReceipt,
  MdStore,
  MdOutlinePriceChange,
  MdLocationPin,
  MdSettings,
  MdPassword,
  MdHelp,
  MdLogout,
  MdMenu,
} from "react-icons/md";
import Logo from "../../Components/Logo";
import DashBoardProfile from "../Pages/DashboardPages/DashBoardProfile";


const DashBoardLayout = () => {
  const location = useLocation();

// MENU DATA
const mainMenu = [
  { label: "Dashboard", path: "/dashboard", icon: MdDashboard },
  { label: "Deliveries", path: "/deliveries", icon: MdLocalShipping },
  { label: "Invoices", path: "/invoices", icon: MdReceipt },
  { label: "Stores", path: "/stores", icon: MdStore },
  { label: "Pricing Plan", path: "/pricing-plan", icon: MdOutlinePriceChange },
  { label: "Coverage Area", path: "/coverage-area", icon: MdLocationPin },
];

const generalMenu = [
  { label: "Settings", path: "/settings", icon: MdSettings },
  { label: "Change Password", path: "/change-password", icon: MdPassword },
  { label: "Help", path: "/help", icon: MdHelp },
  { label: "Logout", path: "/logout", icon: MdLogout },
];

const renderLinks = (items) =>
  items.map(({ label, path, icon: Icon }) => (
    <li key={path}>
      <Link
        to={path}
        className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all
        ${
          location.pathname === path
            ? "bg-accent text-primary font-semibold"
            : "hover:bg-base-300"
        }`}
      >
        <Icon size={20} className="text-secondary" />
        <span>{label}</span>
      </Link>
    </li>
  ));


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* PAGE CONTENT */}
      <div className="drawer-content bg-[#EAECED] min-h-screen">
        {/* TOPBAR */}
        <nav className="w-full h-16 bg-white flex items-center justify-between px-6">
          <label htmlFor="my-drawer-4" className="btn btn-ghost btn-square lg:hidden">
            <MdMenu size={24} />
          </label>

          <div></div>

<DashBoardProfile></DashBoardProfile>
        </nav>

        {/* PAGE BODY */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="w-64 bg-white min-h-full p-4 flex flex-col">
          {/* LOGO */}
          <div className="pb-8">
            <Logo />
          </div>

          {/* MENU */}
          <nav className="flex flex-col gap-6">
            <ul>{renderLinks(mainMenu)}</ul>

            <div>
              <p className="text-xs text-gray-400 mb-2 px-2">GENERAL</p>
              <ul>{renderLinks(generalMenu)}</ul>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default DashBoardLayout;
