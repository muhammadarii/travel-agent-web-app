import { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/TravelBucks.png";
import { Link } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // Close menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white">
      <div className="flex justify-between items-center w-full px-4 md:px-10 py-4">
        {/* Logo */}
        <img src={Logo} alt="Logo" width={150} />

        {/* Desktop Menu */}
        <div className="hidden md:flex text-[#898BA3] gap-10">
          <Link to="/" onClick={() => setNav(false)}>
            <p className="hover:text-[#222534] transition-colors">Home</p>
          </Link>
          <Link to="/about" onClick={() => setNav(false)}>
            <p className="hover:text-[#222534] transition-colors">About Us</p>
          </Link>
          <Link to="/services" onClick={() => setNav(false)}>
            <p className="hover:text-[#222534] transition-colors">Services</p>
          </Link>
          <Link to="/blog" onClick={() => setNav(false)}>
            <p className="hover:text-[#222534] transition-colors">Blog</p>
          </Link>
        </div>

        {/* Contact Button (Visible on all screens) */}
        <button className="bg-[#EFF3F8] w-[160px] h-[50px] rounded-md font-medium text-[#898BA3] hidden md:block hover:bg-[#1F4AA8] hover:text-white">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={handleNav}>
          <button className="text-[#898BA3] text-2xl">
            {nav ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {nav && (
        <div ref={navRef} className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center text-[#898BA3] gap-5 py-6">
            <Link to="/" onClick={handleNav}>
              <p className="hover:text-[#222534] transition-colors">Home</p>
            </Link>
            <Link to="/about" onClick={handleNav}>
              <p className="hover:text-[#222534] transition-colors">About Us</p>
            </Link>
            <Link to="/services" onClick={handleNav}>
              <p className="hover:text-[#222534] transition-colors">Services</p>
            </Link>
            <Link to="/blog" onClick={handleNav}>
              <p className="hover:text-[#222534] transition-colors">Blog</p>
            </Link>
            <button className="bg-[#EFF3F8] w-[160px] h-[50px] rounded-md font-medium text-[#898BA3] hover:bg-[#1F4AA8] hover:text-white">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
