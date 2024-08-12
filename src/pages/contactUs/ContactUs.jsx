import React, { useState } from 'react'
import Layout from '../../component/layout/Layout'

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiry: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API, log data, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <Layout>
      <div className=" grid grid-cols-1 md:grid-cols-2 px-3 md:px-8">
      <div className="my-auto bg-white md:p-8 rounded-lg ">
      <h2 className=" ">
        <img className=' w-full h-full' src="https://img.freepik.com/premium-photo/3d-rendering-blue-telephone-word-contact-us_190619-1135.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid" alt="" />
      </h2>
      </div>
      <div className="img hidden md:block">
        <img className='' src="https://digiphlox.com/wp-content/uploads/2023/11/Layer-011-1874x2048.png" alt="img" />
      </div>
      </div>
      <div className="boxes container mx-auto mb-8 px-3">
      <form onSubmit={handleSubmit}>
        <div className="names grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        </div>
        <div className="box grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full  p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700">
            Enquiry
          </label>
          <textarea
            name="enquiry"
            id="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </Layout>
  )
}

export default ContactUs
