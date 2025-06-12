import React from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react"; // You can replace with any icon or animation

const InProgress = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 py-10">
      {/* Top Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white drop-shadow-lg mb-6 animate-pulse">
        🚧 Page Under Construction
      </h1>

      {/* Animated Icon */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 rounded-full shadow-2xl mb-6">
        <Loader2 className="w-12 h-12 text-white animate-spin" />
      </div>

      {/* Message Box */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 sm:p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
        <p className="text-lg sm:text-xl text-gray-200 mb-4">
          Sorry, this semester's content is still being prepared. We're working
          hard to bring it to you soon!
        </p>
        <p className="text-sm text-gray-400 mb-6">
          Stay tuned! New videos, notes, and papers will be available shortly.
        </p>

        <Link
          to="/choose-semester"
          className="inline-block px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md hover:scale-105 transform transition duration-300"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InProgress;
