import React, { useState, useEffect } from "react";
import Sidebar from "../AdminSidebar/Sidebar";
import axios from "axios";
import { toast } from "react-toastify";

const GiftPopup = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false); // State to track if it's an edit

  // Fetch existing gift popup on component mount
  useEffect(() => {
    const fetchGiftPopup = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/get-gift-popup`); // Replace with actual API endpoint
        if (response.status === 200 && response.data.data) {
          setFormData(response.data.data[0]); // Assuming you're getting an array with one gift
          setIsEdit(true); // Mark it as an edit operation
        }
      } catch (error) {
        console.log("error in gift popup fetching")
        // toast.error("Failed to fetch gift popup.");
      }
    };

    fetchGiftPopup();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if it's an update or create
      if (isEdit) {
        // If editing, update the existing gift popup
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/admin/gift-popup/${formData._id}`, formData); // Use PUT to update existing gift popup

        if (response.status === 200) {
          toast.success("Gift popup updated successfully!");
        }
      } else {
        // Otherwise, create a new gift popup
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/admin/gift-popup`, formData);

        if (response.status === 200) {
          toast.success("Gift added successfully!");
        }
      }

      setFormData({ title: "", description: "", price: "" });
    } catch (error) {
      toast.error("Failed to save gift popup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen gap-4">
      <Sidebar className="fixed w-60 h-full" />
      <div className="ml-60 container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{isEdit ? "Edit Gift Popup" : "Add New Gift"}</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-gray-700 font-semibold">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-gray-700 font-semibold">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="text-gray-700 font-semibold">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-2 border rounded w-full"
              required
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

export default GiftPopup;
