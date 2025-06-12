import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';

const InProgress = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full">
        <Construction size={48} className="text-yellow-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-gray-800">Work In Progress</h1>
        <p className="text-gray-600 mb-6">
          Sorry, the content for this semester is still under development. We're working hard to bring it to you soon!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InProgress;
