import React, { useState } from "react";

const DBMS = () => {
 const videoIDs = [
 "OMwgGL3lHlI",
"eGlyfNRdjz4",
"vqxvDtSgW2k",
"U5Gg9R-Dc0Q",
"9ev9V_DHUZY",
"I_PrZ1NHZr8",
"cOzq67n2yN4",
"vyDWAHagufQ",
"fO5tDyOY5Fw",
"OwQoj3GJfNY",
"8_W5JT7Jz2Y",
"OVVeKjdHitU",
"DKUJY9WgnIM",
"IPvY9Gp83WM",
"LHU6NRf98oI",
"WI9dE8-TFAc",
"0KndPnLwX1o",
"kKouZm86VtI",
"_UZLrD_R0T4",
"iQLc0Y7BuI4",
"TGFE055-03Y",
"KpbyPhJqIf0",
"76v3gRns28U",
"Givp56x6vbg",
"QY2X_TlLkqo",
"bx-O6kWgIs8",
"dS214kONAZA",
"qvioqCvvMek",
"5Kf-pslu3k4",
"NwgNWtkqDYM",
"caJD49J6Tqo",
"xhol4V9u-ic",
"8g7T7VedSe0",
"5qIl-TGGk0g",
"VBnVfhl9ur0",
"ipMbQhppYhs",
"CvjvM18LC2M",
"_bFPict2efc",
"2D3iqFjnnlo",
"vGViCkK8JP4",
"zhf3nkoz4ds",
"nzqmPV-XJh8",
"BmoZEHPPBoI",
"Ieu_tICWTKc",
"QVX9MT7hkKc",
"LpqnU533v3M",
"vz5az6N86DY",
"KIy77LD4Xa0",
"_EbrIIAGH2Q",
"RZ5Kps5zp_Y",
"rorft23glC0",
"G5uZwldBzG4",
"nUKRBWVDNlA",
"7V95C43ujlU",
"EA4F7ecc6hU",
"lhsT7a1akao",
"uujDdvDQsaE",
"6tmq2I3gEDU",
"LxEQRIBR9IM",
"UT4ML93lKIs",
"x9o4NuBz8mM",
"Zqo-qNNMmdA",
"CSX0OlOYWps",
"Jtai4ogSsB4",
"-8bYtApJNos",
"KqBiGOdce74",
"MR0PK0qkCD8",
"bp8DsBI6Oik",
"ZfDBINXhWXg",
"w27gAgDQr_w",
"9lTuR0RfKz8",
"QBN8H9CfYzs",
"acn8_F98ruk",
"RGIVS8RGBaI",
"VQf0V6Wwbf4",
"wZ-L8qTTKtk",
"1ZeiJ1D6NGU",
"exR4hp1b30U",
"QbsfjFfYJ8U",
"VxTI2lbqfhU",
"8v-xJuXz6Hc",
"6Twnw3sQChk",
"Qb_7J_svPyY",
"ztfO3Yz7cx4",
"N7KMNhgV89M",
"h4EQBAzW3m4",
"j0uODdyercM",
"wasjvtqe27w",
"yZzA6OI9Bls",
"zymAOPMKVH8",
"YRnjGeQbsHQ",
"FchQ6wZVqsA",
"ebDJJKb_zDo",
"eTiP-H9GQ30",
"cKRnbP6dZwc",
"CqI0X8fNn2I",
"kFQRrgHeiOo",
"iUApyIf2h-A",
"jbl5rWNP5hU",
"7mi_3zi66C8",
"YvQtgE6R_q0",
"JGOvqCFrldU",
"XUokY6sA3UE",
"sWZw69Wf5SQ",
"wez3fXrjBAE",
"y8XuGhEdslM",
"d37Ct1gHmsU",
"vs65S6Nku5g",
"fT0QMtgqPrU",
"NeITRksKLzs",
"0XmHRycmrp0",
"o0GQQFu-5C0",
"_-F6QfdheEk",
"8N2Z2WPQFcU",
"MhvAcuNvvNk",
"x_inLVXPlSU",
"33ek39nWkVA",
"K5P-2-oWXqs",
"oylHRgBDfNc",
"px7HV91fx2I",
"CedOasDoe-w",
"80CcB9_HSxU",
"Wx5CzybyLXA",
"yIN6k57OB3U",
"9qWpfTW_c5Y",
"aOZ5z7z9y-g",
"9H4aJqYyd9s",
"cm1DYCQhFZw",
"iuJtkzoNtbg",
"mzxnbsmIRNw",
"oeWSmSH5YeI",
"hL9-RDzvO-0",
"M5OClnF_mlA",
"3aQ0dnZHaRQ",
"isOLwsdB4Ns",
"I3Zwz4lKmDU",
"RgYU5r9A5TU",
"D7pmQDnjcV4",
"SxHX1T53n_A",
"O-Mbn6VI1zc",
"L-THExvsv0s",
"mbjE4WsWYCA",
"54gUz7QqE4o",
"SoYYwKXtCC0",
"Tmbv15xiIPo",
"6_94Fm_yNAM",
"uZogMFWBGSg",
"AepLj_C4ywM",
"z0dzM7Dadi8",
"PJkHEdG8E-A",
"Cob3hPUdrJk",
"iOJlmwXzDB4",
"c-FqvuGIi-8",
"VJp27dmRxXs",
"CHwLkUlq-vE",
"CE1fhHgnC30",
"cc1fsb-PJOg",
"mTeJRLzqd1o",
"09nUeZFhmZw",
"oZtIKe6sfmU",
"s0WGy_IWBxk",
"PHPHkqHAu9Y",
"lJv614Y0lFA",
"z996Uv9MNaQ",
"ldos7yYMjs8",
"Ro6fIhAgKsA",
"3d4f6HNKj-8",
"BHgdb9XS0Bk",
"a6KIAX5Aubg",
"quz6gV7oDFI",
"qMBQCDTVROc",
"914rYy0Djrg",
"XrHzsxLbLh4",
"CPOfYF0Ya6E",
"l0177OcTTdk",
"-FyMthiA1kU",
"o7RUUgHS3ck",
"XCLA0cjk0o8",
"vBo0UZl_VUM",
"N7N-TdqNVRc",
"QkROSmKbVFQ",
"6feqtT3e-vA",
"Ewzmv2jBlmM",
"FJteasXARxg",
"fCuEd3N9Nrs",
"qH2iYtuJEwQ",
"MvLHkPCjCtk",
"fTRF3cr10RQ",
"k0Tuf2weFyA",
"PYgebFyWZwI",
"LyTjtXtfBlM",
"uLcEOs24Q3s",
"44Uc6ohuOAk",
"9aHA73fyt2g",
"7gW5vi1fNq4",
"VwZ58AvwYb0",
"SR18TdBE2n4",
"V4RouV433_Y",
"ESsb6gqoIdc",
"uQrJbA9_WNU",
"Nk291GYi_t4",
"Iz66t1uyYIM",
"-r734q6sSa0",


  ];

  const videoDescriptions = [
"Introduction to Database Management Systems (DBMS)",
"DBMS - Definition",
"Applications of DBMS",
"File System vs. Database Management System",
"Three Tier Architecture",
"View of Data",
"Instances and Schemas in DBMS",
"Database Users",
"Database Administrator (DBA)",
"Introduction to Data Models",
"Database System Architecture - Part 1",
"Database System Architecture - Part 2",
"History of DBMS",
"Database Languages and Software",
"Introduction to DBMS - Solved Questions",
"Introduction to Relational Databases",
"Codd’s 12 Rules (13 Rules)",
"Database Schema",
"Keys in RDBMS",
"Keys in RDBMS (Solved Questions)",
"Schema Diagrams",
"Relational Query Languages",
"Basics of Relational Algebra",
"Relational Algebra (Select Operation)",
"Relational Algebra (Project Operation)",
"Relational Algebra (Union Operation)",
"Relational Algebra (Set Difference Operation)",
"Relational Algebra (Cartesian Product Operation)",
"Relational Algebra (Rename Operation)",
"Relational Algebra (Set Intersection Operation)",
"Relational Algebra (Assignment Operation)",
"NULL Values in RDBMS",
"Relational Algebra (Natural Join Operation)",
"Relational Algebra (Division Operation)",
"Relational Algebra (Outer Join Operation)",
"Relational Algebra (Solved Problem 1)",
"Relational Algebra (Solved Problem 2)",
"Relational Algebra (Solved Problem 3)",
"Relational Algebra (Solved Problem 4)",
"Relational Algebra (Solved Problem 5)",
"Tuple Relational Calculus (Formal Definition)",
"Tuple Relational Calculus (Example Queries)",
"Domain Relational Calculus (Formal Definition)",
"Domain Relational Calculus (Example Queries)",
"Relational Algebra (Rapid Fire Quiz)",
"Database Design",
"Introduction to E-R Model (Part 1)",
"Introduction to E-R Model (Part 2)",
"Types of Attribute in DBMS",
"Mapping Cardinalities",
"Entity-Relationship (ER) Diagram",
"Mapping Cardinality in ER Diagram",
"Participation Constraints in DBMS",
"ER Diagram for University Database",
"ER Diagram for Banking Enterprise",
"ER Diagram for Hospital Management System",
"Extended ER Features",
"ER Model (Solved Problem 1)",
"ER Model (Solved Problem 2)",
"ER Model (Solved Problem 3)",
"ER Model (Rapid Fire Quiz)",
"Introduction to Structured Query Language (SQL)",
"Data Definition Language (DDL)",
"DDL Commands - CREATE",
"Constraints in SQL",
"Constraints in SQL (Example Queries)",
"Primary Key and Foreign Key Constraints in SQL",
"DDL Commands - ALTER",
"DDL Commands - TRUNCATE, DROP, and RENAME",
"DML Commands - INSERT and UPDATE",
"DML Commands - DELETE and SELECT",
"Data Control Language (DCL)",
"Transaction Control Language (TCL)",
"Aggregate Functions in SQL",
"GROUP BY and HAVING Clause in SQL",
"ORDER BY in SQL",
"LIKE in SQL",
"IN in SQL",
"BETWEEN in SQL",
"Alias (AS) in SQL",
"TOP, LIMIT, FETCH FIRST, and ROWNUM in SQL",
"NULL Functions in SQL",
"ANY and ALL Operators in SQL",
"CASE Expression in SQL",
"Comments in SQL",
"Joins in SQL",
"SQL - Solved Problem 1",
"SQL - Solved Problem 2",
"SQL - Solved Problem 3",
"SQL (Rapid Fire Quiz)",
"Complete DBMS Data Base Management System in one shot | Semester Exam | Hindi",
"Data Base Management System | DBMS in one shot | Complete GATE Course | Hindi #withsanchitsir",
"GATE 2026 CSE Batch Lauch | 2 Feb, 2025 | 8:00pm | #knowledgegate #withsanchitsir",
"1.0 What is DBMS with Syllabus | Database Management System in Hindi",
"1.1 Difference between Data, Information, DB and DBMS",
"1.2 Disadvantages Of File Processing System",
"1.3 OLAP Vs OLTP",
"2.1 ER Diagram",
"2.2 Entity, Types of Entity and Entity Sets",
"2.3 Types of Attributes-Simple Composite Single Valued MultiValued Stored Derived",
"2.4 Relationship in an ER Diagram",
"2.5 Degree of a Relationship in a ER Diagram",
"2.6 Mapping Cardinalities and Cardinality Ratio in ER diagram",
"2.7 Participation Constraints in ER Diagram",
"3.1 Functional Dependency in DBMS | Functional Dependency explained",
"3.2 Functional Dependency Questions Part-1",
"3.3 Functional Dependency Questions Part-2",
"3.4 Armstrong's Axioms and Inference Rules in Functional Dependency",
"3.5 Closure Set Of Attributes With Examples",
"3.6 Equivalence Of Functional Dependencies",
"3.7 Equivalence Of Functional Dependencies Examples",
"3.8 Minimal Cover or Canonical Cover or Irreducible set of Functional Dependencies",
"3.9 Practice questions on Minimal Cover or Canonical Cover or Irreducible set",
"3.10 Keys In DBMS",
"3.11 Super Key, Candidate Key and Primary Key",
"3.12 Finding Number Of Candidate Key",
"3.13 Finding Number Of Candidate Key Examples",
"4.1 Insertion Deletion and Updation Anomalies, Data Redundancy Inconsistency in DBMS",
"4.2 Basic Concept of Normalization",
"4.3 Normalization in DBMS",
"4.4 First Normal Form",
"4.5 Second Normal Form 2NF",
"4.6 Reason For Second Normal Form 2NF",
"4.7 How to Decompose a relation into 2NF",
"4.8 Third Normal Form  3 NF",
"4.9 3NF Third Normal Form",
"4.10 Decomposition into 3NF Third Normal Form",
"4.11 BCNF Boyce Codd Normal Form",
"4.12 How To Identify BCNF Boyce Codd Normal Form",
"4.13 How to Identify Normal Form Practice Question Part-1",
"4.14 How to Identify Normal Form Practice Question Part-2",
"4.15 How to Identify Normal Form Practice Question Part-3",
"4.16 Lossless Join Decomposition in DBMS in HINDI Part-1",
"4.17 Example Practice Problem of Lossless Join Decomposition Part-2",
"4.18 Dependency Preserving Decomposition in DBMS in Hindi",
"4.19 How to normalize a relation table | DBMS |",
"5.1 Introduction to File Structure in DBMS",
"5.2 Sorted Unsorted File Structure Spanned Unspanned Mapping in DBMS",
"5.3 Introduction to Indexing in DBMS",
"5.4 Types of Indexing in DBMS | Primary | Clustered | Secondary | Sparse | Dense",
"5.5 Primary Indexing In DBMS In HINDI Part-1",
"5.6 Numerical on Primary Indexing In DBMS In HINDI Part-2",
"5.7 Clustering Index in DBMS in HINDI",
"5.8 Secondary Index in DBMS in HINDI",
"5.9 Numerical on Secondary Index in DBMS HINDI",
"5.10 Primary Vs Secondary Index in DBMS HINDI",
"6.1 Query language Procedural Vs Non-Procedural in DBMS",
"6.2 Introduction To Relational Algebra in DBMS in Hindi",
"6.3 Select (Sigma) Operation in DBMS in hindi Part-1",
"6.4 Select (Sigma) Operation in DBMS in hindi Part-2",
"6.5 Project operation in DBMS in hindi",
"6.6 select and project operation in relational algebra examples in hindi",
"6.7 Union Intersection and Set Difference Operator Relational Algebra in DBMS",
"6.8 Cartesian Product or Cross Product Operator in Relational Algebra in DBMS in HINDI",
"6.9 Practice problems on Cartesian Product or Cross Product Operator in DBMS in HINDI",
"7.1 Introductionto to SQL in DBMS",
"7.2 Basics Structure of SQL Query",
"7.3 Select Operation in SQL Query in hindi",
"7.4 Select clause with where clause in sql in hindi select from where in sql in hindi",
"7.5 Set Operation in SQL Query Union Intersection Except Minus Set Difference in hindi",
"7.6 Cartersian Product in SQL Query in DBMS",
"7.7 Natural Join in SQL in DBMS in HINDI",
"7.8 Join or Inner Join in SQL in HINDI With Example Part-1",
"7.9 Join or Inner Join in SQL in HINDI With Example Part-2",
"7.10 Outer Join Full Outer Join Left Outer Join Right Outer Join Complete Outer Join in SQL",
"7.11 Rename Operation in SQL in HINDI With Example",
"7.12 String Operation in SQL in Hindi With Example",
"7.13 Ordering of Tuples in SQL In HINDI With Example",
"8.1 Introduction To Transaction and Concurrency Control in DBMS",
"8.2 Basic Idea of Transaction in DBMS",
"8.3 ACID Properties Of Transaction In DBMS",
"8.4 Transaction States In DBMS",
"8.5 Advantage of Concurrency in Transaction DBMS",
"8.6 Dirty Read Problem in Transaction In DBMS",
"8.7 Unrepeatable Read Problem in Transaction DBMS Part-1",
"8.8 Phantom Read Problem in Transaction in DBMS",
"8.9 Lost Update Problem Write Write Conflict In Transaction DBMS",
"8.10 Serial Schedule and Non Serial Schedule in Transaction DBMS",
"8.11 Conflict Serializable Schedule With Precedence Graph",
"8.12 Lost Update Problem Write Write Conflict In Transaction DBMS Part-2",
"8.13 Practice Questions on Conflict Serializability Part-1",
"8.14 Practice Questions on Conflict Serializability Part-2",
"8.15 View Serializability in DBMS",
"8.16 Practice Problem on View Serializability",
"8.17 Recoverable Schedule in DBMS",
"8.18 Cascadeless Schedule in DBMS",
"8.19 Strict Schedule in DBMS",
"8.20 Concurrency Control In DBMS",
"8.21 Time Stamping Protocol in DBMS Part-1",
"8.22 Time Stamping Protocol in DBMS Part-2",
"8.23 Properties Of Time Stamping Protocol in DBMS Part-3",
"8.24 Thomas Write Rule in Time Stamping Protocol in DBMS Part-4",
"8.25 Lock Based Protocol in DBMS Concurrency Control Part-1",
"8.26 Properties of Lock Based Protocols in Concurrency Control Part-2",
"8.27 2 Phase Locking Protocol 2PL Part-3",
"8.28 Conservative 2 Phase Locking 2PL Part-4",
"8.29 Rigorous 2-Phase Locking 2pl Part-5",
"8.30 Strict 2 Phase Locking 2PL Part-6",
"8.31 Graph Based Protocol Concurrency Control Part-1",
"8.32 Tree-Graph Based Protocol Concurrency Control Part-2",
"8.33 Properties Of Tree Based Protocol In DBMS Part-3",
"8.34 Deadlock Handling in Transaction and Concurrency Concurrency Part-1",
"8.35 Dead Lock Prevention in Transaction and Concurrency Control in DBMS Part-2",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `DBMS Video ${i + 1}`,
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
              ["Complete", "Complete", 0, 300],
              // ["quantum", "Quantum", 14, 95],
              // ["semiconductor", "Semiconductor", 96, 101],
              // ["problems", "Problems", 102, 115],
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
          <h1 className="text-3xl sm:text-4xl font-bold">DataBase Management Sytem - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("Complete", "Complete ", 0, 300)}
        {/* {selectedSection === null && renderSection("quantum", "Quantum ", 14, 95)}
        {selectedSection === null && renderSection("semiconductor", "Semiconductor ", 96, 101)}
        {selectedSection === null && renderSection("problems", "Problem ", 102, 115)} */}

        {selectedSection === "Complete" && renderSection("Complete", "Complete", 0, 300)}
        {/* {selectedSection === "quantum" && renderSection("quantum", "Quantum ", 14, 95)}
        {selectedSection === "semiconductor" && renderSection("semiconductor", "Semiconductor ", 96, 101)}
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

export default DBMS;
