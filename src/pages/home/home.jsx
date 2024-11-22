import React from "react";
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../../components/dashboard/dashboard";
import Header from "../../components/dashboardHeader/header";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
        
      <Dashboard/>
    </div>
  );
};

export default Home;
