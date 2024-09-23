import React, { useState } from 'react';
import Layout from '../layout/layout';

const Recharge = () => {
  const [amount, setAmount] = useState('');
  const [cryptoType, setCryptoType] = useState('Bitcoin');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount) {
      setError('Amount is required!');
      return;
    }

    console.log({ amount, cryptoType });
    setSuccess('Recharge request submitted successfully!');
    setAmount('');
  };

  return (
    <Layout>
      <div className="p-8 pt-2 bg-cover" style={{ backgroundImage: "url('https://bitcoinist.com/wp-content/uploads/2020/11/bitcoin-bull-market-correction-Depositphotos_342580008_xl-2015-scaled.jpg?fit=2560%2C1175')" }}>
        <div className="pt-28 backdrop-blur-lg max-w-lg mx-auto p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-white font-bold mb-4">Recharge Your Account</h2>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white font-bold text-lg">Select Cryptocurrency</label>
              <select
                value={cryptoType}
                onChange={(e) => setCryptoType(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
              >
                <option value="Bitcoin">Bitcoin (BTC)</option>
                <option value="Ethereum">Ethereum (ETH)</option>
                <option value="Litecoin">Litecoin (LTC)</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-white font-bold text-lg">Recharge Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 rounded bg-slate-100 text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200"
            >
              Submit Recharge
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Recharge;
