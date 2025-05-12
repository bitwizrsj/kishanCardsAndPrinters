import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-900 shadow-lg py-3"
          : "bg-primary-900 md:bg-primary-900/80 md:backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <Logo className="h-10 w-10 text-accent-yellow-500" />
            <div className="ml-3">
              <span className="text-accent-yellow-500 font-bold text-xl block">
                Kishan Cards
              </span>
              <span className="text-white text-sm block">& Printers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </nav>

          <Link
            to="/contact#contact"
            className="hidden md:block btn btn-primary"
          >
            Contact Us
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {!isOpen && <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-primary-900 z-50 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="container-custom flex flex-col space-y-6 p-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active text-xl" : "nav-link text-xl"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active text-xl" : "nav-link text-xl"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active text-xl" : "nav-link text-xl"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active text-xl" : "nav-link text-xl"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <Link
            to="/contact#contact"
            className="btn btn-primary w-full text-center mt-8"
            onClick={closeMenu}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
