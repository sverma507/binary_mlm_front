import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../AdminSidebar/Sidebar";
import { toast } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const AdminLevelIncome = () => { 
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/level-income`);
        setTransactions(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching transactions');
        setLoading(false);
        toast.error("Failed to fetch transactions", {
          position: "top-center",
          style: {
            background: 'red',
            color: 'white'
          },
        });
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-green-400 to-blue-500">
      {/* Sidebar */}
      <Sidebar className="fixed w-64 h-full bg-white shadow-lg" />

      {/* Main Content */}
      <div className="ml-64 w-full p-6 bg-gradient-to-b from-green-400 to-blue-500">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Trading Transactions</h2>
        <div className="overflow-x-auto">
          <table className="text-sm bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-200 w-full">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-3 px-4 border-b text-center">Sr. No</th>
                <th className="py-3 px-4 border-b text-center">User</th>
                <th className="py-3 px-4 border-b text-center">Amount</th>
                <th className="py-3 px-4 border-b text-center">Level</th>
                <th className="py-3 px-4 border-b text-center">Percentage</th>
                <th className="py-3 px-4 border-b text-center">Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction._id} className="text-gray-700 hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td> {/* Display Serial Number */}
                  <td className="py-2 px-4 border-b">{transaction.fromUser}</td>
                  <td className="py-2 px-4 border-b">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b">{transaction.level}</td>
                  <td className="py-2 px-4 border-b">{transaction.percentage}%</td>
                  <td className="py-2 px-4 border-b">{new Date(transaction.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLevelIncome;
