import React from 'react';
import { motion } from 'framer-motion';
import { Package, Shield, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.10 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">RoboInventory</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Revolutionizing inventory management through intelligent automation and real-time analytics
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
          >
            <Package className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Smart Inventory</h3>
            <p className="text-gray-600 dark:text-gray-300">Automated tracking and management of your inventory in real-time</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
          >
            <Shield className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Secure Platform</h3>
            <p className="text-gray-600 dark:text-gray-300">Enterprise-grade security to protect your valuable data</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: -2 }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
          >
            <Users className="h-12 w-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Team Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">Seamless coordination between team members and departments</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: 2 }}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
          >
            <Award className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Industry Leading</h3>
            <p className="text-gray-600 dark:text-gray-300">Setting new standards in inventory management solutions</p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-16 cursor-pointer"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At RoboInventory, we're committed to transforming how businesses manage their inventory. 
            Our mission is to provide cutting-edge solutions that combine artificial intelligence, 
            robotics, and human expertise to create the most efficient and reliable inventory 
            management system available.
          </p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <motion.a 
            href="mailto:inventrymanagement6@gmail.com" 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all text-lg font-semibold shadow-lg"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
