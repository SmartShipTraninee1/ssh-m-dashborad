import React from 'react';
import'./Login.css';
// import { BsBagCheck } from 'react-icons/bs';


export const UserLogin = () => {
  return (
    <div className='h-screen w-screen bg-secondary-light relative'>
    <div className='bg-secondary-dark my-20 py-12 lg:py-4 mx-12 h-3/4 w-3/4 lg:h-2/4 lg:py-6 inline text-center  absolute lg:my-40  lg:mx-32 lg:rounded-xl '>
  <div className=' inline lg:my-2'>
    <div className='inline'><img src='../public/Images/smartship2.png' className='mx-4 my-6 lg:mx-72' alt='smartship'></img></div>
    <div className='inline'><p className='text-xs px-4 my-2 lg:mx-16 lg:w-72 lg:text-red-600'>Welcome back Please login to Your account</p></div>
  
    
    <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Email'></input></div>
    
    <div className='inline'><input className='text-xs mx-4 bg-secondary-dark border-white  focus:outline-none my-2 w-3/4 border-b-2 lg:w-3/4 ' type="text" placeholder='Enter your Password'></input></div>
    <div className=''> <strong><span className='text-left text-red-600 cursor-pointer text-xs'>Forget Password ?</span></strong></div>
    
    

    <div><button className='bg-primary text-white w-3/4 p-2 my-4 text-xs mx-4'>Login </button></div>
    <div className=''><span className='text-xs mx-4 '> Don't have an Account ? <span className='cursor-pointer text-red-600 text-xs w-20'>Create New Account</span></span></div>
  </div>
    </div>
    
  </div>
  )
}
