import React, { useEffect, useState } from 'react';
import { FaChartPie, FaUserFriends, FaWallet, FaBullhorn } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Layout from '../layout/layout';
import axios from 'axios';

// Register chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/dashboard'); // Replace with your API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Sample data for performance chart (dummy data for now)
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Earnings ($)',
        data: [200, 300, 400, 500, 600, 700],
        fill: true,
        backgroundColor: 'rgba(30, 144, 255, 0.2)', // Soft gradient fill
        borderColor: '#1e90ff',
        tension: 0.4, // Make line smoother
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: { beginAtZero: true },
    },
    plugins: {
      legend: { display: true, position: 'top', labels: { color: '#fff' } },
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-gray-100 p-4 sm:p-8">
        <div className="max-w-[90%] mx-auto text-center">
          {/* Dashboard Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8 sm:mb-12">
            User Dashboard
          </h1>

          {/* Overview Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-10 mb-12 sm:mb-16">
            {/* Card for Total Earnings */}
            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaWallet className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Total Earnings</h3>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-200">${userData ? userData.earningWallet : 'Loading...'}</p>
              <p className="text-gray-400 mt-2">Updated Daily</p>
            </div>

            {/* Card for Total Referrals */}
            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaUserFriends className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Email</h3>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-200">{userData ? userData.email : 'Loading...'}</p>
              <p className="text-gray-400 mt-2">Stay Connected</p>
            </div>

            {/* Card for Active Referrals */}
            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaChartPie className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Phone Number</h3>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-200">{userData ? userData.phone : 'Loading...'}</p>
              <p className="text-gray-400 mt-2">Contact Info</p>
            </div>

            {/* Card for Notifications */}
            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaBullhorn className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Notifications</h3>
              <p className="text-lg sm:text-xl text-gray-200">2 New Notifications</p>
              <p className="text-gray-400 mt-2">Stay Updated</p>
            </div>
          </section>

          {/* Performance Chart */}
          <section className="my-8 sm:my-12 bg-gradient-to-b from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Earnings Performance</h2>
            <div className="w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </section>

          {/* Referral Section */}
          <section className="my-8 sm:my-12 bg-gradient-to-b from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Your Referral Network</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              View and manage your referral network. The more active referrals you have, the higher your earnings potential!
            </p>

            {/* Referral Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-gray-300 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 text-left">Name</th>
                    <th className="px-2 sm:px-4 py-2 text-left">Status</th>
                    <th className="px-2 sm:px-4 py-2 text-left">Join Date</th>
                    <th className="px-2 sm:px-4 py-2 text-left">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example data */}
                  <tr className="border-t border-gray-600 bg-gray-800 hover:bg-gray-700 transition duration-300">
                    <td className="px-2 sm:px-4 py-2">John Doe</td>
                    <td className="px-2 sm:px-4 py-2">Active</td>
                    <td className="px-2 sm:px-4 py-2">Jan 15, 2024</td>
                    <td className="px-2 sm:px-4 py-2">$150</td>
                  </tr>
                  <tr className="border-t border-gray-600 bg-gray-800 hover:bg-gray-700 transition duration-300">
                    <td className="px-2 sm:px-4 py-2">Jane Smith</td>
                    <td className="px-2 sm:px-4 py-2">Active</td>
                    <td className="px-2 sm:px-4 py-2">Feb 5, 2024</td>
                    <td className="px-2 sm:px-4 py-2">$120</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </section>

          {/* Additional Features or Sections */}
          <section className="my-8 sm:my-12 bg-gradient-to-b from-gray-900 to-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-blue-400">Upcoming Features</h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Stay tuned for more features coming soon, including a mobile app and improved analytics for your referrals!
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
