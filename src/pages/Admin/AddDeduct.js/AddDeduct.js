import React, { useEffect, useState } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import "./AddDeduct.css";
import { useAuth } from "../../../context/auth";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
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
    console.log(walletType, amount, transactionType, description, userId);

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
        // toast(response.data.message);
        if(transactionType === "add"){
          toast("Recharge added");
        }else{
          toast("Payment Deducted Successfully !")
        }
        
        setTimeout(() => {
          navigate("/dashboard/admin/add-deduct");
        }, 2000);
        // console.log(response.data.message);
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast("Error In Recharge", error);
      });
  };

  useEffect(() => {
     getAddDeductList();
  },[])

  return (
    <div className="flex min-h-screen gap-4">
    {/* Sidebar */}
    <Sidebar className="fixed w-60 h-full" />
  
    {/* Main Content */}
    <div className="ml-60 container mx-auto p-4 bg-gradient-to-b from-green-400 to-blue-500 pb-16">
      <div className="form-container">
        <h2>Add / Deduct</h2>
        <form onSubmit={handleActivate}>
          <div className="form-group">
            <label>Select Package</label>
            <select id="wallet" name="wallet" required onChange={handleWallet}>
              <option value={""}>Select wallet</option>
              <option value="r-wallet">R-wallet</option>
              <option value="e-wallet">E-wallet</option>
            </select>
          </div>
          <div className="form-group">
            <label>Transaction Type</label>
            <select
              id="transaction-type"
              name="transaction-type"
              onChange={handleTransactionType}
              required
            >
              <option value={""}>Transaction type</option>
              <option value="add">Add</option>
              <option value="deduct">Deduct</option>
            </select>
          </div>
          <div className="form-group">
            <label>User ID</label>
            <input
              type="text"
              id="user-id"
              name="userId"
              required
              placeholder="Please Enter Valid User ID"
              onChange={handleUserId}
            />
          </div>
          <div className="form-group">
            <label>Amount In ₹</label>
            <input
              type="number"
              id="amount"
              name="amount"
              required
              placeholder="Amount In ₹"
              onChange={handleAmount}
            />
          </div>
          <div className="form-group">
            <label>Description(Optional)</label>
            <textarea
              id="remarks"
              name="remarks"
              placeholder="Remark"
              onChange={handleDiscription}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`${
                isSubmitting ? "bg-gray-500" : "bg-green-500 hover:bg-green-700"
              } text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300`}
              disabled={isSubmitting} // Disable button during activation
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 mt-8 w-[90%] mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">
            Add Deduct History
          </h3>
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-center">#</th>
                <th className="py-2 px-4 border-b text-center">User Id</th>
                <th className="py-2 px-4 border-b text-center">
                  Amount
                </th>
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
