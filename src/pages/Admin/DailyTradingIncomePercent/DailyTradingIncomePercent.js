import React, { useState, useEffect } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";

const DailyTradingIncomePercent = () => {
  const [formData, setFormData] = useState({
    percent: "",
    _id: "", // Include _id in formData
  });
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const fetchTradingIncomePercent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/get-trading-income-percent`);
        if (response.status === 200 && response.data.data) {
          const data = response.data.data[0];
          setFormData({ percent: data.percent, _id: data._id }); // Set _id from fetched data
          setIsEdit(true);
        }
      } catch (error) {
        toast.error("Failed to fetch trading income percent.");
      }
    };

    fetchTradingIncomePercent();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        // Update existing trading income percent
        const response = await axios.put(
          `${process.env.REACT_APP_API_URL}/admin/trading-income-percent/${formData._id}`,
          { percent: formData.percent } // Send only the percent
        );

        if (response.status === 200) {
          toast.success("Trading income percent updated successfully!");
        }
      } else {
        // Create new trading income percent
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/admin/trading-income-percent`,
          { percent: formData.percent } // Send only the percent
        );

        if (response.status === 200) {
          toast.success("Trading income percent added successfully!");
        }
      }

      setFormData({ percent: "", _id: "" }); // Reset form after successful submission
    } catch (error) {
      toast.error("Failed to save trading income percent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-4">
      <Sidebar className="fixed w-60 h-full" />
      <div className="ml-60 container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Trading Income Percent" : "Add New Trading Income Percent"}</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
          <div className="flex flex-col">
            <label htmlFor="percent" className="text-gray-700 font-semibold">Daily Trading Income Percent</label>
            <input
              type="number"
              id="percent"
              name="percent"
              value={formData.percent}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
              min="0"
              step="0.01"
              placeholder="Enter daily income percent"
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-600 ${loading && "opacity-50 cursor-not-allowed"}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DailyTradingIncomePercent;
