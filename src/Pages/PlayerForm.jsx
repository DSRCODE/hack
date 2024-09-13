import React, { useState } from "react";
import Nav from "../Components/Nav"
import Footer from "./Footer";
const PlayerForm = () => {
  const [formData, setFormData] = useState({
    playerName: "",
    academyName: "",
    problemDescription: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted! Check the console for data.");
  };

  return (
    <>
    <Nav/>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
          <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Submit Your Issue
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Player Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="playerName"
              >
                Player Name
              </label>
              <input
                type="text"
                id="playerName"
                name="playerName"
                value={formData.playerName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Academy Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="academyName"
              >
                Academy Name
              </label>
              <input
                type="text"
                id="academyName"
                name="academyName"
                value={formData.academyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter academy name"
              />
            </div>

            {/* Problem Description */}
            <div className="mb-6">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="problemDescription"
              >
                Problem Description
              </label>
              <textarea
                id="problemDescription"
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the problem"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PlayerForm;
