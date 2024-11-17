import React from "react";
import Navbar from "../../components/navbar/navbar";
import Dashboard from "../../components/dashboard/dashboard";

const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
      <Dashboard/>
    </div>
  );
};

export default Home;
