import React, { useState, useEffect } from "react";
import { Battery, BatteryCharging, Circle, Menu, WrenchIcon } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";

const RobotStatus = () => {
  const [robots, setRobots] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetchRobots();
  }, []);

  const fetchRobots = async () => {
    try {
      const response = await fetch('https://sanjay-backend.onrender.com/api/bot-status/all-bots');
      if (!response.ok) {
        throw new Error('Failed to fetch robots');
      }
      const result = await response.json();
      console.log('Fetched robot data:', result); // Debug log
      setRobots(result.data || []);
    } catch (error) {
      console.error('Error fetching robots:', error);
      alert('Failed to fetch robots. Please try again.');
      setRobots([]);
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'text-green-500';
      case 'inactive':
        return 'text-red-500';
      case 'charging':
        return 'text-yellow-500';
      case 'maintenance':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusGradient = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20';
      case 'inactive':
        return 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20';
      case 'charging':
        return 'bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20';
      case 'maintenance':
        return 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20';
      default:
        return 'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'charging':
        return <BatteryCharging className="h-6 w-6 text-yellow-500" />;
      case 'maintenance':
        return <WrenchIcon className="h-6 w-6 text-orange-500" />;
      default:
        return <Battery className="h-6 w-6 text-blue-500" />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Menu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
      </button>

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Robot Status</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {robots && robots.length > 0 ? (
              robots.map(robot => (
                <div key={robot.id} className={`rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow duration-300 ${getStatusGradient(robot.status)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Circle className={`h-8 w-8 mr-3 ${getStatusColor(robot.status)}`} fill="currentColor" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{robot.id}</h2>
                    </div>
                    {getStatusIcon(robot.status)}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Battery Level</p>
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-4 mr-2">
                          <div 
                            className={`h-4 rounded-full ${
                              robot.battery.level > 60 ? 'bg-green-500' :
                              robot.battery.level > 20 ? 'bg-yellow-500' : 
                              'bg-red-500'
                            }`}
                            style={{width: `${robot.battery.level}%`}}
                          />
                        </div>
                        <span className="text-sm font-medium">{robot.battery.level}%</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <p className={`font-medium capitalize ${getStatusColor(robot.status)}`}>
                        {robot.status}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium capitalize">{robot.location.current}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Last Charged</p>
                      <p className="font-medium">{robot.battery.lastCharged}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Last Updated</p>
                      <p className="font-medium">{robot.timestamps.updated}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                No robots found. Please check your connection and try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotStatus;