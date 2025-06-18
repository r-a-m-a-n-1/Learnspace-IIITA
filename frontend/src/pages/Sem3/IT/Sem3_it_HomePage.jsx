

import React from "react";
import { Link } from "react-router-dom";

const Sem3_IT_HomePage = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
    
      {/* Custom Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-4 shadow-xl z-[99999]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center drop-shadow-2xl tracking-wide">
            📚 Sem3 Study Material
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-10 px-4 sm:px-6 max-w-screen-xl mx-auto flex justify-center items-center min-h-[calc(100vh-6rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Card 1 - Video Lecture */}
          <Link
            to="/sem3/it/vedioplaylist"
            className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 sm:w-64 sm:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/video_lecture.png"
              alt="Video Lecture"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 animate-bounce object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center drop-shadow-sm">
               Video Lecture
            </h2>
          </Link>

          {/* Card 2 - Study Material / Lecture Notes */}
          <Link
            to="/sem3/it/lecturenotes"
            className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 sm:w-64 sm:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/stu.png"
              alt="Study Material"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 animate-bounce object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center drop-shadow-sm">
               Study Material
            </h2>
          </Link>

          {/* Card 3 - Previous Year Paper */}
          <Link
            to="/sem3/it/previouspapers"
            className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 sm:w-64 sm:h-64 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
          >
            <img
              src="/pa.png"
              alt="Previous Year Paper"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-4 animate-bounce object-contain"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center drop-shadow-sm">
               Previous Year Paper
            </h2>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Sem3_IT_HomePage;

