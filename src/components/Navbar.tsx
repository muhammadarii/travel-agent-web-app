import React, { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa6";
import { RiHotelBedFill } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons for menu toggle
import Logo from "../assets/images/TravelBucks.png";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-2xl bg-opacity-40"
          : "bg-transparent"
      }`}
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 text-black items-center">
        <Link
          to="/flight-page"
          className="flex items-center gap-1 cursor-pointer hover:text-white"
        >
          <FaPlane className="w-[22px] h-[20px]" />
          <p className="text-[14px]">Find Flight</p>
        </Link>
        <Link
          to="/hotel-page"
          className="flex items-center gap-1 cursor-pointer hover:text-white"
        >
          <RiHotelBedFill className="w-[23px] h-[21px]" />
          <p className="text-[14px]">Find Stays</p>
        </Link>
      </div>

      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer">
        <img src={Logo} alt="Logo" className="w-[120px] md:w-[140px]" />
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-black">
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-4">
        <button className="w-[100px] h-[40px] text-black rounded-md hover:text-white">
          Login
        </button>
        <button className="w-[100px] h-[40px] bg-black text-white rounded-md hover:text-white hover:bg-[#1F4AA8]">
          Sign Up
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && <NavMobile />}
    </div>
  );
};

export default Navbar;
