import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Dashboard from './components/dashboard/dashboard';
import Tasks from './pages/Tasks/tasx';
import Inventory from './pages/inventry/inventry';
import RobotStatus from './pages/robotsstatus/robotsstatus';
import Messages from './pages/messages/message';
import UserDashboard from './pages/user/userdashboard';
import RoleSelect from './pages/roleselect/roleselect';
import HeroPage from './pages/hero/heropage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HeroPage />} />


        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/roleselect" element={<RoleSelect />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/robots" element={<RobotStatus />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </BrowserRouter>
  )
}