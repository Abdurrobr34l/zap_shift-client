import React from "react";
import { Link } from "react-router";
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const navLinks = [
  { id: 1, name: "Services", path: "/services" },
  { id: 2, name: "Coverage", path: "/coverage" },
  { id: 3, name: "About Us", path: "/about" },
  { id: 4, name: "Pricing", path: "/pricing" },
  { id: 5, name: "Blog", path: "/blog" },
  { id: 6, name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <div className="bg-neutral text-neutral-content py-16 rounded-3xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-primary rounded-sm rotate-12"></div>
          <span className="text-2xl font-bold">ZapShift</span>
        </Link>

        {/* DESCRIPTION */}
        <p className="text-sm text-neutral-content/80 max-w-xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* DIVIDER */}
        <div className="w-full border-b border-primary/20 my-8"></div>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.path} className="hover:text-primary transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full border-b border-primary/20 my-8"></div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 text-2xl">
          <a href="#" className="hover:text-primary transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-primary transition">
            <RxCrossCircled />
          </a>
          <a href="#" className="hover:text-primary transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-primary transition">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
