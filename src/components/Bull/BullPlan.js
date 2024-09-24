import React from 'react';
import Layout from '../layout/layout';

const BullPlan = () => {
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

          {/* Key Benefits with Icons */}
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

          {/* Referral and Trading Structure Section */}
          <div className="bg-gradient-to-b from-blue-900 to-black p-8 rounded-lg shadow-xl relative overflow-hidden mb-16">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-opacity-50 bg-gradient-to-r from-transparent to-blue-800 animate-pulse"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-blue-400 text-center mb-8">
                Multiply Your Earnings with the Referral System
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 text-lg text-gray-300">
                  <p>
                    For every Bull purchased in your network, you earn instantly:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your direct referral gets you 10% of the amount.</li>
                    <li>Your referrer’s upline receives 5%.</li>
                    <li>The third upline gets 2%.</li>
                  </ul>
                  <p>
                    This dynamic referral system ensures that your network’s growth translates into steady, passive income for you. The larger your network, the greater your potential earnings.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300 mt-4"
                  >
                    Start Building Your Network
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={require('./Images/animation-graph.jpg')}
                    alt="Referral Structure"
                    className="w-full rounded-lg shadow-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h4 className="text-xl font-bold">Referral-Based Growth</h4>
                    <p>Empower your network, and see profits flow upwards.</p>
                  </div>
                </div>
              </div>
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
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-green-400 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Buy Your Bull Now for $60
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BullPlan;
