import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../context/auth';

const Withdrawal = () => {
  const [auth] = useAuth();
  const [profile, setProfile] = useState(null); // User profile with wallet balance
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [withdrawalRequests, setWithdrawalRequests] = useState([]); // To hold withdrawal requests

  // Fetch user profile to get wallet balance
  const getProfile = async () => {
    const userId = auth?.user?._id;
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/user/profile/${userId}`);
      setProfile(result.data);
    } catch (error) {
      console.error('Error fetching profile: ', error);
    }
  };

  // Fetch withdrawal requests for the user
  const getWithdrawalRequests = async () => {
    const userId = auth?.user?._id;
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/user/withdrawal-requests/${userId}`);
      setWithdrawalRequests(result.data);
    } catch (error) {
      console.error('Error fetching withdrawal requests: ', error);
    }
  };

  useEffect(() => {
    getProfile();
    getWithdrawalRequests();
  }, []);

  // Handle withdrawal form submission
  const handleWithdraw = async (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawalAmount);

    // Basic validation
    if (!amount || amount <= 0) {
      toast.error('Please enter a valid amount.');
      return;
    }

    if (amount > profile?.earningWallet) {
      toast.error('Insufficient balance.');
      return;
    }

    setLoading(true);
    try {
      const userId = auth.user._id;
      await axios.post(`${process.env.REACT_APP_API_URL}/user/withdrawl-request/${userId}`, { amount });

      setWithdrawalAmount(''); // Clear input on success
      toast.success('Withdrawal request submitted successfully.');
      setProfile((prevProfile) => ({
        ...prevProfile,
        earningWallet: prevProfile.earningWallet - amount,
      }));
      // Fetch withdrawal requests again to update the list
      getWithdrawalRequests();
    } catch (error) {
      toast.error('Failed to submit the withdrawal request.');
      console.error('Error during withdrawal: ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="p-4 md:p-8 pt-2" style={{ backgroundImage: "url('https://plisio.net/uploads/blog/0rCbZcnp1699017573.jpg')" }}>
        <div className="pt-28 backdrop-blur-lg max-w-lg mx-auto p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white font-bold mb-4">Withdrawal Request</h2>

          {/* Display wallet balance */}
          <div className="bg-gray-800 p-4 rounded mb-4 text-white">
            <h3 className="text-xl font-semibold">Earning Wallet Balance:</h3>
            <p className="text-green-400">${profile?.earningWallet?.toFixed(2) || '0.00'}</p>
          </div>

          {/* Withdrawal form */}
          <form onSubmit={handleWithdraw}>
            <div className="mb-4">
              <label className="block text-black font-bold text-lg">Withdrawal Amount</label>
              <input
                type="number"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
                placeholder="Enter amount"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200 ${loading ? 'opacity-50' : ''}`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Submit Withdrawal'}
            </button>
          </form>

          {/* Withdrawal Requests Table */}
          <div className="mt-8 overflow-x-auto">
            <h3 className="text-xl text-white font-semibold mb-4">Your Withdrawal Requests</h3>
            <table className="min-w-full  bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                {withdrawalRequests.length > 0 ? (
                  withdrawalRequests.map((request) => (
                    <tr key={request._id} className="border-b hover:bg-gray-100">
                      <td className="py-2 px-4">${request.amount.toFixed(2)}</td>
                      <td className="py-2 px-4">{request.paymentStatus}</td>
                      <td className="py-2 px-4">{new Date(request.createdAt).toLocaleString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-2 text-center">No withdrawal requests found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Withdrawal;
