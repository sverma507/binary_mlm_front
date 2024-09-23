import React, { useState } from 'react';
import Layout from '../../components/layout/layout';
import axios from 'axios';
import "./verification.css"
import abc11 from '../../assets/images/abc11.png';

const Verification = () => {
  const [emailOtp, setEmailOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const email = "ravijangra615@gmail.com"

  const handleOtpSubmit = async () => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('https://your-backend-url.com/verify-otp', {
        emailOtp,
        email,
      });

      if (response.data.success) {
        setSuccessMessage('OTP verification successful!');
        // Optionally redirect the user to another page after successful verification
      } else {
        setErrorMessage('OTP verification failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred while verifying OTP. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="verification-container flex flex-col items-center justify-center h-screen mt-10"
        style={{ backgroundImage: `url(${abc11})` }}
      >
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">OTP Verification</h2>
          <p className="text-gray-600 text-center mb-4">
            We have sent an OTP to your email: <strong>{email}</strong>
          </p>

          {/* Email OTP Input */}
          <div className="mb-4">
            <label htmlFor="emailOtp" className="block text-sm font-medium text-gray-700">
              Email OTP
            </label>
            <input
              type="text"
              id="emailOtp"
              value={emailOtp}
              onChange={(e) => setEmailOtp(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter email OTP"
            />
          </div>

          {/* Error or Success Message */}
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 text-center mb-4">
              {successMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleOtpSubmit}
            disabled={loading}
            className={`w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Verification;
