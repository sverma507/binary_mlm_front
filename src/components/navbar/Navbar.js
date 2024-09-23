// import React from 'react'
// import { useNavigate } from 'react-router'

// function Navbar() {
//     const navigate=useNavigate()
//     return (
//         <div className='shadow-xl shadow-blue-500 fixed top-0 z-40 w-full'>
//             <div class="navbar bg-black text-white flex justify-between">
//                 <div class="navbar-start">
//                     {/* <div className='flex justify-between'> */}
                        
//                         <div class="dropdown bg-slate-800 text-black">
//                             <div tabindex="0" role="button" class="btn btn-ghost lg:hidden ">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     class="h-5 w-5 text-white"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor">
//                                     <path
//                                         stroke-linecap="round"
//                                         stroke-linejoin="round"
//                                         stroke-width="2"
//                                         d="M4 6h16M4 12h8m-8 6h16" />
//                                 </svg>
//                             </div>
//                             <ul
//                                 tabindex="0"
//                                 class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                                 <li onClick={()=>{navigate('/')}}><a>Home</a></li>
//                                 <li onClick={()=>{navigate('/about-us')}}><a>About</a></li>
//                                 <li onClick={()=>{navigate('/contact-us')}}><a>Contact Us</a></li>
//                                 <li onClick={()=>{navigate('/news')}}><a>News</a></li>
//                                 {/* <li><a>All products</a></li> */}
//                                 <li onClick={()=>{navigate('/bull')}}><a> Trading Bull</a></li>
//                             </ul>
//                         </div>

//                      <a href='/'><img width={'70px'} style={{borderRadius:"50%",marginLeft:"20px"}} src='/images/main_logo2.png'/></a>
                        
                       
//                     {/* </div> */}
                    
//                 </div>
//                 <div class="navbar-center hidden lg:flex ">
//                             <ul class="menu menu-horizontal px-1 font-bold text-xl ">
//                                 <li onClick={()=>{navigate('/')}} className=' hover:text-blue-500'><a>Home</a></li>
//                                 <li onClick={()=>{navigate('/about-us')}} className=' hover:text-blue-500'><a>About</a></li>
//                                 <li onClick={()=>{navigate('/contact-us')}} className=' hover:text-blue-500'><a>Contact Us</a></li>
//                                 <li onClick={()=>{navigate('/news')}} className=' hover:text-blue-500'><a>News</a></li>
//                                 <li onClick={()=>{navigate('/login')}} className=' text-blue-500 border border-white rounded-lg hover:bg-white'><a>Get Started</a></li>
//                                 {/* <li className=' hover:text-blue-500'><a>All products</a></li> */}
//                                 <li onClick={()=>{navigate('/bull')}} className=' ml-2 text-white border  border-white rounded-lg bg-gradient-to-br from-green-500 to-blue-800 hover:bg-gradient-to-tr '><a>Trading Bull</a></li>
//                             </ul>
//                         </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar


















import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Navbar() {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDashboardDropdown = () => {
    setDashboardOpen((prev) => !prev);
  };

  return (
    <div className='shadow-xl shadow-blue-500 fixed top-0 z-40 w-[100%]'>
  <div className="navbar bg-black text-white flex justify-between">
    {/* Navbar Start */}
    <div className="navbar-start flex items-center">
      {/* Logo */}
      <a href='/' className="flex">
        <img
          width={'70px'}
          style={{ borderRadius: '50%'}}
          src='/images/main_logo2.png'
          alt="Logo"
        />
      </a>
    </div>

    {/* Mobile Dropdown for small screens - Menu Button on Right */}
    <div className="navbar-end lg:hidden flex">
      <div className="dropdown bg-slate-800 text-black">
        <div tabIndex="0" role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-54 right-6 p-2 shadow text-white">
          <li onClick={() => { navigate('/'); }}><a>Home</a></li>
          <li onClick={() => { navigate('/about-us'); }}><a>About</a></li>
          <li onClick={() => { navigate('/contact-us'); }}><a>Contact Us</a></li>
          <li onClick={() => { navigate('/news'); }}><a>News</a></li>
          <li onClick={() => { navigate('/bull'); }}><a>Trading Bull</a></li>

          {/* Dashboard Dropdown for Mobile */}
          <li>
            <a onClick={toggleDashboardDropdown} className="flex justify-between items-center">
              Dashboard
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            {isDashboardOpen && (
              <ul className="rounded-box mt-2 w-52 p-2">
                <li onClick={() => { navigate('/profile'); }}><a>My Profile</a></li>
                <li onClick={() => { navigate('/bull'); }}><a>My Bull</a></li>
                <li onClick={() => { navigate('/products'); }}><a>My Products</a></li>
                <li onClick={() => { navigate('/earnings'); }}><a>My Earnings</a></li>
                <li onClick={() => { navigate('/withdraw'); }}><a>Withdraw</a></li>
                <li onClick={() => { navigate('/recharge'); }}><a>Recharge</a></li>
                <li onClick={() => { navigate('/transactions'); }}><a>All Transactions</a></li>
                <li onClick={() => { navigate('/network'); }}><a>My Network</a></li>
                <li onClick={() => { navigate('/spin-game'); }}><a>Spin Game</a></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>

    {/* Navbar Center for large screens */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 font-bold text-xl">
        <li onClick={() => { navigate('/'); }} className='hover:text-blue-500'><a>Home</a></li>
        <li onClick={() => { navigate('/about-us'); }} className='hover:text-blue-500'><a>About</a></li>
        <li onClick={() => { navigate('/contact-us'); }} className='hover:text-blue-500'><a>Contact Us</a></li>
        <li onClick={() => { navigate('/news'); }} className='hover:text-blue-500'><a>News</a></li>

        {/* Dashboard Dropdown for large screens */}
        <li className="relative group hover:text-blue-500">
          <a className="hover:text-blue-500">Dashboard</a>
          <ul className="dropdown-content bg-black text-white mt-3 w-52 p-2 shadow-lg absolute left-0 hidden group-hover:block">
            <li onClick={() => { navigate('/profile'); }}><a>My Profile</a></li>
            <li onClick={() => { navigate('/bull'); }}><a>My Bull</a></li>
            <li onClick={() => { navigate('/products'); }}><a>My Products</a></li>
            <li onClick={() => { navigate('/earnings'); }}><a>My Earnings</a></li>
            <li onClick={() => { navigate('/withdraw'); }}><a>Withdraw</a></li>
            <li onClick={() => { navigate('/recharge'); }}><a>Recharge</a></li>
            <li onClick={() => { navigate('/transactions'); }}><a>All Transactions</a></li>
            <li onClick={() => { navigate('/network'); }}><a>My Network</a></li>
            <li onClick={() => { navigate('/spin-game'); }}><a>Spin Game</a></li>
          </ul>
        </li>

        <li onClick={() => { navigate('/login'); }} className='text-blue-500 border border-white rounded-lg hover:bg-white'><a>Get Started</a></li>
        <li onClick={() => { navigate('/bull'); }} className='ml-2 text-white border border-white rounded-lg bg-gradient-to-br from-green-500 to-blue-800 hover:bg-gradient-to-tr'><a>Trading Bull</a></li>
      </ul>
    </div>
  </div>
</div>

  );
}

export default Navbar;
