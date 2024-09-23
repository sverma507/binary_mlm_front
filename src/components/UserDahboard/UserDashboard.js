import React from 'react';
import { FaChartPie, FaUserFriends, FaWallet, FaBullhorn } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Layout from '../layout/layout';

// Register chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserDashboard = () => {
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
            {/* Card Template */}
            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaWallet className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Total Earnings</h3>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-200">$4,500</p>
              <p className="text-gray-400 mt-2">Updated Daily</p>
            </div>

            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaUserFriends className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Total Referrals</h3>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-200">120</p>
              <p className="text-gray-400 mt-2">Grow Your Network</p>
            </div>

            <div className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 p-4 sm:p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
              <FaChartPie className="text-blue-500 text-3xl sm:text-4xl mb-2 sm:mb-4 mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Active Referrals</h3>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-200">75</p>
              <p className="text-gray-400 mt-2">Performance Insights</p>
            </div>

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

          {/* Referral Link Section */}
          <section className="my-8 sm:my-12 bg-gradient-to-r from-blue-700 via-blue-800 to-purple-800 p-6 sm:p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Share Your Referral Link</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
              Invite others to join and start earning rewards from your referrals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="text"
                className="w-full sm:w-2/3 bg-gray-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                value="https://example.com/referral/yourlink"
                readOnly
              />
              <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg shadow-lg transition duration-300">
                Copy Link
              </button>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
