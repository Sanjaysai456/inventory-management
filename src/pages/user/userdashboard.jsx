import React, { useState, useEffect } from "react";
import { Package, MessageSquare, User, TrendingUp, Calendar, Box } from "lucide-react";
import { ordersData, usersData } from "./userData";

const UserDashboard = () => {
  const [currentUserId, setCurrentUserId] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [contactForm, setContactForm] = useState({
    subject: "",
    message: ""
  });

  useEffect(() => {
    const user = usersData.find(u => u.id === currentUserId);
    setCurrentUser(user);
    if (user) {
      setOrders(ordersData[user.id] || []);
    }
  }, [currentUserId]);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Message sent to admin!");
    setContactForm({ subject: "", message: "" });
  };

  if (!currentUser) return <div>Loading...</div>;

  // Calculate statistics
  const totalOrders = orders.length;
  const deliveredOrders = orders.filter(order => order.status === "Delivered").length;
  const inTransitOrders = orders.filter(order => order.status === "In Transit").length;

  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header with Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Welcome back, {currentUser.name}!</h1>
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

        {/* User Profile Card */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">My Orders</h2>
          <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 px-6 py-3 rounded-xl shadow-sm">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <User className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 dark:text-white font-medium">{currentUser.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{currentUser.email}</span>
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

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-6 w-6 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Contact Admin</h2>
          </div>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
