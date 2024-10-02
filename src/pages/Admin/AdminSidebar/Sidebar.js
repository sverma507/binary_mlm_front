import React, { useState } from 'react';
import { FaBars, FaTachometerAlt,FaUserCheck,FaKey  , FaUser, FaCog, FaAngleDown } from 'react-icons/fa';
import HorizontalNavbar from '../AdminNavbar/AdminNavbar';
import { FcStatistics } from "react-icons/fc";
import { GiCash,GiAchievement  } from "react-icons/gi";
import { MdOutlineSettingsInputSvideo } from "react-icons/md";
import { FaPhotoFilm,FaLock } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../../context/adminAuth';
import { toast } from 'react-hot-toast';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [AdminAuth, setAdminAuth] = useAdminAuth()
  const navigate = useNavigate()

  const toggleNavbar = () => {
    if (isOpen) {
      setOpenDropdown(null);  // Close any open dropdowns when collapsing the navbar
    }
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (index) => {
    setIsOpen(true);  // Expand the navbar when opening a dropdown
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleLogout = () => {
    setAdminAuth({
      ...AdminAuth,
      user: null,
      token: "",
    });
    localStorage.removeItem("AdminAuth");
    
    toast('Logout successfully', {
      duration: 4000, // Duration in milliseconds
      position: 'top-center', // Position of the toast
      style: {
        background: 'red',
        color: 'white',
      },
      icon: '📤', // Add a custom icon
    });
    setTimeout(()=> {
      navigate("/admin/login");
    },2000)
  };

  return (
    <div className="flex flex-col">
      {/* <ToastContainer/> */}
      {/* <HorizontalNavbar toggle={toggle}/> */}
      <div className="flex flex-row flex-grow h-screen text-sm">
        <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-width duration-300 fixed h-full`}>
          <button 
            onClick={toggleNavbar} 
              className="absolute top-4 left-5 text-3xl focus:outline-none"
          >
            <FaBars />
          </button>
          <div className="mt-20">
            <ul>
            
              <li className="group" onClick={()=>{navigate('/dashboard/admin')}}>
                <div onClick={() => handleDropdownClick(0)} className="flex  items-center px-4 py-2 text-left cursor-pointer hover:bg-gray-700">
                  <FaTachometerAlt className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">Dashboard</span>}
                </div>
              </li>
              <li className="group">
                <div onClick={() => handleDropdownClick(1)} className="flex items-center text-left px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaUser className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">User Master</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 1 ? 'rotate-180' : ''}`} />}
                </div>
                {openDropdown === 1 && isOpen && (
                  <ul className="pl-10">
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/all-users')}}>All Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/all-paid-users')}}>Paid Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700"  onClick={()=>{navigate('/dashboard/admin/all-unpaid-users-list')}}>Unpaid Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700"  onClick={()=>{navigate('/dashboard/admin/blocked-users')}} >Blocked Users</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700"  onClick={()=>{navigate('/dashboard/admin/downline-users')}}>Downline Users</li>
                    {/* <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/activation-report')}}>Activation Report</li> */}
                    {/* <li className="py-1 cursor-pointer hover:bg-gray-700">Access Panel</li> */}
                  </ul>
                )}
              </li>
              <li className="group" onClick={()=>{navigate('/dashboard/admin/activate-user')}}>
                <div onClick={() => handleDropdownClick(0)} className="flex items-center text-left px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaTachometerAlt className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">Activation</span>}
                </div>
              </li>
             
              <li className="group">
                <div onClick={() => handleDropdownClick(2)} className="flex items-center px-4 text-left py-2 cursor-pointer hover:bg-gray-700">
                  <FcStatistics className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">Commission Reports</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 2 ? 'rotate-180' : ''}`} />}
                </div>
                {openDropdown === 2 && isOpen && (
                  <ul className="pl-10">
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/activation-bonus')}} >Acivation Bonus</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Revenue Bonus</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Team Growth Income</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Invitation Bonus</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700">Game Income</li>
                  </ul>
                )}
              </li>
              
              <li className="group">
                <div onClick={() => handleDropdownClick(3)} className="flex items-center text-left px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <GiCash className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">Financial</span>}
                  {isOpen && <FaAngleDown className={`ml-2 transition-transform duration-300 ${openDropdown === 3 ? 'rotate-180' : ''}`} />}
                </div>
                {openDropdown === 3 && isOpen && (
                  <ul className="pl-10">
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/add-deduct')}}>Add/Deduct Wallet</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/all-requests')}}>Deposite History</li>
                    <li className="py-1 cursor-pointer hover:bg-gray-700" onClick={()=>{navigate('/dashboard/admin/all-withdrawl-requests')}}>Withdrawl Request</li>
                  </ul>
                )}
              </li>
              <li className="group " onClick={()=>{navigate('/dashboard/admin/change-password')}}>
                <div className="flex  items-center text-left px-4 py-2 cursor-pointer hover:bg-gray-700">
                  <FaLock   className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">Change Password</span>}
                </div>
              </li>
              <li className="group " onClick={handleLogout}>
                <div className="flex  items-center px-4 py-2 text-left cursor-pointer hover:bg-gray-700">
                  <FaSignOutAlt   className="mr-2 text-2xl" />
                  {isOpen && <span className="flex-grow ml-3">Logout</span>}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;