import React, { useState } from "react";
import { UserCircle, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Inventory Management
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link to="/inventory" className="text-gray-600 hover:text-gray-900">
              Inventory
            </Link>
            <Link to="/reports" className="text-gray-600 hover:text-gray-900">
              Reports
            </Link>
          </div>

          {/* Auth Buttons - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="mobile-menu-button p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
        <Link to="/products" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Products</Link>
        <Link to="/inventory" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Inventory</Link>
        <Link to="/reports" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Reports</Link>
        <div className="px-4 py-2 space-y-2">
          <button className="w-full px-4 py-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
            Login
          </button>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
