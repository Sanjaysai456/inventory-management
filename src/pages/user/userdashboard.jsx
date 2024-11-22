import React, { useState, useEffect } from "react";
import { Package, MessageSquare, User, TrendingUp, Calendar, Box, Home, Info, MessageCircle, Star } from "lucide-react";
import { ordersData, usersData } from "./userData";
import Header from "../../components/dashboardHeader/header";
import { useAuth } from "../../context/Authcontext/Authcontex";

const UserDashboard = () => {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentUser: authUser } = useAuth();

  useEffect(() => {
    const user = usersData.find(u => u.id === currentUserId);
    setCurrentUser(user);
    if (user) {
      setOrders(ordersData[user.id] || []);
    }
  }, [currentUserId]);

  if (!currentUser) return <div>Loading...</div>;

  // Calculate statistics
  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(order => order.status === "Delivered").length;
  const inTransitOrders = orders.filter(order => order.status === "In Transit").length;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="fixed left-0 top-16 h-full w-64 bg-white shadow-lg">
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </a>
            <a href="/about" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all">
              <Info className="h-5 w-5" />
              <span>About Us</span>
            </a>
            <a href="/contact" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all">
              <MessageCircle className="h-5 w-5" />
              <span>Contact Us</span>
            </a>
           
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 pt-16">
        <div className="p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header with Welcome Message */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Welcome, {authUser?.email?.split('@')[0]}!
                
              </h1>
              <p className="text-gray-600 dark:text-gray-300">Here's your order dashboard</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Total Orders</p>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{totalOrders}</h3>
                  </div>
                  <Box className="h-10 w-10 text-blue-500 bg-blue-100 dark:bg-blue-900 rounded-full p-2" />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Delivered</p>
                    <h3 className="text-2xl font-bold text-green-600">{deliveredOrders}</h3>
                  </div>
                  <TrendingUp className="h-10 w-10 text-green-500 bg-green-100 dark:bg-green-900 rounded-full p-2" />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">In Transit</p>
                    <h3 className="text-2xl font-bold text-yellow-600">{inTransitOrders}</h3>
                  </div>
                  <Package className="h-10 w-10 text-yellow-500 bg-yellow-100 dark:bg-yellow-900 rounded-full p-2" />
                </div>
              </div>
            </div>

          
            

            {/* Orders List */}
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm mb-8 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-600">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Weight</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Delivery Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-500">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{order.itemWeight}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            order.status === "Delivered" 
                              ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{order.customerName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{order.deliveryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
