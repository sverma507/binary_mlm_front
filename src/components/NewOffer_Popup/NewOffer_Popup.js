import React from "react";
import { FaGift } from "react-icons/fa"; // Optional: Icon to enhance visual appeal

function NewOffer_Popup({ offerDetails, onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 h-screen">
      <div className="relative bg-gradient-to-br from-black h-fit to-blue-600 border-2 border-white w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg p-6 animate-fade-in">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-red-600 font-bold text-2xl hover:text-red-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Offer Icon and Heading */}
        <div className="text-center mb-6">
          <FaGift className="text-blue-500 text-6xl mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-red-600">New Offer Alert!</h2>
        </div>

        {/* Offer Details */}
        <div className="text-gray-700 text-lg">
          <p className="mb-4">
            🎉 <strong>{offerDetails.title || "Exclusive Deal"}</strong>
          </p>
          <p className="mb-4">
            {offerDetails.description || "Don't miss out on this amazing offer!"}
          </p>
          <p className="mb-6">
            <strong>Offer Price:</strong> ${offerDetails.price || "0.00"}
          </p>
        </div>

        {/* Action Button */}
        {/* <div className="text-center">
          <button
            onClick={offerDetails.onActionClick}
            className="bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {offerDetails.buttonText || "Grab Offer Now!"}
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default NewOffer_Popup;
