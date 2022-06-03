import React from 'react'
import'./Login.css'

const Register = () => {
    return (
        <div className='bg-white w-full h-screen relative'>
         <div className='allpage h-screen w-full'>
             <div className=' rounded rounded-2xl  w-9/12 h-5/12 mx-32 my-4 flex border-4 border-white  absolute'>
             <div className='w-2/5 h-9/12  rounded-r-3xl '>
                     <img src="../public/Images/smartship1.jpg" alt="photo" className='BackImg rounded-l-xl'></img>
                 </div>
                <div className=' w-3/5 bg-sky-900 rounded-r-3xl'> 
                  <div className='py-12 px-12 '>
                  <div><h3 className='text-xl text-white py-2    font-bold'>Welcome To SmartShipHub</h3></div>
                     <div><p className='text-xs w-40 text-white py-2 '>Welcome back Please Create Your New Account</p></div>
                     <div><label className=' text-xs text-white '>Employee Id</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                     <div><label className=' text-xs text-white '>Employee Full Name</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                    
                     <div><label className=' text-xs text-white '>Email</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>

                     
                     
                     <div><label className='text-xs text-white '>Password</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                     <div><label  className='text-xs text-white '>Date Of Birth</label></div>
                     <div className=''><input type="date" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                     <div><label className='text-xs text-white '>Mobile</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                     <div><label className='text-xs text-white '>Address</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                     <div><label className='text-xs text-white '>Designation</label></div>
                     <div><input type="text" className='px-2 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent border-2 border-gray-400 rounded-lg w-9/12 '></input></div>
                     
                     
                     
                     
                     
                     
                     <div className='text-xs text-red-600 py-2'>Alredy Registered ?</div>
                     <div className='my-4'>
                         <button type='submit' className='hover:bg-green-700 bg-green-600 rounded-xl px-6 w-9/12 h-8 text-white text-xs py-2  w'>Register</button>
                         {/* <button type='submit' className='border-blue-900 rounded-xl w-24 h-8 border px-6 text-blue-900 text-xs py-2 mx-4'>Sign In</button> */}
                    </div>
                  </div>
                 </div>
                 
             
         </div>

</div>
        </div>
    )
}

export default Register;