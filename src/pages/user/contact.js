import React, { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Header from "../../components/dashboardHeader/header";
import { Home, Info, Star } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    subject: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sanjay-backend.onrender.com/api/messages/post-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      alert('Message sent successfully!');

    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-16 h-full w-64 bg-white shadow-lg">
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <a href="/userdashboard" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all">
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
      <div className="ml-64 p-8 pt-24"> {/* Added pt-24 for top padding */}
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold ml-3">Phone</h3>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold ml-3">Email</h3>
              </div>
              <p className="text-gray-600">inventrymanagement6@gmail.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-semibold ml-3">Location</h3>
              </div>
              <p className="text-gray-600">PocahammaGully , Rakasipet ,Bodhan ,Telangana ,India</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
