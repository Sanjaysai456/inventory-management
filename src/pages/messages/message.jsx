import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Messages = () => {
  const [messages, setMessages] = useState([]);
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
            <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customer Messages
            </h1>
          </div>

          <div className="grid gap-6">
            {messages.map((message) => (
              <div 
                key={message._id}
                className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer transition duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                  !message.read ? 'border-l-4 border-blue-500' : ''
                }`}
                onClick={() => markAsRead(message._id)}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">{message.customer}</h3>
                  {!message.read && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{message.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
