import React from "react";
// import Sidebar from "../AdminSidebar/Sidebar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Layout from "../../layout/layout";

const Admin_Dashboard = () => {
  // Dummy data for statistics
  const registerUser = 1000;
  const paidUser = 800;
  const unpaidUser = 200;
  const rupeeTotal = 5000000; // INR
  const usdTotal = 50000; // USD
  const lastWithDrawl = [{ amount: 50000, userName: "JohnDoe" }];
  const totalDepositsToday = 250000; // Today's INR deposit
  const usdTransaction = [{ amount: 200, status: "100", userCode: "XYZ123" }];

  return (
    <Layout>
      <div className="min-h-screen pt-24 bg-gradient-to-r from-blue-900 to-black text-gray-100 p-8">
        <div className="w-[90%] mx-auto mt-10">
          {/* Heading */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-blue-400">Admin Dashboard</h1>
          </section>

          <div className="flex gap-8">
            {/* Revenue Chart Section */}
            <div className="bg-gray-800 w-[60%] text-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Revenue Overview</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Revenue Stats */}
                <div className="bg-gray-900 p-4 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">Total Collection</h3>
                  <p className="text-sm text-blue-300">
                    $ {(rupeeTotal + usdTotal * 92).toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">Total INR Collection</h3>
                  <p className="text-sm text-blue-300">
                    $ {rupeeTotal.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">Total USD Collection</h3>
                  <p className="text-sm text-blue-300">$ {usdTotal}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">Last Payout</h3>
                  <p className="text-sm text-blue-300">
                    $ {lastWithDrawl[0].amount.toLocaleString("en-IN")} (
                    {lastWithDrawl[0].userName})
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">Today Deposit</h3>
                  <p className="text-sm text-blue-300">
                    $ {totalDepositsToday.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg shadow-xl">
                  <h3 className="text-lg font-semibold">Last USD Deposit</h3>
                  <p className="text-sm text-blue-300">
                    $ {usdTransaction[0].amount} ({usdTransaction[0].userCode})
                  </p>
                </div>
              </div>
            </div>

            {/* User Stats Section */}
            <div className="w-[40%]">
              <div className="bg-gray-800 p-8 rounded-lg mb-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">User Statistics</h2>
                <div className="flex justify-between text-blue-300">
                  <div>
                    <h3 className="text-lg font-semibold">Total Users</h3>
                    <p className="text-2xl font-bold">{registerUser}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Paid Users</h3>
                    <p className="text-2xl font-bold">{paidUser}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Unpaid Users</h3>
                    <p className="text-2xl font-bold">{unpaidUser}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-blue-400">Wallet Summary</h2>
                <CircularProgressbar
                  className="h-28"
                  value={(paidUser / registerUser) * 100}
                  text={`${((paidUser / registerUser) * 100).toFixed(2)}% Paid`}
                  styles={buildStyles({
                    textSize: "16px",
                    pathColor: "#00b894",
                    textColor: "#00b894",
                    trailColor: "#2d3436",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin_Dashboard;
