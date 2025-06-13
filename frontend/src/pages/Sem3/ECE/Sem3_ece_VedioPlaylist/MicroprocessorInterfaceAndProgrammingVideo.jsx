


 
    
  


    import React, { useState } from "react";
    
    const MIP = () => {
      // RMIPlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
      const videoIDs = [
 "RP2sWt_oAWo",
"jHkBOGh7uEk",
"IISH-UVaspI",
"Jm6wwsalLEM",
"sgeLXvEYLKM",
"xLIZxsqlYE8",
"gMyo3CHOBJo",
"TRMCt1NxM8s",
"66jIYW5kbj4",
"QCwsh24dRmo",
"OK_LudRfBas",
"PkTykyzOPNI",
"N31Xvt7hZq8",
"34FDLMMM2ZI",
"0Au-C0zIuMM",
"d9HtAcB8-SY",
"6c583cjx1FY",
"iDzdyRCdqnA",
"ayCBEtQHdT0",
"5JkwAKiCGp0",
"u8pHURx3qhM",
"9UTrvS0Rrzo",
"vKWgIPK02vw",
"YDJ8wucEyig",
"UBBSu4LcpXI",
"41bhvsdyyXI",
"euRRcFmN8nQ",
"CexDTGC6G2k",
"t-hYA1zvcbE",
"ulOT3pdQgDE",
"6vb0KzgfZ4I",
"KjO5rZAL7wQ",
"zhBveNfFnzM",
"KRdDW6xEnYc",
"Ns0T0uEzHnU",
"BmNAfB7TFyA",
"a5HSzTMSrV4",
"rnDzuuynB2o",
"y9GfO8-h4zk",
"MXeV_lEXo0s",
"Wi4coD_KUx4",
"YTKLvT074a4",
"_hjJObCvVNk",
"HHpGELmAmSo",
"Hk2nz-MfW70",
"Dpiw3S8CkAo",
"YWV2jfTEc3Q",
"h53kzGu1dYI",
"wZX9EbBOfy8",
"GPpYzCk38VI",
"JCAjbuvvXbA",
"la-EoWUcSp4",
"D9baeIvRXZo",
"35iLTlQspKU",
"vQb_w2xnw_Q",
"XbyEsuYlXHQ",
"eWUYirQPwqM",
"_3SpMwyyFTw",
"JFsUlMwe-oY",
"sa8QCHIGZM8",
"BnJnVL2IUlc",
"vs3fkk_ov-8",
"ajBMh8oEymg",
"xCXZwE56DxA",
"AmwU904JiNU",
"iKmYfRragvQ",
"8fIkQr0rvUA",
"2XoGrDm-jkw",
"uSZpajmHV0c",
"BV3WO5-IMCA",
"0f0IH8dfpFw",
"D6nvpbp2nFs",
"iDOCGYaUFJ4",
"U7-FDr0p-Bw",
"9VASx0RLo7I",
"IlssqVdG4Kc",
"yJa-w61QpA0",
"0_zHIEXWdEs",
"vVJpcvfreBg",
"qK8IyZHed9c",
"-vKEh_-3lc4",
"nLnb4JyL_fM",
"fMPKPh1QTFk",
"RHgCgNDTP7U",
"15UkSkxAqbw",
"jWBUEzPKowg",
"4xDBFwO-3k4",
"i2Lq-Ub2gLw",
"B3j_qMU78Yw",
"WyIphn2_stU",
"udQaZsFCm00",
"vrcQpO4sx1U",
"427ozUG3cik",
"oeY-lACyxVU",
"5lY1BvF6D6k",
"NnMuI10qMHs",
"c_OOZEInaOE",
"o7Lg0aKtcos",
"ACTk57WV3fc",
"9A9iS7DUI90",
"a9I4V36iqW0",

      ];
    
      // Provide a description for each video.
      const videoDescriptions = [
        "8085 Microprocessor by Engineering Funda",
"8085 Course Trailer",
"Engineering Funda Services",
"History of Intel Microprocessors: Evolution and Development | Microprocessors",
"Microprocessor vs Microcontroller: Key Differences Explained",
"How to Count Memory: Understanding Memory Size and Identification",
"What is a Computer? Understanding the Basics and Functionality",
"How Programs are Loaded into Processor Memory: A Step-by-Step Guide",
"How a Program is Executed in a Processor | 8085 Microprocessor",
"Machine Language, Assembly Language and Higher Level Language",
"Architecture of 8085 Microprocessor: Data Flow and Working Explained | 8085",
"Pin Diagram of 8085 Microprocessor: Detailed Pin Configurations and Functions | Microprocessor",
"Buses in the 8085 Microprocessor: Address, Data, and Control Buses | Microprocessor 8085",
"Flag Register of 8085 | Status Register of 8085 Microprocessor | 8085 Microprocessor",
"Programming Modal of 8085 | Register Model of 8085 | Types of registers in 8085 Microprocessor",
"Generation of Control Signals in 8085 Microprocessor: Understanding Read and Write Signals",
"Address Data Demultiplexing in 8085 Microprocessor | Demultiplexing Of AD7-AD0",
"Memory Mapped IO vs IO Mapped IO in 8085 Microprocessor: Key Differences Explained",
"Operation Types of Microprocessor 8085: Overview and Details | 8085",
"Machine Cycles in Microprocessor 8085 | Control Signals with Different Machine Cycles in 8085",
"Opcode Fetch Timing Diagram in 8085 Microprocessor | MOV Instruction Timing Diagram",
"Memory Read and Write Machine Cycles in 8085 Microprocessor | Timing Diagram",
"Timing Diagram of MVI Instruction in 8085 Microprocessor | Timing Diagram",
"Timing Diagram of OUT Instruction in 8085 Microprocessor | Timing Diagram",
"Timing Diagram of IN Instruction in 8085 Microprocessor | Timing Diagram",
"Timing Diagram of STA Instruction in 8085 Microprocessor | Timing Diagram",
"Timing Diagram of LDA Instruction in 8085 Microprocessor  | Timing Diagram",
"Stack in 8085 Microprocessor: PUSH & POP Instructions | 8085 Microprocessor",
"Subroutine in Microprocessor 8085: Basics and Procedures | 8085",
"Passing Parameters to Subroutines through Stack in 8085 Microprocessor",
"Interrupt Service Routine in 8085 Microprocessor: Execution and Steps | 8085",
"Software Interrupt vs Hardware Interrupt in 8085 Microprocessor: Key Differences",
"Hardware Interrupts in Microprocessor 8085 Explained: Types and Priority",
"Interrupt Structure in Microprocessor 8085: INTR, TRAP, and RST Interrupts Explained",
"SIM and RIM Instructions in Microprocessor 8085: Understanding SIM and RIM Commands",
"Creating a Square Wave with SIM Instruction in 8085: Program and Delay Calculation | 8085",
"Serial Communication Using SIM Instruction in Microprocessor 8085: UART Standard",
"Addressing Modes in 8085 Microprocessor | Addressing Modes | Microprocessor 8085",
"One Byte, Two Byte, and Three Byte Instructions in 8085 Microprocessor | Assembly Instructions",
"Data Transfer Instructions in Microprocessor 8085 | Examples",
"Arithmetic Instructions in Microprocessor 8085 | Examples",
"Logical Instructions in Microprocessor 8085 | Examples",
"Branch Control Instructions in Microprocessor 8085 | Examples",
"DAA Instruction in 8085 Microprocessor | Examples",
"Comparison of JMP and CALL Instructions in 8085 Microprocessor | Instruction Execution Process",
"Delay Programming for 8085 Microprocessor: Flow Chart and Generation Techniques",
"Generation of Delay in Microprocessor 8085: Why Timers Aren't Used",
"Counter Designing in 8085 Microprocessor: Program and Techniques | 8085",
"Square Wave Generation in 8085 Microprocessor: Detailed Program Guide",
"8259 Programmable Interrupt Controller: Block Diagram and Working Explained",
"8255 Programmable Peripheral Interface: Block Diagram and Working Explained",
"Control Word and Modes of 8255: BSR Mode, IO Modes, and Detailed Mode 0, 1, & 2",
"8255 Programming Guide: Control Word, Interfacing, and Addressing Details",
"8253/54 Programmable Interval Timer: Block Diagram, Features, and Control Word Explained",
"Modes of 8254 Programmable Interval Timer: Control Word and Operational Basics",
"8257 Direct Memory Access: Basics of DMA, HOLD, HLDA, and Working Mechanism",
"Block Diagram and Working of DMA 8257: Basics, Channels, and Priority Resolver",
"Memory Classification: Types of Memory, RAM, ROM, SRAM, and DRAM Explained",
"Series of Memory ICs: EPROM and RAM IC Series Explained",
"Memory Interfacing with 8085 Microprocessor: Solved problems - 1",
"Memory Interfacing with 8085 Microprocessor: Solved problems - 2",
"Memory Interfacing with 8085 Microprocessor: Solved problems - 3",
"Starting and Ending Address Calculation with OFFSET in memory | Memory Mapping",
"Size of Memory from Starting and Ending Address | Memory Mapping",
"Number of IC's required to construct given memory | Memory Mapping",
"Number of ICs That Can Be Interfaced with 8085 Microprocessor | Memory Interfacing",
"8085 Microprocessor Memory Mapping: Examples - 1",
"8085 Microprocessor Memory Mapping: Examples - 2",
"8085 Microprocessor Memory Mapping: Examples - 3",
"8085 Microprocessor Memory Mapping: Examples - 4",
"Peripheral Mapped I/O in 8085 Microprocessor | 8085",
"Blueprint of I/O Interfacing with 8085 Microprocessor: A Comprehensive Guide",
"Absolute Decoding vs. Partial Decoding in 8085 Microprocessor: Key Differences",
"LED Interfacing with 8085 Microprocessor | IO Interfacing",
"Seven Segment Display Interfacing with 8085 Microprocessor | IO Interfacing",
"DIP Switch Interfacing with 8085 Microprocessor | IO Interfacing",
"IO Interfacing and Addressing Registers : Examples - 1",
"IO Interfacing and Addressing Registers : Examples - 2",
"8085 Microprocessor Assembly Language Programming : Examples - 1",
"8085 Microprocessor Assembly Language Programming : Examples - 2",
"8085 Microprocessor Assembly Language Programming : Examples - 3",
"8085 Microprocessor Assembly Language Programming : Examples - 4",
"8085 Microprocessor Assembly Language Programming : Examples - 5",
"8085 Microprocessor Assembly Language Programming : Examples - 6",
"8085 Microprocessor Assembly Language Programming : Examples - 7",
"8085 Microprocessor Assembly Language Programming : Examples - 8",
"Introduction to Programming Simulator of 8085 Microprocessor",
"8 bits and 16 bits Addition program in 8085 Microprocessor | Assembly Programming",
"Multiplication program in 8085 Microprocessor | Assembly Programming",
"Division program in 8085 Microprocessor | Assembly Programming",
"Logical Operation AND, NAND, OR, NOR, XOR & XNOR program in 8085  | Assembly Programming",
"Maximum from Array program in 8085 Microprocessor | Assembly Programming",
"Store Array in Reverse order program in 8085 Microprocessor | Assembly Programming",
"Store Array in Ascending order program in 8085 Microprocessor | Assembly Programming",
"Addition of Array program in 8085 Microprocessor | Assembly Programming",
"Find total positive, negative and Zeros numbers from array program in 8085  | Assembly Programming",
"Fibonacci Series program in 8085 Microprocessor | Assembly Programming",
"Pack and Unpack program in 8085 Microprocessor | Assembly Programming",
"DAA instruction program in 8085 Microprocessor | Assembly Programming",
"8085 Question Bank",
"Microprocessor and Microcontroller Interview Questions",

      ];
    
    
    
      const videoData = videoIDs.map((id, i) => ({
        id: i + 1,
        title: `MIP Video ${i + 1}`,
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
              <h1 className="text-3xl sm:text-4xl font-bold">Microprocessor Interface and Programming - Video Lectures</h1>
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
    
    export default MIP;
    