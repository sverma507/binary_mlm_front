
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/auth';
import { toast, ToastContainer } from 'react-toastify';

function Navbar() {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const toggleDashboardDropdown = () => {
    setDashboardOpen((prev) => !prev);
  };


  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
    setTimeout(()=> {
      navigate("/login");
    },2000)
  };



  return (
    <div className='shadow-xl shadow-blue-500 fixed top-0 z-40 w-[100%]'>
      <ToastContainer/>
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
      <div className="dropdown left-4">
        <div tabIndex="0" role="button" className="btn btn-ghost">
          {/* <svg
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
          </svg> */}
          <img width={'60px'} src='/images/menu_utech.png' alt='error'/>
        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[150px] right-6 p-2 shadow text-white">
          <li onClick={() => { navigate('/'); }} className='hover:bg-gray-700 rounded-lg'><a>Home</a></li>
          <li onClick={() => { navigate('/about-us'); }} className='hover:bg-gray-700 rounded-lg'><a>About</a></li>
          <li onClick={() => { navigate('/contact-us'); }} className='hover:bg-gray-700 rounded-lg'><a>Contact Us</a></li>
          <li onClick={() => { navigate('/news'); }} className='hover:bg-gray-700 rounded-lg'><a>News</a></li>
          <li onClick={() => { navigate('/bull'); }} className='hover:bg-gray-700 rounded-lg'><a>Trading Bull</a></li>

          {/* Dashboard Dropdown for Mobile */}
          <li>
            {
              auth?.token ? ( <a onClick={toggleDashboardDropdown} className="flex justify-between items-center">
                Dashboard
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>):(<li onClick={() => { navigate('/login'); }} className='text-blue-500 border border-white rounded-lg w-[89%] m-auto mt-6 hover:bg-white'><a>Get Started</a></li>)
            }
           
            {isDashboardOpen && (
              <ul className="rounded-box mt-2 w-52 p-2 text-white">
                <li onClick={() => { navigate('/user/profile'); }}><a>My Profile</a></li>
                <li onClick={() => { navigate('/bull'); }}><a>My Bull</a></li>
                <li onClick={() => { navigate('/products'); }}><a>My Products</a></li>
                <li onClick={() => { navigate('/user/earnings'); }}><a>My Earnings</a></li>
                <li onClick={() => { navigate('/user/withdraw'); }}><a>Withdraw</a></li>
                <li onClick={() => { navigate('/user/recharge'); }}><a>Recharge</a></li>
                <li onClick={() => { navigate('/user/user-tree'); }}><a>My Team</a></li>
              <li onClick={() => { navigate('/user/invitation'); }} className='hover:bg-gray-700 rounded-lg'><a>Invite</a></li>
                <li onClick={() => { navigate('/user/transactions'); }}><a>All Transactions</a></li>
                <li onClick={() => { navigate('/user/network'); }}><a>My Network</a></li>
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
        <li onClick={() => { navigate('/bull'); }} className='ml-2 text-white border border-white rounded-lg bg-gradient-to-br from-green-500 to-blue-800 hover:bg-gradient-to-tr mr-4'><a>Trading Bull</a></li>
        {/* Dashboard Dropdown for large screens */}
        {
          auth?.token ? (<li className="relative group hover:text-blue-500">
            <a className="hover:text-blue-500">Dashboard</a>
            <ul className="dropdown-content bg-gray-500 text-white text-sm mt-10 w-52 p-2 shadow-lg rounded-md absolute right-0 hidden group-hover:block">
              <li onClick={() => { navigate('/user/profile'); }} className='hover:bg-gray-700 rounded-lg'><a>My Profile</a></li>
              <li onClick={() => { navigate('/user/bull'); }} className='hover:bg-gray-700 rounded-lg'><a>Trading Bull</a></li>
              <li onClick={() => { navigate('/user/products'); }} className='hover:bg-gray-700 rounded-lg'><a>My Products</a></li>
              <li onClick={() => { navigate('/user/earnings'); }} className='hover:bg-gray-700 rounded-lg'><a>My Earnings</a></li>
              <li onClick={() => { navigate('/user/withdraw'); }} className='hover:bg-gray-700 rounded-lg'><a>Withdraw</a></li>
              <li onClick={() => { navigate('/user/recharge'); }} className='hover:bg-gray-700 rounded-lg'><a>Recharge</a></li>
              <li onClick={() => { navigate('/user/user-tree'); }} className='hover:bg-gray-700 rounded-lg'><a>My Team</a></li>
              <li onClick={() => { navigate('/user/invitation'); }} className='hover:bg-gray-700 rounded-lg'><a>Invite</a></li>
              <li onClick={() => { navigate('/user/transactions'); }} className='hover:bg-gray-700 rounded-lg'><a>All Transactions</a></li>
              <li onClick={() => { navigate('/user/network'); }} className='hover:bg-gray-700 rounded-lg'><a>My Network</a></li>
              <li onClick={handleLogout} className='hover:bg-gray-700 rounded-lg'><a>Logout</a></li>
            </ul>
          </li>) : (<></>)
        }
        
        {
          auth?.token ? (<></>) : (<li onClick={() => { navigate('/login'); }} className='text-blue-500 border border-white rounded-lg hover:bg-white'><a>Get Started</a></li>)
        }
        
        
      </ul>
    </div>
  </div>
</div>

  );
}

export default Navbar;
