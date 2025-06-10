// import React from "react";
// import { Link } from "react-router-dom";

// const Sem2_ece_LectureNotes = () => {
//   return (
//     <div className="fixed inset-0 bg-black text-white overflow-auto">
//       <div className="pt-24 pb-8 max-w-screen-xl mx-auto px-4 flex flex-col items-center">
//         <h1 className="text-4xl font-bold mb-8">Semester 2 ECE - Lecture Notes</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

//           {/* Card 1 - Data Structures and Algorithms */}
//           <Link
//             to="/sem2/data-structures-algorithms-notes"
//             className="cursor-pointer bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/en_py.png" alt="Data Structures and Algorithms" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Data Structures and Algorithms</h2>
//           </Link>

//           {/* Card 2 - Digital Electronics */}
//           <Link
//             to="/sem2/digital-electronics-notes"
//             className="cursor-pointer bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/fee.png" alt="Digital Electronics" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Digital Electronics</h2>
//           </Link>

//           {/* Card 3 - Electronic Devices And Instrumentation */}
//           <Link
//             to="/sem2/electronic-devices-instrumentation-notes"
//             className="cursor-pointer bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/linear_algebra.png" alt="Electronic  Measurements  And Instrumentation" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Electronic Measurements & Instrumentation</h2>
//           </Link>

//           {/* Card 4 - Electronic Workshop */}
//           <Link
//             to="/sem2/electronic-workshop-notes"
//             className="cursor-pointer bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/psp.png" alt="Electronic Workshop" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Electronic Workshop</h2>
//           </Link>

//           {/* Card 5 - Electronic Devices And Circuits */}
//           <Link
//             to="/sem2/electronic-devices-circuits-notes"
//             className="cursor-pointer bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/com_skill.png" alt="Electronic Devices And Circuits" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Electronic Devices & Circuits</h2>
//           </Link>

//           {/* Card 6 - Probability And Statistics */}
//           <Link
//             to="/sem2/probability-statistics-notes"
//             className="cursor-pointer bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/ethics.png" alt="Probability And Statistics" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Probability & Statistics</h2>
//           </Link>

//           {/* Card 7 - Physical Education */}
//           <Link
//             to="/sem2/physical-education-notes"
//             className="cursor-pointer bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/ethics.png" alt="Physical Education" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Physical Education</h2>
//           </Link>

//           {/* Card 8 - Principles Of Management */}
//           <Link
//             to="/sem2/principles-management-notes"
//             className="cursor-pointer bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-60 h-60 flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
//           >
//             <img src="/ethics.png" alt="Principles Of Management" className="w-16 h-16 mb-4 animate-bounce" />
//             <h2 className="text-xl font-bold text-center px-2">Principles Of Management</h2>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sem2_ece_LectureNotes;


import React from "react";
import { Link } from "react-router-dom";

const Sem2_ece_LectureNotes = () => {
  return (
    <div className="fixed inset-0 bg-black text-white overflow-auto">
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center text-indigo-400 drop-shadow-md">
          📚 Semester 2 ECE - Lecture Notes
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 - Data Structures and Algorithms */}
          <Link
            to="/sem2/data-structures-algorithms-notes"
            className="bg-gradient-to-br from-green-400 to-green-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/alg.png" alt="Data Structures and Algorithms" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Data Structures and Algorithms
            </h2>
          </Link>

          {/* Card 2 - Digital Electronics */}
          <Link
            to="/sem2/digital-electronics-notes"
            className="bg-gradient-to-br from-red-400 to-red-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ece4.png" alt="Digital Electronics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Digital Electronics
            </h2>
          </Link>

          {/* Card 3 - Electronic Measurements and Instrumentation */}
          <Link
            to="/sem2/electronic-devices-instrumentation-notes"
            className="bg-gradient-to-br from-blue-400 to-blue-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ece2.png" alt="Electronic Devices and Instrumentation" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Electronic Measurements & Instrumentation
            </h2>
          </Link>

          {/* Card 4 - Electronic Workshop */}
          <Link
            to="/sem2/electronic-workshop-notes"
            className="bg-gradient-to-br from-purple-400 to-purple-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/dig.png" alt="Electronic Workshop" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Electronic Workshop
            </h2>
          </Link>

          {/* Card 5 - Electronic Devices And Circuits */}
          <Link
            to="/sem2/electronic-devices-circuits-notes"
            className="bg-gradient-to-br from-orange-400 to-orange-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ece1.png" alt="Electronic Devices and Circuits" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Electronic Devices & Circuits
            </h2>
          </Link>

          {/* Card 6 - Probability and Statistics */}
          <Link
            to="/sem2/probability-statistics-notes"
            className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/dms.jpg" alt="Probability and Statistics" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Probability & Statistics
            </h2>
          </Link>

          {/* Card 7 - Physical Education */}
          <Link
            to="/sem2/physical-education-notes"
            className="bg-gradient-to-br from-teal-400 to-teal-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/pys.png" alt="Physical Education" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Physical Education
            </h2>
          </Link>

          {/* Card 8 - Principles of Management */}
          <Link
            to="/sem2/principles-management-notes"
            className="bg-gradient-to-br from-pink-400 to-pink-500 text-white shadow-xl rounded-xl w-full max-w-xs h-60 flex flex-col justify-center items-center px-4 transition-all duration-300 transform hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <img src="/ethics.png" alt="Principles of Management" className="w-16 h-16 mb-4 animate-bounce" />
            <h2 className="text-lg sm:text-xl font-bold text-center">
              Principles Of Management
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sem2_ece_LectureNotes;
