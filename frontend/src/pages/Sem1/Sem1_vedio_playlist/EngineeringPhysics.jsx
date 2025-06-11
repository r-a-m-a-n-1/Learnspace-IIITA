




// 









// 





// import React, { useState, useRef, useEffect } from "react";

// const EP = () => {
//   const classicalRef = useRef(null);
//   const quantumRef = useRef(null);
//   const semiconductorRef = useRef(null);
//   const problemsRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

  

  // const allVideoIDs = [
  //   "tDmK1b63fEI", // Video 1
  //   "zD_wSKYsVyo", // Video 2
  //   "CbTx-koXQm4", // Video 3
  //   "Akd9RQ2r418", // Video 4
  //   "5dj0aHCDYH4", // Video 5
  //   "QyolW3lgKzE", // Video 6
  //   "75yYLgmlWVY", // Video 7
  //   "jK9AANP6fqg", // Video 8
  //   "Y-zwzHrXatg", // Video 9
  //   "1fJ2JK4Mk1Q", // Video 10
  //   "McSOCQ-PN2g", // Video 11
  //   "X8YHtd4m3Pg", // Video 12
  //   "0otipQeRsBk", // Video 13
  //   "9PIXZKb-8HI", // Video 14
  //   "HRFkQoKojh0",
  //   "gyxF9k28U5o",
  //   "5KNCNICTbnc",
  //   "u0Ub7CB7qoQ",
  //   "-i2TfdEY778",
  //   "idJpaFL6f2c",
  //   "W3rckVGLtmM",
  //   "tTnU0PXb63U",
  //   "_WjmaKZS5g8",
  //   "B5j0Wut5baI",
  //   "oOP4V4lFA4c",
  //   "oXEkuvvag-M",
  //   "nhmibNQhuBA",
  //   "hqQc4jLWSwc",
  //   "Pq_-K97YSB4",
  //   "2Sd_kL-UpZA",
  //   "X_6F7DSuhX4",
  //   "t_wZKgAbvgU",
  //   "GJ2EizUaXGM",
  //   "oZR6f1DSXIQ",
  //   "2h6m22WETVc",
  //   "ffs1Rt4Jv94",
  //   "qb9t2USH224",
  //   "j9wJdnzec9c",
  //   "_caPcRgbfKQ",
  //   "xEYnHVr_3-8",
  //   "mFXOFxjxviw",
  //   "X6Q_G2NbfxM",
  //   "cP7pnFpeb6o",
  //   "K7_scUL44-Q",
  //   "e2U31L1NG6M",
  //   "qR-BGtSKCB8",
  //   "jKLhMqyNT5w",
  //   "Vg1kA2LUTgs",
  //   "EsSHKYxBcGM",
  //   "2X4atLR_cDM",
  //   "rTiodSMfziU",
  //   "J7CYl5OqXrE",
  //   "85vWtM-mEK0",
  //   "Qw_AXO405IA",
  //   "tUK9dmvhUrI",
  //   "4VW7k-icesU",
  //   "Cz7xfeHvsYo",
  //   "XeUk4-IGrKg",
  //   "psy6Fa3N5I4",
  //   "XsK5uCo1aF8",
  //   "oHYpr8e8-f4",
  //   "v67akzjaxd0",
  //   "37hEk--fLbA",
  //   "nCnr-JW7n2o",
  //   "JFw501JGtfQ",
  //   "R7YDy4dWXsE",
  //   "RGIOnSbYnXg",
  //   "-jCUpMddz9c",
  //   "YvetoQeQfsI",
  //   "1RH7BBz_Dng",
  //   "2IphwkOm1z0",
  //   "NgDG2jaJk78",
  //   "mbXLoowy1NM",
  //   "GiiVOo_hoMA",
  //   "XX0iYRgaRGQ",
  //   "q9LY8X0cRtI",
  //   "9RuUlL1xwvk",
  //   "wNBpQqhiarE",
  //   "INHgMVae1B4",
  //   "FCRb9AqwPsM",
  //   "9yXGh1Qlh_8",
  //   "V0k_duq8afw",
  //   "Afk5KYija_I",
  //   "5pvs4cDlc70",
  //   "fnMuCvDNUis",
  //   "tAAoPC8LfzQ",
  //   "4jXPs3bfzmw",
  //   "fxXaCnECWNY",
  //   "hwv0LkDoE1I",
  //   "HPTmR3EACX8",
  //   "ZZM6j0IQVGg",
  //   "wtsdyKmAjpY",
  //   "aLqQ3J9LV2c",
  //   "3Jq6oic2sUA",
  //   "FL1KanX-Mcc",
  //   "CXFtbpYaBXw",
  //   "6ShYjai83bA",
  //   "67QXoPW0eE0",
  //   "5iEsqeMOZAc",
  //   "Z-mdnY2ObRg",
  //   "85KspLpuoXU",
  //   "TmjESFwvgO0",
  //   "yhFotq06XtE",
  //   "qMmx9SpcZa4",
  //   "qpcMfTCbwtM",
  //   "QfiZdxHbCiM",
  //   "ehWi1U69uZ4",
  //   "URq7dDOQOkM",
  //   "kPCbRDH5lXw",
  //   "df2cY2VkmgQ",
  //   "BfZpHPTLSRc",
  //   "caX3lsm6Pxk",
  //   "mi1mOFuPZAg",
  //   "QtEvdxQvdi4",
  //   "wrvjhI2a_Qg",
  // ];

  // const allDescriptions = [
  //   "Review of Newtonian Mechanics / PROBLEM SOLVING",
  //   "Charged particle in  E & B (Electric and Magnetic Field",
  //   "Charged particle in CROSSED E an B",
  //   "Generalised Coordinates & Velocities, Holonomic Constraints",
  //   "Hamilton's Principle | Euler Lagrange Equation (DERIVATION)",
  //   "Lagrangian Approach | Problem Solving",
  //   "DOUBLE PENDULUM (Formulation of Lagrangian)",
  //   "DOUBLE PENDULUM (.. Continued) (Small Angle) + Spring Pendulum",
  //   "Hamilton's Equations | Canonical Momentum",
  //   "Hamilton's Equations of Motion | Hamiltonian | PROBLEM SOLVING",
  //   "Cyclic Coordinates | Hamiltonian an Lagrangian | Problem Solving",
  //   "Central Forces, 2 body problem, Effective potential & Classification of Orbits",
  //   "Differential Equation for Orbits | Planetary motion",
  //   "Coupled Oscillator and Normal Modes of Oscillations",
  //   "Introduction Of Quantum Mechanics ( lecture - 01) Introduction of quantum mechanics for B.sc. studen",
  //   "Introduction of quantum mechanics(part 2) (lecture 2), Introduction to quantum mechanics for b.sc.",
  //   "Quantum mechanics(lecture-3), Wines displacement law and wines and Rayleigh law by plank's law",
  //   "Quantum mechanics(lecture-4), Photon, characteristics of photon and Q & A, for B.sc. students",
  //   "Quantum mechanics(lecture-5), Photo electric effect , what is photo electric effect for B.sc.",
  //   "Quantum mechanics(lecture-6), Why classical theory fail to explain photo electric effects? for B.sc.",
  //   "Quantum mechanics(lecture-7),Einstein Theory Of photo electric effect. Photo electric equation(B.sc)",
  //   "Quantum mechanics(lecture-8), Q & A on photo electric effects, most imp questions for #IITJAM",
  //   "Quantum mechanics(lecture-9),Compton Effect, Explanation of Compton effect, imp for B.sc. students",
  //   "Quantum mechanics(lecture-10),Angle Of Recoil and kinetic energy of electron in Compton effect",
  //   "Quantum mechanics(lecture-11) Important question on Compton effect and photo electric effect",
  //   "Quantum mechanic(lecture-12), Dual Nature Of Light | Photon in single slit | for B.sc. students",
  //   "Quantum mechanics(lecture-13). de Broglies matter wave de broglie hypothesis #iit#iitjam b.sc.",
  //   "Quantum mechanic(lecture-14), Q & A On de Broglies wave . matter wave. #iitjam #bhu B.sc.",
  //   "Quantum mechanics(lecture-15), Davisson and Germer experiment. #iit #iitjam B.sc. students",
  //   "Quantum mechanics(lecture-16), Matter wave for macroscopic particles",
  //   "Quantum mechanics(lecture-17), Particle versus wave in classical and Quantum mechanics",
  //   "Quantum mechanics(lecture-17) Particle versus wave part - 02, wave and particle in quantum mechanics",
  //   "Quantum mechanics(lecture-18) Heisenberg's Uncertainty Principle for b.sc. students #iit #iitjam",
  //   "Quantum mechanics(lecture-19)(Part- 01) Consequences OR Application of uncertainty principle.",
  //   "Quantum mechanics(lecture-19) (Part-2) Application of uncertainty principle. for #iitjam b.sc.",
  //   "Quantum mechanics(lecture- 19) (part-1) Q and A on uncertainty principle imp #iitjam B.sc.",
  //   "Quantum mechanics(lecture-20)(part-2), Q & A on Uncertainty principle for #iitjam B.sc.",
  //   "Quantum mechanics(lecture-21), Born Interpretation, probability density probability of finding",
  //   "Quantum mechanics(lecture-22)(part-1) Wave packet in quantum mechanics || imp for b.sc. #IITJAM",
  //   "Quantum mechanics(lecture-22)(part-2), Wave packet and Group velocity. Localized wave function.",
  //   "Quantum mechanics(lecture-23) Group velocity(Derivation), velocity of wave packet, for b.sc. student",
  //   "Quantum mechanics(lecture-24), Relation between group velocity and phase velocity. derivation.",
  //   "Quantum mechanics(lecture-24) Group velocity and phase velocity of relativistic particle #IITJAM",
  //   "Quantum mechanics(lecture-26) Wave packet and uncertainty principle Explained with example.",
  //   "Quantum mechanics(lecture-27), Wave function in momentum space and questions for #IITJAM &B.sc.",
  //   "Quantum mechanics (lecture-28) Schrodinger Equation, condition for Schrodinger equation for b.sc.",
  //   "Quantum mechanics(lecture-29), Time dependent Schrodinger equation. for B.sc. students",
  //   "Quantum mechanics (lecture-30)  Probability density , Normalization condition & square integral",
  //   "Quantum mechanics(lecture-31) Equation Of Continuity. Conservation of probability for B.Sc.",
  //   "Quantum mechanics(lecture-32), Operators in Quantum mechanics quantum mechanical operators for b.sc.",
  //   "Quantum mechanics(lecture-33) Hermiticity of an operators prove that Hamiltonian is hermitian",
  //   "Quantum mechanics(Lecture-34), Show that d/dx is Hermitian operator. Finding of hermitian adjoint ||",
  //   "Quantum mechanics(lecture-35) Expectation value in quantum mechanics, expatiation value of variable",
  //   "Quantum mechanics(lecture-36) Ehrenfest's theorem Theorem and it's proof for B.sc. students.",
  //   "Quantum mechanics(lecture-37) Ehrenfest's theorem with proof. proof Ehrenfest theorem for b.sc.",
  //   "Quantum mechanics(lecture-38) Schrodinger time independent equation , time independent equation",
  //   "Quantum mechanics(lect-39) Eigen value and eigen function,eigen value of hermitian operator are real",
  //   "Quantum mechanics(lect-40)Orthogonality condition of eigen function. prove that orthogonality cond.",
  //   "Quantum mechanics(lect-41) parity in quantum mechanics. concept of parity in quantum mechanics",
  //   "Quantum mechanics(lecture-42) Condition for acceptable wave function for b.sc student.",
  //   "Quantum mechanics(lect-42) part-2 Why wave function vanish at infinite potential For b.sc. student",
  //   "Quantum mechanics(lecture-43) Solving Schrodinger equation for free particle",
  //   "Quantum mechanics(lecture-44) infinite potential well introduction symmetric and asymmetric",
  //   "Quantum mechanics(lecture-44) part - 2,infinite potential well introduction symmetric and asymmetric",
  //   "Quantum mechanics(lect-45),Connection with de Broglie hypothesis of eigen function of 1D potential",
  //   "Quantum mechanics(lect-45) Zero point energy and parity of eigen function",
  //   "quantum mechanics(lecture-46) Asymmetric potential well eigen function and energy eigen value",
  //   "Quantum mechanics(lecture-47) Question and answer, Important numerical discussion for B.sc.",
  //   "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
  //   "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
  //   "Quantum mechanics(lecture-48) 3D rectangular potential well, Particle in 3D box",
  //   "Quantum mechanics(lecture-49) Degeneracy of energy eigen value in 3D well for B.sc.",
  //   "Quantum mechanics(lecture-50) important question on quantum mechanics for b.sc. student and #iitjam",
  //   "Quantum mechanics(lecture-50 part-2) important question on quantum mechanics for b.sc.",
  //   "Quantum mechanics(lecture-51) Finite square well potential wave function and energy eigen value",
  //   "Quantum mechanics(lecture-52) Energy Eigen value of finite square well Potential, for b.sc. students",
  //   "Quantum mechanics(lecture-53) Question answer of finite square well Potential, for b.sc. students",
  //   "Quantum mechanics(lecture-54) Finite and infinite potential in one question, how to find solution?",
  //   "Quantum mechanics(lecture-55) Potential barrier, particle incident on potential barrier",
  //   "Quantum mechanics(lecture-56) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-57) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-58) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-59) Step potential, Schematics of eigen function imp for GATE",
  //   "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
  //   "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
  //   "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || #IIT #GATE",
  //   "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || (Part 02)",
  //   "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
  //   "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
  //   "Quantum mechanics(lecture-63) QUANTUM TUNNELING || VARIABLE POTENTIAL || TRANSMISSION COEFFICIENT",
  //   "Quantum mechanics(lecture-64) GATE 2022 || CSIR NET PHYSICAL SCIENCE || PREVIOUS YEAR  #GATE #CSIR",
  //   "Quantum mechanics(lecture-65) SQUARE POTENTIAL WELL || SQUARE POTENTIAL WELL",
  //   "Quantum mechanics(lecture-66) DIRAC DELTA FUNCTION || PROPERTIES OF DIRAC DELTA FUNCTION",
  //   "Quantum mechanics(lecture-67) DIRAC DELTA POTENTIAL || CSIR NET AND GATE IMPORTANT QUESTION",
  //   "Quantum mechanics(lecture-68) DIRAC DELTA POTENTIAL (part02) || CSIR NET AND GATE IMPORTANT QUESTION",
  //   "Semiconductor Physics Session 1 (Formation of Energy bands)",
  //   "Semiconductor Physics Session 2 (Fermi Level and Fermi Function)",
  //   "Semiconductor Physics Session 3 (Conductivity, current density and mobility)",
  //   "Semiconductor Physics Session 4 (Hall Effect)",
  //   "Semiconductor Physics Session 5 (p-n junction diode)",
  //   "Semiconductor Physics Session 6 (Zener diode, LED, Solar Cell)",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 10 Motion of a particle on cone",
  //   "Practice Problems: Lagrangian Mechanics-# Problem 9",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 8 - A mass on inclined plane",
  //   "Practice Problems: Lagrangian Mechanics # Problem 7 - Rotating dumbell",
  //   "Practice Problems: Lagrangian Mechanics # Problem 6",
  //   "Practice Problems: Lagrangian Mechanics-# Problem 5",
  //   "Practice Problems: Lagrangian Mechanics # Problem 4",
  //   "Practice Problems: Lagrangian Mechanics # problem 3 Atwood machine",
  //   "Practice Problems: Lagrangian Mechanics # problem 2",
  //   "Practice Problems: Lagrangian Mechanics - # Problem1",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 11 -  Newton's equation of motion using Lagrange's equations.",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 12 - Atwood machine having pulley of moment of inertia I.",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 13 - Compound Pendulum and it's time period.",
  //   "Practice Problems: Lagrangian Mechanics -# Problem 14 - LC Oscillations, it's Lagrange's equation and it's time period.",

  //   "",

  //   "",
  // ];
  

//  const categorizeVideos = () => {
//     const classical = [],
//       quantum = [],
//       semiconductor = [],
//       problems = [];
    
//     allVideoIDs.forEach((id, index) => {
//       const videoObj = {
//         id: index + 1,
//         videoId: id,
//         title: `Video ${index + 1}`,
//         description: allDescriptions[index] || "No description",
//         thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
//         videoUrl: `https://www.youtube.com/embed/${id}`,
//       };

//       if (index < 14) classical.push(videoObj);
//       else if (index < 95) quantum.push(videoObj);
//       else if (index < 101) semiconductor.push(videoObj);
//       else problems.push(videoObj);
//     });

//     return { classical, quantum, semiconductor, problems };
//   };

//   const { classical, quantum, semiconductor, problems } = categorizeVideos();
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16">
//       {/* Fixed Navigation */}
//       <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 px-4 py-3 shadow-lg border-b border-gray-700">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//           <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg text-center">
//             Engineering Physics
//           </h1>
          
//           <div className="flex flex-wrap justify-center gap-2">
//             <NavButton
//               label="Classical"
//               count={classical.length}
//               color="yellow"
//               onClick={() => scrollToSection(classicalRef)}
//             />
//             <NavButton
//               label="Quantum"
//               count={quantum.length}
//               color="blue"
//               onClick={() => scrollToSection(quantumRef)}
//             />
//             <NavButton
//               label="Semiconductor"
//               count={semiconductor.length}
//               color="green"
//               onClick={() => scrollToSection(semiconductorRef)}
//             />
//             <NavButton
//               label="Problems"
//               count={problems.length}
//               color="purple"
//               onClick={() => scrollToSection(problemsRef)}
//             />
//           </div>
//         </div>
//       </nav>

//       {/* Sections */}
//       <VideoSection
//         refObj={classicalRef}
//         title="Classical Mechanics"
//         color="yellow"
//         videos={classical}
//         onCardClick={setSelectedVideo}
//         isMobile={isMobile}
//       />
//       <VideoSection
//         refObj={quantumRef}
//         title="Quantum Mechanics"
//         color="blue"
//         videos={quantum}
//         onCardClick={setSelectedVideo}
//         isMobile={isMobile}
//       />
//       <VideoSection
//         refObj={semiconductorRef}
//         title="Semiconductors"
//         color="green"
//         videos={semiconductor}
//         onCardClick={setSelectedVideo}
//         isMobile={isMobile}
//       />
//       <VideoSection
//         refObj={problemsRef}
//         title="Practice Problems"
//         color="purple"
//         videos={problems}
//         onCardClick={setSelectedVideo}
//         isMobile={isMobile}
//       />

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
//           <div className="bg-gray-900 p-4 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-white">
//                 Video {selectedVideo.id}
//               </h2>
//               <button
//                 onClick={() => setSelectedVideo(null)}
//                 className="text-white hover:text-red-500 text-lg"
//               >
//                 ✖
//               </button>
//             </div>
            
//             <div className="aspect-video w-full rounded-lg overflow-hidden">
//               <iframe
//                 className="w-full h-full"
//                 src={selectedVideo.videoUrl}
//                 title={selectedVideo.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
            
//             <div className="mt-4">
//               <h3 className="font-semibold text-lg text-white mb-2">
//                 {selectedVideo.title}
//               </h3>
//               <p className="text-gray-300 text-sm md:text-base">
//                 {selectedVideo.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Video Section Component
// const VideoSection = React.forwardRef(({ title, color, videos, onCardClick, isMobile }, ref) => {
//   return (
//     <section ref={ref} className="py-8 px-4 scroll-mt-24">
//       <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-${color}-400 border-b border-${color}-700 pb-2`}>
//         {title}
//       </h2>
      
//       <div className={`grid ${isMobile ? "grid-cols-1 gap-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"}`}>
//         {videos.map((video) => (
//           <VideoCard
//             key={video.id}
//             video={video}
//             onClick={() => onCardClick(video)}
//             isMobile={isMobile}
//           />
//         ))}
//       </div>
//     </section>
//   );
// });

// // Video Card Component
// const VideoCard = ({ video, onClick, isMobile }) => {
//   if (isMobile) {
//     // Mobile layout: YouTube-like horizontal card
//     return (
//       <div
//         onClick={onClick}
//         className="bg-gray-800/70 hover:bg-gray-700/80 p-3 rounded-xl transition-all duration-300 cursor-pointer flex items-start gap-3 border border-gray-700"
//       >
//         <div className="relative flex-shrink-0">
//           <img
//             src={video.thumbnail}
//             alt={video.title}
//             className="w-32 h-20 object-cover rounded-lg border border-white/20"
//           />
//           <div className="absolute bottom-1 right-1 bg-black/70 text-xs px-1 rounded">
//             10:00
//           </div>
//         </div>
        
//         <div className="flex-1 min-w-0">
//           <h3 className="font-medium text-white line-clamp-2 text-sm">
//             {video.description.split(" ").slice(0, 8).join(" ")}
//           </h3>
//           <p className="text-gray-400 text-xs mt-1">
//             Video {video.id}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // Desktop layout
//   return (
//     <div
//       onClick={onClick}
//       className="bg-gray-800/50 hover:bg-gray-700/60 p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-700 backdrop-blur-sm"
//     >
//       <div className="relative">
//         <img
//           src={video.thumbnail}
//           alt={video.title}
//           className="w-full h-36 object-cover mb-3 rounded-lg border border-white/20"
//         />
//         <div className="absolute bottom-2 right-2 bg-black/80 text-xs px-1.5 py-0.5 rounded">
//           10:00
//         </div>
//       </div>
//       <h3 className="font-semibold text-white mb-1 line-clamp-2 text-sm">
//         {video.description.split(" ").slice(0, 12).join(" ")}
//       </h3>
//       <p className="text-gray-400 text-xs">
//         Video {video.id}
//       </p>
//     </div>
//   );
// };

// // Navigation Button
// const NavButton = ({ label, count, color, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`bg-${color}-900/40 hover:bg-${color}-800/60 text-${color}-300 hover:text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 border border-${color}-700/50`}
//     >
//       <span>{label}</span>
//       <span className="bg-${color}-800 text-${color}-200 text-xs rounded-full w-6 h-6 flex items-center justify-center">
//         {count}
//       </span>
//     </button>
//   );
// };

// export default EP;





// 



// import React, { useState, useRef, useEffect } from "react";

// const EP = () => {
//   const classicalRef = useRef(null);
//   const quantumRef = useRef(null);
//   const semiconductorRef = useRef(null);
//   const problemsRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

  

  // const allVideoIDs = [
  //   "tDmK1b63fEI", // Video 1
  //   "zD_wSKYsVyo", // Video 2
  //   "CbTx-koXQm4", // Video 3
  //   "Akd9RQ2r418", // Video 4
  //   "5dj0aHCDYH4", // Video 5
  //   "QyolW3lgKzE", // Video 6
  //   "75yYLgmlWVY", // Video 7
  //   "jK9AANP6fqg", // Video 8
  //   "Y-zwzHrXatg", // Video 9
  //   "1fJ2JK4Mk1Q", // Video 10
  //   "McSOCQ-PN2g", // Video 11
  //   "X8YHtd4m3Pg", // Video 12
  //   "0otipQeRsBk", // Video 13
  //   "9PIXZKb-8HI", // Video 14
  //   "HRFkQoKojh0",
  //   "gyxF9k28U5o",
  //   "5KNCNICTbnc",
  //   "u0Ub7CB7qoQ",
  //   "-i2TfdEY778",
  //   "idJpaFL6f2c",
  //   "W3rckVGLtmM",
  //   "tTnU0PXb63U",
  //   "_WjmaKZS5g8",
  //   "B5j0Wut5baI",
  //   "oOP4V4lFA4c",
  //   "oXEkuvvag-M",
  //   "nhmibNQhuBA",
  //   "hqQc4jLWSwc",
  //   "Pq_-K97YSB4",
  //   "2Sd_kL-UpZA",
  //   "X_6F7DSuhX4",
  //   "t_wZKgAbvgU",
  //   "GJ2EizUaXGM",
  //   "oZR6f1DSXIQ",
  //   "2h6m22WETVc",
  //   "ffs1Rt4Jv94",
  //   "qb9t2USH224",
  //   "j9wJdnzec9c",
  //   "_caPcRgbfKQ",
  //   "xEYnHVr_3-8",
  //   "mFXOFxjxviw",
  //   "X6Q_G2NbfxM",
  //   "cP7pnFpeb6o",
  //   "K7_scUL44-Q",
  //   "e2U31L1NG6M",
  //   "qR-BGtSKCB8",
  //   "jKLhMqyNT5w",
  //   "Vg1kA2LUTgs",
  //   "EsSHKYxBcGM",
  //   "2X4atLR_cDM",
  //   "rTiodSMfziU",
  //   "J7CYl5OqXrE",
  //   "85vWtM-mEK0",
  //   "Qw_AXO405IA",
  //   "tUK9dmvhUrI",
  //   "4VW7k-icesU",
  //   "Cz7xfeHvsYo",
  //   "XeUk4-IGrKg",
  //   "psy6Fa3N5I4",
  //   "XsK5uCo1aF8",
  //   "oHYpr8e8-f4",
  //   "v67akzjaxd0",
  //   "37hEk--fLbA",
  //   "nCnr-JW7n2o",
  //   "JFw501JGtfQ",
  //   "R7YDy4dWXsE",
  //   "RGIOnSbYnXg",
  //   "-jCUpMddz9c",
  //   "YvetoQeQfsI",
  //   "1RH7BBz_Dng",
  //   "2IphwkOm1z0",
  //   "NgDG2jaJk78",
  //   "mbXLoowy1NM",
  //   "GiiVOo_hoMA",
  //   "XX0iYRgaRGQ",
  //   "q9LY8X0cRtI",
  //   "9RuUlL1xwvk",
  //   "wNBpQqhiarE",
  //   "INHgMVae1B4",
  //   "FCRb9AqwPsM",
  //   "9yXGh1Qlh_8",
  //   "V0k_duq8afw",
  //   "Afk5KYija_I",
  //   "5pvs4cDlc70",
  //   "fnMuCvDNUis",
  //   "tAAoPC8LfzQ",
  //   "4jXPs3bfzmw",
  //   "fxXaCnECWNY",
  //   "hwv0LkDoE1I",
  //   "HPTmR3EACX8",
  //   "ZZM6j0IQVGg",
  //   "wtsdyKmAjpY",
  //   "aLqQ3J9LV2c",
  //   "3Jq6oic2sUA",
  //   "FL1KanX-Mcc",
  //   "CXFtbpYaBXw",
  //   "6ShYjai83bA",
  //   "67QXoPW0eE0",
  //   "5iEsqeMOZAc",
  //   "Z-mdnY2ObRg",
  //   "85KspLpuoXU",
  //   "TmjESFwvgO0",
  //   "yhFotq06XtE",
  //   "qMmx9SpcZa4",
  //   "qpcMfTCbwtM",
  //   "QfiZdxHbCiM",
  //   "ehWi1U69uZ4",
  //   "URq7dDOQOkM",
  //   "kPCbRDH5lXw",
  //   "df2cY2VkmgQ",
  //   "BfZpHPTLSRc",
  //   "caX3lsm6Pxk",
  //   "mi1mOFuPZAg",
  //   "QtEvdxQvdi4",
  //   "wrvjhI2a_Qg",
  // ];

  // const allDescriptions = [
  //   "Review of Newtonian Mechanics / PROBLEM SOLVING",
  //   "Charged particle in  E & B (Electric and Magnetic Field",
  //   "Charged particle in CROSSED E an B",
  //   "Generalised Coordinates & Velocities, Holonomic Constraints",
  //   "Hamilton's Principle | Euler Lagrange Equation (DERIVATION)",
  //   "Lagrangian Approach | Problem Solving",
  //   "DOUBLE PENDULUM (Formulation of Lagrangian)",
  //   "DOUBLE PENDULUM (.. Continued) (Small Angle) + Spring Pendulum",
  //   "Hamilton's Equations | Canonical Momentum",
  //   "Hamilton's Equations of Motion | Hamiltonian | PROBLEM SOLVING",
  //   "Cyclic Coordinates | Hamiltonian an Lagrangian | Problem Solving",
  //   "Central Forces, 2 body problem, Effective potential & Classification of Orbits",
  //   "Differential Equation for Orbits | Planetary motion",
  //   "Coupled Oscillator and Normal Modes of Oscillations",
  //   "Introduction Of Quantum Mechanics ( lecture - 01) Introduction of quantum mechanics for B.sc. studen",
  //   "Introduction of quantum mechanics(part 2) (lecture 2), Introduction to quantum mechanics for b.sc.",
  //   "Quantum mechanics(lecture-3), Wines displacement law and wines and Rayleigh law by plank's law",
  //   "Quantum mechanics(lecture-4), Photon, characteristics of photon and Q & A, for B.sc. students",
  //   "Quantum mechanics(lecture-5), Photo electric effect , what is photo electric effect for B.sc.",
  //   "Quantum mechanics(lecture-6), Why classical theory fail to explain photo electric effects? for B.sc.",
  //   "Quantum mechanics(lecture-7),Einstein Theory Of photo electric effect. Photo electric equation(B.sc)",
  //   "Quantum mechanics(lecture-8), Q & A on photo electric effects, most imp questions for #IITJAM",
  //   "Quantum mechanics(lecture-9),Compton Effect, Explanation of Compton effect, imp for B.sc. students",
  //   "Quantum mechanics(lecture-10),Angle Of Recoil and kinetic energy of electron in Compton effect",
  //   "Quantum mechanics(lecture-11) Important question on Compton effect and photo electric effect",
  //   "Quantum mechanic(lecture-12), Dual Nature Of Light | Photon in single slit | for B.sc. students",
  //   "Quantum mechanics(lecture-13). de Broglies matter wave de broglie hypothesis #iit#iitjam b.sc.",
  //   "Quantum mechanic(lecture-14), Q & A On de Broglies wave . matter wave. #iitjam #bhu B.sc.",
  //   "Quantum mechanics(lecture-15), Davisson and Germer experiment. #iit #iitjam B.sc. students",
  //   "Quantum mechanics(lecture-16), Matter wave for macroscopic particles",
  //   "Quantum mechanics(lecture-17), Particle versus wave in classical and Quantum mechanics",
  //   "Quantum mechanics(lecture-17) Particle versus wave part - 02, wave and particle in quantum mechanics",
  //   "Quantum mechanics(lecture-18) Heisenberg's Uncertainty Principle for b.sc. students #iit #iitjam",
  //   "Quantum mechanics(lecture-19)(Part- 01) Consequences OR Application of uncertainty principle.",
  //   "Quantum mechanics(lecture-19) (Part-2) Application of uncertainty principle. for #iitjam b.sc.",
  //   "Quantum mechanics(lecture- 19) (part-1) Q and A on uncertainty principle imp #iitjam B.sc.",
  //   "Quantum mechanics(lecture-20)(part-2), Q & A on Uncertainty principle for #iitjam B.sc.",
  //   "Quantum mechanics(lecture-21), Born Interpretation, probability density probability of finding",
  //   "Quantum mechanics(lecture-22)(part-1) Wave packet in quantum mechanics || imp for b.sc. #IITJAM",
  //   "Quantum mechanics(lecture-22)(part-2), Wave packet and Group velocity. Localized wave function.",
  //   "Quantum mechanics(lecture-23) Group velocity(Derivation), velocity of wave packet, for b.sc. student",
  //   "Quantum mechanics(lecture-24), Relation between group velocity and phase velocity. derivation.",
  //   "Quantum mechanics(lecture-24) Group velocity and phase velocity of relativistic particle #IITJAM",
  //   "Quantum mechanics(lecture-26) Wave packet and uncertainty principle Explained with example.",
  //   "Quantum mechanics(lecture-27), Wave function in momentum space and questions for #IITJAM &B.sc.",
  //   "Quantum mechanics (lecture-28) Schrodinger Equation, condition for Schrodinger equation for b.sc.",
  //   "Quantum mechanics(lecture-29), Time dependent Schrodinger equation. for B.sc. students",
  //   "Quantum mechanics (lecture-30)  Probability density , Normalization condition & square integral",
  //   "Quantum mechanics(lecture-31) Equation Of Continuity. Conservation of probability for B.Sc.",
  //   "Quantum mechanics(lecture-32), Operators in Quantum mechanics quantum mechanical operators for b.sc.",
  //   "Quantum mechanics(lecture-33) Hermiticity of an operators prove that Hamiltonian is hermitian",
  //   "Quantum mechanics(Lecture-34), Show that d/dx is Hermitian operator. Finding of hermitian adjoint ||",
  //   "Quantum mechanics(lecture-35) Expectation value in quantum mechanics, expatiation value of variable",
  //   "Quantum mechanics(lecture-36) Ehrenfest's theorem Theorem and it's proof for B.sc. students.",
  //   "Quantum mechanics(lecture-37) Ehrenfest's theorem with proof. proof Ehrenfest theorem for b.sc.",
  //   "Quantum mechanics(lecture-38) Schrodinger time independent equation , time independent equation",
  //   "Quantum mechanics(lect-39) Eigen value and eigen function,eigen value of hermitian operator are real",
  //   "Quantum mechanics(lect-40)Orthogonality condition of eigen function. prove that orthogonality cond.",
  //   "Quantum mechanics(lect-41) parity in quantum mechanics. concept of parity in quantum mechanics",
  //   "Quantum mechanics(lecture-42) Condition for acceptable wave function for b.sc student.",
  //   "Quantum mechanics(lect-42) part-2 Why wave function vanish at infinite potential For b.sc. student",
  //   "Quantum mechanics(lecture-43) Solving Schrodinger equation for free particle",
  //   "Quantum mechanics(lecture-44) infinite potential well introduction symmetric and asymmetric",
  //   "Quantum mechanics(lecture-44) part - 2,infinite potential well introduction symmetric and asymmetric",
  //   "Quantum mechanics(lect-45),Connection with de Broglie hypothesis of eigen function of 1D potential",
  //   "Quantum mechanics(lect-45) Zero point energy and parity of eigen function",
  //   "quantum mechanics(lecture-46) Asymmetric potential well eigen function and energy eigen value",
  //   "Quantum mechanics(lecture-47) Question and answer, Important numerical discussion for B.sc.",
  //   "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
  //   "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
  //   "Quantum mechanics(lecture-48) 3D rectangular potential well, Particle in 3D box",
  //   "Quantum mechanics(lecture-49) Degeneracy of energy eigen value in 3D well for B.sc.",
  //   "Quantum mechanics(lecture-50) important question on quantum mechanics for b.sc. student and #iitjam",
  //   "Quantum mechanics(lecture-50 part-2) important question on quantum mechanics for b.sc.",
  //   "Quantum mechanics(lecture-51) Finite square well potential wave function and energy eigen value",
  //   "Quantum mechanics(lecture-52) Energy Eigen value of finite square well Potential, for b.sc. students",
  //   "Quantum mechanics(lecture-53) Question answer of finite square well Potential, for b.sc. students",
  //   "Quantum mechanics(lecture-54) Finite and infinite potential in one question, how to find solution?",
  //   "Quantum mechanics(lecture-55) Potential barrier, particle incident on potential barrier",
  //   "Quantum mechanics(lecture-56) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-57) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-58) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-59) Step potential, Schematics of eigen function imp for GATE",
  //   "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
  //   "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
  //   "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || #IIT #GATE",
  //   "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || (Part 02)",
  //   "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
  //   "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
  //   "Quantum mechanics(lecture-63) QUANTUM TUNNELING || VARIABLE POTENTIAL || TRANSMISSION COEFFICIENT",
  //   "Quantum mechanics(lecture-64) GATE 2022 || CSIR NET PHYSICAL SCIENCE || PREVIOUS YEAR  #GATE #CSIR",
  //   "Quantum mechanics(lecture-65) SQUARE POTENTIAL WELL || SQUARE POTENTIAL WELL",
  //   "Quantum mechanics(lecture-66) DIRAC DELTA FUNCTION || PROPERTIES OF DIRAC DELTA FUNCTION",
  //   "Quantum mechanics(lecture-67) DIRAC DELTA POTENTIAL || CSIR NET AND GATE IMPORTANT QUESTION",
  //   "Quantum mechanics(lecture-68) DIRAC DELTA POTENTIAL (part02) || CSIR NET AND GATE IMPORTANT QUESTION",
  //   "Semiconductor Physics Session 1 (Formation of Energy bands)",
  //   "Semiconductor Physics Session 2 (Fermi Level and Fermi Function)",
  //   "Semiconductor Physics Session 3 (Conductivity, current density and mobility)",
  //   "Semiconductor Physics Session 4 (Hall Effect)",
  //   "Semiconductor Physics Session 5 (p-n junction diode)",
  //   "Semiconductor Physics Session 6 (Zener diode, LED, Solar Cell)",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 10 Motion of a particle on cone",
  //   "Practice Problems: Lagrangian Mechanics-# Problem 9",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 8 - A mass on inclined plane",
  //   "Practice Problems: Lagrangian Mechanics # Problem 7 - Rotating dumbell",
  //   "Practice Problems: Lagrangian Mechanics # Problem 6",
  //   "Practice Problems: Lagrangian Mechanics-# Problem 5",
  //   "Practice Problems: Lagrangian Mechanics # Problem 4",
  //   "Practice Problems: Lagrangian Mechanics # problem 3 Atwood machine",
  //   "Practice Problems: Lagrangian Mechanics # problem 2",
  //   "Practice Problems: Lagrangian Mechanics - # Problem1",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 11 -  Newton's equation of motion using Lagrange's equations.",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 12 - Atwood machine having pulley of moment of inertia I.",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 13 - Compound Pendulum and it's time period.",
  //   "Practice Problems: Lagrangian Mechanics -# Problem 14 - LC Oscillations, it's Lagrange's equation and it's time period.",

  //   "",

  //   "",
  // ];

//   const categorizeVideos = () => {
//     const classical = [],
//       quantum = [],
//       semiconductor = [],
//       problems = [];

//     allVideoIDs.forEach((id, index) => {
//       const description = allDescriptions[index]?.toLowerCase() || "";
//       const video = {
//         id: index + 1,
//         videoId: id,
//         title: `Video ${index + 1}`,
//         description: allDescriptions[index] || "No description",
//         thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
//       };

//       if (description.includes("semiconductor")) {
//         semiconductor.push(video);
//       } else if (description.includes("problem")) {
//         problems.push(video);
//       } else if (
//         description.includes("quantum") ||
//         description.includes("schrodinger") ||
//         description.includes("photo electric") ||
//         description.includes("wave")
//       ) {
//         quantum.push(video);
//       } else {
//         classical.push(video);
//       }
//     });

//     return { classical, quantum, semiconductor, problems };
//   };

//   const { classical, quantum, semiconductor, problems } = categorizeVideos();

//   const VideoSection = ({ title, videos, sectionRef }) => (
//     <section ref={sectionRef} className="py-6">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             className="bg-white rounded-lg shadow p-2 hover:shadow-lg transition duration-300"
//           >
//             <a
//               href={`https://www.youtube.com/watch?v=${video.videoId}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src={video.thumbnail}
//                 alt={video.title}
//                 className="w-full rounded-md"
//               />
//               <div className="p-2">
//                 <p className="font-semibold">{video.title}</p>
//                 <p className="text-sm text-gray-600">
//                   {video.description.slice(0, 80)}...
//                 </p>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

//   return (
//     <div className="px-4 md:px-12 py-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Educational Physics Video Lectures
//       </h1>
//       <div className="flex flex-wrap justify-center gap-4 mb-8">
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           onClick={() => scrollToSection(classicalRef)}
//         >
//           Classical Mechanics
//         </button>
//         <button
//           className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
//           onClick={() => scrollToSection(quantumRef)}
//         >
//           Quantum Mechanics
//         </button>
//         <button
//           className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
//           onClick={() => scrollToSection(semiconductorRef)}
//         >
//           Semiconductor Physics
//         </button>
//         <button
//           className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//           onClick={() => scrollToSection(problemsRef)}
//         >
//           Problem Solving
//         </button>
//       </div>

//       <VideoSection title="Classical Mechanics" videos={classical} sectionRef={classicalRef} />
//       <VideoSection title="Quantum Mechanics" videos={quantum} sectionRef={quantumRef} />
//       <VideoSection title="Semiconductor Physics" videos={semiconductor} sectionRef={semiconductorRef} />
//       <VideoSection title="Problem Solving" videos={problems} sectionRef={problemsRef} />
//     </div>
//   );
// };

// export default EP;












// import React, { useState, useRef, useEffect } from "react";

// const EP = () => {
//   const classicalRef = useRef(null);
//   const quantumRef = useRef(null);
//   const semiconductorRef = useRef(null);
//   const problemsRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

 

  // const allVideoIDs = [
  //   "tDmK1b63fEI", // Video 1
  //   "zD_wSKYsVyo", // Video 2
  //   "CbTx-koXQm4", // Video 3
  //   "Akd9RQ2r418", // Video 4
  //   "5dj0aHCDYH4", // Video 5
  //   "QyolW3lgKzE", // Video 6
  //   "75yYLgmlWVY", // Video 7
  //   "jK9AANP6fqg", // Video 8
  //   "Y-zwzHrXatg", // Video 9
  //   "1fJ2JK4Mk1Q", // Video 10
  //   "McSOCQ-PN2g", // Video 11
  //   "X8YHtd4m3Pg", // Video 12
  //   "0otipQeRsBk", // Video 13
  //   "9PIXZKb-8HI", // Video 14
  //   "HRFkQoKojh0",
  //   "gyxF9k28U5o",
  //   "5KNCNICTbnc",
  //   "u0Ub7CB7qoQ",
  //   "-i2TfdEY778",
  //   "idJpaFL6f2c",
  //   "W3rckVGLtmM",
  //   "tTnU0PXb63U",
  //   "_WjmaKZS5g8",
  //   "B5j0Wut5baI",
  //   "oOP4V4lFA4c",
  //   "oXEkuvvag-M",
  //   "nhmibNQhuBA",
  //   "hqQc4jLWSwc",
  //   "Pq_-K97YSB4",
  //   "2Sd_kL-UpZA",
  //   "X_6F7DSuhX4",
  //   "t_wZKgAbvgU",
  //   "GJ2EizUaXGM",
  //   "oZR6f1DSXIQ",
  //   "2h6m22WETVc",
  //   "ffs1Rt4Jv94",
  //   "qb9t2USH224",
  //   "j9wJdnzec9c",
  //   "_caPcRgbfKQ",
  //   "xEYnHVr_3-8",
  //   "mFXOFxjxviw",
  //   "X6Q_G2NbfxM",
  //   "cP7pnFpeb6o",
  //   "K7_scUL44-Q",
  //   "e2U31L1NG6M",
  //   "qR-BGtSKCB8",
  //   "jKLhMqyNT5w",
  //   "Vg1kA2LUTgs",
  //   "EsSHKYxBcGM",
  //   "2X4atLR_cDM",
  //   "rTiodSMfziU",
  //   "J7CYl5OqXrE",
  //   "85vWtM-mEK0",
  //   "Qw_AXO405IA",
  //   "tUK9dmvhUrI",
  //   "4VW7k-icesU",
  //   "Cz7xfeHvsYo",
  //   "XeUk4-IGrKg",
  //   "psy6Fa3N5I4",
  //   "XsK5uCo1aF8",
  //   "oHYpr8e8-f4",
  //   "v67akzjaxd0",
  //   "37hEk--fLbA",
  //   "nCnr-JW7n2o",
  //   "JFw501JGtfQ",
  //   "R7YDy4dWXsE",
  //   "RGIOnSbYnXg",
  //   "-jCUpMddz9c",
  //   "YvetoQeQfsI",
  //   "1RH7BBz_Dng",
  //   "2IphwkOm1z0",
  //   "NgDG2jaJk78",
  //   "mbXLoowy1NM",
  //   "GiiVOo_hoMA",
  //   "XX0iYRgaRGQ",
  //   "q9LY8X0cRtI",
  //   "9RuUlL1xwvk",
  //   "wNBpQqhiarE",
  //   "INHgMVae1B4",
  //   "FCRb9AqwPsM",
  //   "9yXGh1Qlh_8",
  //   "V0k_duq8afw",
  //   "Afk5KYija_I",
  //   "5pvs4cDlc70",
  //   "fnMuCvDNUis",
  //   "tAAoPC8LfzQ",
  //   "4jXPs3bfzmw",
  //   "fxXaCnECWNY",
  //   "hwv0LkDoE1I",
  //   "HPTmR3EACX8",
  //   "ZZM6j0IQVGg",
  //   "wtsdyKmAjpY",
  //   "aLqQ3J9LV2c",
  //   "3Jq6oic2sUA",
  //   "FL1KanX-Mcc",
  //   "CXFtbpYaBXw",
  //   "6ShYjai83bA",
  //   "67QXoPW0eE0",
  //   "5iEsqeMOZAc",
  //   "Z-mdnY2ObRg",
  //   "85KspLpuoXU",
  //   "TmjESFwvgO0",
  //   "yhFotq06XtE",
  //   "qMmx9SpcZa4",
  //   "qpcMfTCbwtM",
  //   "QfiZdxHbCiM",
  //   "ehWi1U69uZ4",
  //   "URq7dDOQOkM",
  //   "kPCbRDH5lXw",
  //   "df2cY2VkmgQ",
  //   "BfZpHPTLSRc",
  //   "caX3lsm6Pxk",
  //   "mi1mOFuPZAg",
  //   "QtEvdxQvdi4",
  //   "wrvjhI2a_Qg",
  // ];

  // const allDescriptions = [
  //   "Review of Newtonian Mechanics / PROBLEM SOLVING",
  //   "Charged particle in  E & B (Electric and Magnetic Field",
  //   "Charged particle in CROSSED E an B",
  //   "Generalised Coordinates & Velocities, Holonomic Constraints",
  //   "Hamilton's Principle | Euler Lagrange Equation (DERIVATION)",
  //   "Lagrangian Approach | Problem Solving",
  //   "DOUBLE PENDULUM (Formulation of Lagrangian)",
  //   "DOUBLE PENDULUM (.. Continued) (Small Angle) + Spring Pendulum",
  //   "Hamilton's Equations | Canonical Momentum",
  //   "Hamilton's Equations of Motion | Hamiltonian | PROBLEM SOLVING",
  //   "Cyclic Coordinates | Hamiltonian an Lagrangian | Problem Solving",
  //   "Central Forces, 2 body problem, Effective potential & Classification of Orbits",
  //   "Differential Equation for Orbits | Planetary motion",
  //   "Coupled Oscillator and Normal Modes of Oscillations",
  //   "Introduction Of Quantum Mechanics ( lecture - 01) Introduction of quantum mechanics for B.sc. studen",
  //   "Introduction of quantum mechanics(part 2) (lecture 2), Introduction to quantum mechanics for b.sc.",
  //   "Quantum mechanics(lecture-3), Wines displacement law and wines and Rayleigh law by plank's law",
  //   "Quantum mechanics(lecture-4), Photon, characteristics of photon and Q & A, for B.sc. students",
  //   "Quantum mechanics(lecture-5), Photo electric effect , what is photo electric effect for B.sc.",
  //   "Quantum mechanics(lecture-6), Why classical theory fail to explain photo electric effects? for B.sc.",
  //   "Quantum mechanics(lecture-7),Einstein Theory Of photo electric effect. Photo electric equation(B.sc)",
  //   "Quantum mechanics(lecture-8), Q & A on photo electric effects, most imp questions for #IITJAM",
  //   "Quantum mechanics(lecture-9),Compton Effect, Explanation of Compton effect, imp for B.sc. students",
  //   "Quantum mechanics(lecture-10),Angle Of Recoil and kinetic energy of electron in Compton effect",
  //   "Quantum mechanics(lecture-11) Important question on Compton effect and photo electric effect",
  //   "Quantum mechanic(lecture-12), Dual Nature Of Light | Photon in single slit | for B.sc. students",
  //   "Quantum mechanics(lecture-13). de Broglies matter wave de broglie hypothesis #iit#iitjam b.sc.",
  //   "Quantum mechanic(lecture-14), Q & A On de Broglies wave . matter wave. #iitjam #bhu B.sc.",
  //   "Quantum mechanics(lecture-15), Davisson and Germer experiment. #iit #iitjam B.sc. students",
  //   "Quantum mechanics(lecture-16), Matter wave for macroscopic particles",
  //   "Quantum mechanics(lecture-17), Particle versus wave in classical and Quantum mechanics",
  //   "Quantum mechanics(lecture-17) Particle versus wave part - 02, wave and particle in quantum mechanics",
  //   "Quantum mechanics(lecture-18) Heisenberg's Uncertainty Principle for b.sc. students #iit #iitjam",
  //   "Quantum mechanics(lecture-19)(Part- 01) Consequences OR Application of uncertainty principle.",
  //   "Quantum mechanics(lecture-19) (Part-2) Application of uncertainty principle. for #iitjam b.sc.",
  //   "Quantum mechanics(lecture- 19) (part-1) Q and A on uncertainty principle imp #iitjam B.sc.",
  //   "Quantum mechanics(lecture-20)(part-2), Q & A on Uncertainty principle for #iitjam B.sc.",
  //   "Quantum mechanics(lecture-21), Born Interpretation, probability density probability of finding",
  //   "Quantum mechanics(lecture-22)(part-1) Wave packet in quantum mechanics || imp for b.sc. #IITJAM",
  //   "Quantum mechanics(lecture-22)(part-2), Wave packet and Group velocity. Localized wave function.",
  //   "Quantum mechanics(lecture-23) Group velocity(Derivation), velocity of wave packet, for b.sc. student",
  //   "Quantum mechanics(lecture-24), Relation between group velocity and phase velocity. derivation.",
  //   "Quantum mechanics(lecture-24) Group velocity and phase velocity of relativistic particle #IITJAM",
  //   "Quantum mechanics(lecture-26) Wave packet and uncertainty principle Explained with example.",
  //   "Quantum mechanics(lecture-27), Wave function in momentum space and questions for #IITJAM &B.sc.",
  //   "Quantum mechanics (lecture-28) Schrodinger Equation, condition for Schrodinger equation for b.sc.",
  //   "Quantum mechanics(lecture-29), Time dependent Schrodinger equation. for B.sc. students",
  //   "Quantum mechanics (lecture-30)  Probability density , Normalization condition & square integral",
  //   "Quantum mechanics(lecture-31) Equation Of Continuity. Conservation of probability for B.Sc.",
  //   "Quantum mechanics(lecture-32), Operators in Quantum mechanics quantum mechanical operators for b.sc.",
  //   "Quantum mechanics(lecture-33) Hermiticity of an operators prove that Hamiltonian is hermitian",
  //   "Quantum mechanics(Lecture-34), Show that d/dx is Hermitian operator. Finding of hermitian adjoint ||",
  //   "Quantum mechanics(lecture-35) Expectation value in quantum mechanics, expatiation value of variable",
  //   "Quantum mechanics(lecture-36) Ehrenfest's theorem Theorem and it's proof for B.sc. students.",
  //   "Quantum mechanics(lecture-37) Ehrenfest's theorem with proof. proof Ehrenfest theorem for b.sc.",
  //   "Quantum mechanics(lecture-38) Schrodinger time independent equation , time independent equation",
  //   "Quantum mechanics(lect-39) Eigen value and eigen function,eigen value of hermitian operator are real",
  //   "Quantum mechanics(lect-40)Orthogonality condition of eigen function. prove that orthogonality cond.",
  //   "Quantum mechanics(lect-41) parity in quantum mechanics. concept of parity in quantum mechanics",
  //   "Quantum mechanics(lecture-42) Condition for acceptable wave function for b.sc student.",
  //   "Quantum mechanics(lect-42) part-2 Why wave function vanish at infinite potential For b.sc. student",
  //   "Quantum mechanics(lecture-43) Solving Schrodinger equation for free particle",
  //   "Quantum mechanics(lecture-44) infinite potential well introduction symmetric and asymmetric",
  //   "Quantum mechanics(lecture-44) part - 2,infinite potential well introduction symmetric and asymmetric",
  //   "Quantum mechanics(lect-45),Connection with de Broglie hypothesis of eigen function of 1D potential",
  //   "Quantum mechanics(lect-45) Zero point energy and parity of eigen function",
  //   "quantum mechanics(lecture-46) Asymmetric potential well eigen function and energy eigen value",
  //   "Quantum mechanics(lecture-47) Question and answer, Important numerical discussion for B.sc.",
  //   "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
  //   "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
  //   "Quantum mechanics(lecture-48) 3D rectangular potential well, Particle in 3D box",
  //   "Quantum mechanics(lecture-49) Degeneracy of energy eigen value in 3D well for B.sc.",
  //   "Quantum mechanics(lecture-50) important question on quantum mechanics for b.sc. student and #iitjam",
  //   "Quantum mechanics(lecture-50 part-2) important question on quantum mechanics for b.sc.",
  //   "Quantum mechanics(lecture-51) Finite square well potential wave function and energy eigen value",
  //   "Quantum mechanics(lecture-52) Energy Eigen value of finite square well Potential, for b.sc. students",
  //   "Quantum mechanics(lecture-53) Question answer of finite square well Potential, for b.sc. students",
  //   "Quantum mechanics(lecture-54) Finite and infinite potential in one question, how to find solution?",
  //   "Quantum mechanics(lecture-55) Potential barrier, particle incident on potential barrier",
  //   "Quantum mechanics(lecture-56) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-57) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-58) Step potential, One dimensional step potential, complete explanation",
  //   "Quantum mechanics(lecture-59) Step potential, Schematics of eigen function imp for GATE",
  //   "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
  //   "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
  //   "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || #IIT #GATE",
  //   "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || (Part 02)",
  //   "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
  //   "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
  //   "Quantum mechanics(lecture-63) QUANTUM TUNNELING || VARIABLE POTENTIAL || TRANSMISSION COEFFICIENT",
  //   "Quantum mechanics(lecture-64) GATE 2022 || CSIR NET PHYSICAL SCIENCE || PREVIOUS YEAR  #GATE #CSIR",
  //   "Quantum mechanics(lecture-65) SQUARE POTENTIAL WELL || SQUARE POTENTIAL WELL",
  //   "Quantum mechanics(lecture-66) DIRAC DELTA FUNCTION || PROPERTIES OF DIRAC DELTA FUNCTION",
  //   "Quantum mechanics(lecture-67) DIRAC DELTA POTENTIAL || CSIR NET AND GATE IMPORTANT QUESTION",
  //   "Quantum mechanics(lecture-68) DIRAC DELTA POTENTIAL (part02) || CSIR NET AND GATE IMPORTANT QUESTION",
  //   "Semiconductor Physics Session 1 (Formation of Energy bands)",
  //   "Semiconductor Physics Session 2 (Fermi Level and Fermi Function)",
  //   "Semiconductor Physics Session 3 (Conductivity, current density and mobility)",
  //   "Semiconductor Physics Session 4 (Hall Effect)",
  //   "Semiconductor Physics Session 5 (p-n junction diode)",
  //   "Semiconductor Physics Session 6 (Zener diode, LED, Solar Cell)",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 10 Motion of a particle on cone",
  //   "Practice Problems: Lagrangian Mechanics-# Problem 9",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 8 - A mass on inclined plane",
  //   "Practice Problems: Lagrangian Mechanics # Problem 7 - Rotating dumbell",
  //   "Practice Problems: Lagrangian Mechanics # Problem 6",
  //   "Practice Problems: Lagrangian Mechanics-# Problem 5",
  //   "Practice Problems: Lagrangian Mechanics # Problem 4",
  //   "Practice Problems: Lagrangian Mechanics # problem 3 Atwood machine",
  //   "Practice Problems: Lagrangian Mechanics # problem 2",
  //   "Practice Problems: Lagrangian Mechanics - # Problem1",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 11 -  Newton's equation of motion using Lagrange's equations.",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 12 - Atwood machine having pulley of moment of inertia I.",
  //   "Practice Problems: Lagrangian Mechanics - # Problem 13 - Compound Pendulum and it's time period.",
  //   "Practice Problems: Lagrangian Mechanics -# Problem 14 - LC Oscillations, it's Lagrange's equation and it's time period.",

  //   "",

  //   "",
  // ];

//   const categorizeVideos = () => {
//     const classical = [],
//       quantum = [],
//       semiconductor = [],
//       problems = [];

//     allVideoIDs.forEach((id, index) => {
//       const description = allDescriptions[index]?.toLowerCase() || "";
//       const video = {
//         id: index + 1,
//         videoId: id,
//         title: `Video ${index + 1}`,
//         description: allDescriptions[index] || "No description",
//       };

//       if (description.includes("semiconductor")) {
//         semiconductor.push(video);
//       } else if (description.includes("problem")) {
//         problems.push(video);
//       } else if (
//         description.includes("quantum") ||
//         description.includes("schrodinger") ||
//         description.includes("photo electric") ||
//         description.includes("wave")
//       ) {
//         quantum.push(video);
//       } else {
//         classical.push(video);
//       }
//     });

//     return { classical, quantum, semiconductor, problems };
//   };

//   const { classical, quantum, semiconductor, problems } = categorizeVideos();

//   const VideoSection = ({ title, videos, sectionRef, id }) => (
//     <section id={id} ref={sectionRef} className="py-6">
//       <h2 className="text-2xl font-bold mb-4 text-white sticky top-16 bg-black py-2">
//         {title}
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {videos.map((video) => (
//           <div
//             key={video.id}
//             className="bg-gray-800 rounded-lg shadow p-2 hover:shadow-lg transition duration-300 hover:bg-gray-700"
//           >
//             <iframe
//               width="100%"
//               height="200"
//               src={`https://www.youtube.com/embed/${video.videoId}`}
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="rounded-md"
//             ></iframe>
//             <div className="p-2">
//               <p className="font-semibold text-white">{video.title}</p>
//               <p className="text-sm text-gray-300">
//                 {video.description.slice(0, 80)}...
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );

//   return (
//     <div className="px-4 md:px-12 py-6 bg-black min-h-screen">
//       <header className="sticky top-0 bg-black z-50 py-4 border-b border-gray-800">
//         <h1 className="text-3xl font-bold text-center mb-2 text-white">
//           Educational Physics Video Lectures
//         </h1>
//         <nav className="flex flex-wrap justify-center gap-2">
//           <button
//             onClick={() => scrollToSection(classicalRef)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Classical Mechanics
//           </button>
//           <button
//             onClick={() => scrollToSection(quantumRef)}
//             className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
//           >
//             Quantum Mechanics
//           </button>
//           <button
//             onClick={() => scrollToSection(semiconductorRef)}
//             className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
//           >
//             Semiconductor Physics
//           </button>
//           <button
//             onClick={() => scrollToSection(problemsRef)}
//             className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
//           >
//             Problem Solving
//           </button>
//         </nav>
//       </header>

//       <main className="mt-6">
//         <VideoSection
//           id="classical"
//           title="Classical Mechanics"
//           videos={classical}
//           sectionRef={classicalRef}
//         />
//         <VideoSection
//           id="quantum"
//           title="Quantum Mechanics"
//           videos={quantum}
//           sectionRef={quantumRef}
//         />
//         <VideoSection
//           id="semiconductor"
//           title="Semiconductor Physics"
//           videos={semiconductor}
//           sectionRef={semiconductorRef}
//         />
//         <VideoSection
//           id="problems"
//           title="Problem Solving"
//           videos={problems}
//           sectionRef={problemsRef}
//         />
//       </main>
//     </div>
//   );
// };

// export default EP;




import React, { useState } from "react";

const EP = () => {
 
  const epVideoIDs = [
    "tDmK1b63fEI", // Video 1
    "zD_wSKYsVyo", // Video 2
    "CbTx-koXQm4", // Video 3
    "Akd9RQ2r418", // Video 4
    "5dj0aHCDYH4", // Video 5
    "QyolW3lgKzE", // Video 6
    "75yYLgmlWVY", // Video 7
    "jK9AANP6fqg", // Video 8
    "Y-zwzHrXatg", // Video 9
    "1fJ2JK4Mk1Q", // Video 10
    "McSOCQ-PN2g", // Video 11
    "X8YHtd4m3Pg", // Video 12
    "0otipQeRsBk", // Video 13
    "9PIXZKb-8HI", // Video 14
    "HRFkQoKojh0",
    "gyxF9k28U5o",
    "5KNCNICTbnc",
    "u0Ub7CB7qoQ",
    "-i2TfdEY778",
    "idJpaFL6f2c",
    "W3rckVGLtmM",
    "tTnU0PXb63U",
    "_WjmaKZS5g8",
    "B5j0Wut5baI",
    "oOP4V4lFA4c",
    "oXEkuvvag-M",
    "nhmibNQhuBA",
    "hqQc4jLWSwc",
    "Pq_-K97YSB4",
    "2Sd_kL-UpZA",
    "X_6F7DSuhX4",
    "t_wZKgAbvgU",
    "GJ2EizUaXGM",
    "oZR6f1DSXIQ",
    "2h6m22WETVc",
    "ffs1Rt4Jv94",
    "qb9t2USH224",
    "j9wJdnzec9c",
    "_caPcRgbfKQ",
    "xEYnHVr_3-8",
    "mFXOFxjxviw",
    "X6Q_G2NbfxM",
    "cP7pnFpeb6o",
    "K7_scUL44-Q",
    "e2U31L1NG6M",
    "qR-BGtSKCB8",
    "jKLhMqyNT5w",
    "Vg1kA2LUTgs",
    "EsSHKYxBcGM",
    "2X4atLR_cDM",
    "rTiodSMfziU",
    "J7CYl5OqXrE",
    "85vWtM-mEK0",
    "Qw_AXO405IA",
    "tUK9dmvhUrI",
    "4VW7k-icesU",
    "Cz7xfeHvsYo",
    "XeUk4-IGrKg",
    "psy6Fa3N5I4",
    "XsK5uCo1aF8",
    "oHYpr8e8-f4",
    "v67akzjaxd0",
    "37hEk--fLbA",
    "nCnr-JW7n2o",
    "JFw501JGtfQ",
    "R7YDy4dWXsE",
    "RGIOnSbYnXg",
    "-jCUpMddz9c",
    "YvetoQeQfsI",
    "1RH7BBz_Dng",
    "2IphwkOm1z0",
    "NgDG2jaJk78",
    "mbXLoowy1NM",
    "GiiVOo_hoMA",
    "XX0iYRgaRGQ",
    "q9LY8X0cRtI",
    "9RuUlL1xwvk",
    "wNBpQqhiarE",
    "INHgMVae1B4",
    "FCRb9AqwPsM",
    "9yXGh1Qlh_8",
    "V0k_duq8afw",
    "Afk5KYija_I",
    "5pvs4cDlc70",
    "fnMuCvDNUis",
    "tAAoPC8LfzQ",
    "4jXPs3bfzmw",
    "fxXaCnECWNY",
    "hwv0LkDoE1I",
    "HPTmR3EACX8",
    "ZZM6j0IQVGg",
    "wtsdyKmAjpY",
    "aLqQ3J9LV2c",
    "3Jq6oic2sUA",
    "FL1KanX-Mcc",
    "CXFtbpYaBXw",
    "6ShYjai83bA",
    "67QXoPW0eE0",
    "5iEsqeMOZAc",
    "Z-mdnY2ObRg",
    "85KspLpuoXU",
    "TmjESFwvgO0",
    "yhFotq06XtE",
    "qMmx9SpcZa4",
    "qpcMfTCbwtM",
    "QfiZdxHbCiM",
    "ehWi1U69uZ4",
    "URq7dDOQOkM",
    "kPCbRDH5lXw",
    "df2cY2VkmgQ",
    "BfZpHPTLSRc",
    "caX3lsm6Pxk",
    "mi1mOFuPZAg",
    "QtEvdxQvdi4",
    "wrvjhI2a_Qg",
  ];

  const epVideoDescriptions = [
    "Review of Newtonian Mechanics / PROBLEM SOLVING",
    "Charged particle in  E & B (Electric and Magnetic Field",
    "Charged particle in CROSSED E an B",
    "Generalised Coordinates & Velocities, Holonomic Constraints",
    "Hamilton's Principle | Euler Lagrange Equation (DERIVATION)",
    "Lagrangian Approach | Problem Solving",
    "DOUBLE PENDULUM (Formulation of Lagrangian)",
    "DOUBLE PENDULUM (.. Continued) (Small Angle) + Spring Pendulum",
    "Hamilton's Equations | Canonical Momentum",
    "Hamilton's Equations of Motion | Hamiltonian | PROBLEM SOLVING",
    "Cyclic Coordinates | Hamiltonian an Lagrangian | Problem Solving",
    "Central Forces, 2 body problem, Effective potential & Classification of Orbits",
    "Differential Equation for Orbits | Planetary motion",
    "Coupled Oscillator and Normal Modes of Oscillations",
    "Introduction Of Quantum Mechanics ( lecture - 01) Introduction of quantum mechanics for B.sc. studen",
    "Introduction of quantum mechanics(part 2) (lecture 2), Introduction to quantum mechanics for b.sc.",
    "Quantum mechanics(lecture-3), Wines displacement law and wines and Rayleigh law by plank's law",
    "Quantum mechanics(lecture-4), Photon, characteristics of photon and Q & A, for B.sc. students",
    "Quantum mechanics(lecture-5), Photo electric effect , what is photo electric effect for B.sc.",
    "Quantum mechanics(lecture-6), Why classical theory fail to explain photo electric effects? for B.sc.",
    "Quantum mechanics(lecture-7),Einstein Theory Of photo electric effect. Photo electric equation(B.sc)",
    "Quantum mechanics(lecture-8), Q & A on photo electric effects, most imp questions for #IITJAM",
    "Quantum mechanics(lecture-9),Compton Effect, Explanation of Compton effect, imp for B.sc. students",
    "Quantum mechanics(lecture-10),Angle Of Recoil and kinetic energy of electron in Compton effect",
    "Quantum mechanics(lecture-11) Important question on Compton effect and photo electric effect",
    "Quantum mechanic(lecture-12), Dual Nature Of Light | Photon in single slit | for B.sc. students",
    "Quantum mechanics(lecture-13). de Broglies matter wave de broglie hypothesis #iit#iitjam b.sc.",
    "Quantum mechanic(lecture-14), Q & A On de Broglies wave . matter wave. #iitjam #bhu B.sc.",
    "Quantum mechanics(lecture-15), Davisson and Germer experiment. #iit #iitjam B.sc. students",
    "Quantum mechanics(lecture-16), Matter wave for macroscopic particles",
    "Quantum mechanics(lecture-17), Particle versus wave in classical and Quantum mechanics",
    "Quantum mechanics(lecture-17) Particle versus wave part - 02, wave and particle in quantum mechanics",
    "Quantum mechanics(lecture-18) Heisenberg's Uncertainty Principle for b.sc. students #iit #iitjam",
    "Quantum mechanics(lecture-19)(Part- 01) Consequences OR Application of uncertainty principle.",
    "Quantum mechanics(lecture-19) (Part-2) Application of uncertainty principle. for #iitjam b.sc.",
    "Quantum mechanics(lecture- 19) (part-1) Q and A on uncertainty principle imp #iitjam B.sc.",
    "Quantum mechanics(lecture-20)(part-2), Q & A on Uncertainty principle for #iitjam B.sc.",
    "Quantum mechanics(lecture-21), Born Interpretation, probability density probability of finding",
    "Quantum mechanics(lecture-22)(part-1) Wave packet in quantum mechanics || imp for b.sc. #IITJAM",
    "Quantum mechanics(lecture-22)(part-2), Wave packet and Group velocity. Localized wave function.",
    "Quantum mechanics(lecture-23) Group velocity(Derivation), velocity of wave packet, for b.sc. student",
    "Quantum mechanics(lecture-24), Relation between group velocity and phase velocity. derivation.",
    "Quantum mechanics(lecture-24) Group velocity and phase velocity of relativistic particle #IITJAM",
    "Quantum mechanics(lecture-26) Wave packet and uncertainty principle Explained with example.",
    "Quantum mechanics(lecture-27), Wave function in momentum space and questions for #IITJAM &B.sc.",
    "Quantum mechanics (lecture-28) Schrodinger Equation, condition for Schrodinger equation for b.sc.",
    "Quantum mechanics(lecture-29), Time dependent Schrodinger equation. for B.sc. students",
    "Quantum mechanics (lecture-30)  Probability density , Normalization condition & square integral",
    "Quantum mechanics(lecture-31) Equation Of Continuity. Conservation of probability for B.Sc.",
    "Quantum mechanics(lecture-32), Operators in Quantum mechanics quantum mechanical operators for b.sc.",
    "Quantum mechanics(lecture-33) Hermiticity of an operators prove that Hamiltonian is hermitian",
    "Quantum mechanics(Lecture-34), Show that d/dx is Hermitian operator. Finding of hermitian adjoint ||",
    "Quantum mechanics(lecture-35) Expectation value in quantum mechanics, expatiation value of variable",
    "Quantum mechanics(lecture-36) Ehrenfest's theorem Theorem and it's proof for B.sc. students.",
    "Quantum mechanics(lecture-37) Ehrenfest's theorem with proof. proof Ehrenfest theorem for b.sc.",
    "Quantum mechanics(lecture-38) Schrodinger time independent equation , time independent equation",
    "Quantum mechanics(lect-39) Eigen value and eigen function,eigen value of hermitian operator are real",
    "Quantum mechanics(lect-40)Orthogonality condition of eigen function. prove that orthogonality cond.",
    "Quantum mechanics(lect-41) parity in quantum mechanics. concept of parity in quantum mechanics",
    "Quantum mechanics(lecture-42) Condition for acceptable wave function for b.sc student.",
    "Quantum mechanics(lect-42) part-2 Why wave function vanish at infinite potential For b.sc. student",
    "Quantum mechanics(lecture-43) Solving Schrodinger equation for free particle",
    "Quantum mechanics(lecture-44) infinite potential well introduction symmetric and asymmetric",
    "Quantum mechanics(lecture-44) part - 2,infinite potential well introduction symmetric and asymmetric",
    "Quantum mechanics(lect-45),Connection with de Broglie hypothesis of eigen function of 1D potential",
    "Quantum mechanics(lect-45) Zero point energy and parity of eigen function",
    "quantum mechanics(lecture-46) Asymmetric potential well eigen function and energy eigen value",
    "Quantum mechanics(lecture-47) Question and answer, Important numerical discussion for B.sc.",
    "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
    "Quantum mechanics(lecture-47) part 02| important Question on Quantum mechanics",
    "Quantum mechanics(lecture-48) 3D rectangular potential well, Particle in 3D box",
    "Quantum mechanics(lecture-49) Degeneracy of energy eigen value in 3D well for B.sc.",
    "Quantum mechanics(lecture-50) important question on quantum mechanics for b.sc. student and #iitjam",
    "Quantum mechanics(lecture-50 part-2) important question on quantum mechanics for b.sc.",
    "Quantum mechanics(lecture-51) Finite square well potential wave function and energy eigen value",
    "Quantum mechanics(lecture-52) Energy Eigen value of finite square well Potential, for b.sc. students",
    "Quantum mechanics(lecture-53) Question answer of finite square well Potential, for b.sc. students",
    "Quantum mechanics(lecture-54) Finite and infinite potential in one question, how to find solution?",
    "Quantum mechanics(lecture-55) Potential barrier, particle incident on potential barrier",
    "Quantum mechanics(lecture-56) Step potential, One dimensional step potential, complete explanation",
    "Quantum mechanics(lecture-57) Step potential, One dimensional step potential, complete explanation",
    "Quantum mechanics(lecture-58) Step potential, One dimensional step potential, complete explanation",
    "Quantum mechanics(lecture-59) Step potential, Schematics of eigen function imp for GATE",
    "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
    "Quantum mechanics(lecture-60) GATE 2022 Quantum Mechanics important questions #gate2022",
    "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || #IIT #GATE",
    "Quantum mechanics(lecture-61) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER || (Part 02)",
    "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
    "Quantum mechanics(lecture-62) POTENTIAL BARRIER || ONE DIMENSIONAL POTENTIAL BARRIER ||",
    "Quantum mechanics(lecture-63) QUANTUM TUNNELING || VARIABLE POTENTIAL || TRANSMISSION COEFFICIENT",
    "Quantum mechanics(lecture-64) GATE 2022 || CSIR NET PHYSICAL SCIENCE || PREVIOUS YEAR  #GATE #CSIR",
    "Quantum mechanics(lecture-65) SQUARE POTENTIAL WELL || SQUARE POTENTIAL WELL",
    "Quantum mechanics(lecture-66) DIRAC DELTA FUNCTION || PROPERTIES OF DIRAC DELTA FUNCTION",
    "Quantum mechanics(lecture-67) DIRAC DELTA POTENTIAL || CSIR NET AND GATE IMPORTANT QUESTION",
    "Quantum mechanics(lecture-68) DIRAC DELTA POTENTIAL (part02) || CSIR NET AND GATE IMPORTANT QUESTION",
    "Semiconductor Physics Session 1 (Formation of Energy bands)",
    "Semiconductor Physics Session 2 (Fermi Level and Fermi Function)",
    "Semiconductor Physics Session 3 (Conductivity, current density and mobility)",
    "Semiconductor Physics Session 4 (Hall Effect)",
    "Semiconductor Physics Session 5 (p-n junction diode)",
    "Semiconductor Physics Session 6 (Zener diode, LED, Solar Cell)",
    "Practice Problems: Lagrangian Mechanics - # Problem 10 Motion of a particle on cone",
    "Practice Problems: Lagrangian Mechanics-# Problem 9",
    "Practice Problems: Lagrangian Mechanics - # Problem 8 - A mass on inclined plane",
    "Practice Problems: Lagrangian Mechanics # Problem 7 - Rotating dumbell",
    "Practice Problems: Lagrangian Mechanics # Problem 6",
    "Practice Problems: Lagrangian Mechanics-# Problem 5",
    "Practice Problems: Lagrangian Mechanics # Problem 4",
    "Practice Problems: Lagrangian Mechanics # problem 3 Atwood machine",
    "Practice Problems: Lagrangian Mechanics # problem 2",
    "Practice Problems: Lagrangian Mechanics - # Problem1",
    "Practice Problems: Lagrangian Mechanics - # Problem 11 -  Newton's equation of motion using Lagrange's equations.",
    "Practice Problems: Lagrangian Mechanics - # Problem 12 - Atwood machine having pulley of moment of inertia I.",
    "Practice Problems: Lagrangian Mechanics - # Problem 13 - Compound Pendulum and it's time period.",
    "Practice Problems: Lagrangian Mechanics -# Problem 14 - LC Oscillations, it's Lagrange's equation and it's time period.",

    "",

    "",
  ];

  const videoData = epVideoIDs.map((id, i) => ({
    id: i + 1,
    title: `EP Video ${i + 1}`,
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    videoUrl: `https://www.youtube.com/embed/${id}`,
    description: epVideoDescriptions[i] || ""
  }));

  const [selectedVideo, setSelectedVideo] = useState(null);
  const openVideo = (v) => setSelectedVideo(v);
  const closeVideo = () => setSelectedVideo(null);

  return (
    <div className="bg-black text-white w-full min-h-screen">
      {/* fixed navbar always visible */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 border-b border-gray-700 p-4 text-center text-lg font-bold">
        Educational Physics Playlist
      </div>

      {/* content with top padding so it sits below navbar */}
      <div className="pt-20 p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Engineering Physics - Video Lectures
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videoData.map((video) => (
            <div
              key={video.id}
              onClick={() => openVideo(video)}
              className="bg-gray-800 rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition duration-300 flex flex-row items-start p-3 sm:flex-col sm:p-4"
            >
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-2/5 sm:w-full">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover rounded"
                />
              </div>
              {/* Text */}
              <div className="flex-grow min-w-0 pl-3 sm:pl-0 sm:pt-3">
                <h2 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2 sm:line-clamp-2">
                  {video.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 sm:line-clamp-3">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal video player */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold line-clamp-1 mr-4">
                {selectedVideo.title}
              </h2>
              <button
                onClick={closeVideo}
                className="text-white text-lg font-bold flex-shrink-0 hover:text-red-500 transition"
              >
                ✖
              </button>
            </div>
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base">
              {selectedVideo.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EP;
