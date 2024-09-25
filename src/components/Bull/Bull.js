import React from 'react';
import Layout from '../layout/layout';
import { useNavigate } from 'react-router';

const  Bull = () => {
  const navigate = useNavigate()
  return (
    <Layout>
    <section className="relative pt-28 py-16 bg-gradient-to-r from-blue-900 to-black text-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-400">Start Your Profitable Journey Today</h2>
          <p className="mt-4 text-lg text-gray-300">
            Invest just $60 to buy a Trading Bull and kickstart your income! Unlock trading opportunities and secure your financial future with ease.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">Why Invest in a Trading Bull for Only $60?</h3>
            <p className="text-lg text-gray-300">
              With an initial investment of just $60, you can begin generating profits from day one. We offer secure, reliable, and lucrative opportunities for anyone looking to grow their wealth through smart trading.
            </p>
            <p className="text-lg text-gray-300">
              Join a global community of traders and investors who are benefiting from high returns and minimal risks. With the Trading Bull investment, you can:
            </p>
            <ul className="list-disc pl-5 text-lg text-gray-300 space-y-2">
              <li>Start earning profits instantly with daily payouts</li>
              <li>Get access to expert market insights and strategies</li>
              <li>Trade with top-performing Trading Bulls in a stable and secure platform</li>
              <li>Low entry point with a high potential for returns</li>
            </ul>
            <div className="mt-6">
              <a
                onClick={()=>{navigate('/user/buy-bull')}}
                className="inline-block cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Buy a Trading Bull Now for $60
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={require('./Images/trading.jpg')}
              alt="Trading Trading Bull"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h4 className="text-xl font-bold">Your Trading Bull, Your Profit</h4>
              <p>Smart, secure, and profitable trading starts here.</p>
            </div>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Professional Content 1 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold text-blue-400">Grow Your Investment</h4>
              <p className="mt-4 text-gray-300">
                With minimal risk and expert guidance, you can steadily grow your investment and multiply your income.
              </p>
            </div>

            {/* Professional Content 2 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold text-blue-400">Automated Trading</h4>
              <p className="mt-4 text-gray-300">
                Our platform offers automated trading solutions that maximize returns and minimize effort on your part.
              </p>
            </div>

            {/* Professional Content 3 */}
            <div className="bg-gray-800 shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold text-blue-400">Join a Thriving Community</h4>
              <p className="mt-4 text-gray-300">
                Become part of a global network of successful traders and benefit from collective market insights and tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default Bull;
