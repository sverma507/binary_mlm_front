import React from 'react';
import Layout from '../layout/layout';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const StartTrading = () => {
  const navigate = useNavigate();

  const handleStartTrading = () => {
    navigate('/user/pay');
  };

  return (
    <Layout>
      <section className="relative pt-28 py-16 bg-gradient-to-r from-green-800 to-black text-gray-100 overflow-hidden">
        {/* Background elements for creativity */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-900 opacity-30 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-900 opacity-30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-green-400 animate-bounce">Start Trading Today and Earn Profits</h2>
            <p className="mt-6 text-xl text-gray-300">
              Unlock your potential with our cutting-edge trading platform. Start your journey towards financial independence today!
            </p>
          </div>

          {/* How Trading Works Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl font-extrabold text-green-400 mb-6">How Trading Works</h3>
            <p className="text-lg text-gray-300 mb-8">
              Trading allows you to buy and sell financial instruments like stocks, currencies, and commodities. Here’s how you can start:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Trading Step 1 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-green-400">Step 1: Choose Your Assets</h4>
                <p className="mt-4 text-gray-300">
                  Select the financial instruments you want to trade, including stocks, forex, or cryptocurrencies.
                </p>
              </div>

              {/* Trading Step 2 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-green-400">Step 2: Analyze the Market</h4>
                <p className="mt-4 text-gray-300">
                  Utilize advanced tools and resources to analyze market trends and make informed trading decisions.
                </p>
              </div>

              {/* Trading Step 3 */}
              <div className="bg-gray-800 shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-green-400">Step 3: Execute Your Trades</h4>
                <p className="mt-4 text-gray-300">
                  Buy or sell your chosen assets based on your market analysis, and monitor your trades for optimal profits.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl text-gray-300 mb-6">
              Begin your trading journey with us and take control of your financial future. It's time to trade smart!
            </p>
            <button
              onClick={handleStartTrading}
              className="inline-block bg-gradient-to-r from-yellow-400 to-green-600 hover:from-yellow-500 hover:to-green-500 text-white text-lg font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Start Trading Now
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartTrading;
