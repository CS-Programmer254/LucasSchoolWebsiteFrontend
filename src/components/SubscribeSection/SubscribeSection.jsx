import React, { useState } from 'react';

function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setIsValid(false);
      return;
    }
    // Handle email subscription logic here
    alert(`Subscribed with: ${email}`);
  };

  return (
    <section
      className="py-20 px-6 lg:px-20 bg-gradient-to-r from-[#800000] to-[#FFB6C1] text-white"
      style={{ borderRadius: '10px', marginTop: '50px' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-wide">Stay Updated!</h2>
        <p className="text-xl mb-10">Subscribe to our newsletter and get the latest updates directly in your inbox.</p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-4 rounded-full text-gray-900 w-80 focus:outline-none border-2 ${!isValid ? 'border-red-500' : 'border-white'}`}
            placeholder="Enter your email"
            required
          />
          <button
            type="submit"
            className="px-8 py-4 bg-white text-[#800000] font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>
        {!isValid && (
          <p className="mt-4 text-red-400 text-lg">Please enter a valid email address.</p>
        )}
      </div>
    </section>
  );
}

export default SubscribeSection;
