import React from 'react'

const Contact = () => {
  return (
<div name='contact' className='bg-gradient-to-b from-black to-gray-800 text-white py-4'>


<div class="max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute 
  after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 py-6">
  <h2 class="text-2xl font-bold text-white mb-6">Let's Chat</h2>

  <form method="post" action="https://getform.io/f/bejjkmna">
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="name"
        >Full Name</label>
      <input class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        type="text" name='name'/>
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="email"
        >Email Address</label>
      <input
        class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        name="email"
        type="email"
      />
    </div>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-300" for="bio">Message</label>
      <textarea
        class="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        rows="3"
        name="message"
        id="message"></textarea>
    </div>

    <div class="flex justify-end">
      <button
        class="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit">
        Send Message
      </button>
    </div>
  </form>
</div>

</div>

  )
}

export default Contact