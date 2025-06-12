
import React, { useState } from "react";

const FEE = () => {
  // RFEElace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "NEhH6C7Fzw4",
"5NiB6LXFl3Y",
"Mby06CynpQs",
"h8I_LdaK9v8",
"hL95d-erkDw",
"g7DKec-IzoQ",
"7ZqOCNOyOUg",
"S7PZAXEsDcY",
"KWWiaLurzVM",
"4lUmiTN-470",
"jiYb-qSWgYY",
"f5nhx6bWXN8",
"rP2LK5srl9s",
"1eJTz4RmMHc",
"e26A3-V19Nw",
"_91Zv3CZ4qc",
"OfsAu7HAla8",
"mGJ7o3aQ4do",
"EysqPTxInvo",
"dIqfUO000hc",
"u0TexU5_uwU",
"qjf9L-fmNWg",
"NI-ZnmFa3JA",
"YpAJxKs-EVc",
"AeLUVrkof_I",
"OHFn8ZFB_Bs",
"JpNQ-9_VEKA",
"fPyZH1Hg4mU",
"a2tmHmIQ3hw",
"tWsyp1RTYtc",
"sYehg3imRig",
"SkBAJ7TooDk",
"Ue3ozP_CSL4",
"t2rsDrOCn4I",
"s5svOTeKnOE",
"2pStuMpHVZw",
"RslElrBhbGU",
"fHj2RdOnTqg",
"Mwu1zaA8_f4",
"oIdRFBdVcmM",
"4_m47GO8bnc",
"XO1cGlsYFT4",
"UOHvCU2br1k",
"-SCZ4vuSvdw",
"-DN2S-hmbis",
"jgKoRUBX0Y4",
"dNaOvsS8gTM",
"hRU1mKWUehY",
"jTjEMBe4NpY",
"qz0vGX-orus",
"kNsICqDfu8Q",
"PfJ5g0zPNAM",
"R8lLY1E7VgA",
"3eB4WYCRUns",
"fJOK1FTeRc8",
"YjzDY-wbbd8",
"Ym-BHgjRh0E",
"MgSb-XEKv8Q",
"y8PT1R0awXA",
"SbHQVmiIVFk",
"7np1d5ez1hs",
"5_mmZNkn9J0",
"XCx-7fzC8Ew",
"2cDMQ5_11BI",
"Sn0RUDAskJw",
"n5qhbxEo4Cs",
"ZZcymqnSX8M",
"fonmxO0Zf90",
"4N5WvDsw58k",
"PLzCIZdnTBw",
"S1IWuKFdhDs",
"79FcAQXwuFg",
"f0Ban2cTjsk",
"0gzv3MZaiEo",
"8cZygjOmCaI",
"grOa7TyJk00",
"xRcG9RMIfjc",
"_xY4E0VLQJA",
"4-8eaw2HBMY",
"RbAJ0zkjbLo",
"C4vImEdCxVg",
"-cXOxLQSwh0",
"AWXf-M0ZHQ4",
"j5zvmoUMsl4",
"pFl3lejnvso",
"jH9Z1Snysk8",
"1H-uIFq-9kk",
"bJAw9fzKYtU",
"ybIacf7500o",
"L9pgleRvZhA",
"DsheYw8pktY",
"pn777Ya0OHk",
"rzmW9fMBcVo",
"csSwHar_K40",
"NoI-rb_-Cx4",
"jWbWWoCY5n8",
"AggZh0m298s",
"D-5SNEhOMHs",
"APk7HqzXaUA",
"51d-74PALok",
"bRXQfZMzVJY",
"mtZM6K4W1MQ",
"1MoEji_GTJs",
"GdNYBJ8jgv4",
"3SM0Xb8ynXI",
"oly1_tWWkxo",
"PWDNPFN6zTc",
"qNLA4wcOImk",
"0zyvQmFfscs",
"qnrUZx8Gq1E",
"fsIVSr4gwB8",
"zk8Fzg6ahAA",
"_6FMsvx9TBk",
"g-RydLW3mYI",
"fj2GH5oCc0E",
"HWuMhVA1ek8",
"UGgQmMx85xQ",
"1nixB2Mv3-w",
"ZfTWdlb2BYI",
"vy3mNl4gqOo",
"pLinnH5-DU4",
"eBFuw8c8Rvc",
"tMo0HlMhiG0",
"mPfoClE5I3Q",
"KJb-oTNrG0s",
"8GGF2TUuG_0",
"sCW0Dsu2tak",
"vy5IUEElx2Y",
"BN-pZ9-O864",
"AUUH1sCreKI",
"QWwv_rTZrhU",
"IIk-8m_fhC4",
"Aau_pyvDoWQ",
"YhpOZcjrvQM",
"JOj4ZCZ3bDc",
"qyKEw9X-yHQ",
"YrtZgA05MBI",
"47hGRVA3K98",
"yP-l2iOlPqA",
"MG5PNYvgGUQ",
"t2qDPfk8f8M",
"AejbzRS_MQs",
"IST5IV-fPtQ",
"vwtzsdve0XI",
"4GWC-PT2qZ4",
"5b9R7QClpkA",
"MKnWoy0GI0s",
"A6_M2gddWy0",
"_ebsZf9RpT8",
"sSNTyhz02iA",
"kngph7wjuBk",
"xI1yPvejijk",
"1iBr7Ng7tDY",
"Db1TyebSJoE",
"5jI35F6kLa8",
"b-4QwCOaLio",
"6ieUk3Rm1yY",
"rO-wSaR-a5k",
"usTNFEEKbv5o",
"49ZE1DtTQ-M",
"-PP8Q7HI1Dc",
"4R0FGGq-QjQ",
"R1xCFjypBLc",
"KMfcJ16Y0oU",
"5IO8g2TGdvo",
"KygtYb2EsQE",
"b92bGsOa8Gw",
"uyE_UhLwIXc",
"ZJ8zD8m-B1Q",
"y0-Bc4YfdaQ",
"5Kj7IYJeRXQ",
"hdOqRZ9Ymvc",
"ByamxJRsUSk",
"veAFVTIpKyM",
"XyfII-KnSBs",
"roh1pkffYb0",
"tO6LenbrW5U",
"SKizJN8BCYc",
"mHcPgVGuYMo",
"nIrFoulGOeY",
"RkSN_JxBGt0",
"p_c-RfLEMfc",
"ClLtejp5aJo",
"gDgpr6gMlWM",
"_ydLcIX-qCM",
"Hw8gyoI5ExY",
"1tS8PUy8_W8",
"NzDkCvth_9M",
"XzVO19UaBzA",
"X79SNOd1Izw",
"FIgSHt2GXxU",
"-FbbXojHGEI",
"5ljdVbQTsrE",
"sizar9rAptk",
"ynNRjKgcE2A",
"CURpzrOmPHs",
"bIzyKFKkaV4",
"U85eA3-suiQ",
"bt_D-ACTC4w",
"AH3yRvOwfL0",
"wtfvvyoaeOI",
"ofFbkqOtolw",
"8zPWh6T-urQ",
"miidFFEEMmj0",
"Y8pHOHG-a20",
"SujBaYvHTI4",
"muJBwSF4KSc",
"UBl-aLJrOAQ"
  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "Introduction to Network Theory",
"Electric Charge",
"Law of Conservation of Charge",
"Electric Current",
"Conventional Current vs. Electron Current",
"Is Current a Scalar or a Vector Quantity?",
"Electric Potential Difference (Voltage)",
"Electric Power",
"Electric Power (Solved Problem)",
"Circuit Elements (Resistor)",
"Ohm's Law",
"The ConcFEEt of Short Circuit",
"The ConcFEEt of Open Circuit",
"Circuit Elements (Inductor)",
"Linear and Non-Linear Inductors",
"Energy Stored in an Inductor",
"Inductor (Important Points)",
"Circuit Elements (Capacitor)",
"Energy Stored in a Capacitor",
"Capacitor (Important Points)",
"DFEEendent and IndFEEendent Sources",
"Ideal and Practical Voltage Sources",
"Ideal and Practical Current Sources",
"Voltage Source (Tips & Tricks)",
"Current Source (Tips & Tricks)",
"Current & Voltage Source (Important Points)",
"Node, Path, Loop and Branch",
"Kirchhoff's Current Law (KCL)",
"Kirchhoff's Voltage Law (KVL)",
"KCL and KVL (Solved Problem)",
"More Insight into Kirchhoff's Voltage Law (KVL)",
"Mesh Analysis",
"Mesh Analysis (Solved Problem 1)",
"Mesh Analysis (Solved Problem 2)",
"Mesh Analysis with Current Source",
"Supermesh Analysis",
"Supermesh Analysis (Solved Problem)",
"Nodal Analysis",
"Nodal Analysis (Solved Problem 1)",
"Nodal Analysis with Voltage Source",
"Nodal Analysis (Solved Problem 2)",
"Supernode Analysis",
"Supernode Analysis (Solved Problem)",
"Series & Parallel Combination of Resistors",
"Series & Parallel Combination of Capacitors",
"Series & Parallel Combination of Inductors",
"Voltage Divider Rule",
"Current Divider Rule",
"Equivalent Resistance (Solved Problem 1)",
"Equivalent Resistance (Solved Problem 2)",
"Equivalent Resistance (Solved Problem 3)",
"Calculation of Equivalent Resistance Using Symmetry",
"Equivalent Resistance (Solved Problem 4)",
"Equivalent Resistance of a Cube (Between the Space Diagonal)",
"Equivalent Resistance of a Cube (Between the Vertices of an Edge)",
"Balanced Bridge",
"Balanced Bridge (With Impedances)",
"Balanced Bridge (Solved Problem)",
"Equivalent Resistance (Solved Problem 7)",
"Equivalent Resistance (Solved Problem 8)",
"Delta to Wye (Star) Conversion",
"Wye (Star) to Delta Conversion",
"Delta to Wye & Wye to Delta Conversion (for Capacitors)",
"Equivalent Capacitance (Solved Problem 1)",
"Equivalent Capacitance (Solved Problem 2)",
"Equivalent Capacitance (Solved Problem 3)",
"Equivalent Capacitance (Solved Problem 4)",
"Active and Passive Elements",
"Bidirectional and Unidirectional Elements",
"Lumped and Distributed Elements",
"Linear and Nonlinear Elements",
"Basics of Network Theory (Solved Problem 1)",
"Basics of Network Theory (Solved Problem 2)",
"Basics of Network Theory (Solved Problem 3)",
"Basics of Network Theory (Solved Problem 4)",
"Basics of Network Theory (Solved Problem 5)",
"Basics of Network Theory (Solved Problem 6)",
"Basics of Network Theory (Solved Problem 7) | Problem on Bulbs",
"Basics of Network Theory (Solved Problem 8)",
"Basics of Network Theory (Solved Problem 9)",
"Basics of Network Theory (Solved Problem 10)",
"Basics of Network Theory (Solved Problem 11)",
"Basics of Network Theory (Solved Problem 12)",
"Basics of Network Theory (Solved Problem 13)",
"Basics of Network Theory (Solved Problem 14)",
"Basics of Network Theory (Solved Problem 15)",
"Basics of Network Theory (Solved Problem 16)",
"Basics of Network Theory (Solved Problem 17)",
"Basics of Network Theory (Solved Problem 18)",
"Basics of Network Theory (Solved Problem 19)",
"Practice Sheet-1 | Network Theory Basics | Network Theory",
"Introduction to Two−Port Networks",
"Z−Parameters (or) Impedance Parameters",
"Z−Parameters (Solved Problem 1)",
"Z−Parameters (Solved Problem 2)",
"Y−Parameters (or) Admittance Parameters",
"Y−Parameters to Z−Parameters Conversion",
"Z−Parameters to Y−Parameters Conversion",
"Y−Parameters (Solved Problem 1)",
"Y−Parameters (Solved Problem 2)",
"h−Parameters (or) Hybrid Parameters",
"h−Parameters to Z−Parameters Conversion (and vice versa)",
"h−Parameters to Y−Parameters Conversion (and vice versa)",
"h−Parameters (Solved Problem)",
"g−Parameters (or) Inverse Hybrid Parameters",
"Z−Parameters to g−Parameters Conversion (and vice versa)",
"ABCD−Parameters (or) Transmission Parameters",
"ABCD−Parameters to Z−Parameters Conversion (and vice versa)",
"ABCD−Parameters (Solved Problem)",
"ConcFEEt of Symmetry in Two−Port Networks",
"Condition for Symmetry in Two−Port Networks",
"Condition for Reciprocity in Two−Port Networks (Part 1)",
"Condition for Reciprocity in Two−Port Networks (Part 2)",
"Series−Series Interconnection of Two−Port Networks",
"Parallel−Parallel Interconnection of Two−Port Networks",
"Series−Parallel Interconnection of Two−Port Networks",
"Parallel−Series Interconnection of Two−Port Networks",
"Cascade Interconnection of Two−Port Networks",
"Two−Port Network (Important Shortcuts)",
"Bartlett's Bisection Theorem",
"Two−Port Networks (Solved Problem 1)",
"Two−Port Networks (Solved Problem 2)",
"Two−Port Networks (Solved Problem 3)",
"Two−Port Networks (Solved Problem 4)",
"Two−Port Networks (Solved Problem 5)",
"Two−Port Networks (Solved Problem 6)",
"Open Circuit & Short Circuit Impedances (In Terms of ABCD-Parameters)",
"Two−Port Networks (Solved Problem 7)",
"Two−Port Networks (Solved Problem 8)",
"ABCD−Parameters of an Ideal Transformer",
"ABCD−Parameters of Gyrator",
"Practice Sheet-2 | Two-Port Networks | Network Theory",
"Sinusoidal Steady-State Analysis (Introduction)",
"Sinusoids",
"Sinusoids (Solved Problems)",
"Phasors",
"Phasors (Solved Problem 1)",
"Phasors (Solved Problem 2)",
"Phasors (Solved Problem 3)",
"Phasor Relationship for Resistor",
"Phasor Relationship for Inductor",
"Phasor Relationship for Capacitor",
"Instantaneous Power in AC Circuits",
"Average Power in AC Circuits",
"Average Power in AC Circuits (Solved Problem 1)",
"Average Power in AC Circuits (Solved Problem 2)",
"Root Mean Square (RMS) Value",
"RMS Value (Solved Problem)",
"Apparent Power & Power Factor",
"Power Factor (Solved Problem)",
"Complex Power & Reactive Power",
"Complex Power (Solved Problem)",
"Power Triangle",
"Power Triangle (Solved Problem)",
"Phasor Diagram of Series RL Circuit",
"Phasor Diagram of Series RC Circuit",
"Phasor Diagram of Series RLC Circuit",
"Phasor Diagram of Parallel RL Circuit",
"Phasor Diagram of Parallel RC Circuit",
"Phasor Diagram of Parallel RLC Circuit",
"Sinusoidal Steady-State (Solved Question 1)",
"Sinusoidal Steady-State (Solved Question 2)",
"Sinusoidal Steady-State (Solved Question 3)",
"Sinusoidal Steady-State (Solved Question 4)",
"Sinusoidal Steady-State (Solved Question 5)",
"RMS & Average Values of Standard Waveforms",
"Sinusoidal Steady-State (Solved Question 6)",
"Introduction to Network Theorems",
"Superposition Theorem",
"Superposition Theorem with DFEEendent Sources",
"Superposition Theorem (Problem 2)",
"Superposition Theorem (Problem 3)",
"Superposition Theorem (Problem 4)",
"Thevenin's Theorem",
"Thevenin's Theorem (Problem 1)",
"Thevenin's Theorem with DFEEendent Sources",
"Thevenin's Theorem (Problem 3)",
"Thevenin's Theorem (Problem 4)",
"Thevenin's Theorem (Problem 5)",
"Thevenin's Theorem (Problem 6)",
"Norton's Theorem",
"Source Transformation",
"Source Transformation (Problem 1)",
"Source Transformation (Problem 2)",
"Norton's Theorem with DFEEendent Source",
"Norton's Theorem (Problem 2)",
"Norton's Theorem (Problem 3)",
"Norton's Theorem (Problem 4)",
"Norton's Theorem (Problem 5)",
"Reciprocity Theorem",
"Reciprocity Theorem (Problem 1)",
"Reciprocity Theorem (Problem 2)",
"Millman's Theorem",
"Millman's Theorem (Solved Problem)",
"Compensation Theorem",
"Substitution Theorem",
"Tellegen's Theorem",
"Maximum Power Transfer Theorem",
"Maximum Power Transfer Theorem (Solved Problem 1)",
"Maximum Power Transfer Theorem (Solved Problem 2)",
"Maximum Power Transfer Theorem (Solved Problem 3)",
"Maximum Power Transfer Theorem (Solved Problem 4)",
"Maximum Power Transfer Theorem (Solved Problem 5)",
"Maximum Power Transfer Theorem (Solved Problem 6)",
"Maximum Power Transfer Theorem for AC Circuits",
"Maximum Power Transfer Theorem (Solved Problem 7)",
"Maximum Power Transfer Theorem (Solved Problem 8)",
"Maximum Power Transfer Theorem (Solved Problem 9)",
""


  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `FEE Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 212]
              
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
          <h1 className="text-3xl sm:text-4xl font-bold">FEE - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 212)}
        

        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 212)}
        
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

export default FEE;
