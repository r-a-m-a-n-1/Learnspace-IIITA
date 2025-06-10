import React from "react";
import { Link } from "react-router-dom";

const Sem3_itbi_LectureNotes = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📚 Semester 3 IT-BI - Lecture Notes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          {/* Card 1 - Foundation Of Fintech */}
          <Link
            to="/sem3/itbi/foundation-fintech-notes"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Foundation Of Fintech" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Foundation Of Fintech</h2>
          </Link>

          {/* Card 2 - Indian Economics */}
          <Link
            to="/sem3/itbi/indian-economics-notes"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Indian Economics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Indian Economics</h2>
          </Link>

          {/* Card 3 - Introduction To Finance */}
          <Link
            to="/sem3/itbi/introduction-finance-notes"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Introduction To Finance" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Introduction To Finance</h2>
          </Link>

          {/* Card 4 - Object Oriented Methodologies */}
          <Link
            to="/sem3/itbi/oopm-notes"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Object Oriented Methodologies" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Object Oriented Methodologies</h2>
          </Link>

          {/* Card 5 - Operating System */}
          <Link
            to="/sem3/itbi/operating-system-notes"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Operating System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Operating System</h2>
          </Link>

          {/* Card 6 - Prayas */}
          <Link
            to="/sem3/itbi/prayas-notes"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Prayas" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Prayas</h2>
          </Link>

          {/* Card 7 - Probability And Statistics */}
          <Link
            to="/sem3/itbi/probability-statistics-notes"
            className="bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Probability And Statistics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Probability And Statistics</h2>
          </Link>

          {/* Card 8 - Software Engineering */}
          <Link
            to="/sem3/itbi/software-engineering-notes"
            className="bg-gradient-to-br from-cyan-400 to-cyan-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Software Engineering" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Software Engineering</h2>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Sem3_itbi_LectureNotes;
