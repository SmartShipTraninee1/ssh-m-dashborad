import React from 'react'
import Footer from './Footer';
import Header from './Header'
import Home from './Home';
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div className="flex bg-secondary">
      <Sidebar />
      <div className="w-full">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard