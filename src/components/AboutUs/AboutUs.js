import React from 'react';
import { FaChartLine, FaShieldAlt, FaMobileAlt, FaHandsHelping } from 'react-icons/fa';
import Layout from '../layout/layout';

const AboutUs = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-gray-100 p-8 mt-10">
      {/* Outer Container */}
      <div className="w-[90%] mx-auto text-center">
        {/* Heading Section */}
        <section className="my-12">
          <h1 className="text-4xl font-extrabold text-blue-400 mb-20">About Us</h1>
          <p className="text-lg min-text-sm text-gray-300 leading-relaxed">
            Welcome to <span className="text-blue-500">U Tech</span>, your trusted partner in the world of online trading. Our mission is to empower individuals to take control of their financial future through a secure, easy-to-use, and powerful trading platform.
          </p>
        </section>

        {/* What is Trading Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-4">What is Trading?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Trading is the process of buying and selling assets, such as stocks, bonds, currencies, and commodities, with the aim of generating profit. At <span className="text-blue-500">TradeSmart</span>, we make this process accessible to both beginners and seasoned traders. Whether you're looking to trade forex, cryptocurrencies, or commodities, our platform provides the tools and insights you need to succeed.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our goal is to provide users with a comprehensive trading experience, offering real-time market data, educational resources, and personalized support to ensure success in the financial markets.
          </p>
        </section>

        {/* Platform Features Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose TradeSmart?</h2>
          <div className="grid lg:grid-cols-4 gap-8 my-12">
            {/* Feature 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaChartLine className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Advanced Trading Tools</h3>
              <p className="text-gray-300">
                Access powerful analytical tools and charts that provide real-time insights into market trends, allowing you to make informed trading decisions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaShieldAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Secure and Transparent</h3>
              <p className="text-gray-300">
                Our platform is designed with the highest security standards to protect your data and transactions. Experience safe trading with full transparency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaMobileAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">Mobile Friendly</h3>
              <p className="text-gray-300">
                Stay connected to the market on the go! Our mobile app lets you trade anytime, anywhere, with full access to market updates and trade execution.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <FaHandsHelping className="text-blue-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-3">24/7 Customer Support</h3>
              <p className="text-gray-300">
                Our dedicated support team is available around the clock to assist you with any queries or concerns, ensuring a seamless trading experience.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission and Values</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At <span className="text-blue-500">TradeSmart</span>, we believe that financial freedom should be accessible to everyone. Our mission is to create a platform that bridges the gap between traditional financial markets and modern traders by offering a simple, effective, and user-friendly solution.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our core values are:
          </p>
          <ul className="list-disc list-inside text-left mx-auto w-3/4 text-gray-300 mt-4">
            <li className="mb-2"><span className="font-bold text-blue-400">Transparency:</span> Clear communication and openness in everything we do.</li>
            <li className="mb-2"><span className="font-bold text-blue-400">Innovation:</span> Constantly evolving to stay ahead of industry trends and technologies.</li>
            <li className="mb-2"><span className="font-bold text-blue-400">Integrity:</span> Upholding the highest standards of ethics and honesty in all transactions.</li>
            <li className="mb-2"><span className="font-bold text-blue-400">User-Centric:</span> Putting our customers' needs at the forefront of every decision we make.</li>
          </ul>
        </section>

        {/* Contact Call-to-Action */}
        <section className="my-16 bg-blue-700 py-10 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Trading?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Join <span className="text-blue-100">TradeSmart</span> today and gain access to cutting-edge trading tools, educational resources, and a secure platform designed to help you succeed.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Get Started
          </button>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default AboutUs;
