import React, { useState } from "react";
import { Package, Search, Filter, Download } from "lucide-react";
import { inventoryData } from "./inventoryData";

const Inventory = () => {
  const [inventory, setInventory] = useState(inventoryData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="h-5 w-5 mr-2" />
            Export Data
          </button>
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
              {inventory.reduce((acc, item) => acc + parseFloat(item.weight), 0).toFixed(1)} kg
            </p>
          </div>
          <div className="bg-red-100 rounded-xl p-6">
            <h3 className="text-red-800 text-lg font-semibold">Shipped Today</h3>
            <p className="text-2xl font-bold text-red-900 mt-2">
              {inventory.filter(item => item.shippedDate === new Date().toISOString().split('T')[0]).length}
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Address</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipped Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.deliveryAddress}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.weight}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.shippedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
