
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound=() => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gray-700 mt-4">Page not found</p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
