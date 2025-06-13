







import React, { useState } from "react";

const DE = () => {
  // RDElace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [
    "M0mx8S05v60",
    "F5h3z8p9dPg",
    "jRL9ag3riJY",
    "izBaDRyqnBk",
    "2xXErGeeb_Q",
    "RF9I6UzI4Rc",
    "WW-NPtIzHwk",
    "OjWmVCG8PLA",
    "k04ksfLBuak",
    "uPBYaCarXDM",
    "3pbH9IhxwOg",
    "xnLBbOYYnHM",
    "NGgNoa0_zns",
    "nXsiLPJfDZ4",
    "ihTH1C6qCYI",
    "K2cpJex0o_A",
    "Km5pTz67uGc",
    "f0trF1LtYZ4",
    "KBlYNYpFtIs",
    "gtucOKD1pHA",
    "ZEOeN8rGlXU",
    "37XqJqt0Jl4",
    "bY8o35iCyGQ",
    "xsG3J7cxloM",
    "9RLEt0r0SCs",
    "IcTCjbq9otk",
    "jQW2yxxodqw",
    "Pp1mzhN1AaU",
    "crSGS1uBSNQ",
    "w7ZLvYAi6pY",
    "2U9b76JRz7s",
    "1J89-aWI-5Y",
    "uVpQ9pPskNI",
    "6Tt-RA6KD30",
    "6WGTf0fg4zA",
    "1tHgs0mrZ5I",
    "urasJ3jx08I",
    "WI6Uvci2p7E",
    "s9kwJ03uzmE",
    "Ri0VhKhw7dY",
    "31N9tjaWZbs",
    "_kwXcIV7dyo",
    "VKemv9u40gc",
    "Qq-4h4tlKAQ",
    "ynvcRidq--0",
    "Cvk7FyepPXQ",
    "y0B6tuC6niE",
    "3mV7q3_OAGM",
    "66sIxqnXUvI",
    "ldFofOqKcPs",
    "iS8i6RyZ2TE",
    "S_fPMrrIA30",
    "V-e9Q9YWC6U",
    "1k71RxUtgUY",
    "pWORlDyPxs8",
    "kxcL0Vb5bEQ",
    "kx8DFNf6pQU",
    "L_m7jBvtzpQ",
    "hCmbZ0bWPfE",
    "0rLiYpy2CqQ",
    "yPu57aSj9kA",
    "IBgiB7KXfEY",
    "X0YZY2yqQJA",
    "LHw8TVk9iOY",
    "CXn4lxBlO2U",
    "0dPN4gh0CKI",
    "cF-Q5j7RUEw",
    "-qMm9hhvp9Y",
    "DdMcAUlxh1M",
    "1A_NcXxdoCc",
    "wbH2VxzmoZk",
    "xDARFvArIpc",
    "iogRGu7nbJw",
    "TbV2lVIdfEM",
    "1kLbY1-f4rs",
    "9VKHu3V4wEE",
    "bd16TkFCDjM",
    "ChtmE09BSy0",
    "MZ_Pd40F4MU",
    "Z6Nds10n7rs",
    "FPrcIhqNPVo",
    "uWjKzsWXAF4",
    "p7ittaZrZ1g",
    "J_t_7npo0CE",
    "k_gavfON5uA",
    "a89jQWIGrY4",
    "nIxpTuR0E0s",
    "_F9nAb6m4U4",
    "WUEmPO13iAI",
    "iBSMoDLhxB4",
    "lPT9Ltjij1s",
    "1_cxX2pxf10",
    "l1jgq0R5EwQ",
    "i6SjOZSxMH8",
    "vMrWwGz0kb0",
    "RfTGvpY2Z5Y",
    "smeUN1Bxj3M",
    "_qGFpgpqf7s",
    "vZKRs_1jPeI",
    "SzV4l0_1MCQ",
    "aLUY-s7LSns",
    "RK3P9L2ZXk4",
    "Z_DYRgtAXfw",
    "NO7Gt8IDSGA",
    "SV4VTYWxKV4",
    "dBXGGWbtt6U",
    "S91WnV2wCbA",
    "P_UW41wMvpM",
    "ulIRZPFd3Nc",
    "TWhRqp8eVhU",
    "1K6f05yuAr8",
    "7Ell1saTBM4",
    "YHVenkuydzw",
    "7Bz9IgFNhDo",
    "6Z1WikEWxH0",
    "9lyqSVKbyz8",
    "9O7OJi7RCLQ",
    "FKvnmxte98A",
    "g1Lfz1XgrH8",
    "b0z7YKKCCyY",
    "_nd77x1ooGQ",
    "uoBZZ53Okvo",
    "neXhD9qyQmo",
    "XdhygaTrwCo",
    "vOFeSu6Zr94",
    "ai8FpkD5gGo",
    "HEluMErB3-s",
    "t3Ed13z9uz8",
    "4kgPMT9k3bg",
    "-9s3xBlcBVM",
    "vMvvggyriCc",
    "BhUUmbz76P0",
    "feBvhLFQEDk",
    "kEj-m3YuGa4",
    "I_-3HN1ueNk",
    "IgaTy_Tm2_M",
    "6R-ZC8rLqm8",
    "u863cwgdlnA",
    "sE695XvWFSY",
    "S9olXqYBHic",
    "o22PeIImcKc",
    "SBDahvbKGfc",
    "AaN72s5WfOM",
    "kt8d3CYWGH4",
    "wx0NyUfpm48",
    "Pi_MHyMoenA",
    "GIMahA35dUE",
    "m1QBxTeVaNs",
    "HZg7fNu-l24",
    "uiKKRPZbuXA",
    "dnfXXpW7tIw",
    "4c6z9RKrC8Q",
    "j6krFp511HA",
    "lnQD2_M9uDI",
    "trPGhO7MPnw",
    "t2LZtaNck_g",
    "5ykewHgHYBI",
    "wcfnEla_Y78",
    "9mh-2QwxmF4",
    "ApJ972OYyXQ",
    "JGl7dV1UgMI",
    "NytpDrESCV8",
    "B9eUdgCKEkg",
    "mXoQ4WAQ0qk",
    "NNOSWnTHakY",
    "NbON135lf60",
    "0_OZKWdCixw",
    "vdZKehWMJSM",
    "ntiv1g7G_C4",
    "6jteVyUcAQU",
    "eu16cf1RFu0",
    "XNAK-L7NlOM",
    "HXG_YPVNIsM",
    "IXORIs1dHs0",
    "HjD5mVbbBK4",
    "kNG0l2vAGjw",
    "L80k-alK58g",
    "iaIu5SYmWVM",
    "yqg1sqhZG3M",
    "s1DSZEaCX_g",
    "eEeBh8jfDjg",
    "noUcCs2zNaI",
    "5Um3NDvsYjQ",
    "l20xHDJPHBM",
    "mq0rLKpkjAQ",
    "fKVZpupyP_o",
    "5vkWccb7uO4",
    "6e8oV2blkGs",
    "svFUEJkoeVY",
    "yOW-JsJL1Ks",
    "X4mx7J1ckyU",
    "-paFaxtTCkI",
    "b43_I4r1R2c",
    "unorn9n-UpE",
    "HGFGQ3D3iJ8",
    "7LmBcGiiYwk",
    "zoEeQgQkPLA",
    "AEGzpMlOsvc",
    "bMHJ1qldiaE",
    "XXmW7nY4EjY",
    "jrQ1YYgiOTo",
    "qlq4NHk5Y_w",

  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "What is Signal?",
    "What is an Analog Signal?",
    "What is Digital Signal?",
    "Need of Digital Signals",
    "Introduction to Digital Electronics",
    "Switch and Bits Intuition",
    "Introduction to Boolean Algebra (Part 1)",
    "Introduction to Boolean Algebra (Part 2)",
    "Boolean Algebra Examples (Part 1)",
    "Boolean Algebra Examples (Part 2)",
    "Redundancy Theorem (Boolean Algebra Trick)",
    "Sum of Products (Part 1) | SOP Form",
    "Sum of Products (Part 2) | SOP Form",
    "Product of Sums (Part 1) | POS Form",
    "Product of Sums (Part 2) | POS Form",
    "SOP and POS Form Examples",
    "Minimal to Canonical Form Conversion (Part 1)",
    "Minimal to Canonical Form Conversion (Part 2)",
    "Examples & Tricks (SOP and POS Forms)",
    "Positive and Negative Logic",
    "Dual Form",
    "Self Dual",
    "Complement Meaning and Examples",
    "Venn Diagram",
    "Switching Circuits (Part 1)",
    "Switching Circuits (Part 2)",
    "Statement Problems in Boolean Algebra (Part 1)",
    "Statement Problems in Boolean Algebra (Part 2)",
    "Introduction to Number Systems",
    "Binary Number System",
    "Decimal to Binary Conversion",
    "Decimal to Octal Conversion",
    "Decimal to Hexadecimal Conversion",
    "Binary to Decimal Conversion",
    "Octal to Decimal Conversion",
    "Hexadecimal to Decimal Conversion",
    "Octal to Binary & Binary to Octal Conversion",
    "Hexadecimal to Binary & Binary to Hexadecimal Conversion",
    "Hexadecimal to Octal & Octal to Hexadecimal Conversion",
    "Binary Addition",
    "Binary Subtraction",
    "Binary Multiplication",
    "Binary Division",
    "Octal Addition",
    "Octal Subtraction",
    "Octal Multiplication",
    "Hexadecimal Addition",
    "Hexadecimal Subtraction",
    "Hexadecimal Multiplication",
    "r's Complement",
    "(r-1)'s Complement",
    "1's and 2's Complement",
    "Shortcut for 2's Complement",
    "Data Representation using Signed Magnitude",
    "Data Representation using 1's Complement",
    "Data Representation using 2's Complement",
    "Binary Subtraction using 1's Complement",
    "Binary Subtraction using 2's Complement",
    "Classification of Codes",
    "Binary Coded Decimal (BCD) Code",
    "BCD Addition",
    "Shift Add 3 Method | Simple method for Binary to BCD conversion",
    "2421 Code",
    "Excess-3 Code (XS-3 Code)",
    "Excess-3 Code Addition",
    "Introduction to Gray Code",
    "Binary to Gray Code Conversion",
    "Gray Code to Binary Conversion",
    "What is Parity?",
    "Hamming Code | Error Detection",
    "Hamming Code | Error Correction",
    "Logic Gates (Part 1)",
    "Logic Gates (Part 2)",
    "Logic Gates (Part 3)",
    "Logic Gates (Part 4)",
    "Logic Gates (Part 5) | Important!",
    "Logic Gates (Part 6) | Important!",
    "NAND Gate as Universal Gate (Part 1)",
    "NAND Gate as Universal Gate (Part 2)",
    "NOR Gate as Universal Gate",
    "Karnaugh Map (K' Map) - Part 1",
    "Karnaugh Map (K' Map) - Part 2",
    "Karnaugh Map (K' Map) - Part 3",
    "K' Map and Implicants",
    "4 Variable Karnaugh Map (Part 1)",
    "4 Variable Karnaugh Map (Part 2)",
    "4 Variable Karnaugh Map (Part 3)",
    "Don't Care in Karnaugh Map (K' Map)",
    "Don't Care in K' Map (Response to Doubt)",
    "K' Map using Max Terms (Part 1)",
    "K' Map using Max Terms (Part 2)",
    "5 variables K' Map",
    "Quine-McCluskey Minimization Technique (Tabular Method)",
    "Digital Electronics Previous Year Solution of DRDO & ISRO (Part 2)",
    "Digital Electronics Previous Year Solution of DRDO & ISRO (Part 3)",
    "4-Bit Even Parity Generator",
    "Seven Segment Display Decoder",
    "Seven Segment Display Decoder (Part 2)",
    "Seven Segment Display Decoder (Part 3)",
    "Comparison between Combinational and Sequential Circuits",
    "Half Adder",
    "Full Adder",
    "Full Adder using Half Adder",
    "4 Bit Parallel Adder using Full Adders",
    "Half Subtractor",
    "Full Subtractor | Easy Explanation",
    "Realizing Half Adder using NAND Gates only",
    "Realizing Half Adder using NOR Gates only",
    "Realizing Full Adder using NAND Gates only",
    "Realizing Half Subtractor using NAND Gates only",
    "Realizing Half Subtractor using NOR Gates only",
    "Realizing Full Subtractor using NAND Gates only (Part 1)",
    "Realizing Full Subtractor using NAND Gates only (Part 2)",
    "2-Bit Multiplier Using Half Adders",
    "Carry Lookahead Adder (Part 1) | CLA Generator",
    "Carry Lookahead Adder (Part 2) | CLA Adder",
    "BCD Adder | Simple Explanation",
    "Introduction to Multiplexers | MUX Basic",
    "4X1 Multiplexer",
    "8X1 Multiplexer",
    "MUX Tree Basic | 4X1 MUX using 2X1 MUX | Easy Explanation",
    "Implementing 8X1 MUX using 2X1 MUX",
    "Implementing 8X1 MUX using 4X1 MUX (Special Case)",
    "32X1 MUX using 8X1 MUX",
    "Implementation of Boolean Function using Multiplexers",
    "1-Bit Full Adder using Multiplexer",
    "Logical Expression from Multiplexer",
    "Introduction to Demultiplexer | 1:2 DEMUX",
    "1:4 Demultiplexer",
    "Full Subtractor using 1:8 Demultiplexer",
    "Demultiplexer as Decoder",
    "2-Bit Comparator",
    "Introduction to Encoders and Decoders",
    "Priority Encoder",
    "Decimal to BCD Encoder",
    "Octal to Binary Encoder",
    "Hexadecimal to Binary Encoder",
    "Full Adder Implementation using Decoder",
    "Practice Problems on Combinational Circuits (Part 1)",
    "Practice Problems on Combinational Circuits (Part 2)",
    "Practice Problems on Combinational Circuits (Part 3)",
    "Practice Problems on Combinational Circuits (Part 4)",
    "Introduction to Sequential Circuits | Important",
    "SR Latch | NOR and NAND SR Latch",
    "What is a Clock?",
    "Triggering Methods in Flip Flops",
    "How to get Edge Triggering | Simulation using Multisim",
    "Difference between Latch and Flip Flop",
    "Introduction to SR Flip Flop",
    "Truth Table, Characteristic Table and Excitation Table for SR Flip Flop",
    "Introduction to D flip flop",
    "Truth Table, Characteristic Table and Excitation Table for D Flip Flop",
    "Introduction to JK flip flop",
    "Truth Table, Characteristic Table and Excitation Table for JK flip flop",
    "Race Around Condition or Racing in JK Flip Flop",
    "Master Slave JK Flip Flop",
    "Behaviour of Master Slave D Flip Flop",
    "Introduction to T flip flop",
    "Truth Table, Characteristic Table and Excitation Table for T flip flop",
    "5 Steps for Flip Flop Conversions | JK to D Flip Flop Conversion",
    "T Flip Flop to D Flip Flop Conversion",
    "SR Flip Flop to JK Flip Flop Conversion",
    "SR Flip Flop to T Flip Flop Conversion",
    "Preset and Clear Inputs in Flip Flop",
    "Introduction to State Table, State Diagram & State Equation",
    "Design Procedure for Clocked Sequential Circuits",
    "Mealy and Moore State Machines (Part 1)",
    "Mealy and Moore State Machines (Part 2)",
    "Analysis of Clocked Sequential Circuits (with D Flip Flop)",
    "Analysis of Clocked Sequential Circuits (with JK Flip Flop)",
    "Analysis of Clocked Sequential Circuits (with T Flip Flop)",
    "Sequence or Pattern Detector",
    "Sequence Detector (Example)",
    "State Reduction and Assignment",
    "ASM Chart",
    "ASM Chart for Moore State Machine",
    "Difference between Synchronous and Asynchronous Sequential Circuits",
    "Introduction to Counters | Important",
    "Types of Counters | Comparison between Ripple and Synchronous counters",
    "3 Bit Asynchronous Up Counter",
    "4 Bit Asynchronous Up Counter",
    "3 bit & 4 bit Asynchronous Down Counter",
    "3 Bit & 4 Bit UP/DOWN Ripple Counter",
    "Modulus of the Counter & Counting up to Particular Value",
    "State Diagram of a Counter",
    "Decade (BCD) Ripple Counter",
    "How to Design Synchronous Counters | 2-Bit Synchronous Up Counter",
    "3-Bit Synchronous Up Counter",
    "3-Bit & 4-bit Up/Down Synchronous Counter",
    "Ring Counter",
    "Johnson's Counter (Twisted/Switch Tail Ring Counter)",
    "Introduction to Registers",
    "Data Formats and Classification of Registers",
    "Shift Register (SISO Mode)",
    "Shift Register (SIPO & PIPO Mode)",
    "Shift Register (PISO Mode)",
    "Bidirectional Shift Register",
    "Universal Shift Register",
    "Practice Problems on Sequential Circuits (Part 2)",
    "Practice Problems on Sequential Circuits (Part 3)",
    "Programmable Logic Array (PLA) | Easy Explanation",
    "Programmable Array Logic (PAL)",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `DE Video ${i + 1}`,
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
                className={`w-full text-left px-3 py-2 rounded transition-all duration-500 ${selectedSection === key
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
          <h1 className="text-3xl sm:text-4xl font-bold">Digital Electronics - Video Lectures</h1>
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

export default DE;
