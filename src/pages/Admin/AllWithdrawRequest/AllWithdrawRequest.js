import React, { useEffect, useState } from "react";
import { useAdminAuth } from "../../../context/adminAuth";
import axios from "axios";
import Sidebar from "../AdminSidebar/Sidebar";
import "./withdrawl.css";
import toast from "react-hot-toast";

const AllWithdrawRequest = () => {
  const [adminAuth] = useAdminAuth();
  const [transactions, setTransactions] = useState([]);
  const [selectedTransactions, setSelectedTransactions] = useState([]); // To store selected transactions
  const [loading, setLoading] = useState(true);
  const [actionType, setActionType] = useState(""); // State to store the action type
  const [statusResponse, setResponse] = useState([]);
  const [filterStatus, setFilterStatus] = useState("Processing"); // Set default status to "Processing"
  const token = adminAuth.token;

  // Fetch withdrawal requests from the API
  const getWithdrawalRequests = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/withdrawl-requests`
      );
      setTransactions(result.data || []); // Ensure data is an array
      console.log(result.data);
      setLoading(false);
    } catch (err) {
      console.log("Error while getting the withdrawal requests", err);
      setLoading(false);
    }
  };

  // Handle checkbox change
  const handleCheckboxChange = (transaction, isChecked) => {
    if (isChecked) {
      // Add selected transaction only if it is not already selected
      setSelectedTransactions((prev) => {
        if (!prev.some((item) => item._id === transaction._id)) {
          return [...prev, transaction];
        }
        return prev;
      });
    } else {
      // Remove deselected transaction from array
      setSelectedTransactions((prev) =>
        prev.filter((item) => item._id !== transaction._id)
      );
    }
  };

  // Handle action button clicks
  const handleActionClick = async (action) => {
    setActionType(action); // Set the action type based on button click

    if (action === "manually") {
      try {
        setLoading(true); // Set loading state to true before the API call

        // Loop through selected transactions and make API calls
        for (let i = 0; i < selectedTransactions.length; i++) {
          const transaction = selectedTransactions[i];

          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/payment/withdrawl-payment-status`,
            {
              transactionId: transaction._id,
            }
          );

          if (res) {
            // Update the local state immediately after marking as paid
            updateTransactionStatus(transaction._id, "Completed");
            toast('Payout initiated successfully!', {
              duration: 4000, // Duration in milliseconds
              position: 'top-center', // Position of the toast
              style: {
                background: 'gray',
                color: 'white',
              },
              icon: `😀`, // Add a custom icon
            });
          } else {
            toast(res.data.message, {
              duration: 4000, // Duration in milliseconds
              position: 'top-center', // Position of the toast
              style: {
                background: 'red',
                color: 'white',
              },
              icon: `😢`, // Add a custom icon
            });
          }
        }
      } catch (error) {
        toast("Payout initiation failed. Please try again.", {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: 'red',
            color: 'white',
          },
          icon: `😢`, // Add a custom icon
        });
      } finally {
        setLoading(false);
      }
    } else if (action === "reject") {
      try {
        setLoading(true); // Set loading state to true before the API call

        // Loop through selected transactions and make API calls
        for (let i = 0; i < selectedTransactions.length; i++) {
          const transaction = selectedTransactions[i];

          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/payment/withdrawl-payment-reject`,
            {
              transactionId: transaction._id,
            }
          );

          if (res) {
            // Update the local state immediately after rejecting
            updateTransactionStatus(transaction._id, "Rejected");
            toast('Transaction rejected successfully!', {
              duration: 4000, // Duration in milliseconds
              position: 'top-center', // Position of the toast
              style: {
                background: 'gray',
                color: 'white',
              },
              icon: `😀`, // Add a custom icon
            });
          } else {
            toast(res.data.message, {
              duration: 4000, // Duration in milliseconds
              position: 'top-center', // Position of the toast
              style: {
                background: 'red',
                color: 'white',
              },
              icon: `😢`, // Add a custom icon
            });
          }
        }
      } catch (error) {
        toast("Rejection failed. Please try again.", {
          duration: 4000, // Duration in milliseconds
          position: 'top-center', // Position of the toast
          style: {
            background: 'red',
            color: 'white',
          },
          icon: `😢`, // Add a custom icon
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to update the status of a transaction locally
  const updateTransactionStatus = (transactionId, newStatus) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction._id === transactionId
          ? { ...transaction, paymentStatus: newStatus }
          : transaction
      )
    );
    // Clear the selected transactions after action
    setSelectedTransactions([]);
  };

  // Handle filter button click
  const handleFilterClick = (status) => {
    setFilterStatus(status); // Set the filter status based on button click
  };

  // Fetch withdrawal requests on component mount
  useEffect(() => {
    getWithdrawalRequests();
  }, []);

  // Filter transactions based on selected status
  const filteredTransactions = transactions.filter(
    (transaction) => transaction.paymentStatus === filterStatus
  );

  return (
    <div className="flex w-full  min-h-screen gap-2 bg-gradient-to-b from-green-400 to-blue-500">
      {/* Sidebar */}
      <Sidebar className="fixed w-60 h-full" />

      {/* Main content */}
      {/* <ToastContainer /> */}
      <div className="ml-60  p-4 flex-1">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Withdrawal Requests
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 rounded-xl ${
              filterStatus === "Processing"
                ? "bg-blue-700 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleFilterClick("Processing")}
          >
            Processing
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-xl ${
              filterStatus === "Completed"
                ? "bg-green-700 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleFilterClick("Completed")}
          >
            Completed
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-xl ${
              filterStatus === "Rejected"
                ? "bg-red-500 text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleFilterClick("Rejected")}
          >
            Rejected
          </button>
        </div>

        {loading ? (
          <p className="text-center text-lg text-gray-500">Loading...</p>
        ) : (
          <table className="min-w-full  bg-gray-300 border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  <input type="checkbox" disabled />
                </th>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  Sr#
                </th>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  User ID
                </th>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  Date/Time
                </th>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  Amount
                </th>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  Wallet Address
                </th>
                <th className="py-3 px-4 border-b text-center text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction, index) => {
                  const isSelected = selectedTransactions.some(
                    (item) => item._id === transaction._id
                  );

                  return (
                    <tr
                      key={transaction._id}
                      className={`${
                        filterStatus === "Processing" && isSelected
                          ? "bg-gray-100 text-blue-700"
                          : ""
                      } hover:bg-gray-100 hover:text-blue-700 cursor-pointer text-black`} // Apply hover effect only for Processing
                    >
                      <td className="py-2 px-4 border-b text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) =>
                            handleCheckboxChange(transaction, e.target.checked)
                          }
                          disabled={filterStatus !== "Processing"} // Disable checkbox if not in Processing section
                        />
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {index + 1}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {transaction.referralCode}
                      </td>
                      <td className="py-2 px-4 border-b">
                        {`${new Date(
                          transaction.createdAt
                        ).toLocaleDateString()} ${new Date(
                          transaction.createdAt
                        ).toLocaleTimeString()}`}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        ₹{transaction.amount}
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                        {transaction.walletAddress}
                      </td>
                      <td
                        className={`py-2 px-4 border-b text-center ${
                          transaction.paymentStatus === "Completed"
                            ? "text-green-600"
                            : transaction.paymentStatus === "Processing"
                            ? "text-yellow-700"
                            : "text-red-500"
                        }`}
                      >
                        {transaction.paymentStatus}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="8" className="py-4 text-center text-gray-600">
                    No transactions found for {filterStatus}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        {/* Action Buttons */}
        {filterStatus === "Processing" && selectedTransactions.length > 0 && (
          <div className="flex justify-left mt-6">
            <button className="px-4 py-2 mx-2 bg-blue-800 w-[100px] text-white rounded-lg">
              API
            </button>
            <button
              className="px-4 py-2 mx-2 bg-green-500 w-[100] text-white rounded-lg"
              onClick={() => handleActionClick("manually")}
            >
              Manually
            </button>
            <button
              className="px-4 py-2 mx-2 bg-red-500 text-white rounded-lg"
              onClick={() => handleActionClick("reject")}
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllWithdrawRequest;
