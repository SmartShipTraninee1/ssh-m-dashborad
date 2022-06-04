import React from 'react'
import Header from './Header'
import Home from './Home';
import Sidebar from './Sidebar'

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className='w-full'>
        <Header />
        <Home/>
      </div>
    </div>
  );
}

export default Dashboard