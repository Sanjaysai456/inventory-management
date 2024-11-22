import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Package, TrendingUp, BarChart, Truck, Users } from 'lucide-react';
import { useAuth } from '../../context/Authcontext/Authcontex';





const HeroPage = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="fixed w-full top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Package className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">InventoryPro</span>
            </motion.div>
            <motion.nav 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              
                <>
                  <Link 
                    to="/login" 
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 font-medium shadow-md"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 font-medium shadow-md"
                  >
                    SignUp
                  </Link>
                </>
              
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Smart Inventory
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                > Management</motion.span>
                <br />Made Simple
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                Transform your inventory management with our powerful, intelligent system. Track, analyze, and optimize your stock in real-time.
              </p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link to="/register " className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg">
                  Get Started
                </Link>
                <Link to="/about" className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all transform hover:scale-105 text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600"
                >
                  <Box className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Real-time Tracking</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monitor your inventory levels in real-time</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-600"
                >
                  <TrendingUp className="h-12 w-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Smart Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300">Data-driven insights for better decisions</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <BarChart className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">Powerful insights to optimize your inventory</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Truck className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300">Real-time updates on all shipments</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Users className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">Seamless communication across teams</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Features</Link></li>
                <li><Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Pricing</Link></li>
                <li><Link to="/integrations" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Integrations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Blog</Link></li>
                <li><Link to="/documentation" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Documentation</Link></li>
                <li><Link to="/support" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Terms of Service</Link></li>
                <li><Link to="/security" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © 2024 InventoryPro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroPage;