import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllWithdrawRequest = () => {
  const [withdrawRequests, setWithdrawRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("Processing"); // Default status
  const [selectedTransactions, setSelectedTransactions] = useState([]);

  useEffect(() => {
    // Fetch withdrawal requests from the API
    const fetchWithdrawRequests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/withdraw-requests`); // Adjust the API endpoint as needed
        setWithdrawRequests(response.data);
      } catch (error) {
        console.error('Error fetching withdrawal requests:', error);
      }
    };

    fetchWithdrawRequests();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (transaction, isChecked) => {
    if (isChecked) {
      setSelectedTransactions((prev) => [...prev, transaction]);
    } else {
      setSelectedTransactions((prev) =>
        prev.filter((t) => t._id !== transaction._id)
      );
    }
  };

  // Handle action button click
  const handleActionClick = async (actionType) => {
    // Perform the appropriate action based on the actionType
    try {
      const ids = selectedTransactions.map(t => t._id);
      if (actionType === "manually") {
        await axios.post('/api/withdraw-requests/mark-paid-manually', { ids });
      } else if (actionType === "api") {
        await axios.post('/api/withdraw-requests/mark-paid-api', { ids });
      } else if (actionType === "reject") {
        await axios.post('/api/withdraw-requests/reject', { ids });
      }
      // Refresh the requests after action
      const response = await axios.get('/api/withdraw-requests');
      setWithdrawRequests(response.data);
      setSelectedTransactions([]); // Clear selected transactions
    } catch (error) {
      console.error('Error processing action:', error);
    }
  };

  // Filter requests based on payment status
  const filteredTransactions = withdrawRequests.filter((request) => request.paymentStatus === filterStatus);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">All Withdrawal Requests</h1>

      {/* Filter Buttons */}
      <div className="mb-4">
        <button onClick={() => setFilterStatus("Processing")} className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2">
          Processing
        </button>
        <button onClick={() => setFilterStatus("Completed")} className="bg-green-500 text-white px-4 py-2 rounded-md mx-2">
          Completed
        </button>
        <button onClick={() => setFilterStatus("Rejected")} className="bg-red-500 text-white px-4 py-2 rounded-md mx-2">
          Rejected
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Select</th>
              <th className="py-2 px-4 border-b text-center">User ID</th>
              <th className="py-2 px-4 border-b text-center">Wallet Address</th>
              <th className="py-2 px-4 border-b text-center">Amount</th>
              <th className="py-2 px-4 border-b text-center">Referral Code</th>
              <th className="py-2 px-4 border-b text-center">Created At</th>
              <th className="py-2 px-4 border-b text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction, index) => (
                <tr key={transaction._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-center">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxChange(transaction, e.target.checked)}
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">{transaction.userId}</td>
                  <td className="py-2 px-4 border-b text-center">{transaction.walletAddress}</td>
                  <td className="py-2 px-4 border-b text-center">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b text-center">{transaction.referralCode}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {new Date(transaction.createdAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b text-center">{transaction.paymentStatus}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="py-2 px-4 text-center">
                  No withdrawal requests found for this status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      {filterStatus === "Processing" && selectedTransactions.length > 0 && (
        <div className="flex justify-center my-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2"
            onClick={() => handleActionClick("manually")}
          >
            Mark as Paid (Manual)
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md mx-2"
            onClick={() => handleActionClick("api")}
          >
            Mark as Paid (API)
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mx-2"
            onClick={() => handleActionClick("reject")}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default AllWithdrawRequest;
