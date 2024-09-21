import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Layout from '../layout/layout';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    description: '',
    file: null,
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.agreed) {
      toast.success('Form submitted successfully!', { position: "top-right" });
    } else {
      toast.error('You must agree to the privacy policy!', { position: "top-right" });
    }
  };

  return (
    <Layout>
    <div className="min-h-screen mt-20 items-center justify-center bg-gradient-to-r from-blue-900 to-black p-8">
      {/* Outer div with 80% width and 10% margin on both sides */}
      <div className="bg-white text-gray-800 shadow-lg rounded-2xl w-[80%] mx-auto">
        <div className="p-8 md:p-12">
          {/* Form Information */}
          <div className="lg:w-[70%] mb-8 lg:mb-0 m-auto">
            <h2 className="text-3xl font-extrabold text-blue-600 mb-6">Get in Touch</h2>
            <p className="text-gray-500 mb-8">
              Fill in the form to send us a message or connect with us via social media platforms. We're here to assist you with any inquiries related to our trading platform.
            </p>
            <div className="flex space-x-4 text-blue-500 w-fit m-auto">
              <FaFacebook className="cursor-pointer hover:text-blue-700 transition duration-200 text-3xl" />
              <FaTwitter className="cursor-pointer hover:text-blue-400 transition duration-200 text-3xl" />
              <FaLinkedin className="cursor-pointer hover:text-blue-700 transition duration-200 text-3xl" />
              <FaInstagram className="cursor-pointer hover:text-pink-600 transition duration-200 text-3xl" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-gray-100 p-8 rounded-xl shadow-inner m-auto mt-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-left mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-left mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-left mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="+123 456 789"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-left mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="Account">Account</option>
                  <option value="Trading">Trading</option>
                  <option value="Support">Support</option>
                </select>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-left mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Describe your issue..."
                  rows="4"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-left mb-2">Attachment (Optional)</label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={formData.agreed}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                />
                <label className="text-sm">I agree to the privacy policy</label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </Layout>
  );
};

export default ContactUs;
