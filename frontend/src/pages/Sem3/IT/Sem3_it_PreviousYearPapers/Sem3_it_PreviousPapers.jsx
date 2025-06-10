import React from "react";
import { Link } from "react-router-dom";

const Sem3_it_PreviousPapers = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📄 Semester 3 IT - Previous Year Papers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 - Indian Economic */}
          <Link
            to="/sem3/it/indian-economics-papers"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Indian Economic" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Indian Economic</h2>
          </Link>

          {/* Card 2 - Introduction To Finance */}
          <Link
            to="/sem3/it/introduction-finance-papers"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Introduction To Finance" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Introduction To Finance</h2>
          </Link>

          {/* Card 3 - Object Oriented Methodologies */}
          <Link
            to="/sem3/it/oopm-papers"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Object Oriented Methodologies" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Object Oriented Methodologies</h2>
          </Link>

          {/* Card 4 - Operating System */}
          <Link
            to="/sem3/it/operating-system-papers"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Operating System" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Operating System</h2>
          </Link>

          {/* Card 5 - Probability And Statistics */}
          <Link
            to="/sem3/it/probability-statistics-papers"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Probability And Statistics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Probability And Statistics</h2>
          </Link>

          {/* Card 6 - Software Engineering */}
          <Link
            to="/sem3/it/software-engineering-papers"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Software Engineering" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Software Engineering</h2>
          </Link>

          {/* Card 7 - Theory Of Computation */}
          <Link
            to="/sem3/it/theory-computation-papers"
            className="bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Theory Of Computation" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Theory Of Computation</h2>
          </Link>

          {/* Card 8 - Yoga */}
          <Link
            to="/sem3/it/yoga-papers"
            className="bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Yoga" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">Yoga</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem3_it_PreviousPapers;
