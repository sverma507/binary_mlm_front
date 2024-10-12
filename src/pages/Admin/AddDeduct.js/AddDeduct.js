import React, { useEffect, useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDeduct = () => {
  const [auth, setAuth] = useAuth();
  const [walletType, setWalletType] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addDeduct, setAddDeduct] = useState([]);
  const navigate = useNavigate();

  const handleWallet = (event) => {
    setWalletType(event.target.value);
  };

  const getAddDeductList = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/admin/add-deduct-list`
      );
      setAddDeduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleDiscription = (event) => {
    setDescription(event.target.value);
  };

  const handleTransactionType = (event) => {
    setTransactionType(event.target.value);
  };

  const handleUserId = (event) => {
    setUserId(event.target.value);
  };

  const handleActivate = (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/admin/add-deduct`, {
        userId,
        walletType,
        amount,
        transactionType,
        description,
      })
      .then((response) => {
        setIsSubmitting(false);
        if (transactionType === "add") {
          toast.success("Recharge added");
        } else {
          toast.success("Payment Deducted Successfully!");
        }
        setTimeout(() => {
          navigate("/dashboard/admin/add-deduct");
        }, 2000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast.error("Error In Recharge", error);
      });
  };

  useEffect(() => {
    getAddDeductList();
  }, []);

  return (
    <div className="flex min-h-screen gap-4">
      {/* Sidebar */}
      <Sidebar className="fixed w-60 h-full" />

      {/* Main Content */}
      <div className="ml-60 container mx-auto p-4 bg-gradient-to-b from-green-400 to-blue-500 pb-16">
        <div className="w-3/5 mx-auto p-6 bg-white border border-gray-300 rounded-lg mt-12">
          <h2 className="text-2xl font-bold mb-4 text-left text-gray-700">
            Add / Deduct
          </h2>
          <form onSubmit={handleActivate} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-left mt-10 mb-2">Select Wallet</label>
              <select
                id="wallet"
                name="wallet"
                required
                onChange={handleWallet}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select wallet</option>
                {/* <option value="r-wallet">R-wallet</option> */}
                <option value="r-wallet">Deposite</option>
                <option value="e-wallet">E-wallet</option>
                <option value="trading-wallet">Trading-wallet</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-left mt-10 mb-2">Transaction Type</label>
              <select
                id="transaction-type"
                name="transaction-type"
                onChange={handleTransactionType}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Transaction type</option>
                <option value="add">Add</option>
                <option value="deduct">Deduct</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-left mt-10 mb-2">User ID</label>
              <input
                type="text"
                id="user-id"
                name="userId"
                required
                placeholder="Please Enter Valid User ID"
                onChange={handleUserId}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-left mt-10 mb-2">Amount In $</label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                placeholder="Amount In $"
                onChange={handleAmount}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-left mt-10 mb-2">Description (Optional)</label>
              <textarea
                id="remarks"
                name="remarks"
                placeholder="Remark"
                onChange={handleDiscription}
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-700"
                } text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 mt-8 w-[90%] mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Add Deduct History</h3>
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-center">#</th>
                <th className="py-2 px-4 border-b text-center">User Id</th>
                <th className="py-2 px-4 border-b text-center">Amount</th>
                <th className="py-2 px-4 border-b text-center">Type</th>
                <th className="py-2 px-4 border-b text-center">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {addDeduct?.map((activation, index) => (
                <tr key={activation.id}>
                  <td className="py-2 px-4 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {activation.userCode}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {activation.amount}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {activation.type}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {new Date(activation.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddDeduct;
