import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Authcontext/Authcontex';
import { doSignOut } from '../../firebase/auth';
import { UserCircle, LogOut, Bell } from 'lucide-react';

const Header = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    return (
        <nav className='flex justify-between items-center w-full z-20 fixed top-0 left-0 h-16 border-b bg-white shadow-sm px-6'>
            {/* Left side - Brand */}
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-gray-800">RoboInventory</h1>
            </div>

            {/* Right side - User info and actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Bell className="h-5 w-5 text-gray-600" />
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <UserCircle className="h-8 w-8 text-gray-600" />
                        <span className="text-sm font-medium text-gray-700">
                            {user?.displayName || user?.email || 'Guest'}
                        </span>
                    </div>
                    <button 
                        onClick={() => { doSignOut().then(() => { navigate('/') }) }}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-200"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
