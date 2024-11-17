import React, { useState } from "react";
import { Search } from "lucide-react";
import { messagesData } from "./messageData";

const Messages = () => {
  const [messages, setMessages] = useState(messagesData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = messages.filter(message =>
    message.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAsRead = (id) => {
    setMessages(messages.map(message =>
      message.id === id ? {...message, read: true} : message
    ));
  };

  return (
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
              key={message.id}
              className={`bg-white rounded-lg shadow-sm p-4 cursor-pointer transition duration-200 hover:shadow-md ${
                !message.read ? 'border-l-4 border-blue-500' : ''
              }`}
              onClick={() => markAsRead(message.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-800">{message.customer}</h3>
                <span className="text-sm text-gray-500">{message.time}</span>
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
  );
};

export default Messages;
