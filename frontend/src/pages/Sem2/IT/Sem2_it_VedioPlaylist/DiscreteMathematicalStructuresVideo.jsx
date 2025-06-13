







import React, { useState } from "react";

const DMS = () => {
  // RDMSlace these video IDs with your actual YouTube video IDs (one for each of the 50 videos)
  const videoIDs = [

    "B1TASfGcnRM",
    "p2b2Vb-cYCs",
    "BgOuDPDRY-U",
    "xLetJpcjHS0",
    "rLf3jnHxSmU",
    "M5UAO6n1LmQ",
    "pJADM3OhUQY&pp=0gcJCckJAYcqIYzv",
    "G_hWFHBH2Y0",
    "Udn7DRCfuPI",
    "gvKMfggyLFI",
    "JSDN5zNA37k",
    "gzh8ICLMXzQ",
    "p2b2Vb-cYCs",
    "IZpvlR5J7FQ",
    "Ib5njCwNMdk",
    "6kYngPvoGxU",
    "m2mf6I3g2-c",
    "tACXuzfXzSI",
    "ccz-w2JMsTM",
    "mQ6Hhu0xSaE",
    "dsByaZZYXGw",
    "ehKd3KmIRSw",
    "8octtUkdv4Y",
    "f5Iy1V3lgFs",
    "scsLVM9i8fg",
    "otkCaqUhofc",
    "SBBq-PUvh2c",
    "yo7aULLUz_0",
    "tDH67yRNXzI",
    "CVnzVc4r8WQ",
    "Riz8aAjWCvw",
    "Ag4p6i_emkQ",
    "LYFC_59_aBk",
    "ZY1wOOauvSs",
    "1J666C5XlwE",
    "4iKahGOKmhY",
    "HcS4lqXxrV4",
    "28lebQ60TCc",
    "CqOn_n1PoQ4",
    "AJe3ATDFIjQ",
    "z205Y7D40Lk",
    "4TKhGiaZy5s",
    "2GuRhc0ZzGc",
    "ARywou8HLQk",
    "Cu9an3Rgd2E",
    "UN6Hd4UlrnM",
    "pPYkNkuo8nU",
    "6Ebxy33e-Wk",
    "JY03HH0p14U",
    "OzLorUzIQ1U",
    "YsWn609V6As",
    "mWG-MgReOXg",
    "akjfu3L-_O8",
    "AgSuEuOnoWM",
    "DYsSr7fk_4A",
    "F4dp0AueW8g",
    "3LbvjGeh6xs",
    "d87-HuxQaTY",
    "1bpXqRL2dl8",
    "6H1uHXqLeRM",
    "19Eq2QOtOWw",
    "Lv3Ly8g0Rno",
    "FMBg9rA7i4A",
    "x4dr53P1Fm0",
    "XsEEkuUhgbk",
    "dUKFtN2SCrU",
    "3oXCgqHhVJ0",
    "DUKnxUKgWLY",
    "SDXw5aV0LM8",
    "o11k5fS8yVM",
    "ivLgSK-BE6o",
    "2iFzzor5Pfs",
    "B9dSpX7WbGM",
    "tIfC3BzknZo",
    "nrjbsJN_tdc",
    "SjEQNOV5FMk",
    "TTImfNmhwsQ",
    "ikpJqINGPX4",
    "Bm05eNcIg1c",
    "4Vn4VLFV3ZI",
    "akiBw21opuw",
    "mywP1lqVkXs",
    "5TeDFX7whck",
    "XXAcqrH2bfc",
    "Ql7pHnavYSA",
    "yYWBH5v5SKQ",
    "4e58-bVRsUM",
    "ZDBR-ByUhus",
    "Q9JULigY1gk",
    "hdaXCrJlEQ4",
    "N-uVm2eUSR0",
    "3t9puB8NSwY",
    "FOQn8afAvLE",
    "QdQpSgxLTlA",
    "moBJ2Hv1Nv8",
    "25hx8KsoofM",
    "ZvmtUacSxl4",
    "UdZ4yxf-F4M",
    "BEzCgYq8e80",
    "JED4pyrpzas",
    "2p8T87-onC4",
    "W3CkXaayqbk",
    "Ij3Pfzmi_VY",
    "8hPALF2QBPI",
    "2-0OvQ5tsn8",
    "cCWSw8TLmgE",
    "7YZ9Va9d608",
    "gculyhWT7M8",
    "UC8hUm9XGTs",
    "24z-Al7uvt0",
    "4Caxyh0zt_o",
    "GvNGf9Gki7o",
    "O19RpfoxQpA",
    "K1IUntpKkE8",
    "IftijFJlcvk",
    "RUu2w1Dn0e0",
    "jCt70x6bjU0",
    "e3HJN-grUrk",
    "DfRC_zPnh8Q",
    "U3wEJbqQziE",
    "SgQJlKLWJmY",
    "zxbAnR96xC4",
    "uz3OdZqwkJM",
    "_-p8zhizock",
    "chkyYvsNPZg",
    "Xva_K3YDb2w",
    "RexPywlCmV8",
    "cJ9x3aWibhI",
    "bn1uWNwuMwA",
    "fXXbM1yackI",
    "4QbyMoMX4VI",
    "TbCk79SoCYw",
    "-SpWfD4WsmM",
    "AbGVbgQre7I",
    "hrumNRQwTV8",
    "CkAGZ69dQNk",
    "saAkSk_arPA",
    "EsfhqlxIDYU",
    "cqPVG8e8daY",
    "i8XeVATqeag",
    "ITv_74xUBdk",
    "aq0zZOZVKPE",
    "PYCO_BqWk_4",
    "MTGBBNG1g4s",
    "DbKZrrXD3C8",
    "sgsJAtRLGq4",
    "Sg4G9-6V6Mg",
    "kGVsIoYkRtg",
    "KbyVjwmzlpk",
    "LCFf2DBTVmo",
    "3UkC3sXLqhQ",
    "7rdAZHh7iSM",
    "FeJf6ZmUu3I",
    "1u6_oaspiA0",
    "cIguwQ3iqkY",
    "y7KQnBerCIU",
    "W0aOoC6rag8",
    "AMgmkmlJKAs",
    "lXmRlWy2r2U",
    "o5paI2yXveE",

  ];

  // Provide a description for each video.
  const videoDescriptions = [
    "C++ Programming – Course Announcement",
    "Introduction to Discrete Mathematics",
    "Key Terms in Programming",
    "Introduction to Data Structures",
    "C Programming – Features & The First C Program",
    "Introduction to C++ Programming",
    "Identifiers in C++ (Best Practices)",
    "Keywords and Identifiers in C++",
    "Your First C++ Program",
    "Versions of C++ Programming Language",
    "Installing C++ IDE",
    "How to test Diodes Using a Digital Multimeter",
    "Introduction to Discrete Mathematics",
    "Motivation & Introduction to Propositional Logic",
    "Propositional Logic, Propositional Variables & Compound Propositions",
    "Logical Operators − Negation, Conjunction & Disjunction",
    "Logical Operators − Exclusive OR",
    "Logical Operators − Implication (Part 1)",
    "Logical Operators − Implication (Part 2)",
    "Logical Operators − Implication (Part 3)",
    "Converse, Contrapositive and Inverse",
    "Logical Operators − Biconditional Operator",
    "Propositional Logic − Precedence of Logical Operators",
    "Translating Sentences into Logical Expressions",
    "Propositional Logic − Puzzle 1",
    "Propositional Logic − Puzzle 2",
    "Propositional Logic (Solved Problem 1)",
    "Tautology, Contradiction, Contingency & Satisfiability",
    "Propositional Logic − Logical Equivalences",
    "Propositional Logic (Solved Problem 2)",
    "Propositional Logic (Solved Problem 3)",
    "Propositional Logic (Solved Problem 4)",
    "Propositional Logic (Solved Problem 5)",
    "Propositional Logic (Solved Problem 6)",
    "Propositional Logic (Solved Problem 7)",
    "Rules of Inference - Basic Terminology",
    "Rules of Inference - Definition & Types of Inference Rules",
    "Arguments Building Using Rules of Inference (Part 1)",
    "Arguments Building Using Rules of Inference (Part 2)",
    "Checking The Validity of An Argument (Shortcut Method)",
    "Rules of Inference in Propositional Logic (Solved Problem 1)",
    "Rules of Inference in Propositional Logic (Solved Problem 2)",
    "The Limitation of Propositional Logic",
    "Introduction to First Order Logic",
    "Finding The Truth Values of Predicates (Examples)",
    "Quantifiers",
    "Universal Quantifiers",
    "Universal Quantifiers - Counter Examples",
    "Expressing Quantifications in English",
    "Existential Quantifiers",
    "Existential Quantifiers - Examples",
    "Quantifiers with Restricted Domain",
    "Logical Equivalences Involving Predicates & Quantifiers (Part 1)",
    "Logical Equivalences Involving Predicates & Quantifiers (Part 2)",
    "Negating the Quantified Expressions (Part 1)",
    "Negating the Quantified Expressions (Part 2)",
    "Negating the Quantified Expressions (Examples)",
    "Translating English Sentences to Logical Expressions",
    "First Order Logic (Solved Problems) - Part 1",
    "First Order Logic (Solved Problems) - Part 2",
    "First Order Logic (Solved Problems) - Part 3",
    "First Order Logic (Solved Problems) - Part 4",
    "First Order Logic (Solved Problems) - Part 5",
    "Introduction to Nested Quantifiers",
    "Nested Quantifiers (Solved Example 1)",
    "Nested Quantifiers (Solved Example 2)",
    "Nested Quantifiers (Solved Example 3)",
    "Nested Quantifiers (Translating English Statements) - Example 1",
    "Nested Quantifiers (Translating English Statements) - Example 2",
    "Nested Quantifiers (Translating English Statements) - Example 3",
    "Nested Quantifiers (Translating English Statements) - Example 4",
    "Nested Quantifiers (Translating English Statements) - Example 5",
    "Negating the Nested Quantifiers",
    "Negating the Nested Quantifiers (Example 2)",
    "Negating the Nested Quantifiers (Example 3)",
    "The Resolution Principle (Preliminaries)",
    "The Resolution Principle (Proof of Theorem)",
    "The Resolution Principle (Proving if an Argument is Valid)",
    "The Resolution Principle (Solved Problems)",
    "Fallacies",
    "Rules of Inference for Quantified Statements (Part 1)",
    "Rules of Inference for Quantified Statements (Part 2)",
    "Universal Modus Ponens Rule",
    "Universal Modus Tollens Rule",
    "Set Theory (Basics of Sets)",
    "Set Representation",
    "Inclusion and Equality",
    "Inclusion vs. Membership",
    "Inclusion vs. Membership (Solved Problem)",
    "Types of Sets - Universal, Null, and Singleton",
    "Null Set (Solved Problem)",
    "Non-Empty Set (Important Theorem)",
    "Power Set",
    "Power Set (Solved Problems)",
    "Power Set (GATE Problem 1)",
    "Power Set (GATE Problem 2)",
    "Cardinality of Sets",
    "Cartesian Product",
    "Cartesian Product (Solved Problems)",
    "Set Operations (Intersection & Union with Venn Diagram)",
    "Set Difference and Set Complement",
    "Set Operations (Solved Problems)",
    "Set Identities (Part 1)",
    "Set Identities (Part 2)",
    "Set Identities (Part 3)",
    "Set Operations (Solved Problem 1)",
    "Set Operations (Solved Problem 2)",
    "Symmetric Difference",
    "Set Operations (GATE Problems)",
    "Set Operations (GATE and TIFR Problem)",
    "Introduction to Relations",
    "Types of Relations (Part 1)",
    "Types of Relations (Part 2)",
    "Types of Relations (Solved Problem)",
    "Types of Relations (GATE Problems) - Set 1",
    "Types of Relations (GATE Problems) - Set 2",
    "Operations on Relations",
    "Composition of Relations",
    "Composition of Relation with Itself",
    "Representation of Relations",
    "Closure of Relations – Part 1",
    "Closure of Relations – Part 2",
    "Closure of Relations (Solved Problems) - Set 1",
    "Warshall's Algorithm (Finding the Transitive Closure)",
    "Closure of Relations (Solved Problems) - Set 2",
    "Closure of Relations - GATE Problem",
    "Equivalence Relation",
    "Equivalence Relation (Solved Problems)",
    "Equivalence Relation (GATE Problems) - Set 1",
    "Equivalence Relation (GATE Problems) - Set 2",
    "Equivalence Relation (GATE Problem)",
    "Equivalence Classes",
    "Congruence Modulo m",
    "Modulus of Negative Numbers",
    "Equivalence Classes and Partitions",
    "Equivalence Classes and Partitions (Solved Problems)",
    "Introduction to Partial Ordering",
    "Partial Orderings (Solved Problems) - Set 1",
    "Partial Orderings (Solved Problems) - Set 2",
    "Hasse Diagram",
    "Hasse Diagram (Solved Problems) - Set 1",
    "Hasse Diagram (Solved Problems) - Set 2",
    "Poset (Minimal and Maximal Elements)",
    "Poset (Least and Greatest Elements)",
    "Poset (Lower and Upper Bounds)",
    "Poset (Least Upper Bound and Greatest Lower Bound)",
    "Hasse Diagram (Solved Problems) - Set 3",
    "Symbols for Partial Order",
    "Meet Semilattice",
    "Join Semilattice",
    "Lattice",
    "Lattice (GATE Problems) - Set 1",
    "Complete and Bounded Lattice",
    "Lattice (Complement of an Element)",
    "Lattice (GATE Problems) - Set 2",
    "Complemented Lattice",
    "Distributive Lattice",
    "Functions | Chapter-7 | Discrete Mathematics | nesoacademy.org",
    "Counting | Chapter-8 | Discrete Mathematics | nesoacademy.org",
    "Permutations & Combinations | Chapter-9 | Discrete Mathematics | nesoacademy.org",

  ];



  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `DMS Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 167]

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
          <h1 className="text-3xl sm:text-4xl font-bold">DMS - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 167)}


        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos ", 0, 167)}

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

export default DMS;
