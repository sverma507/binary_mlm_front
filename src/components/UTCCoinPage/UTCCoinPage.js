import React from 'react';
import Layout from '../layout/layout';
import { useNavigate } from 'react-router';

const UTCCoinPage = () => {
  const navigate = useNavigate();

  const handleStartTrading = () => {
    navigate('/user/tradeing-wallet');
  };

  return (
    <Layout>
      <section className="relative pt-28 py-16 bg-gradient-to-r from-blue-900 to-black text-gray-100 overflow-hidden">
        {/* Background elements for creativity */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-900 opacity-40 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900 opacity-40 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-yellow-400 animate-bounce">Trade Smart with UTC Coin</h2>
            <p className="mt-6 text-xl text-gray-300">
              The next-generation cryptocurrency powered by Binance Smart Chain (BSC). Earn daily profits with every trade!
            </p>
          </div>

          {/* About UTC Coin Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-yellow-400 mb-6">Why Choose UTC Coin?</h3>
            <p className="text-lg text-gray-300 mb-8">
              UTC Coin is designed for traders like you. With UTC Coin, every trade is an opportunity to earn consistent, daily profits while leveraging the security and scalability of the Binance Smart Chain (BEP-20).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Based on BSC */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-yellow-400">Fast & Secure</h4>
                <p className="mt-4 text-gray-300">
                  Built on Binance Smart Chain, UTC Coin offers lightning-fast transactions and industry-leading security.
                </p>
              </div>

              {/* Feature 2: Daily Profits */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-yellow-400">Earn Daily Profits</h4>
                <p className="mt-4 text-gray-300">
                  Every trade you make with UTC Coin brings daily returns. Watch your earnings grow with every move.
                </p>
              </div>

              {/* Feature 3: User-Friendly */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-yellow-400">Simple & User-Friendly</h4>
                <p className="mt-4 text-gray-300">
                  Whether you're a beginner or a seasoned trader, UTC Coin is designed to make trading easy and profitable.
                </p>
              </div>
            </div>
          </div>

          {/* How to Trade with UTC Coin Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-yellow-400 mb-6">How to Trade with UTC Coin</h3>
            <p className="text-lg text-gray-300 mb-8">
              Trading with UTC Coin is simple. Follow these easy steps and start earning today!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1: Create a Wallet */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-yellow-400">Step 1: Create a Wallet</h4>
                <p className="mt-4 text-gray-300">
                  Start by creating a BSC wallet to store and trade your UTC Coins securely.
                </p>
              </div>

              {/* Step 2: Buy UTC Coin */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-yellow-400">Step 2: Buy UTC Coin</h4>
                <p className="mt-4 text-gray-300">
                  Purchase UTC Coin on any of our supported exchanges or directly from our platform.
                </p>
              </div>

              {/* Step 3: Start Trading */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-yellow-400">Step 3: Start Trading</h4>
                <p className="mt-4 text-gray-300">
                  Use UTC Coin for your trades and enjoy the benefits of daily profits with every transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-6">
              Ready to take your trading to the next level? Start trading with UTC Coin and experience the future of digital currency.
            </p>
            <button
              onClick={handleStartTrading}
              className="inline-block bg-gradient-to-r from-yellow-400 to-green-600 hover:from-yellow-500 hover:to-green-500 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Start Trading with UTC Coin Now
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UTCCoinPage;
