import React, { useState } from 'react';
import Layout from '../layout/layout';

const Withdrawal = () => {
  const [accountNo, setAccountNo] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [userName, setUserName] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accountNo || !ifscCode || !userName || !withdrawalAmount) {
      setError('All fields are required!');
      return;
    }

    console.log({ accountNo, ifscCode, userName, withdrawalAmount });
    setSuccess('Withdrawal request submitted successfully!');
    setAccountNo('');
    setIfscCode('');
    setUserName('');
    setWithdrawalAmount('');
  };

  return (
    <Layout>
      <div className="p-8 pt-2" style={{ backgroundImage: "url('https://plisio.net/uploads/blog/0rCbZcnp1699017573.jpg')" }}>
        <div className="pt-28 backdrop-blur-lg max-w-lg mx-auto p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white font-bold mb-4">Withdrawal Request</h2>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black font-bold text-lg">Account Number</label>
              <input
                type="text"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold text-lg">IFSC Code</label>
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold text-lg">Account Holder Name</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold text-lg">Withdrawal Amount</label>
              <input
                type="number"
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200"
            >
              Submit Withdrawal
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Withdrawal;
