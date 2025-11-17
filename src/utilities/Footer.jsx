import React from "react";
import { Link } from "react-router";
import { FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../../Components/Logo";
import { FaXTwitter } from "react-icons/fa6";

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
    <div className="bg-[#0B0B0B] text-neutral-content py-16 rounded-3xl">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">

        {/* LOGO */}
        <div className="footer-logo">
          <Logo></Logo>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-6 text-sm text-white! max-w-xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* DIVIDER */}
        <div className="w-full border-b border-primary/20 my-8"></div>

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.id} to={link.path} className="text-white! hover:text-accent! transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full border-b border-primary/20 my-8"></div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 text-2xl">
{/* LinkedIn */}
      <a
        href="#"
        className="p-3 rounded-full bg-[#0A66C2]! text-white! text-2xl transition-transform duration-300 hover:scale-110"
      >
        <FaLinkedin />
      </a>

      {/* X / Twitter */}
      <a
        href="#"
        className="p-3 rounded-full bg-[#1DA1F2]! text-white! text-2xl transition-transform duration-300 hover:scale-110"
      >
        <FaXTwitter />
      </a>

      {/* Facebook */}
      <a
        href="#"
        className="p-3 rounded-full bg-[#1877F2]! text-white! text-2xl transition-transform duration-300 hover:scale-110"
      >
        <FaFacebook />
      </a>

      {/* YouTube */}
      <a
        href="#"
        className="p-3 rounded-full bg-[#FF0000]! text-white! text-2xl transition-transform duration-300 hover:scale-110"
      >
        <FaYoutube />
      </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
