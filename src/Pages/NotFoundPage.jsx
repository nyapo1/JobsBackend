

import React from 'react';
import { Link } from 'react-router-dom'; // Add this if using React Router
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-30">
      <FaExclamationTriangle className=' text-yellow-400 text-6xl mb-4'/>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/" // Change this if you want to go to a different route
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        aria-label="Go back to home"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;