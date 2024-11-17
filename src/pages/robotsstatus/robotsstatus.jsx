import React, { useState } from "react";
import { Battery, BatteryCharging, Circle } from "lucide-react";
import { robotsData } from "./robotstatusData";

const RobotStatus = () => {
  const [robots, setRobots] = useState(robotsData);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Robot Status</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {robots.map(robot => (
            <div key={robot.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Circle className="h-8 w-8 text-blue-600 mr-3" fill="currentColor" />
                  <h2 className="text-xl font-semibold text-gray-800">{robot.id}</h2>
                </div>
                {robot.status === "Charging" ? (
                  <BatteryCharging className="h-6 w-6 text-green-500" />
                ) : (
                  <Battery className="h-6 w-6 text-blue-500" />
                )}
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Battery Level</p>
                  <div className="flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-4 mr-2">
                      <div 
                        className={`h-4 rounded-full ${
                          robot.batteryLevel > 60 ? 'bg-green-500' :
                          robot.batteryLevel > 20 ? 'bg-yellow-500' : 
                          'bg-red-500'
                        }`}
                        style={{width: `${robot.batteryLevel}%`}}
                      />
                    </div>
                    <span className="text-sm font-medium">{robot.batteryLevel}%</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{robot.status}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Last Charged</p>
                  <p className="font-medium">{robot.lastCharged}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RobotStatus;