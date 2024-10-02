import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import { useAuth } from "../../context/auth";
import axios from "axios";

const LevelIncome = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();
  const [auth] = useAuth();
  const userId = auth?.user?.id;

  const getLevelIncome = async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/user/bot-level-income/${userId}`);
      setTransactions(result.data.data); // Make sure you're accessing the correct part of the response
    } catch (error) {
      console.error("Error fetching bot level income data: ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      getLevelIncome();
    }
  }, [userId]);

  return (
    <Layout>
      <div className="flex pt-28 min-h-screen bg-gradient-to-b from-green-400 to-blue-500">
        <div className="w-full p-6 bg-gradient-to-b from-green-400 to-blue-500">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Level Income List</h2>
          <div className="overflow-x-auto">
            <table className="text-sm bg-white border border-gray-300 rounded-lg shadow-md divide-y divide-gray-200">
              <thead>
                <tr className="bg-green-700 text-white">
                  <th className="py-3 px-4 border-b text-left w-[100px]">S.No</th>
                  <th className="py-3 px-4 border-b text-left">From User</th>
                  <th className="py-3 px-4 border-b text-left">Level</th>
                  <th className="py-3 px-4 border-b text-left">Percentage</th>
                  <th className="py-3 px-4 border-b text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions && transactions.length > 0 ? (
                  transactions.map((income, index) => (
                    <tr key={income._id} className="text-gray-700 hover:bg-gray-50">
                      <td className="py-2 px-4 border-b">{index + 1}</td>
                      <td className="py-2 px-4 border-b">{income.fromUser}</td>
                      <td className="py-2 px-4 border-b">{income.level}</td>
                      <td className="py-2 px-4 border-b">{income.percentage}%</td>
                      <td className="py-2 px-4 border-b">${income.amount}</td>
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
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default LevelIncome;
