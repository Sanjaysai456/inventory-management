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
import { ThemeProvider } from './context/ThemeContext';
import Login from './signin/sign';
import About from './about/about';

import Register from './signup/signup';
import Contact from './pages/user/contact';

export default function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HeroPage />} />


        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/roleselect" element={<RoleSelect />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/home" element={<Home />} />
       
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/robots" element={<RobotStatus />} />
        <Route path="/messages" element={<Messages />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}