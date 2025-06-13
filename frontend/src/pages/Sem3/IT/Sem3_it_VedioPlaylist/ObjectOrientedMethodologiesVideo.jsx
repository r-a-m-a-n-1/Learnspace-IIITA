import React, { useState } from "react";

const OOM = () => {
 const videoIDs = [
  "ntLJmHOJ0ME",
"zIdg7hkqNE0",
"X0zdAG7gfgs",
"b2VJmyarV3I",
"HRfmLqqvzUs",
"C5me8SeuW9M",
"d9oF3MNzmuk",
"pnn2VTSr1Ko",
"vh16INx13h4",
"xGsUs3XQ0t0",
"HQxKktmOXQY",
"WC7B7LffdkI",
"tem1bKt2Osc",
"1SJK4Y4axXs",
"MO3GfaHwHsw",
"YPK6NYMJt_A",
"Y-c8gQV2Tuw",
"hdOtQSuPBRY",
"lGHzXsEoUkM",
"UClkmZOZhhs",
"GE5C_So1y00",
"XFyNiI6ozO0",
"XHgC6Md8L9o",
"HguqMkdIkcs",
"zY87HRloM18",
"qMePCtjeqB4",
"-AJGE_8htCI",
"CfqjAKN-AwI",
"XDlxr2wYNfU",
"1etC1g0HNBg",
"t6e5AyYWLFw",
"pFaB68naMiU",
"PpRpiMReGXY",
"QLbG77JngYc",
"VXR3HKRg51w",
"5OrZpBbGKgc",
"HHWPcyFmw2o",
"0HIR0rzj8pQ",
"wQZCbojRawg",
"25zw-ljLLw0",
"5XF_POby0Q0",
"Fxj4n8En8lw",
"2heXAHrmmsk",
"N3Xu1rO6feY",
"XSuybcFfLx4",
"-b-_NNlCcng",
"R1SXNJElXHo",
"DSZI90Db24I",
"qbXNFOuD9k4",
"rfKz08bClBA",
"iOaDMWkmc3Q",
"dm_bclqGhuc",
"vqV22AszAdw",
"VYhmL038G1I",
"qZEFslUVfx0",
"HnaVobvfSyc",
"D4TYED_gKTE",
"F_CrLyz5xW4",
"08u8RlXca2I",
"-1ibsVnP64Q",
"VysxZDROr64",
"jtXJP_BqXes",
"luxOkCvJBcQ",
"k7TwStbkK70",
"av816KIz8nM",
"vgg9T4_0CNA",
"MvmZgflfT8M",
"QjwtW7GHjcY",
"YDH7f9dTXAs",
"b_h4-_j6JmY",
"7wpFNKnCpiQ",
"9O9tTS6LseI",
"DAHHFj39RRY",
"0s46eRixwnk",
"rVDWb0stlfQ",
"AKuu92ELIrE",
"O5mEqyUzRVA",
"ZovnoASlIaE",
"gtszMcGWW10",
"bMhDwdT5AHw",
"UXvMSMnYAzE",
"To6tsfRADL4",
"UZIIY5CK0TM",
"sOcZgWyoQuk",
"a0TkfbAGuKw",
"iH9Hkh9C-YM",
"93CDUtPjCPk",
"s8yrPZlvNP0",
"M5DlD4VMNO8",
"3HO65WF1sPY",
"hxUGjnVaPgE",
"eAyUSV164Ro",
"07HKJO4B96M",
"JVdMD3r7dSs",
"tqC_U2Y7rr4",
"PCJRuBQa4Pk",
"AykO23IwSLw",
"5v2XK-HIRnc",
"2a6zZBrT92o",
"LfxKvn2Ri4E",
"icQM98mzlG0",
"-b93mslJ2j8",
"KRIb4hm6uDI",
"IgPDDiFcA88",
"IrSbN7Y2lOA",
"u7hFzG1n4mg",
"gZJXbmC8Yno",
"jy8Glegc5Xo",
"FTk7bGPAYpo",
"BsBK3UZ0RGM",
"Vy2l3lGAb2I",
"K4iaIuPx7Go",
"j-k6ppZZ-ho",
"4wX4RgqR2Xs",
"Pej1BR3DXg8",
"OEWF1Tp7krc",
"3XNl3RUzl44",
"1ab2R4phuPI",
"ZWWxwmLpVok",
"YcXiRiXE8_w",
"8GCnOty6nk8",
"P3jaa5X5GP0",
"i66lv9RgKt0",
"os1A4mlV7tc",
"9jLD0CKcvbU",
"W_GvrkrnXQ4",
"u6YM5Ym9sR4",
"Va2pCIbrL1U",
"13iDupg37IE",
"yAB7Axl8Jnc",
"OswvuTtWReY",
"SR73ZNGeQmY",
"KEuYGQEiS8w",
"tbQjPeJ69sY",


  ];

  const videoDescriptions = [
"Introduction to Java + Installing Java JDK and IntelliJ IDEA for Java",
"Basic Structure of a Java Program: Understanding our First Java Hello World Program",
"Java Tutorial: Variables and Data Types in Java Programming",
"Java Tutorial: Literals in Java",
"Java Tutorial: Getting User Input in Java",
"Java Programming Exercise 1: CBSE Board Percentage Calculator",
"Java Tutorial: Chapter 1- Practice Set | Java Practice Problems With Solution",
"Java Tutorial: Operators, Types of Operators & Expressions in Java",
"Java Tutorial: Associativity of Operators in Java",
"Java Tutorial:  Data Type of Expressions & Increment/Decrement Operators",
"Java Tutorial: Exercise 1 - Solutions + Shoutouts",
"Java Tutorial: Chapter 2 - Practice Set (Java Practice Questions)",
"Java Tutorial: Introduction to Strings",
"Java Tutorial: String Methods in Java",
"Java Practice Questions on Strings: Practice Set on Java Strings (Must Solve!)",
"Java Conditionals: If-else Statement in Java",
"Java Tutorial: Relational and Logical Operators in Java",
"Java Tutorial: Switch Case Statements in Java",
"Java Tutorial: Practice Questions On Conditionals & Switch Case",
"Java Programming Exercise 2: Rock, Paper Scissors Game in Java",
"Java Tutorial: While Loops in Java",
"Java Tutorial: The do-while loop in Java",
"Java Tutorial: The for Loop in Java",
"Java Tutorial: break and continue in Java",
"Java tutorial: Practice Questions on Loops",
"Java Tutorial: Introduction to Arrays",
"Java Tutorial: For Each Loop in Java",
"Java Tutorial: Multidimensional Arrays in Java",
"Java Tutorial: Practice Questions on Arrays in Java",
"How to Make IntelliJ IDEA look Amazing!",
"Java Tutorial: Methods in Java",
"Java Tutorial: Method Overloading in Java",
"Java Tutorial: Variable Arguments (VarArgs) in Java",
"Java Tutorial: Recursion in Java",
"Java Tutorial: Practice Questions on Java Methods",
"Java Tutorial: Introduction to Object Oriented Programming",
"Java Tutorial: Basic Terminologies in Object Oriented Programming",
"Java Tutorial: Creating Our Own Java Class",
"Java Tutorial: Basic Questions on Object Oriented Programming",
"Java Tutorial: Access modifiers, getters & setters in Java",
"Java Tutorial: Exercise 2 - Solution and Shoutouts",
"Java Tutorial: Constructors in Java",
"Java Exercise 3: Guess the Number (OOPs Edition)",
"Java Tutorial: Exercise on Access Modifiers and Constructors",
"Inheritance in Java",
"Constructors in Inheritance in Java",
"this and super keyword in Java",
"Method Overriding in Java",
"Dynamic Method Dispatch in Java",
"Java Tutorial: Exercise 3 - Solutions & Shoutouts",
"Java Tutorial: Exercise 4 - Online Library",
"Java Tutorial: Exercise & Practice Questions on Inheritance",
"Java Tutorial: Abstract Class & Abstract Methods",
"Java Tutorial: Introduction to Interfaces",
"Java Tutorial: Abstract Classes Vs Interfaces",
"Why multiple inheritance is not supported in java?",
"Java Interfaces Example & Default Methods",
"Inheritance in Interfaces",
"Java Tutorial: Polymorphism in Interfaces",
"Java Practice Questions on Abstract Classes & Interfaces",
"Java Exercise 4: Solution & Shoutouts!",
"Interpreted vs Compiled Languages!",
"Is Java interpreted or compiled?",
"Packages in Java",
"Java Tutorial: Creating Packages in Java",
"Access Modifiers in Java",
"Practice Set on Java Package & Access Modifiers",
"Java Exercise 5: Creating a Custom Package",
"Multithreading in Java",
"Creating a Thread by Extending Thread class",
"Creating a Java Thread Using Runnable Interface",
"Java Thread Life Cycle",
"Constructors from Thread class in Java",
"Java Thread Priorities",
"Java Thread Methods",
"Java Tutorial: Practice Questions on Thread",
"Exercise 5: Solution & Shoutouts!",
"Errors & Exception in Java",
"Syntax Errors, Runtime Errors & Logical Errors in Java (Demo)",
"Try Catch Block in Java",
"Handling Specific Exceptions in Java",
"Nested Try-Catch in Java",
"The Exception class in Java",
"Throw vs Throws in Java",
"Finally Block in Java & Why is it needed!",
"Practice Set on Errors & Exceptions",
"Java Exercise 6: Custom Calculator | Java Practice Question",
"Java Collections Framework",
"Collections Hierarchy in Java",
"How to View Java Documentation (Correct Way)",
"ArrayList in Java: Demo & Methods",
"LinkedList in Java: Demo & Methods",
"ArrayDeque in Java",
"Hashing in Java",
"HashSet in Java",
"Date and Time in Java",
"The Date Class in Java",
"Calendar Class in Java",
"GregorianCalendar class & TimeZone in java",
"java.time API - Classes & Methods",
"DateTimeFormatter in Java",
"Advanced Java Practice Set",
"Java Exercise 6: Solution | Custom Calculator",
"Java Exercise 7: Library Management System in Java",
"Generating our own JavaDocs for our Package",
"Javadocs: Tags for Documenting Classes",
"Javadocs: Method Tags For Generating java Documentation",
"Annotations in Java",
"Java Anonymous Classes & Lambda Expressions",
"Java Generics",
"File Handling in Java",
"Advanced Java 2 - Practice Set",
"Exercise 7: Solutions + Shoutouts",
"How to download and install StarUML in Laptop / Desktop",
"Introduction to StarUML",
"Introduction to UML Diagrams",
"What is Class Diagram?",
"Class Diagram for Student Information Management System | StarUML",
"Class Diagram for Sales Order System | StarUML",
"Use Case Diagram for Online Shopping | StarUML",
"Use Case Diagram for Library Management System | StarUML",
"Use Case Diagram for Online Ticket Booking System | Train or Bus | StarUML",
"Activity Diagram for Login Page | StarUML",
"Activity Diagram for Online Shopping System | StarUML",
"Sequence Diagram for Login Page | StarUML",
"Sequence Diagram for ATM Cash Withdrawal | StarUML",
"Class Diagram Vs. Object Diagram | StarUML",
"Object Diagram for Student Management System | StarUML",
"Object Diagram for Employee Management System | StarUML",
"ER Diagram for Student Management System | StarUML",
"ER Diagram for Employee Management System | StarUML",
"ER Diagram for Hospital Management System | StarUML",
"Communication Diagram for Student Enrollment | StarUML",
"Communication Diagram for Train Ticket Booking | StarUML",



    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `OOM Video ${i + 1}`,
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
              ["All Videos", "All Videos", 0, 113],
              ["UML Diagrams", "UML Diagrams", 113, 200],
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
          <h1 className="text-3xl sm:text-4xl font-bold">Object Oriented Methodology - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("All Videos", "All Videos ", 0, 113)}
        {selectedSection === null && renderSection("UML Diagrams", "UML Diagrams ", 113, 200)}
        {/* {selectedSection === null && renderSection("semiconductor", "Semiconductor ", 96, 101)}
        {selectedSection === null && renderSection("problems", "Problem ", 102, 115)} */}

        {selectedSection === "All Videos" && renderSection("All Videos", "All Videos", 0, 113)}
        {selectedSection === "UML Diagrams" && renderSection("UML Diagrams", "UML Diagrams ", 113, 200)}
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

export default OOM;
