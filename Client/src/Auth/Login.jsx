import React, { useState } from 'react'
import'./Login.css'

const Login = () => {
    const[userEmail,setUserEmail]=useState('');
    const[userpassword,setUserPassword]=useState('');



    return (
      <div className="bg-white-900 w-screen h-screen relative  h-screen">
        <div className="allpage w-full h-screen ">
          <div className=" rounded rounded-3xl   w-9/12 h-3/5 m-32 flex border-4 border-white  absolute">
            <div className="w-2/5 h-9/12 rounded-l-3xl bg-sky-900">
              <img
                src="../public/Images/smartship1.jpg"
                alt="logo"
                className="BackImg rounded-l-xl"
              ></img>
            </div>
            <div className=" w-3/5 bg-primary rounded-r-3xl">
              <div className="py-12 px-16 ">
                <div>
                  <h3 className="text-xl text-white py-2    font-bold">
                    Welcome To SmartShipHub
                  </h3>
                </div>

                <div>
                  <p className="text-xs w-40 text-white py-2 ">
                    Welcome back Please login to Your account
                  </p>
                </div>
                <div>
                  <label className=" text-xs text-white ">Email</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 "
                    onChange={(e) => setUserEmail(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label className=" text-xs text-white ">Password</label>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent  px-2 border-2 border-gray-400 rounded-lg w-9/12 "
                    onChange={(e) => setUserPassword(e.target.value)}
                  ></input>
                </div>
                <div className="text-xs text-red-700 py-2">
                  Forget Password ?
                </div>
                <div className="my-4">
                  <button
                    type="submit"
                    className=" hover:bg-green-700 bg-green-600 rounded-2xl px-6 w-9/12 h-8 text-white text-xs py-2  w"
                  >
                    Login
                  </button>
                  <div className="text-red-800 py-2">New User ?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;