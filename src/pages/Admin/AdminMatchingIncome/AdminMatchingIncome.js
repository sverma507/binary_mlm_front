import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Sidebar from "../AdminSidebar/Sidebar"; // Make sure the path is correct for Sidebar component
import axios from "axios";

const AdminMatchingIncome = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  const getLevelIncome = async () => {
    console.log("getLevelIncome ======== hited==========");
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/admin/matching-income`);
      setTransactions(result.data.data); // Make sure you're accessing the correct part of the response
    } catch (error) {
      console.error("Error fetching bot level income data: ", error);
    }
  };

  useEffect(() => {
    getLevelIncome();
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-green-400 to-blue-500">
      {/* Sidebar */}
      <Sidebar className="fixed w-64 h-full bg-white shadow-lg" />

      {/* Main Content */}
      <div className="ml-64 w-full p-6 bg-gradient-to-b from-green-400 to-blue-500">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Matching Income List</h2>
        <div className="overflow-x-auto flex justify-center">
          <table className="text-sm bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-200">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="py-3 px-4 border-b text-center w-[100px]">S.No</th>
                <th className="py-3 px-4 border-b text-center">User</th>
                <th className="py-3 px-4 border-b text-center">Amount</th>
                <th className="py-3 px-4 border-b text-center">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions && transactions.length > 0 ? (
                transactions.map((income, index) => (
                  <tr key={income._id} className="text-gray-700 hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{income.referralCode}</td>
                    <td className="py-2 px-4 border-b">${income.amount}</td>
                    <td className="py-2 px-4 border-b">{new Date(income.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-2 px-4 border-b" colSpan="5">
                    No data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminMatchingIncome;
