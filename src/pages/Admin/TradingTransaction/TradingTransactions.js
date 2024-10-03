import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TradingTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/trading-transactions`); // Replace with the correct API route
        setTransactions(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching transactions');
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Referral Code</th>
            <th>Amount</th>
            <th>Trading Wallet</th>
            <th>Transaction Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.userId ? transaction.userId.name : 'N/A'}</td>
              <td>{transaction.referralCode}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.tradingWallet}</td>
              <td>{new Date(transaction.transactionDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradingTransactions;
