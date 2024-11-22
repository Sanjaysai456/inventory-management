import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingBag, Battery, Bell, Sun, Moon } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleDashboardClick = (e) => {
    if (location.pathname === '/dashboard') {
      e.preventDefault();
    }
  };

  return (
    <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative w-64 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl h-full transition-all duration-300 ease-in-out z-40`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RoboInventory</h2>
      </div>
      <nav className="mt-6">
        <Link to="/home" onClick={handleDashboardClick} className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link to="/inventory" className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
          <Package className="h-5 w-5 mr-3" />
          Inventory
        </Link>
        <Link to="/tasks" className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
          <ShoppingBag className="h-5 w-5 mr-3" />
          Tasks
        </Link>
        <Link to="/robots" className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
          <Battery className="h-5 w-5 mr-3" />
          Robot Status
        </Link>
        <Link to="/messages" className="flex items-center px-6 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300">
          <Bell className="h-5 w-5 mr-3" />
          Notifications
        </Link>
        <button
          onClick={toggleTheme}
          className="flex items-center w-full px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 transition-all duration-300"
        >
          {isDarkMode ? (
            <>
              <Sun className="h-5 w-5 mr-3" />
              Light Mode
            </>
          ) : (
            <>
              <Moon className="h-5 w-5 mr-3" />
              Dark Mode
            </>
          )}
        </button>
      </nav>
    </div>
  );
};

export default Sidebar; 