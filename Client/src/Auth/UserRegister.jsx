import React from 'react';
// import { BsEnvelope } from "react-icons/di";

export  const UserRegister = () => {
  return (
    <div className='h-screen w-screen bg-secondary-light relative'>
      <div className='bg-secondary-dark my-16 mx-10 h-3/4 w-3/4 inline text-center  absolute  lg:mx-32 lg:rounded-xl '>
    <div className=' inline lg:my-8'>
      <div className='inline'><h3 className='font-bold text-xs text-red-900 mx-4 my-4 lg:text-red-700 lg:text-2xl lg:text-center lg:my'>Welcome To SmartShipHub</h3></div>
      <div className='inline'><p className='text-xs px-4 my-2  lg:w-72 lg:text-red-600'>Fill Your Detailes*</p></div>
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-9/12 border-b-2 lg:w-3/4 ' type="text" placeholder='Employee id'></input></div>
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none w-3/4 my-2 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter Your Full Name'></input></div>
      
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Email'></input></div>
      
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Password'></input></div>
      
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="date" placeholder='Select your Birth Date'></input></div>
       
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Mobile '></input></div>
      
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Address'></input></div>
      
      <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Designation'></input></div>

      <div><button className='bg-primary text-white w-3/4 p-2 my-4 text-xs mx-4'> Register</button></div>
      <div className=''><span className='text-xs mx-4 '> Already User ? <span className='cursor-pointer text-red-600 text-xs w-20'>Log IN</span></span></div>
    </div>
      </div>
      
    </div>
  )
}