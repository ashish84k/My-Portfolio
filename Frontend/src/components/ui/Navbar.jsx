import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3 shadow-lg bg-white" : "py-5 bg-white"
        }`}
    >

      <div className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to={'/'}><motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
        DevTech
        </motion.h1></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path}>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group cursor-pointer hover:text-pink-500"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </motion.li>
            </Link>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 relative">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  type="text"
                  placeholder="Search..."
                  className="px-2 py-1 rounded-md border border-gray-300 text-black bg-white"
                />
              )}
            </AnimatePresence>
            <FaSearch
              className="cursor-pointer text-gray-700"
              onClick={() => setSearchOpen(prev => !prev)}
            />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-2xl" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>

          {/* CTA */}
          <Link to="/contact">
            <button className="hidden md:block bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-white font-semibold">
              Hire Me
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 bg-gray-900 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6 text-white">
              <h1 className="text-xl font-bold">My Portfolio</h1>
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            <ul className="flex flex-col gap-6 text-white font-medium">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.path} onClick={() => setMenuOpen(false)}>
                  <li className="hover:text-pink-400">{link.name}</li>
                </Link>
              ))}
            </ul>

            <Link to="/contact">
              <button className="mt-8 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg text-white font-semibold">
                Hire Me
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
