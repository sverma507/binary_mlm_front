import React, { useState } from 'react';
import Layout from '../layout/layout';
import axios from 'axios';
import { useAuth } from '../../context/auth';
import { toast } from 'react-toastify';

const BullPlan = () => {
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false); // Loading state

  const handleBuyBull = async () => {
    try {
      setLoading(true); // Start loading
      const id = auth?.user?._id;

      // API call to purchase the bull
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/user/purchase-bull/${id}`);

      // Handle response messages
      if (data.success) {
        toast.success(data.message); // Show success toast
      } else {
        toast.error(data.message); // Show error toast
      }

      setLoading(false); // Stop loading
    } catch (error) {
      setLoading(false); // Stop loading
      toast.error('An error occurred while processing your request. Please try again.'); // Handle API errors
    }
  };

  return (
    <Layout>
      <section className="relative pt-28 py-16 bg-gradient-to-r from-blue-800 to-black text-gray-100 overflow-hidden">
        {/* Background elements for creativity */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 opacity-30 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-blue-400 animate-bounce">Join the Bull Plan Today</h2>
            <p className="mt-6 text-xl text-gray-300">
              Kickstart your financial growth with a $60 investment. Secure daily profits and benefit from a powerful, automated trading platform.
            </p>
          </div>

          {/* Key Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <img src={require('./Images/bull.jpg')} alt="Investment" className="mx-auto w-16 mb-4" />
              <h4 className="text-2xl font-bold text-blue-400">Low Investment, High Returns</h4>
              <p className="mt-4 text-gray-300">
                Start trading with as little as $60, and see high returns through our intelligent trading algorithms.
              </p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <img src={require('./Images/trading-setup.jpg')} alt="Profit" className="mx-auto w-16 mb-4" />
              <h4 className="text-2xl font-bold text-blue-400">Automated Profits</h4>
              <p className="mt-4 text-gray-300">
                With our automated platform, your investment will generate consistent daily profits while you relax.
              </p>
            </div>
            <div className="bg-gray-800 shadow-lg rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
              <img src={require('./Images/animation-graph.jpg')} alt="Community" className="mx-auto w-16 mb-4" />
              <h4 className="text-2xl font-bold text-blue-400">Global Trading Community</h4>
              <p className="mt-4 text-gray-300">
                Join a thriving community of traders and investors, sharing insights and success stories.
              </p>
            </div>
          </div>

          {/* Steps to Start Trading */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-blue-400 mb-6">
              How to Get Started
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Follow these simple steps to activate your Bull Plan and begin trading.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-blue-400">Step 1: Buy a Bull</h4>
                <p className="mt-4 text-gray-300">
                  Purchase your Trading Bull for just $60 and gain access to a range of automated trading opportunities.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-blue-400">Step 2: Refer and Earn</h4>
                <p className="mt-4 text-gray-300">
                  Share your success! Earn referral bonuses of 10%, 5%, and 2% as your network grows.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-blue-400">Step 3: Trade and Profit</h4>
                <p className="mt-4 text-gray-300">
                  Add funds, begin trading, and generate daily profits with a secure, automated platform.
                </p>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-6">
              The future of financial independence starts with your first step. Invest in a Bull, and start reaping the rewards today.
            </p>
            <button
              onClick={handleBuyBull}
              className={`inline-block ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-500'} text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300`}
              disabled={loading} // Disable the button when loading
            >
              {loading ? 'Loading...' : 'Buy Your Bull Now for $60'}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BullPlan;
