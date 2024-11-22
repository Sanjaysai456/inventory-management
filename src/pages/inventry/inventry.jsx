import React, { useState, useEffect } from "react";
import { Package, Search, Filter, Download, Menu } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('https://sanjay-backend.onrender.com/api/inventory/all');
        if (!response.ok) {
          throw new Error('Failed to fetch inventory data');
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setInventory(Array.isArray(data.data) ? data.data : []); // Access data array from response
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  const filteredInventory = inventory.filter(item => {
    if (!item) return false;
    return (
      item.id?.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customer?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Menu className="h-6 w-6 text-blue-600" />
      </button>

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-100 rounded-xl p-6">
              <h3 className="text-blue-800 text-lg font-semibold">Total Items</h3>
              <p className="text-2xl font-bold text-blue-900 mt-2">
                {inventory.length}
              </p>
            </div>
            <div className="bg-green-100 rounded-xl p-6">
              <h3 className="text-green-800 text-lg font-semibold">Total Weight</h3>
              <p className="text-2xl font-bold text-green-900 mt-2">
                {inventory.reduce((acc, item) => acc + (parseFloat(item?.package?.weight) || 0), 0).toFixed(1)} kg
              </p>
            </div>
            <div className="bg-red-100 rounded-xl p-6">
              <h3 className="text-red-800 text-lg font-semibold">Delivered Items</h3>
              <p className="text-2xl font-bold text-red-900 mt-2">
                {inventory.filter(item => item?.status === "delivered").length}
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by ID or customer name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map((item) => (
                  <tr key={item?.id || Math.random()}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.id || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.status || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.customer?.name || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.customer?.phone || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.customer?.address || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.package?.weight || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.package?.location || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item?.package?.lastUpdate || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
