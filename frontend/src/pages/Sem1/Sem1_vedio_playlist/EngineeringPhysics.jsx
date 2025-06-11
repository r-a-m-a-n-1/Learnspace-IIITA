

import React, { useState } from "react";

const EP = () => {
 const videoIDs = [
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
    "5pvs4Dlc70",
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

  const videoDescriptions = [
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

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `EP Video ${i + 1}`,
    thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    videoUrl: `https://www.youtube.com/embed/${id}`,
    description: videoDescriptions[i] || ""
  }));

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openVideo = (v) => setSelectedVideo(v);
  const closeVideo = () => setSelectedVideo(null);

  const renderSection = (key, title, start, end) => (
    <section id={key} className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {videoData.slice(start, end).map((video) => (
          <div
            key={video.id}
            onClick={() => openVideo(video)}
            className="bg-gray-800 rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition duration-300 flex flex-row items-start p-3 sm:flex-col sm:p-4"
          >
            <div className="flex-shrink-0 w-2/5 sm:w-full">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover rounded"
              />
            </div>
            <div className="flex-grow min-w-0 pl-3 sm:pl-0 sm:pt-3">
              <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">
                {video.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="flex bg-black text-white w-full min-h-screen">
      {/* SIDEBAR */}
      {sidebarOpen && (
        <aside className="fixed top-0 right-0 h-full w-60 bg-gray-900 border-l border-gray-700 p-4 overflow-y-auto z-40">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold leading-none">Sections</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white text-xl font-bold leading-none hover:text-red-500 transition"
            >
              ✖
            </button>
          </div>
          <nav className="space-y-4">
            {[
              ["classical", "Classical", 0, 8],
              ["quantum", "Quantum", 8, 16],
              ["semiconductor", "Semiconductor", 16, 24],
              ["problems", "Problems", 24, 32],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedSection(key)}
                className={`w-full text-left px-3 py-2 rounded transition-all duration-500 ${
                  selectedSection === key
                    ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text'
                    : 'text-white hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500 hover:bg-clip-text hover:text-transparent'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* CONTENT */}
      <main className={`flex-1 pt-4 p-4 sm:p-8 ${sidebarOpen ? 'pr-64' : ''}`}>        
        {/* HEADER WITH INLINE TOGGLE */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 relative">
          <h1 className="text-3xl sm:text-4xl font-bold">Engineering Physics - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("classical", "Classical Mechanics", 0, 8)}
        {selectedSection === null && renderSection("quantum", "Quantum Mechanics", 8, 16)}
        {selectedSection === null && renderSection("semiconductor", "Semiconductor Physics", 16, 24)}
        {selectedSection === null && renderSection("problems", "Problem Solving", 24, 32)}

        {selectedSection === "classical" && renderSection("classical", "Classical Mechanics", 0, 8)}
        {selectedSection === "quantum" && renderSection("quantum", "Quantum Mechanics", 8, 16)}
        {selectedSection === "semiconductor" && renderSection("semiconductor", "Semiconductor Physics", 16, 24)}
        {selectedSection === "problems" && renderSection("problems", "Problem Solving", 24, 32)}
      </main>

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 gap-2">
              <h2 className="text-xl sm:text-2xl font-semibold truncate">
                {selectedVideo.title}
              </h2>
              <button
                onClick={closeVideo}
                className="text-white text-lg hover:text-red-500 transition flex-shrink-0"
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
