import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        navigate("/dashboard");
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
    <div className="flex-1 p-8 bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
            Welcome Back!
          </h2>
          <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
            Please select your role to continue
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => handleRoleSelect("admin")}
            className={`px-6 py-3 rounded-md ${
              selectedRole === "admin"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => handleRoleSelect("user")}
            className={`px-6 py-3 rounded-md ${
              selectedRole === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200"
            }`}
          >
            User
          </button>
        </div>

        {selectedRole && (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {selectedRole === "admin" ? "Admin ID" : "User ID"}
              </label>
              <input
                id="id"
                type="text"
                required
                value={credentials.id}
                onChange={(e) => setCredentials({...credentials, id: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder={selectedRole === "admin" ? "Enter admin ID" : "Enter user ID"}
              />
            </div>
            
            <div>
              <label htmlFor="passcode" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Passcode
              </label>
              <input
                id="passcode"
                type="password"
                required
                value={credentials.passcode}
                onChange={(e) => setCredentials({...credentials, passcode: e.target.value})}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Enter your passcode"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Continue
            </button>
          </form>
        )}

        {selectedRole && (
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            <p className="text-center">
              {selectedRole === "admin" ? 
                "Admin credentials: ID: admin123 | Pass: admin@456" :
                "Sample user: ID: user1 | Pass: pass123"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoleSelect;
