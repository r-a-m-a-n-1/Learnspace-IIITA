import React, { useState } from "react";

const TOC = () => {
  const videoIDs = [
    "p1oqDS0fayc",
    "Udk_AP3QNoc",
    "xZif4Ekykrc",
    "NrCBoPKdJbk",
    "g6TO-hyXDuM",
    "B8LwFM3r8xI",
    "khyf3u59L5c",
    "Mec3CeLCC8g",
    "XGKx_FzIlXY",
    "LVHduopkybY",
    "j4c3hSJzkFA",
    "xf1RY6caE7c",
    "wAcCOIvzOTs",
    "RDCHJWHPUfk",
    "Vo68mxsm7cU",
    "v-v57DLBmsM",
    "IFE2sNsS_7A",
    "og0jibdBKsY",
    "Wqu2264aKKQ",
    "yoqUhVvgVZs",
    "hgCZD8Smf6Q",
    "hD6yX7i51L0",
    "ZN1rSnQW8GA",
    "pdbyY7atrZg",
    "YiyeBepvxko",
    "zhnDBaspfGw",
    "ym0VS8RUXik",
    "y2LrglBA-J4",
    "ce0xAcABOYw",
    "daRQCC6ZWpE",
    "W9DgAH6_T8Q",
    "anuT9pPUQ9A",
    "jSz0f742sV0",
    "kncS7n9jfT0",
    "t_SkBgqwT5Y",
    "-qKaExA6Tk0",
    "Bv53mywsjF8",
    "eisSaOPSuwQ",
    "Cn5T5A9Pt6w",
    "vwPFz-1TnL4",
    "qgm5qHgwp3g",
    "Pjol7chXAAA",
    "gwq38SuH3rc",
    "1geYzTen4k0",
    "vtKu7gZ8BBA",
    "FZgvp0l9o-4",
    "vmUhGzYUbH0",
    "Aa2gAKomepY",
    "7uazflA_yB4",
    "ZdXRvydQV6o",
    "RhORSAsxwco",
    "BkGWnuSENsc",
    "ZhCsgrEjZOY",
    "BdHuyt3eI0M",
    "GV5wa4cBDCQ",
    "yP0Ix8ce3G0",
    "QlDoWR1mCHA",
    "H-qCUuy1PVk",
    "wcu-sL3veQ4",
    "umqzHa90pIU",
    "dPMIWf524ls",
    "M1zEawbSShU",
    "YnEgcgoiCho",
    "DHpGzrN6Brs",
    "1GCMmdRwXxI",
    "6IolsIONBT0",
    "HauOhGcZ_kg",
    "cE0GrkFX7l0",
    "B6Zcm9fYhzo",
    "Lf8yACvGK_w",
    "C2_Owv5arBY",
    "M_g2Cg88Hrs",
    "94-XFIKa_2A",
    "5D8GWplAK3E",
    "D29yk3y1KeU",
    "0xQKmUt5p94",
    "loUkkk6p6Ms",
    "UTp3RgDVy4Y",
    "_kKHv1Apxbo",
    "ZViF_uS1-VA",
    "hdSpNcGdc7Q",
    "G8L4w3suwU4",
    "ispC7-KKvqw",
    "EY1BDBt0VMg",
    "YDHn_SxEXV4",
    "5U4WWN7VSqc",
    "4fjQ8gocc3o",
    "Hk6WmSl9yFg",
    "4kLxD12gbyA",
    "ps83VJlzQL8",
    "KoAXrBCPkRs",
    "mCcWziI3E3A",
    "58T1RoGLfAs",
    "Oo-McsmqCww",
    "BLj6ghK_IsE",
    "D3cYa4Gs1dk",
    "0w2QbwBf2Tc",
    "SfTI0vsNX68",
    "f0qgz5GM8-U",
    "kHvtbvikP5Q",
    "6a6M3XtFtkE",
    "nAIekuIiaPw",
    "eb2JgpZGMOQ",
    "NDrlbhvt8XM",
    "4NKp2x6uS0M",
    "XlQDeuxHu8o",
    "OvsgW1h4JXk",
    "ETC8ACLGeaE",
    "l-MYi8Kmzeo",
    "l5dubgGI1r8",
    "Yb2wASsvKjo",
    "6z-e-o7U69A",
    "6s8VqFdMJnU",
    "MTqCh02K16w",
    "mhd4gJk073I",
    "wLYVYGtwk60",
    "FQhfj_7evJs",
    "qmXl4yflY5I",
    "hRRq1Mja6ks",
    "T0qDVVJ94Rg",
    "9kuynHcM3UA",

  ];

  const videoDescriptions = [
    "Introduction to Theory of Computation || GATECSE || TOC",
    "Power's of Alphabet Σ (Sigma) | GATECSE | TOC",
    "Introduction to DFA | Deterministic Finite Automata | TOC | Automata Theory",
    "Design DFA (length of the string is exactly 2 | at least 2 | at most 2) Example 1 | GATECSE | TOC",
    "DFA (Number of a in string is exactly 2 | at least 2 | at most 2) Example 2 | TOC | Automata Theory",
    "Design DFA in which number of a in w is divisible by 2 | number of a in  w is even | Na(W) mod 2 = 0",
    "Design DFA in which number of a's and  b's both are even | Na(W) mod 2 = 0 and  Nb(W) mod 2 = 0| TOC",
    "Design DFA in which no of a's is multiple of 3 and no of b's is multiple of 2 | TOC | Automata",
    "Design DFA in which no of a's is multiple of 3 or no of b's is multiple of 2 | TOC | Automata",
    "Design DFA binary number divisible by 2  | TOC | GATECS | Automata Theory",
    "Design DFA binary number divisible by 3 and divisible by 4 | GATECS | TOC | Automata Theory",
    "Design a DFA in which set of all strings can be accepted which start with ab | TOC | Automata Theory",
    "DFA that accepts strings containing ab as a substring  | DFA Design| TOC | Automata Theory",
    "Design a DFA in which set of all strings can be accepted which ends with ab | TOC | Automata Theory",
    "DFA of language with all strings starting with 'a' and ending with 'b' | TOC | GATECS",
    "DFA starting and ending with different symbol  | TOC | GATECS | Automata Theory",
    "Design a DFA in which set of all strings can be accepted which ends with ab or ba | TOC",
    "DFA for the string start with 01 or end with 01 | TOC",
    "Design  DFA in which accepts set of all strings, Second symbol from LHS is a and fifth symbol is b",
    "Design DFA for  L= a^n / n is greater than or equal to 0 , n is not =2, n is not =4 | TOC | Automata",
    "Design DFA for  L= a^m b^n  / n is greater than or equal to 0  | DFA Design | TOC | Automata",
    "Design DFA for L= a^m b^n c^p / m,n,p is greater than or equal to 0 | DFA Design | TOC | Automata",
    "DFA which accepts strings of form a^3bwa^3 , where 'w' is any string| DFA design |TOC | Automata",
    "Design DFA for strings that every a is  immediately preceded and followed by b | GATECSE | TOC",
    "Introduction to NFA | Non Deterministic Finite Automata | TOC",
    "NFA to DFA Conversion Example 1 | Conversion from NFA to DFA Examples | TOC | Automata Theory",
    "NFA to DFA Conversion Example 2 | Conversion from NFA to DFA Examples | TOC | Automata Theory",
    "NFA to DFA Conversion Example 3 | Conversion from NFA to DFA Examples | TOC | Automata Theory",
    "Epsilon NFA  to DFA Example 1 | epsilon NFA to DFA | TOC | Automata Theory",
    "Epsilon NFA to DFA Example 2 |  Conversion of Epsilon NFA to DFA | GATECS | TOC",
    "Introduction to Regular Expression | Regular Language to Regular Expression | Automata Theory",
    "Regular Expression Solved Examples | Regular language to Regular Expression | GATECSE | TOC",
    "Regular Expression Solved Examples | Regular language to Regular Expression | GATECSE | TOC",
    "Regular Expression Solved Examples | Regular language to Regular Expression | GATECSE | TOC",
    "Regular Expression Solved Examples | Regular language to Regular Expression | GATECSE | TOC",
    "Arden’s Theorem | Finite Automata to Regular Expression | GATECSE | TOC",
    "Arden's Theorem Example 1 | Finite Automata to Regular Expression  | GATECSE | TOC",
    "Arden's Theorem Examples 2 | Finite Automata to Regular Expression  | GATECSE | TOC",
    "Arden's Theorem Examples 3 | Finite Automata to Regular Expression | GATECSE | TOC",
    "Arden's Theorem Example 4 | Finite Automata to Regular Expression | TOC",
    "Finite Automata to Regular Expression using State Elimination Method | GATECS | TOC",
    "Finite Automata to Regular Expression using State Elimination Method | GATECS | TOC",
    "Finite Automata to Regular Expression using State Elimination Method | GATECS | TOC",
    "Finite Automata to Regular Expression using State Elimination Method | GATECS | TOC",
    "Introduction to Mealy and Moore Machine | TOC | GATECSE",
    "Design Mealy Machine for 1's and 2's Complement | TOC | GATECSE",
    "Design Moore Machine for print 1 for every occurrence of ab as a substring | TOC",
    "Conversion from Moore Machine to Mealy Machine || Example 1 || GATECSE || TOC",
    "Conversion from Moore Machine to Mealy Machine || Example 2 || GATECSE || TOC",
    "Conversion from Mealy Machine to Moore Machine || Example 1 || GATECSE || TOC",
    "Conversion from Mealy Machine to Moore Machine || Example 2 || GATECSE || TOC",
    "DFA Minimization || Example 1 || Minimization of DFA || GATE CSE || TOC",
    "DFA Minimization || Example 2 || Minimization of DFA || GATE CSE || TOC",
    "DFA Minimization || Example 3 || Minimization of DFA || GATE CSE || TOC",
    "DFA Minimization || Example 4 || Minimization of DFA || GATE CSE || TOC",
    "What is Grammar in TOC || GATECSE || TOC",
    "Chomsky Classification of Grammar || GATECSE || TOC",
    "Conversion from Language to Grammar  || GATECSE || TOC",
    "Conversion from Right Linear Grammar to Left Linear Grammar || Regular Grammar || TOC",
    "How to identify Regular Language | Testing whether a language is regular or not | GATECSE | TOC",
    "Simplification of Context Free Grammar ( Reduction of CFG)  |Automata Theory",
    "Removal of Null Production | Simplification of CFG | Elimination of Epsilon production | TOC",
    "Removal of Unit Production | Simplification of CFG | Elimination of Unit production | TOC",
    "Removal of Useless Production | Simplification of CFG | Elimination of Useless production | TOC",
    "Chomsky Normal Form | CNF | CNF with examples | TOC | Automata Theory",
    "CFG to CNF Conversion Examples | Chomsky Normal Form Examples | TOC",
    "CYK Algorithm | Membership algorithm for CFG | GATECSE | TOC",
    "Greibach Normal Form (GNF) | GNF Solved Examples | TOC | GATECS | Automata Theory",
    "CFG to GNF Conversion | Context Free Grammar to Greibach Normal Form Conversion | GATECS | TOC",
    "Introduction to PDA |  Push Down Automata Definition |  TOC | Automata Theory",
    "Pushdown Automata for L=a^n b^n | PDA for a^n b^n | Theory of Computation | TOC | Automata Theory",
    "Pushdown Automata (PDA)  for equal number of ‘a’ and equal number of ‘b’ | GATECSE | TOC",
    "Pushdown Automata  for a^n b^n c^m and  a^n b^m c^n |Theory of Computation | TOC | Automata Theory",
    "Pushdown Automata (PDA) for a^m+n b^n c^m | a^n b^m+n c^m | a^n b^m c^m+n | Automata Theory",
    "Pushdown Automata (PDA) for WCW^r | Odd Palindrome | Theory of Computation | Automata Theory",
    "Pushdown Automata (PDA) for WW^r | NPDA for WW^r | Even Palindrome | TOC | Automata Theory",
    "Pushdown Automata for L=a^n b^2n | PDA for a^n b^2n | Theory of Computation | TOC | Automata Theory",
    "PDA for L= a^n b^n  UNION a^n b^2n | L= a^n b^n  UNION a^n b^2n | Theory of Computation",
    "How to check whether a language is cfl or not | CFL, DCFL and Non-CFL | GATECSE | TOC",
    "Two Stack PDA | 2 stack PDA  for a^n b^n c^n | TOC | Automata Theory",
    "Two Stack PDA | 2 stack PDA for a^n b^n c^n d^n | TOC | Automata Theory",
    "CFG to PDA Conversion || Equivalence of CFG and PDA || TOC",
    "PDA to CFG Conversion || equivalence of CFG and PDA || TOC",
    "Turing Machine for a^n b^n || TOC",
    "Turing Machine for L= a^n b^n c^n || TOC",
    "Turing Machine for Regular Language || GATECSE || TOC",
    "Turing Machine for ww^r | Turing Machine for Even Palindrome | GATECSE | TOC",
    "Turing Machine for Odd Palindrome | waw^r | wbw^r | GATECSE | TOC",
    "Turing Machine for wcw | L= wcw | w belongs to (a,b)*  | GATECSE | TOC",
    "Turing Machine for 1's complement | 2's complement | Turing Machine | Turing Machine as a Transducer",
    "Turing Machine for addition of two numbers || GATECSE || TOC",
    "Turing Machine For Multiplication|TM for Multiply of two Number|Unary|Turing Machine| GATECSE | TOC",
    "Turing Machine as a Comparator | How Turing Machine do Comparison | GATECSE | TOC",
    "Turing Machine for Subtraction of two Number | Turing Machine | GATECSE | TOC",
    "Introduction to  Turing Machine | Formal Definition of Turing Machine | Automata Theory",
    "Variation of Turing Machine | Turing Machine | Automata Theory",
    "Recursive and Recursive Enumerable Languages in Theory of Computation | GATECSE | TOC",
    "Church-Turing Thesis in Theory of Computation | Turing Machine | GATECSE | TOC",
    "Universal Turing Machine | Binary encoding of turing machine | GATECSE | TOC",
    "Introduction to Countability (Countable and Uncountable Sets) | TOC | Automata Theory",
    "Countability Example 1 (Set of integers are Countable) | TOC | Automata Theory",
    "Countability Example 2 (Set of all rational numbers are Countable) | TOC | Automata Theory",
    "Countability Example 3 (set of all strings over sigma are countable) | TOC | Automata Theory",
    "Countability Example 4 (set of all turing machine's are countable) | TOC | Automata Theory",
    "Diagonalization Method (set of all languages are uncountable) | Countability | TOC | Automata Theory",
    "Operation on countable set (Union and Cartesian product ) | TOC | Automata Theory",
    "Closure Properties of Regular Language | GATECSE | TOC",
    "Reversal of Regular Language | Closure Properties of Regular Language | GATECSE | TOC",
    "Homomorphism in Regular Languages | Closure Properties of Regular Language | GATECSE | TOC",
    "Inverse Homomorphism in Regular Languages | Closure Properties of Regular Language | GATECSE | TOC",
    "Substitution in Regular Languages | Closure Properties of Regular Language  | GATECSE | TOC",
    "INIT Operation in Regular Languages | Closure Properties of Regular Language | GATECSE | TOC",
    "Quotient Operation in Regular Languages | Closure Properties of Regular Language | GATECSE | TOC",
    "Infinite Union and Subset in Regular Languages | Closure Properties of Regular Language | TOC",
    "Closure Properties of Context Free Language | Union | Concatenation | GATECSE | TOC",
    "Closure Properties of Context Free Language | Intersection | Complementation | GATECSE | TOC",
    "Decidable and Undecidable Problem | Undecidability | GATECSE | TOC",
    "Rice’s Theorem | Undecidability Problem | GATECSE | TOC",
    "Rice’s Theorem Practice Problems | Undecidability Problem | GATECSE | TOC",
    "Rice’s Theorem Practice Problems | Undecidability Problem | GATECSE | TOC",
    "Complete TOC Theory of Computation in one shot | Semester Exam | Hindi",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `TOC Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 120],
              ["One Shot", "One Shot", 120, 121],
              // ["semiconductor", "Semiconductor", 96, 101],
              // ["problems", "Problems", 102, 115],
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
          <h1 className="text-3xl sm:text-4xl font-bold">Theory of Computation - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 120)}
        {selectedSection === null && renderSection("One Shot", "One Shot ", 120, 121)}
        {/* {selectedSection === null && renderSection("semiconductor", "Semiconductor ", 96, 101)}
        {selectedSection === null && renderSection("problems", "Problem ", 102, 115)} */}

        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos", 0, 120)}
        {selectedSection === "One Shot" && renderSection("One Shot", "One Shot ", 120, 121)}
        {/* {selectedSection === "semiconductor" && renderSection("semiconductor", "Semiconductor ", 96, 101)}
        {selectedSection === "problems" && renderSection("problems", "Problem ", 102, 115)} */}
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

export default TOC;
