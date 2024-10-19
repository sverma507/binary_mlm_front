import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth";
import Layout from "../layout/layout";

const UserIncomeStatus = () => {
  const [incomeStatus, setIncomeStatus] = useState([]);
  const [profile, setProfile] = useState(null);
  const [auth] = useAuth();
  const userId = auth?.user?._id;

  const incomeRequirements = [
    { rank: "Alpha", weeks: 5, amount: 5, requiredUsers: 5 },
    { rank: "Beta", weeks: 5, amount: 10, requiredUsers: 10 },
    { rank: "Gamma", weeks: 5, amount: 20, requiredUsers: 20 },
    { rank: "Delta", weeks: 5, amount: 30, requiredUsers: 50 },
    { rank: "Zita", weeks: 5, amount: 60, requiredUsers: 100 },
    { rank: "Bravo", weeks: 5, amount: 150, requiredUsers: 250 },
    { rank: "Shark", weeks: 5, amount: 300, requiredUsers: 500 },
    { rank: "Titan", weeks: 5, amount: 600, requiredUsers: 1000 },
    { rank: "Unicorn", weeks: 5, amount: 1500, requiredUsers: 2500 },
    { rank: "Oscar", weeks: 5, amount: 3000, requiredUsers: 5000 },
    { rank: "Millioner", weeks: 5, amount: 4500, requiredUsers: 7500 },
    { rank: "Billioner", weeks: 5, amount: 6000, requiredUsers: 10000 },
    { rank: "Ruby", weeks: 5, amount: 9000, requiredUsers: 15000 },
    { rank: "Dioamound", weeks: 5, amount: 15000, requiredUsers: 25000 },
    { rank: "Omicron", weeks: 5, amount: 30000, requiredUsers: 50000 },
    { rank: "President", weeks: 5, amount: 60000, requiredUsers: 100000 },
  ];

  const getProfile = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/profile/${userId}`
      );
      setProfile(result.data);
    } catch (error) {
      console.error("Error fetching profile data: ", error);
    }
  };

  const isIncomeCompleted = (startDate) => {
    const now = new Date();
    const incomeStartDate = new Date(startDate);
    const weeksPassed = Math.floor((now - incomeStartDate) / (1000 * 60 * 60 * 24 * 7));
    return weeksPassed >= 5;
  };

  const getActivationStatus = (index) => {
    const activation = profile?.rankSalaryActivation[index];
    const startDate = profile?.rankSalaryStartDate[index];
    const completed = isIncomeCompleted(startDate);

    if (completed) {
      return "Completed";
    } else if (activation) {
      return "Activated";
    } else {
      return "Not Activated";
    }
  };

  useEffect(() => {
    if (userId) {
      getProfile();
    }
  }, [userId]);

  return (
    <Layout>
      <div className="p-6 pt-24 bg-black text-white shadow-md rounded-lg mt-4">
        <h2 className="text-2xl font-semibold mb-4">Your Income Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-800">
              <tr>
                <th className="py-2 px-4 text-center">Rank</th>
                <th className="py-2 px-4 text-center">Weeks Required</th>
                <th className="py-2 px-4 text-center">Amount</th>
                <th className="py-2 px-4 text-center">Required <span className="text-green-500"> Active</span> Users <br/></th>
                <th className="py-2 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {incomeRequirements.map((requirement, index) => {
                const status = profile ? getActivationStatus(index) : "Loading...";
                return (
                  <tr key={requirement.rank} className="hover:bg-gray-700">
                    <td className="py-2 px-4 border-b border-gray-600">{requirement.rank}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{requirement.weeks}</td>
                    <td className="py-2 px-4 border-b border-gray-600">${requirement.amount}</td>
                    <td className="py-2 px-4 border-b border-gray-600 flex justify-around">
                      <div>{requirement.requiredUsers}<span className="text-green-500"> Left</span></div>
                      <div>{requirement.requiredUsers} <span className="text-green-500"> Right</span></div>
                    </td>
                    <td className="py-2 px-4 border-b border-gray-600">{status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default UserIncomeStatus;
