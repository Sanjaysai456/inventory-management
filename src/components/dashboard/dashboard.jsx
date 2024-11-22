import React, { useState, useEffect } from "react";
import { BarChart, PieChart, Home, ShoppingBag, Tag, Package, Book, Bell, Download, Menu, Battery } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetchRobots();
  }, []);

  const fetchRobots = async () => {
    try {
      const response = await fetch('https://sanjay-backend.onrender.com/api/bot-status/all-bots');
      if (!response.ok) {
        throw new Error('Failed to fetch robots');
      }
      const result = await response.json();
      setRobots(result.data || []);
    } catch (error) {
      console.error('Error fetching robots:', error);
      setRobots([]);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNotificationClick = (id) => {
    navigate('/messages');
  };

  const handleDashboardClick = (e) => {
    if (location.pathname === '/dashboard') {
      e.preventDefault();
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Menu className="h-6 w-6 text-blue-600" />
      </button>

      {/* Alert Message */}
      {showAlert && (
        <div className="fixed top-4 right-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-lg z-50 animate-fade-in">
          You're currently on the Dashboard
        </div>
      )}

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative w-64 bg-white/90 backdrop-blur-sm shadow-xl h-full transition-all duration-300 ease-in-out z-40`}>
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
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-end px-4 sm:px-8 py-4 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <p className="text-xs text-blue-500">System Manager</p>
                </div>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="h-10 w-10 rounded-full ring-2 ring-blue-500 ring-offset-2"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-blue-800 text-lg font-semibold">Active Robots</h3>
              <p className="text-3xl font-bold text-blue-900 mt-2">
                {robots.filter(robot => robot.status.toLowerCase() === "active").length}
              </p>
              <p className="text-blue-700 text-sm mt-1">Currently working</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-green-800 text-lg font-semibold">Total Robots</h3>
              <p className="text-3xl font-bold text-green-900 mt-2">{robots.length}</p>
              <p className="text-green-700 text-sm mt-1">In system</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-purple-800 text-lg font-semibold">Charging Robots</h3>
              <p className="text-3xl font-bold text-purple-900 mt-2">
                {robots.filter(robot => robot.status.toLowerCase() === "charging").length}
              </p>
              <p className="text-purple-700 text-sm mt-1">Currently charging</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-yellow-800 text-lg font-semibold">Average Battery</h3>
              <p className="text-3xl font-bold text-yellow-900 mt-2">
                {robots.length > 0 ? Math.round(robots.reduce((acc, robot) => acc + robot.battery.level, 0) / robots.length) : 0}%
              </p>
              <p className="text-yellow-700 text-sm mt-1">Battery level</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Timeline</h3>
              <div className="h-48 sm:h-64">
                <BarChart className="w-full h-full text-blue-400" />
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Distribution</h3>
              <div className="h-48 sm:h-64">
                <PieChart className="w-full h-full text-purple-400" />
              </div>
            </div>
          </div>

          {/* System Status Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">System Status: Operational</h3>
                <p className="text-gray-600 mt-2">All robots are functioning within normal parameters</p>
              </div>
            </div>
          </div>

          {/* Robot Battery Status Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Robot Battery Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {robots.map((robot) => (
                <div key={robot.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">{robot.id}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      robot.status.toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {robot.status}
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          Battery Level
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-blue-600">
                          {robot.battery.level}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-blue-200">
                      <div 
                        style={{ width: `${robot.battery.level}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500">Last Charged: {robot.battery.lastCharged}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
