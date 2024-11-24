import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Package } from "lucide-react";
import Logo from '../../assests/logo.png';

const RoleSelect = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");
  const [credentials, setCredentials] = useState({
    id: "",
    passcode: ""
  });
  const [error, setError] = useState("");

  const validCredentials = {
    admin: {
      id: "admin123",
      passcode: "admin@456"
    },
    users: [
      { id: "user1", passcode: "pass123" },
      { id: "user2", passcode: "pass456" },
      { id: "user3", passcode: "pass789" }
    ]
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    if (selectedRole === "admin") {
      if (credentials.id === validCredentials.admin.id && 
          credentials.passcode === validCredentials.admin.passcode) {
        navigate("/home");
      } else {
        setError("Invalid admin credentials");
      }
    } else if (selectedRole === "user") {
      const validUser = validCredentials.users.find(
        user => user.id === credentials.id && user.passcode === credentials.passcode
      );
      if (validUser) {
        navigate("/userdashboard");
      } else {
        setError("Invalid user credentials");
      }
    }
  };

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
              {Logo ? (
                <img src={Logo} alt="RS Inventory Logo" className="h-10 w-12 " />
              ) : (
                <Package className="h-8 w-8 text-blue-500" />
              )}
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">RS Inventory</span>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="pt-24 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Select Your Role</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">Choose how you want to access InventoryPro</p>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <button
              onClick={() => handleRoleSelect("admin")}
              className={`px-8 py-3 rounded-lg transition-all transform hover:scale-105 font-medium shadow-md ${
                selectedRole === "admin"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Admin
            </button>
            <button
              onClick={() => handleRoleSelect("user")}
              className={`px-8 py-3 rounded-lg transition-all transform hover:scale-105 font-medium shadow-md ${
                selectedRole === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              User
            </button>
          </div>

          {selectedRole && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {selectedRole === "admin" ? "Admin ID" : "User ID"}
                </label>
                <input
                  type="text"
                  required
                  value={credentials.id}
                  onChange={(e) => setCredentials({...credentials, id: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder={selectedRole === "admin" ? "Enter admin ID" : "Enter user ID"}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Passcode
                </label>
                <input
                  type="password"
                  required
                  value={credentials.passcode}
                  onChange={(e) => setCredentials({...credentials, passcode: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                  placeholder="Enter your passcode"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 font-medium shadow-md"
              >
                Continue
              </button>
            </form>
          )}

          {selectedRole && (
            <div className="mt-4">
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                {selectedRole === "admin" ? 
                  "Demo Admin → ID: admin123 | Pass: admin@456" :
                  "Demo User → ID: user1 | Pass: pass123"}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RoleSelect;
