import React from "react";
import Layout from "../../layout/layout";
// import Sidebar from "../AdminSidebar/Sidebar";

function ActivateUserForm() {
  return (
    <Layout>

    <div className="pt-28 flex min-h-screen gap-4">
      {/* Sidebar */}
      {/* <Sidebar className="fixed w-60 h-full" /> */}

      {/* Main Content */}
      <div className=" container mx-auto p-4">
        {/* Activation Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-[50px] w-[50%] max-w-[800px] mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Activate / Upgrade Package Now
          </h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="userId"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                User Id
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="userId"
                className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Please Enter Valid User ID"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="package"
                className="block text-gray-700 text-sm font-bold mb-2"
                >
                Select Package
              </label>
              <select
                id="package"
                className="shadow-sm border border-gray-300 rounded-md w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                >
                <option value="">Select a package</option>
                {/* Package options can go here */}
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300"
              >
                Activate Now
              </button>
            </div>
          </form>
        </div>

        {/* Latest Activated User Table */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-8 w-[90%] mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">
            Activated User Id
          </h3>
          <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left">#</th>
                <th className="py-2 px-4 border-b text-left">User Id</th>
                <th className="py-2 px-4 border-b text-left">Mobile Number</th>
                <th className="py-2 px-4 border-b text-left">Activated By</th>
                <th className="py-2 px-4 border-b text-left">Package</th>
                <th className="py-2 px-4 border-b text-left">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {/* Dummy data for layout demonstration */}
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">123456</td>
                <td className="py-2 px-4 border-b">9876543210</td>
                <td className="py-2 px-4 border-b">Admin</td>
                <td className="py-2 px-4 border-b">Package A</td>
                <td className="py-2 px-4 border-b">12/09/2023, 14:30</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">2</td>
                <td className="py-2 px-4 border-b">654321</td>
                <td className="py-2 px-4 border-b">9876543210</td>
                <td className="py-2 px-4 border-b">Admin</td>
                <td className="py-2 px-4 border-b">Package B</td>
                <td className="py-2 px-4 border-b">12/09/2023, 15:00</td>
              </tr>
              {/* Repeat rows for more users */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
                </Layout>
  );
}

export default ActivateUserForm;
