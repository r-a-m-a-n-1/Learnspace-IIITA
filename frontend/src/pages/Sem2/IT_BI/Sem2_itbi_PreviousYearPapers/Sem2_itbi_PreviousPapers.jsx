// import React from "react";
// import { Link } from "react-router-dom";

// const Sem2_itbi_PreviousYearPaper = () => {
//   return (
//     <div className="fixed inset-0 bg-black text-white overflow-auto">
//       <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
//         <h1 className="text-4xl font-bold mb-8">Semester 2 IT_BI - Previous Year Papers</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

//           {/* Card 1 - Computer Organization And Architecture */}
//           <Link
//             to="/sem2/computer-organization-paper"
//             className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/en_py.png"
//               alt="Computer Organization And Architecture"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Computer Organization And Architecture</h2>
//           </Link>

//           {/* Card 2 - Data Structures And Algorithms */}
//           <Link
//             to="/sem2/data-structures-algorithms-paper"
//             className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/fee.png"
//               alt="Data Structures And Algorithms"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Data Structures And Algorithms</h2>
//           </Link>

//           {/* Card 3 - Discrete Mathematical Structures */}
//           <Link
//             to="/sem2/discrete-math-paper"
//             className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/linear_algebra.png"
//               alt="Discrete Mathematical Structures"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Discrete Mathematical Structures</h2>
//           </Link>

//           {/* Card 4 - Essential Of Business Informatics */}
//           <Link
//             to="/sem2/essential-of-business-informatics-paper"
//             className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/psp.png"
//               alt="Essential Of Business Informatics"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Essential Of Business Informatics</h2>
//           </Link>

//           {/* Card 5 - Professional Ethics */}
//           <Link
//             to="/sem2/professional-ethics-paper"
//             className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/com_skill.png"
//               alt="Professional Ethics "
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Professional Ethics </h2>
//           </Link>

//           {/* Card 6 - Principles Of Management */}
//           <Link
//             to="/sem2/management-principles-paper"
//             className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/ethics.png"
//               alt="Principles Of Management"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Principles Of Management</h2>
//           </Link>

//           {/* Card 7 - Web Development */}
//           <Link
//             to="/sem2/web-development-paper"
//             className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img
//               src="/web_dev.png"
//               alt="Web Development"
//               className="w-16 h-16 mb-4 animate-bounce"
//             />
//             <h2 className="text-xl font-bold text-center px-2">Web Development</h2>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sem2_itbi_PreviousYearPaper;





import React from "react";
import { Link } from "react-router-dom";

const Sem2_itbi_PreviousYearPaper = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📄 Semester 2 IT_BI - Previous Year Papers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 - Computer Organization And Architecture */}
          <Link
            to="/sem2/computer-organization-paper"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/en_py.png" alt="Computer Organization And Architecture" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Computer Organization And Architecture
            </h2>
          </Link>

          {/* Card 2 - Data Structures And Algorithms */}
          <Link
            to="/sem2/data-structures-algorithms-paper"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/fee.png" alt="Data Structures And Algorithms" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Data Structures And Algorithms
            </h2>
          </Link>

          {/* Card 3 - Discrete Mathematical Structures */}
          <Link
            to="/sem2/discrete-math-paper"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/linear_algebra.png" alt="Discrete Mathematical Structures" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Discrete Mathematical Structures
            </h2>
          </Link>

          {/* Card 4 - Essential Of Business Informatics */}
          <Link
            to="/sem2/essential-of-business-informatics-paper"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/psp.png" alt="Essential Of Business Informatics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Essential Of Business Informatics
            </h2>
          </Link>

          {/* Card 5 - Professional Ethics */}
          <Link
            to="/sem2/professional-ethics-paper"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/com_skill.png" alt="Professional Ethics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Professional Ethics
            </h2>
          </Link>

          {/* Card 6 - Principles Of Management */}
          <Link
            to="/sem2/management-principles-paper"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Principles Of Management" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Principles Of Management
            </h2>
          </Link>

          {/* Card 7 - Web Development */}
          <Link
            to="/sem2/web-development-paper"
            className="bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/web_dev.png" alt="Web Development" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Web Development
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem2_itbi_PreviousYearPaper;
