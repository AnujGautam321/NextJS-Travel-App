import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-5">
      
      <h1 className="text-5xl font-extrabold text-gray-800 mb-10">
        Get in Touch 🌍
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl">
        Have questions, feedback, or want to plan your next adventure? Reach out
        to us via the form below, or connect with us through our social media
        platforms.
      </p>

      
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div className="col-span-1">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="col-span-1">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          
          <div className="col-span-2">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
            />
          </div>
          
          <div className="col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
              rows={6}
            ></textarea>
          </div>
        
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      
      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Office</h2>
        <p className="text-lg text-gray-600 mb-4">
          123 Adventure Lane, Kathmandu, Nepal
        </p>
        <p className="text-lg text-gray-600 mb-8">Phone: +977-1-2345678</p>

        
        <div className="flex gap-6">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition duration-300 text-2xl"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition duration-300 text-2xl"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition duration-300 text-2xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 transition duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
