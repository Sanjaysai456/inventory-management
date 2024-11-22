import React, { useState, useEffect } from "react";
import { Search, Menu } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('https://sanjay-backend.onrender.com/api/messages/fetch-messages');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const result = await response.json();
      setMessages(result.data || []);
    } catch (error) {
      console.error('Error fetching messages:', error);
      alert('Failed to fetch messages. Please try again.');
      setMessages([]);
    }
  };

  const filteredMessages = messages.filter(message =>
    message.customer?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAsRead = async (id) => {
    try {
      const response = await fetch(`https://sanjay-backend.onrender.com/api/messages/mark-read/${id}`, {
        method: 'PUT'
      });
      if (!response.ok) {
        throw new Error('Failed to mark message as read');
      }
      setMessages(messages.map(message =>
        message._id === id ? {...message, read: true} : message
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

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
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Customer Messages</h1>
          </div>

          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <div 
                key={message._id}
                className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer transition duration-200 hover:shadow-md ${
                  !message.read ? 'border-l-4 border-blue-500' : ''
                }`}
                onClick={() => markAsRead(message._id)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{message.customer}</h3>
                  <span className="text-sm text-gray-500">{new Date(message.timestamp).toLocaleString()}</span>
                </div>
                <p className="text-gray-600">{message.message}</p>
                {!message.read && (
                  <span className="inline-block mt-2 text-sm font-medium text-blue-600">
                    New Message
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
