
import React from 'react';
const teamMembers = [
  {
    name: 'Raman Gautam',
    role: 'Developer',
    imgSrc: '/raman.jpg',
  }
];

const TechTitaniumTeam = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 relative"> {/* Increased py-12 to py-16 */}
      {/* Header */}
      <div className="w-full max-w-6xl text-center mb-8 sm:mb-12 pt-8 sm:pt-0"> 
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text animate-fadeIn">
          LearnSpace Team
        </h1>
     
      </div>

      {/* Team Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-lg p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <div className="w-24 h-24 sm:w-32 sm:h-32 mb-4 sm:mb-6 relative">
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-md"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-avatar.jpg';
                    }}
                  />
                </div>
                
                {/* Details */}
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl font-semibold text-white">{member.name}</h2>
                  <p className="text-green-400 mt-1 sm:mt-2 text-base sm:text-lg">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note - Changed as requested */}
      <div className="mt-12 sm:mt-16 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
};

export default TechTitaniumTeam;