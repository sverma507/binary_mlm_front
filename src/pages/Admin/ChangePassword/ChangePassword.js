import React, { useState } from 'react';
import Sidebar from '../AdminSidebar/Sidebar';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [buttonText, setButtonText] = useState('Change Password');

  // State to manage visibility of each password
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('New password and confirmed password must be the same');
      return;
    }

    setIsProcessing(true);
    setButtonText('Processing...');

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/admin/change-password`,
        {
          oldPassword,
          newPassword,
        }
      );

      toast.success(response.data.message, {
        duration: 4000,
        position: 'top-center',
        style: {
          background: 'green',
          color: 'white',
        },
        icon: `😀`,
      });

      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setButtonText('Password Changed!');

      // Set button back to original text after 2-3 seconds
      setTimeout(() => {
        setButtonText('Change Password');
      }, 2000);
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Something went wrong. Please try again.', {
          duration: 4000,
          position: 'top-center',
        });
      } else {
        toast.error('Something went wrong.', {
          duration: 4000,
          position: 'top-center',
        });
      }
      setButtonText('Change Password');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-4 bg-gray-100">
      <Sidebar className="fixed w-60 h-full" />

      <div className="m-auto shadow-lg container w-full max-w-md p-8 bg-white rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Change Password</h2>

        <form onSubmit={handleChangePassword} className="space-y-6">
          {/* Old Password */}
          <div className="relative">
            <label
              htmlFor="oldPassword"
              className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            >
              Old Password <span className="text-red-500">*</span>
            </label>
            <input
              type={oldPasswordVisible ? 'text' : 'password'}
              id="oldPassword"
              className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your old password"
              value={oldPassword}
              required
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <span 
              onClick={() => setOldPasswordVisible(!oldPasswordVisible)} 
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer top-6 text-white"
            >
              {oldPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* New Password */}
          <div className="relative">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            >
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type={newPasswordVisible ? 'text' : 'password'}
              id="newPassword"
              className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your new password"
              value={newPassword}
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span 
              onClick={() => setNewPasswordVisible(!newPasswordVisible)} 
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer top-6 text-white"
            >
              {newPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm New Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-semibold mb-2 text-left"
            >
              Confirm New Password <span className="text-red-500">*</span>
            </label>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              id="confirmPassword"
              className="shadow-sm border border-gray-300 rounded-md w-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Confirm your new password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span 
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} 
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer top-6 text-white"
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isProcessing}
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
