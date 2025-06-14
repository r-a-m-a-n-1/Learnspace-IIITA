import React, { useState } from "react";

const COA = () => {
 const videoIDs = [
 "Ol8D69VKX2k",
"GRInNLx3Tug",
"6_PHIL4LZEU",
"PujjqfUhtNo",
"lQcU4WwVALI",
"bG9kSO85rb4",
"Ez_kyBS-y5w",
"V_QS1HzJ8Bc",
"OxaYvJquPe0",
"bFzo9xzYS7s",
"SuVmdDd3eGE",
"z7UCw5zf_Lk",
"_2AZ8ZLLxlE",
"uwnsMaH-iV0",
"mVw7HiUVYt0",
"-Ara-kdrYUs",
"KhAh6thw_TI",
"ejTCm7eHsM8",
"-oaiLatXdXw",
"DyxCVGH3350",
"AByFL521DRg",
"e8RCnG2ibJk",
"F_gOWc50MtI",
"3pEFBchq9vc",
"1tvW8kzOpSA",
"7lxAfszjy68",
"_Hh-NcdbHCY",
"QyQf9KvkQA4",
"r_ZE1XVT8Ao",
"YNpaELJZm2c",
"KEc4NQZjkMI",
"h_kAcVuJEm0",
"MOh4kLGPpH0",
"N0D_PC910wE",
"N7srLwPd1gw",
"KsDrKNcmHZ0",
"mjdKssAPtPs",
"SNcbZXtS6NI",
"nlLxrMBzsMM",
"I1Gz2jlBg-s",
"MSB2GZ0xydc",
"MiDFgPYrjBk",
"JcI82I_WHok",
"8YMPJ9NC_n8",
"YGOlvcTlrYc",
"0hWNRPHd93U",
"ZP8J1tBtbvw",
"Lyez-JarHV8",
"Nrw1vQrFSa8",
"3pXr3N_Wwp8",
"MGu-P4OOnh0",
"WGN4NWICTpQ",
"AlMkuzzNMmg",
"hCvAW_5-cJE",
"CnrTega81Ik",
"yBJK5l3P_7A",
"Ls70hTLijdA",
"P0AqK6ecOvo",
"InuCUa1jzFI",
"8HQChU2u2ik",
"BGrFRN0qNq4",
"29huxQik8zU",
"ATocwy9Y6jc",
"-CEJXDeDsAQ",
"NoFP9Nvu1qc",
"hlh1sdnvvvk",
"V2FdCdRqhvI",
"7towQUO9aZI",
"B-irf7FZNHA",
"WxQ5oxBLmjk",
"3hT9oh_4K2Y",
"xmJVtDm333I",
"ss9FpyRgIjw",
"ribi_XiBq5s",
"Pai6toNcI1I",
"0chMy4T4u3o",
"H4sNsd20jDs",
"wRQnDAsuS28",
"WdmGSWrcMvM",
"GTAWwk31mbE",
"SPw9f2eXh8Y",
"yvdtwKF87Ts",
"BCSf8SzKYts",
"kI4PjBbUaQ8",
"_NFaYk9R9jI",
"TaDrBnRS0_Q",
"K-g-qtV_pC8",
"fnhFHAMQy3o",
"PjmWG_8b3os",
"meSn0UXmgac",
"tnLKU07b-HA",
"MVpOKwTKVSc",
"kGYA3rvnWdU",
"Q8GPrxlbQy4",
"l3fM0XslOS0",
"ge09GjFUmKg",
"L9X7XXfHYdU",
"j8NnE1YeSN0",
"2mowjC3dCqk",
"xBYhHC8_A6o",
"nbDd46e_LpE",
"60fQEm6oodc",
"r6PChksvxp8",
"bNkiChXPRhM",
"M0znE3jqaxs",
"_YJU5WFT9qw",
"i2UKe6lgrqg",
"OXz7wKHr0_I",
"WAO_W6Hpzyk",
"GZz9nz7Vgb0",
"k5YMLXPy1SE",
"Za7ozdjE8VI",
"u-sp4gBAJKI",
"C1H5gurIcJk",
"_CH4cm5PhK8",
"a0jr2003kLo8",
"mtr7oumkwuk",
"PgQIeB-d6HE",
"pqwWQD9Pgjg",
"7RP8SLdW0S0",
"5A677So9epQ",
"l7QV6FBTGdE",
"Na7sLEioUjU",
"Bicfyvcp__s",
"18ZVSnz0JcY",
"fGnMnGyfZVs",
"zwovvWfkuSg",
"-B8N9nltt8Q",
"3-tT52RzgBs",
"_VNY-nhkMhw",
"m1dA7D6c3C0",
"eObN3u3eAnU",
"jZ2jRBVhgSY",
"sLCJJdz0WAg",
"i7o3sxFk454",
"pFndaJARM4Q",
"E6QATWzjWZU",
"EXRicJapuOQ",
"w32d1lD0Jb0",
"cy7BoO1b66k",
"e8ZrvrNdp9o",
"7mcy_xMNGF4",
"Al200Owan9Ck",
"nv0yAm5gc-E",
"R9s34-lnd9k",
"-YtmPoGCdfM",
"BlnI-eZSt4M",
"srlgaJgaxRE",
"qn7zf_OSLsk",
"BuaIGznkhHQ",
"cMKn19y4_9E",
"PWz5VEMYDP8",
"-6JjmJNy3nA",
"3NieJAgkYiw",
"PM728r4oGcE",
"1aG3aFEKxyA",
"QvSmbkcmff0",
"dXOH3Czy5aw",
"-IlIVW1F5dw",
"qhbgkyi_fbw",
"ZW1gb3h-f9k",
"gkgqVEPi3Fk",
"YRASD0-uf_M",
"b6EmT6g_crI",
"FfvcHq8qJWE",
"KSu0QOk2zfM",
"izq9UbqoPnU",
"7n5eyXahEcM",
"5YUnWdkAmoo",
"4wKdjlgRGJY",
"lZjBl5GEQBo",
"Wawl993d-lw",
"bdPyTstCKow",
"0iA6wdlJRvg",
"2greQ1zLPxs",
"wWVoHKwl208",
"vp2DKM0vWnY",
"gUEX41RbHRg",
"Vf0Xd1Y-52M",
"PxTBu5AQ2WQ",
"MeTVaoFAknA",
"zTxFo-eBY7U",
"unL9ort6mHU",
"N_iGxg0jIxg",
"L8hM1WJlYHk",
"b3Ips4ixHw8",
"003ga9OunEc",

  ];

  const videoDescriptions = [
    "Introduction to Computer Organization and Architecture (COA)",
"Basics of Computer Architecture",
"Classifications of Computer Architecture",
"Introduction to Memory",
"Memory Hierarchy & Interfacing",
"Memory Interfacing – Solved PYQs",
"Introduction to Cache Memory",
"Direct Memory Mapping",
"Direct Memory Mapping – Solved Examples",
"Direct Memory Mapping – Solved PYQs (Part 1)",
"Direct Memory Mapping – Solved PYQs (Part 2)",
"Direct Memory Mapping – Solved PYQs (Part 3)",
"Direct Memory Mapping – Hardware Implementation",
"Associative Mapping",
"Associative Mapping – Solved Examples",
"Associative Mapping – Solved PYQ",
"Set Associative Mapping",
"Set Associative Mapping – Solved Examples (Part 1)",
"Set Associative Mapping – Solved Examples (Part 2)",
"Set Associative Mapping – Solved PYQs (Part 1)",
"Set Associative Mapping – Solved PYQs (Part 2)",
"Cache Memory Mapping – A Comparative Study",
"Cache Memory Mapping – Solved PYQ",
"Set Associative Mapping – Bonus PYQs",
"Cache Design - An Overview",
"Cache Replacement Policies - RR, FIFO, LIFO, & Optimal",
"Cache Replacement Policies - MRU, LRU, Pseudo-LRU, & LFU",
"LRU Cache Replacement Policy - Solved PYQs",
"Cache Coherence Problem & Cache Coherency Protocols",
"Snooping-based Cache Coherency Protocol",
"Directory-based Cache Coherency Protocol",
"Introduction to Primary Memory",
"Primary Memory – Architecture of ROM (Part 1)",
"Primary Memory – Architecture of ROM (Part 2)",
"Primary Memory – Architecture of ROM (Part 3)",
"Primary Memory – Architecture of ROM (Part 4)",
"ROM – Solved Examples",
"Primary Memory – RAM",
"Primary Memory – Solved Example",
"Introduction to Secondary Memory",
"Secondary Memory – Hard Disk Drives",
"Hard Disk Drives (Solved Problems) - Set 1",
"Hard Disk Drives – Recording Density & Rotational Speed",
"Hard Disk Drives (Solved Problems) - Set 2",
"Hard Disk Drives (Solved Problems) - Set 3",
"Hard Disk Drives (Solved Problems) - Set 4",
"Hard Disk Drives (Solved Problems) - Set 5",
"Secondary Memory – Solid State Drives",
"Introduction to Number Systems",
"Binary Number System",
"Octal Number System",
"Hexadecimal Number System",
"Conversion to Decimal Number System",
"Conversion from Decimal Number System",
"Number System – Solved Problems (Set 1)",
"Number System – Solved Problems (Set 2)",
"Number System – Solved Problems (Set 3)",
"Number System – Solved Problems (Set 4)",
"Introduction to Complementary Number Systems",
"Complementary Number Systems - Examples",
"Diminished Radix and Radix Complement",
"Subtraction in Diminished Radix Complement",
"Subtraction in Radix Complement",
"Representations of Binary Numbers",
"Representations of Binary Numbers - Solved Problems",
"Sign bit Extension (Part 1)",
"Sign bit Extension (Part 2)",
"Overflow in Signed and Unsigned Numbers",
"Introduction to Binary Codes",
"8421, Excess-3, and 3321 Codes",
"Binary Codes - Solved Problems",
"BCD Addition",
"BCD Adder",
"Excess-3 Addition",
"Gray Code",
"Error Detection",
"Error Correction",
"Problem of Encoding in Error Detection and Correction",
"Hamming Code",
"Hamming Code – Solved Problems",
"Floating Point Numbers",
"Representations of Floating Point Numbers",
"Explicit vs. Implicit Normalization of Floating Point Numbers",
"Floating Point Numbers - Solved Problems",
"IEEE Standard for Floating-Point Arithmetic (IEEE 754)",
"IEEE 754 - Single and Double Precision",
"IEEE 754 - Solved Problems (Set 1)",
"IEEE 754 - Solved Problems (Set 2)",
"Binary Multiplication",
"The Concept of Booth’s Algorithm",
"The Implementation of Booth’s Algorithm",
"Binary Division",
"The Concept of Restoring Division",
"Implementation of Restoring Division",
"Improving the Hardware of Restoring Division",
"Non-Restoring Division",
"L-1.1: Computer Organization and Architecture Syllabus Discussion for GATE and UGC NTA NET",
"L-1.2: Von Neumann's Architecture | Stored Memory Concept in Computer Architecture",
"L-1.3:Various General Purpose Registers in Computer Organization and Architecture",
"L-1.4:Types of Buses (Address, Data and Control) in Computer Organization and Architecture",
"L-1.5: Common bus system using multiplexer | Computer organization and Architecture",
"L-1.6: Common Bus system| How basic computer works",
"L-1.7: Types of Instructions in General Purpose Computer | Computer Organization and Architecture",
"L-1.8: Data Transfer Instructions in Computer Organisation and Architecture",
"L-1.9: Arithmetic Instructions(Data Manipulation) in Computer Organisation and Architecture",
"L-1.10: Logical Instructions(Data Manipulation) in Computer Organisation and Architecture",
"L-1.11: Shift Instructions(Data Manipulation) in Computer Organisation and Architecture",
"L-1.12: Program Control Instructions(Types of Control Instructions) | Computer Organization",
"L-1.97: What is Instruction Format | Understand Computer Organisation with Simple Story",
"L-1.97: Question on Instruction Format | Computer Organization | UGC NTA NET June 2021",
"L-1.15: Single Accumulator CPU Organisation | Single Address Instructions in Computer Organisation",
"L-1.16: General Register CPU Organisation | Two and Three Address Instructions | COA",
"L-1.17: Register Stack Organisation | Zero Address Instructions | COA",
"L-1.18:Memory Stack Organisation | Memory stack Vs Register stack  | COA",
"L-2.1: What is Addressing Mode | Various Types of Addressing Modes | COA",
"L-2.2: Implied Addressing Mode | Computer Organisation and Architecture",
"L-2.3: Immediate Addressing Mode | Computer Organisation and Architecture",
"L-2.4: Register Mode | Addressing Mode | Computer Organisation and Architecture",
"L-2.5: Register Indirect Mode | Addressing Modes | Computer Organisation and Architecture",
"L-2.6: Auto Increment and Decrement Addressing Modes | Computer Organisation and Architecture",
"L-2.7: Direct Addressing Mode || Computer Organisation and Architecture",
"L-2.8: Indirect Addressing Mode | Computer Organisation and Architecture",
"L-2.9: Relative Addressing Mode || Computer Organisation and Architecture",
"L-2.10: Base Register Addressing Mode || Computer Organisation and Architecture",
"L-2.11: Indexed Addressing Mode || Computer Organisation and Architecture",
"L-2.12: Question on Addressing Modes | Computer Organization | UGC NTA NET 2021",
"L-3.1: Memory Hierarchy in Computer Architecture | Access time, Speed, Size, Cost | All Imp Points",
"L-3.2: Independent vs Hierarchical Memory Organization | 2-Level Memory Organization",
"L-3.3: 3-Level Memory Organisation || Computer Organisation and Architecture",
"L-3.4: GATE 2004 Question on 3-Level Memory Organisation || Computer Organisation and Architecture",
"L-3.5: What is Cache Mapping || Cache Mapping techniques || Computer Organisation and Architecture",
"L-3.6: Direct Mapping with Example in Hindi | Cache Mapping | Computer Organisation and Architecture",
"L-3.7: GATE 2005 Question on Direct Mapping | Cache Mapping Questions | Computer Organisation",
"L-3.8: Fully Associative Mapping with examples in Hindi | Cache Mapping | Computer Organisation",
"L-3.9: Advantages and Disadvantages of Direct Mapping | Cache Mapping | Computer Organisation",
"L-3.10: Set Associative Mapping with Examples in Hindi | Cache Mapping | Computer Organisation",
"L-3.11: Locality of Reference in Cache Memory | Spatial Vs Temporal Locality | Computer Organisation",
"L-3.12: Cache Replacement Algorithms in Computer Organisation and Architecture",
"L-3.97: LRU (Least Recently Used) Cache Replacement Algorithm | Computer Organisation & Architecture",
"L-3.97: Gate 2097 Question on Set Associative Cache Mapping | Computer Organisation and Architecture",
"L-3.15: FIFO Cache Replacement Policy with example | Computer Organisation and Architecture",
"L-3.16: LRU(least recently used ) Cache Replacement Policy | Computer Organisation and Architecture",
"L-4.1: Pipelining with real life example| Need of Pipelining | COA",
"L-4.2: Pipelining Introduction and structure | Computer Organisation",
"L-4.3: Pipelining Vs Non-Pipelining | Instruction Execution | Speedup, Efficiency, Utilization | COA",
"L-4.4: Stage Delay in Pipeline | Previous Year GATE Question | Computer Organisation & Architecture",
"L-4.5: Numerical Question on Pipelining | Previous year GATE Question | COA",
"L-4.6: What is Hazard in Pipelining | various types of Hazards | computer Architecture",
"L-4.7: Structural Hazards in Pipelining | Types of Hazards with Example in Hindi",
"L-4.8: Control Hazards in Pipelining | Types of Hazards with Example in Hindi",
"L-4.9: What is Read After Write(RAW) Hazards| Data Hazard in Pipelining with Example in Hindi | COA",
"L-4.10: Write After Read Hazard with Example|Data Hazards| Computer Organisation and Architecture",
"L-4.11: Write After Write Hazard | Data Hazards in Pipelining | Computer Organization &&Architecture",
"Register Renaming in Computer Organization | Data Hazard",
"I/O Interface in Computer Organization",
"Interrupts in 8085 microprocessor | Types of Interrupts in Computer Organization",
"Daisy Chaining in Priority Interrupt | Priority Based Interrupt in I/O Organization",
"Parallel priority interrupt | I/O organization",
"Question on Interrupt Handling(I/O organization) | Computer Organization | UGC NTA NET June 2021",
"Question on DMA (Direct Memory Access) | Input/Output Organization| COA | UGC NTA NET June 2021",
"RISC vs CISC | Computer Organization & Architecture",
"Operand Forwarding in Computer Organization & Architecture | Data Hazard",
"Cache: GATE 2004 - 2006 | L - 2 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Cache: GATE 2006 - 2007 | L - 3 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Cache: GATE 2012 - 2014 | L - 5 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Cache: GATE 2015 - 2017 | L - 6 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Cache: GATE 2018 - 2021 | L - 7 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Memory Organization GATE 1995-2013 | Lec. - 8 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Memory Organization GATE 1995-2013 | Lec. - 9 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Datapath GATE 2001-2020 | Lec. - 10 | COA GATE PYQ | GATE 2022 | Vishvadeep Gothi",
"Instruction & Addressing Modes: GATE 1987-2004 | Lec. - 11 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Instruction and Addressing Modes: GATE 2005-2015 | Lec. - 12 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Instruction and Addressing Modes: GATE 2017-2021 | Lec. - 13 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"CPU & Control Unit: GATE:1987 - 2004 | Lec. - 14 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"CPU & Control Unit: GATE:2005-2021 | Lec. - 15 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Magnetic Disk: 1990-2007 | Lec. - 16 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Magnetic Disk 2008-2021 | Lec. - 17 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"IO Organization & DMA: 1987-2005 | Lec. - 18 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"IO Organization & DMA: 2005-2021 | Lec. - 19 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Microprogramming: GATE 2003-2004 | Lec. - 20 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Microprogramming: GATE 2006-2021 | Lec. - 21 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Pipelining: GATE 1999-2004 | Lec. - 22 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Cache Write: Write Through & Write Back | Part-5 | COA 2.0 | GATE 2022 | Vishvadeep Gothi",
"Pipelining: GATE 2005-2008 | Lec. - 23 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Pipelining: GATE 2009-2014 | Lec. - 24 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Pipelining: GATE 2014-2016 | Lec. - 25 | COA GATE 2022 PYQ | Vishvadeep Gothi",
"Pipelining: GATE 2017-2021 | Lec. - 26 | COA GATE 2022 PYQ | Vishvadeep Gothi",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `COA Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 97],
              ["Before exam", "Before exam", 97, 161],
              ["PYQ ", "PYQ", 161, 225],
              
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
          <h1 className="text-3xl sm:text-4xl font-bold">Computer Organization and Architecture - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 97)}
        {selectedSection === null && renderSection("Before exam", "Before exam ", 97, 161)}
        {selectedSection === null && renderSection("PYQ ", "PYQ", 161,225)}
        

        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos", 0, 97)}
        {selectedSection === "Before exam" && renderSection("Before exam", "Before exam ", 97, 161)}
        {selectedSection === "PYQ " && renderSection("PYQ ", "PYQ",161,225)}
        
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

export default COA;
