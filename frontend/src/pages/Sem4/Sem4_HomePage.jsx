


import React from "react";
import { Link } from "react-router-dom";

const Sem4_HomePage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-auto">
    

      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-800 via-black to-black px-4 py-4 shadow-lg z-40">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            🎓 Choose Your Branch
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-28 pb-10 px-4 sm:px-6 max-w-screen-xl mx-auto flex justify-center items-center min-h-[calc(100vh-7rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* IT Card */}
          <Link
            to="/sem4/it"
            className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-2xl w-64 h-64 flex flex-col justify-center items-center text-white"
          >
            <img
              src="/it.png"
              alt="IT"
              className="w-16 h-16 mb-3 animate-bounce"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              IT
            </h2>
          </Link>

          {/* IT-BI Card */}
          <Link
            to="/sem4/itbi"
            className="bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-2xl w-64 h-64 flex flex-col justify-center items-center text-white"
          >
            <img
              src="/itbi.png"
              alt="IT-BI"
              className="w-16 h-16 mb-3 animate-bounce"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              IT - BI
            </h2>
          </Link>

          {/* ECE Card */}
          <Link
            to="/sem4/ece"
            className="bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 rounded-2xl shadow-2xl w-64 h-64 flex flex-col justify-center items-center text-white"
          >
            <img
              src="/ec.png"
              alt="ECE"
              className="w-16 h-16 mb-3 animate-bounce"
            />
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-center">
              ECE
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sem4_HomePage;
