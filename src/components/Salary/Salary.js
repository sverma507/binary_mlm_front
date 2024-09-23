import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/layout';

const Salary = () => {
  const navigate = useNavigate();

  return (
    <Layout>

    <div className="relative bg-cover bg-center h-fit flex flex-col items-center justify-center" 
         style={{ backgroundImage: "url('https://plisio.net/uploads/blog/0rCbZcnp1699017573.jpg')" }}>
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Title and Description */}
      <div className="relative sm:mt-28  z-10 text-center text-white mb-10 px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Income Overview</h2>
        <p className="text-base sm:text-lg max-w-lg mx-auto">
          Monitor your earnings in the exciting world of crypto trading.
        </p>
      </div>
      
      {/* Buttons with crypto trading images */}
      <div className="relative w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 z-10">
        {/* Level Income */}
        <div className="relative group transition-transform duration-300 transform hover:scale-105">
          <img src="https://wallpaper.dog/large/20563721.jpg" 
               alt="Level Income" 
               className="w-full h-32 sm:h-48 rounded-lg shadow-lg object-cover" />
          <button
            onClick={() => navigate('/level-income')}
            className="absolute inset-0 border-2 border-white bg-opacity-75 hover:bg-opacity-90 transition duration-300 rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg sm:text-4xl text-white">Level Income</span>
          </button>
        </div>

        {/* Bull Income */}
        <div className="relative group transition-transform duration-300 transform hover:scale-105">
          <img src="https://wallpaper.dog/large/20617558.jpg" 
               alt="Bull Income" 
               className="w-full h-32 sm:h-48 rounded-lg shadow-lg object-cover" />
          <button
            onClick={() => navigate('/bull-income')}
            className="absolute inset-0 border-2 border-white bg-opacity-75 hover:bg-opacity-90 transition duration-300 rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg sm:text-4xl text-white">Bull Income</span>
          </button>
        </div>

        {/* Daily Income */}
        <div className="relative group transition-transform duration-300 transform hover:scale-105">
          <img src="https://wallpapers.com/images/hd/trading-wallpaper-dqf6vacjwrlvkw1i.jpg" 
               alt="Daily Income" 
               className="w-full h-32 sm:h-48 rounded-lg shadow-lg object-cover" />
          <button
            onClick={() => navigate('/daily-income')}
            className="absolute inset-0 border-2 border-white bg-opacity-75 hover:bg-opacity-90 transition duration-300 rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg sm:text-4xl text-white">Daily Income</span>
          </button>
        </div>

        {/* Salary */}
        <div className="relative group transition-transform duration-300 transform hover:scale-105">
          <img src="https://wallpaperaccess.com/full/1267556.jpg" 
               alt="Salary" 
               className="w-full h-32 sm:h-48 rounded-lg shadow-lg object-cover" />
          <button
            onClick={() => navigate('/salary')}
            className="absolute inset-0 border-2 border-white bg-opacity-75 hover:bg-opacity-90 transition duration-300 rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg sm:text-4xl text-white">Salary</span>
          </button>
        </div>
      </div>
    </div>
                </Layout>
  );
};

export default Salary;
