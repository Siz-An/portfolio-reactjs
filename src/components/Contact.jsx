import React from 'react'

export default function Contact() {
  return (
  
<div name="contact" className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-800 italic">
  <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-cyan-400 shadow-md w-full max-w-md">
    <h2 className="text-2xl font-semibold text-gray-300 mb-4 text-center">Let's Talk</h2>
    <form action="https://formspree.io/f/myzwvnbz" method="POST" className="space-y-6">
      <div>
        <label htmlFor="Name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Leave your message here"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>

  )
}
