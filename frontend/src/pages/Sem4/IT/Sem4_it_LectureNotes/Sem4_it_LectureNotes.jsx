import React from "react";
import { Link } from "react-router-dom";

const Sem4_it_LectureNotes = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📚 Semester 4 IT - Lecture Notes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

          {/* Card 1 - Computer Graphics And Visualization */}
          <Link
            to="/sem4/it/computer-graphics-visualization-notes"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Computer Graphics And Visualization" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Computer Graphics And Visualization</h2>
          </Link>

          {/* Card 2 - Computer Networks */}
          <Link
            to="/sem4/it/computer-networks-notes"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Computer Networks" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Computer Networks</h2>
          </Link>

          {/* Card 3 - Database Management System */}
          <Link
            to="/sem4/it/database-management-system-notes"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Database Management System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Database Management System</h2>
          </Link>

          {/* Card 4 - Design And Analysis Of Algorithms */}
          <Link
            to="/sem4/it/design-analysis-algorithms-notes"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Design And Analysis Of Algorithms" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Design And Analysis Of Algorithms</h2>
          </Link>

          {/* Card 5 - Money And Banking */}
          <Link
            to="/sem4/it/money-and-banking-notes"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Money And Banking" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Money And Banking</h2>
          </Link>

          {/* Card 6 - Principles Of Programming */}
          <Link
            to="/sem4/it/principles-of-programming-notes"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Principles Of Programming" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Principles Of Programming</h2>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Sem4_it_LectureNotes;
