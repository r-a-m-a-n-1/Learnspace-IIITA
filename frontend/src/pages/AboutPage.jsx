// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
// import { motion } from 'framer-motion';
// import { AiFillHeart } from 'react-icons/ai'; // Heart icon
// import { FaCopyright } from 'react-icons/fa'; // Copyright icon
// import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa'; // Social media icons

// const AboutPage = () => {
//   const navigate = useNavigate(); // Initialize navigate function

//   return (
//     <div
//       className="min-h-screen flex flex-col justify-between"
//       style={{
//         backgroundColor: '#000000', // Updated to solid black
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//       }}
//     >
//       {/* Main content */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-4xl w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl p-8 rounded-xl shadow-xl mx-auto my-12 max-h-[80vh] overflow-auto"
//       >
//         {/* About Us Content */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
//         >
//           About Our Platform
//         </motion.h1>

//         <div className="text-left text-lg text-white leading-relaxed space-y-4">
//           <p>
//             Our platform is specifically designed to support students by providing essential academic resources. We understand that when you start your academic journey, knowing where to begin and how to prepare can be challenging.
//           </p>
//           <p>
//             To ease your transition, we offer a curated collection of high-quality video lectures, detailed course practice sheets, and comprehensive question papers from previous years. In addition, you can access well-organized notes prepared by both faculty and seniors, ensuring you have a complete resource to study from.
//           </p>
//           <p>
//             Our mission is to empower you with the right materials to excel academically—no live sessions or interactive classes, just reliable and straightforward study resources available at your fingertips.
//           </p>
//           <p>
//             Whether you are revising for exams or trying to grasp new concepts, our platform is your one-stop destination for all the essential study materials you need.
//           </p>
//           <p className="mt-6 text-center">
//             <span className="text-2xl font-bold text-yellow-400">
//               Empowering Your Academic Journey
//             </span>
//           </p>
//         </div>
//       </motion.div>

//       {/* Full-Width Footer */}
//       <footer className="w-screen bg-gray-900 py-6">
//         <div className="w-full flex flex-col items-center">
//           <div className="flex items-center text-white space-x-2 mb-4">
//             <p className="text-lg">Made with</p>
//             <AiFillHeart className="text-red-600 text-2xl" /> {/* Heart icon */}
//             <p
//               className="text-lg cursor-pointer hover:underline"
//               onClick={() => navigate('/techtitanium-team')} // Navigate to TechTitanium team page on click
//             >
//               by Platinum Team
//             </p>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex items-center space-x-6">
//             <a
//               href="https://www.instagram.com/learnspace_iiita/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-pink-600"
//             >
//               <FaInstagram className="text-3xl" /> {/* Instagram icon */}
//             </a>
//             <a
//               href="https://chat.whatsapp.com/FF3dyV555QwLDY01jvV9qE"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-green-500"
//             >
//               <FaWhatsapp className="text-3xl" /> {/* WhatsApp icon */}
//             </a>
//             <a
//               href="https://www.facebook.com/campusbazarsupportteam"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-blue-600"
//             >
//               <FaFacebook className="text-3xl" /> {/* Facebook icon */}
//             </a>
//           </div>

//           {/* Copyright Info */}
//           <div className="flex items-center text-white space-x-2 mt-4">
//             <FaCopyright className="text-white text-md" /> {/* Copyright icon */}
//             <p className="text-sm">2024  Platinum. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutPage;




// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { AiFillHeart } from 'react-icons/ai';
// import { FaCopyright } from 'react-icons/fa';
// import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

// const AboutPage = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col justify-between bg-black">
//       {/* Main content - now fully responsive */}
//       <div className="flex-grow flex items-center justify-center p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-w-5xl bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl overflow-hidden"
//         >
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
//             {/* Left Column - Text Content */}
//             <div className="flex flex-col justify-center">
//               <motion.h1
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
//               >
//                 About LearnSpace-IIITA
//               </motion.h1>
              
//               <motion.div 
//                 className="text-white space-y-3 text-sm md:text-base"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.7, delay: 0.4 }}
//               >
//                 <p className="font-medium text-emerald-300">
//                   Your All-in-One Academic Hub for IIIT Allahabad
//                 </p>
                
//                 <p>
//                   Starting your engineering journey can be overwhelming. <span className="text-yellow-300">LearnSpace-IIITA</span> transforms confusion into confidence by providing perfectly organized academic resources for all 8 semesters.
//                 </p>
                
//                 <div className="grid grid-cols-2 gap-3 mt-4">
//                   <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-green-500">
//                     <h3 className="font-bold text-emerald-400">For Freshers</h3>
//                     <p className="text-sm">Eliminates the "where to start?" dilemma</p>
//                   </div>
                  
//                   <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-blue-500">
//                     <h3 className="font-bold text-blue-400">Organized Papers</h3>
//                     <p className="text-sm">10+ years of question papers systematically categorized</p>
//                   </div>
                  
//                   <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-purple-500">
//                     <h3 className="font-bold text-purple-400">Complete Resources</h3>
//                     <p className="text-sm">Video lectures, notes, and papers in one place</p>
//                   </div>
                  
//                   <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-amber-500">
//                     <h3 className="font-bold text-amber-400">Student-Powered</h3>
//                     <p className="text-sm">Contribute as admin to expand resources</p>
//                   </div>
//                 </div>
                
//                 <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-emerald-700">
//                   <p className="text-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
//                     "One Platform. All Resources. Zero Confusion."
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
            
//             {/* Right Column - Visual Elements */}
//             <motion.div 
//               className="flex items-center justify-center"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7, delay: 0.6 }}
//             >
//               <div className="relative w-full max-w-md">
//                 {/* Semester cards visualization */}
//                 <div className="grid grid-cols-4 gap-2 mb-6">
//                   {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
//                     <motion.div
//                       key={sem}
//                       className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-emerald-500"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                     >
//                       <span className="text-white font-bold">Sem {sem}</span>
//                     </motion.div>
//                   ))}
//                 </div>
                
//                 {/* Resource icons */}
//                 <div className="flex justify-center space-x-8 mb-6">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <span className="text-emerald-400 text-xl">📹</span>
//                     </div>
//                     <p className="text-white text-sm">Video Lectures</p>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <span className="text-blue-400 text-xl">📝</span>
//                     </div>
//                     <p className="text-white text-sm">Lecture Notes</p>
//                   </div>
                  
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <span className="text-amber-400 text-xl">📚</span>
//                     </div>
//                     <p className="text-white text-sm">Previous Papers</p>
//                   </div>
//                 </div>
                
//                 {/* Platform stats */}
//                 <div className="bg-gray-900 rounded-xl p-4 border border-purple-700">
//                   <div className="grid grid-cols-3 gap-4 text-center">
//                     <div>
//                       <div className="text-2xl font-bold text-purple-400">8</div>
//                       <div className="text-xs text-gray-300">Semesters</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-emerald-400">3</div>
//                       <div className="text-xs text-gray-300">Resource Types</div>
//                     </div>
//                     <div>
//                       <div className="text-2xl font-bold text-yellow-400">∞</div>
//                       <div className="text-xs text-gray-300">Contributors</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Full-Width Footer */}
//       <footer className="w-full bg-gray-900 py-4">
//         <div className="w-full flex flex-col items-center">
//           <div className="flex items-center text-white space-x-2 mb-3">
//             <p className="text-sm md:text-base">Made with</p>
//             <AiFillHeart className="text-red-600 text-xl" />
//             <p
//               className="text-sm md:text-base cursor-pointer hover:underline"
//               onClick={() => navigate('/techtitanium-team')}
//             >
//               by Platinum Team
//             </p>
//           </div>

//           {/* Social Media Links */}
//           <div className="flex items-center space-x-4 mb-3">
//             <a
//               href="https://www.instagram.com/learnspace_iiita/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-pink-600"
//             >
//               <FaInstagram className="text-xl md:text-2xl" />
//             </a>
//             <a
//               href="https://chat.whatsapp.com/FF3dyV555QwLDY01jvV9qE"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-green-500"
//             >
//               <FaWhatsapp className="text-xl md:text-2xl" />
//             </a>
//             <a
//               href="https://www.facebook.com/campusbazarsupportteam"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white hover:text-blue-600"
//             >
//               <FaFacebook className="text-xl md:text-2xl" />
//             </a>
//           </div>

//           {/* Copyright Info */}
//           <div className="flex items-center text-white space-x-1">
//             <FaCopyright className="text-white text-xs" />
//             <p className="text-xs">2024 Platinum. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutPage;





// src/pages/AboutPage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai';
import { FaCopyright, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const AboutPage = () => {
  const navigate = useNavigate();
  const [adminCount, setAdminCount] = useState(0);

  useEffect(() => {
    fetch('/api/admins/contributors')
      .then(res => res.json())
      .then(data => setAdminCount(data.count))
      .catch(err => console.error('Error fetching contributors:', err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-black">
      {/* Main content - fully responsive */}
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text"
              >
                About LearnSpace-IIITA
              </motion.h1>

              <motion.div
                className="text-white space-y-3 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <p className="font-medium text-emerald-300">
                  Your All-in-One Academic Hub for IIIT Allahabad
                </p>

                <p>
                  Starting your engineering journey can be overwhelming.{' '}
                  <span className="text-yellow-300">LearnSpace-IIITA</span> transforms confusion into confidence by providing perfectly organized academic resources for all 8 semesters.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-green-500">
                    <h3 className="font-bold text-emerald-400">For Freshers</h3>
                    <p className="text-sm">Eliminates the "where to start?" dilemma</p>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-blue-500">
                    <h3 className="font-bold text-blue-400">Organized Papers</h3>
                    <p className="text-sm">10+ years of question papers systematically categorized</p>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-purple-500">
                    <h3 className="font-bold text-purple-400">Complete Resources</h3>
                    <p className="text-sm">Video lectures, notes, and papers in one place</p>
                  </div>

                  <div className="bg-gray-900 p-3 rounded-lg border-l-2 border-amber-500">
                    <h3 className="font-bold text-amber-400">Student-Powered</h3>
                    <p className="text-sm">Contribute as admin to expand resources</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-emerald-700">
                  <p className="text-center font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                    "One Platform. All Resources. Zero Confusion."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="relative w-full max-w-md">
                {/* Semester cards visualization */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {[1,2,3,4,5,6,7,8].map(sem => (
                    <motion.div
                      key={sem}
                      className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border border-emerald-500"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <span className="text-white font-bold">Sem {sem}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Resource icons */}
                <div className="flex justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-emerald-400 text-xl">📹</span>
                    </div>
                    <p className="text-white text-sm">Video Lectures</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-400 text-xl">📝</span>
                    </div>
                    <p className="text-white text-sm">Lecture Notes</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-amber-400 text-xl">📚</span>
                    </div>
                    <p className="text-white text-sm">Previous Papers</p>
                  </div>
                </div>

                {/* Platform stats */}
                <div className="bg-gray-900 rounded-xl p-4 border border-purple-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-400">8</div>
                      <div className="text-xs text-gray-300">Semesters</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">3</div>
                      <div className="text-xs text-gray-300">Resource Types</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{adminCount}+</div>
                      <div className="text-xs text-gray-300">Contributors</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Full-Width Footer */}
      <footer className="w-full bg-gray-900 py-4">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center text-white space-x-2 mb-3">
            <p className="text-sm md:text-base">Made with</p>
            <AiFillHeart className="text-red-600 text-xl" />
            <p
              className="text-sm md:text-base cursor-pointer hover:underline"
              onClick={() => navigate('/techtitanium-team')}
            >
              by Platinum Team
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4 mb-3">
            <a href="https://www.instagram.com/learnspace_iiita/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
              <FaInstagram className="text-xl md:text-2xl" />
            </a>
            <a href="https://chat.whatsapp.com/FF3dyV555QwLDY01jvV9qE" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
              <FaWhatsapp className="text-xl md:text-2xl" />
            </a>
            <a href="https://www.facebook.com/campusbazarsupportteam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
              <FaFacebook className="text-xl md:text-2xl" />
            </a>
          </div>

          {/* Copyright Info */}
          <div className="flex items-center text-white space-x-1">
            <FaCopyright className="text-white text-xs" />
            <p className="text-xs">2024 Platinum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;

