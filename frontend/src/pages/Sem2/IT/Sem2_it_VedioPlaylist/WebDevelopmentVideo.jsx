import React, { useState } from "react";

const WD = () => {
 const videoIDs = [
 "k7ELO356Npo",
"MSICFljRcb4",
"xAsWteYn1no",
"13gLB6hDHR8",
"YwsOCN8woA8",
"rU9ZODw5yvU",
"5bFxbwjN-Gk",
"4z9bvgTlxKw",
"iZrSzitoRZo",
"hG-Rw-4xRw4",
"-V7Nl9OZH6c",
"qsohoU-8pIw",
"WSzOD8oFBvI",
"jsfpNMTKkkc",
"9VutINDUzV8",
"IhGflSc0wwc",
"SfVq-ajzVS8",
"74nEOGolDhI",
"5vEZw8vXmOQ",
"YDFErrqsTZ0",
"MV6R7wOIFDw",
"tjLXot9FsGE",
"te3YdkP2aCk",
"_xe20niOoGY",
"J-ROo5Yo1m4",
"PYMljVI2u_o",
"k51W7bz7LQU",
"AFQqDrP5e9Y",
"HIZBe2c4M1c",
"if0WlwM8m9A",
"aRcu6hLLuHM",
"iWGKkMTRq1s",
"Htmy4S4VFU0",
"N8RWnqXtSYQ",
"gDWn1kCnz3M",
"aIggxU77vPw",
"Jbld8NmC_iQ",
"UCDu1c0x_6Y",
"znqCY_lpAQU",
"k4upPm2aaJg",
"JeMLli_GakM",
"7koYUO--3uo",
"t5omB6952zs",
"d9Jq9TJfFBI",
"3Wkbm3h7LgU",
"-MXAf2K5dwM",
"pd6BlR0hYn8",
"Tj4jfyk_f08",
"LYmElVjyXMw",
"K7fm8CujgJQ",
"M78Ktq9bKEA",
"-vGKaw_Hrnk",
"sQJagHSTOpA",
"9zg8RYkWHjg",
"yzqUCV3qPX0",
"U2nEBTSZ3xI",
"RvoAhj2yNOA",
"52ITDLG3v8Q",
"qXpqtI8ESZk",
"ivZ-SuX6TJ4",
"KKGsF-gwnTg",
"u9oG_PUCKdQ",
"Ndw7lluAV_4",
"cA3dmWPAjmY",
"_r0Fnu5XM8I",
"CD8GiGgL6iY",
"aMu9yOKgQA0",
"6JVXhoFgexY",
"hL089lsLy-g",
"UV16tjptE04",
"x85JwZkUrLo",
"SlPuuRtuKI4",
"QEEz11ubRbs",
"7XPp1b4bX0M",
"4fmYrIWl-4Q",
"eEYvky5RvBg",
"TGgbCS7OIvI",
"CvrBYYh5osw",
"i8D7v_7xyBY",
"r9PjCGpWhYw",
"lcCphWrysx8",
"M0c9Inz307Q",
"ksXqhaIY2kA",
"2Cs7tsf7uXA",
"2EPXrWhd6KY",
"njGzTQWyhYo",
"ys_Hnczsdvw",
"SFOPt3oqen0",
"NtorjDNyGSo",
"GJHNKSNEs5U",
"HG5Aa7wDB68",
"aHOnxJoM68A",
"9BkFF7U84bg",
"ClsOgoc1btk",
"zRgD_wXI1Ik",
"qPGoIk84Qy8",
"eSeBVcKZx9Y",
"ug0tq-EidEE",
"6B8Tdd-kFZg",
"U39ZsqpfGwo",
"ltwKj0ui4_I",
"Hrv7SApys-s",
"l8khE4fkNo0",
"ylHdOo-bDsY",
"osr9mUcdOMI",
"8tw3uUayieE",
"JN8I7AybR2k",
"iNxYrT2wKgk",
"zr7idkZiC-s",
"zTbKVGKgJcs",
"0tKtNZzdZic",
"CE4YIgaeAGs",
"4gVgOHOqAnI",
"ZsdDrIl3OYw",
"JjS8d85VOX4",
"UUi5CSvlVaY",
"1T7nvaWJJFM",
"xwqxSqIgw5k",
"Fatxq7ZARa0",
"I3TdUxDwhOg",
"LkzWNtfUDco",
"w0gJQzspH04",
"CNjcFdT1EfM",
"mMtg1w_Z66w",
"srokXj0mufE",
"KrruJTTwOgU",
"EOhGVUjM2IA",
"3CNeCuNxmDs",
"lXMSmj96jqA",
"QLwpanZRiTY",
"S_34V5b07D0",
"oqkZUD41378",
"B6lfI7UeVWo",
"K58SSZfAP0Y",
"acVoMp1_y0A",
"dMP99a5xIJM",
"gUT69qeO67U",
"9hOTyrTMpAo",
"Qb6qfKqIA4k",
"gywgiNa60Bc",
"sEqUwjF2Jkw",
"ydHxn6Kc-5w",
"Zy9zfuSBEO8",
"h6j0SMFvmxk",
"FhOVUVCEtUs",
"MeTYiY5Kebk",
"CKgDta5ACWA",
"6sidqssk5Js",
"fu4cnZ9LbNQ",
"k-RD9YlA9N8",
"QTicSKy9Qgk",
"xJmTLpqctE0",
"pqC9X83Xa5w",
"arSL-XLxvFU",
"9mF7T77x6jM",
"1XpHX3LB_oE",
"QC-c59ZNAno",
"A1vr8vtTHyk",
"JPoAHqTkcIs",
"vw0rb1EnEvQ",
"gxu5DHO9018",
"FsLW4v9Jk5A",
"h7nUlyjzmXQ",
"yIrJ-Vfa9TU",
"lY8lz_Pzm78",
"8jYqXA-QlQw",
"mvtxWAe1-WA",
"ttZtRzZ33XI",
"srruWh2uEh4",
"h8i2BP2nzn4",
"QOfROjXytok",
"bsDxlkx2aoU",
"_LuhLeN9N1Q",
"RP3mrKKUWk0",
"sj3Ro1i9Siw",
"dXcCaT8m7w8",
"r8gyqmsET3s",
"lgt66hvT0OY",
"iWv2ezJTNUA",
"p9EsaVqblHY",
"ro6zGy2MvnI",
"PANUQGHgxCI",
"i3egAedcKf0",
"ciEftYTz3cY",
"qz4eD5iqshI",
"FkfNT_nCwHQ",
"Msqp1ec2Uds",
"5wUWgRJBPrA",
"-wxw2-I2CtI",
"9-lqk6GfdN4",
"AUQYBbeELSA",
"0aZc73AhUKw",
"CNJnrKkTjKo",
"c-v5ciBm0hY",
"vgQqppxblHM",
"VbwWM4kFwk4",
"KtSMkCWM0oM",
"A0wtgRFZy_Q",
"Is72HHd9s58",
"Dx4MN5__020",
"m118HulDXOk",
"H-94jV1w9OU",
"XionRs32FB0",
"fgxtdwSC9WM",
"sIQekA1W0ZY",
"j3wH4yKSVaQ",
"l1HRmvqfaUI",
"OYcxu11HkOM",
"HikR-MNUp5Y",
"6qfmoUS-rE0",
"_7_KN47vGU4",
"-_nz4q_Cyr4",
"ZYQZZbvMASM",
"A2a3jznxvUs",
"BaQahTJnoH4",
"Lg-xz4Ki6es",
"8XDxV00iw84",
"x-cRBitPHc8",
"bbyC3oKYSmw",
"ByqmykPQr54",
"yaBLH4NyepI",
"WBWllsFrl60",
"QfIjU7l7OcE",
"287hY0H6ebc",
"6HkqBimutfY",
"wCzO2B4VZlo",
"ZhrGHlPkffM",
"jM7RswpEhPQ",
"pvNIC0Ooh5Y",
"zsyXHlKTAmo",
"Jm_7899DK7g",
"ogVEqykJs_o",
"S29QlxLjsEA",
"QnfMGP1MDkw",
"5qPQXftnlZA",
"UMcxHq0fbYY",
"ZCVUdZRg8XI",
"KzJKziZd6dg",
"946JZ3NkNOU",
"2zsBgtRZAi4",
"2jGSJOtO_Vk",
"uootVFYaNMc",
"K752jcSV53w",
"Pe4iSlmsjxE",
"R8RGjFdLB0A",
"pmTRGi127aY",
"HHXIF9aQKhM",
"tmLH2yIQu9E",
"1JK3T5Wi93c",
"lRqHHijq95o",
"0iHTzVOfajE",
"fkyZb3HXpwM",
"h2kUGaDkxsA",
"2M4brUVBDMI",
"UizePS8EzFY",
"5yPX6HYelqw",
"Z3Ikht1QOjo",
"WSqcpKIjxG8",
"ZnQqNV_YylQ",
"iCaFZcoTbP0",
"T-GqjaS19SQ",
"bAC4XXG12as",
"xSUbbAQuuIs",
"SCMmki9a5bk",
"D0UOAddiZ7c",
"E5Ybc175CsY",
"C5Qu7H7QSDY",
"Jx67xhfjE0Q",
"aAHaXXgi0VU",
"NMnaXz6eMeo",
"q8DobGuAo-g",
"ls4MVEttdiY",
"GgnlQ1a0_uA",
"RiqHMHT4M9Q",

  ];

  const videoDescriptions = [
    "Complete HTML Tutorial in 1 Video 2024",
"Complete CSS Tutorial for Beginners in Hindi 🎓 Free Notes & Codes | Part 1",
"CSS Complete Tutorial in Hindi🔥10+ Animated Projects + Mega Responsive Website | P-2",
"JavaScript Full Course Tutorial for Beginners in Hindi🔥Free Notes with 10+ Projects | P-1",
"JavaScript Advanced full Course Tutorial🔥15+ Projects + Free Notes",
"MongoDB Complete Course Tutorial in Hindi🔥Free Notes & Projects",
"Complete SQL & MySQL in One Video in Hindi 2023🙏",
"React v19 Tutorial for Beginners in Hindi #1: What is React.js & Why Learn ReactJS in 2025",
"🚀 How to Install & Update React v19 in Vite – Full Guide (Stable Release!)",
"#2: React Installation & Creating Our First Website with React JS v19 Tutorial in Hindi | 2024",
"[Solved] React JS v19 Tutorial #2.1 👉 Fixing React Installation Issue & Bun, npm, and pnpm Setup",
"React JS v19 Tutorial #3: What to Learn Before React & 5 Tips to Maximize Your React Course (2024)",
"React JS v19 Tutorial in Hindi #4: React Project Structure and Naming Conventions",
"React JS v19 Tutorial in Hindi #5: JSX (JavaScript XML) The Essential Building Block of React",
"React JS v19 Tutorial #6: Components in React | Hindi",
"#7: React Fragments: Remove unwanted Nodes & Speed Up Rendering | React v19 Tutorial in Hindi",
"#8: Dynamic Values in JSX: Injecting JavaScript into HTML | React v19 Tutorial in Hindi",
"#9: React Conditional rendering in JSX : React v19 Tutorial in Hindi",
"#10: Our First React Interview Question & Answer | React Tutorial in Hindi 2024",
"#11: React Import and Export Explained | React Tutorial in Hindi 2024",
"#12:  Looping in JSX: Netflix Series Card Creation 🔥React Tutorial in Hindi",
"#13: Props in React JS - Making Netflix Cards Reusable🔥React Tutorial in Hindi",
"#14: React Destructuring Props in JSX | React Tutorial in Hindi",
"#15: React JS Projects: How to Deal with Errors and Warnings - 3 Best Practices🔥",
"#16: React Coding Challenge: Passing JSX as Props in React",
"#17: Add CSS Styling in React: Class vs ClassName Explained in React JS",
"#18: Inline CSS Styling in React.js: Essential Rules and Best Practices | React Tutorial in Hindi",
"#19: Conditional Styling for Dynamic UIs in React.js | When and Why to Use It in React App",
"#20: CSS Modules in React: Scoped and Reusable Styles | React Tutorial in Hindi",
"#21: Styled Components in React JS for Clean and Dynamic UI",
"#22: Tailwind CSS in React v19: Installing and Using Tailwind CSS to Style Your React App🔥",
"#23: Event Handling in React: Synthetic Events, Naming Conventions of Events & Functions & More",
"#24: Passing Events as Props in React | Control Parent Function Using Child Component🔥",
"#25: Event Propagation in React: Capturing, Bubbling, and Practical Implementation🔥",
"#26: React States: What is useState Hook & Why we need it in React",
"#27: How React State Works: In-depth Guide with Theory, Animation, and Practical Examples",
"#28: Why the state value does not reset to its initial value on re-render? Know the Real Reason🔥",
"#29: React JS State Challenge: Master useState with Objects - Test Your Skills 🧑‍💻",
"#30: Derived State in React.js: Improving State Management and Remove Redundancy & Dependency",
"#31: Why You Need to Lifting State Up in React: A Complete Guide with Animation",
"#31:  React Mini Project🔥Toggle Switch Button Component",
"#33: Best Website to Find Icons for Your React App: Complete Installation and Usage Guide",
"#34: React Project - Build a Complete Todo App from Scratch with Advanced Features",
"#36: Create a Real-Time Digital Clock in React – Display Current Date and Time in Todo App",
"#37: Delete Elements and Auto-Update Tasks in React: Add a Clear All Button to Your To-Do App",
"#38: React Todo List: Creating and Sharing Reusable Components with Best Practices",
"#39: Best Way to Store Todo Values in State & Adding Button to Check/Uncheck",
"#40: Keep Todo Data After Refresh: Adding Local Storage in React",
"#41: Host Your React Todo App for Free in 2024",
"#42: Why Keys Are Important in React JS: Common Problems & Solutions Explained with Animation",
"#43: Short Circuit Evaluation in React JS:  Explained with Real-Life Examples",
"#44: React Hook Rules! Every Dev Must Know to Master React JS",
"#45: How to Use the useState Hook in React",
"#46: React useState Hook Challenge: Advanced Counter App with Disable, Limits, Steps Counts & More",
"#47: React Controlled vs Uncontrolled Components: Master React Forms with Notes and Code Examples",
"#48: Registration Forms in React: Handling Multiple Input Fields with useState – The Hard Way",
"#49: React Form Handling: The Right Way to Manage Multiple Input Fields with One State Variable",
"#50: Create a Login Form in React",
"#51: Contact Forms in React: Get Contact Form Data in Two Ways",
"#52: useEffect Hook with Dependency Array in React JS: Learn with 3 Practical Examples",
"#53: React useEffect challenge ! Lets Solve it",
"#54: useEffect Cleanup Function in React JS. Very Important",
"#55: How NOT to Fetch API Data in React: Avoid Infinite Requests",
"#56: Fetching API Data in React: A Step-by-Step Guide to Fetch Pokémon API",
"#57: Handling Loading and Error States in React: Best Practices for Fetching Pokémon API Data",
"#58: Data Fetching in React: Using Async Await & Try Catch to Fetch Pokémon API",
"Create Pokemon Website using React JS in Hindi",
"#60: Host Your React Website Live on Free and Paid Servers",
"#61: useRef Hook in React to manage DOM elements and State easily",
"#62: No More forwardRef in React 19: Get Ref Values with New React 19 Methods",
"#63: useId Hook in React 19: Simplify Your Form Handling with Unique IDs",
"#64: Prop Drilling in React 19 with Animation & Practical Example",
"#64: Context API & useContext Hook in React v19 in Hindi",
"#65: The Mistake 90% of Devs Will Make & Waste Time 😢 But Here's the Solution!",
"#66: Create Custom Hooks in React 19: Step-by-Step Guide with Best Practices",
"#67:  New use Hook in React 19: Usage, and Advantages over useContext Hook",
"Build a React Website with Tailwind CSS in Hindi",
"#69: useReducer Hook in React 19",
"#70: Best Practices for Using the useReducer Hook in React 19: Optimize Your State Management",
"React.memo(): Prevent Unnecessary Re-Renders with React Memo || #71:",
"#72: useMemo Hook in React 19: Why, When & How to Use It with Practical Examples",
"#73: React.memo vs useMemo: Stop the Confusion! Learn When & How to Use Them",
"#74: useCallback Hook in React in Hindi",
"#75: Introduction to React Router v6.4: Creating a Basic Routes in Our React App",
"#76: React Router v6.4: Simplify Route Setup with createRoutesFromElements Helper Function",
"#77: React Router App Layout & Outlet Component: Render Nested Elements in Your React App",
"#77: Building a Dynamic Navigation Bar with React Router",
"#78: Active Links in React Navigation: Enhance User Experience with Clear Page Indicators",
"#80: Handling Error Pages in React Router",
"#81: useNavigate Hook in React Router: Seamless Page Redirection & Back Button Setup",
"#82: Fetch API Data with React Router Loaders🔥 No useEffect Needed",
"#84: Create Global Loading States in React Using React Router & useNavigation",
"#85: Secure Your React App: Using ENV Variables to Protect Private Data",
"#85: Dynamic Routing in React: Get Params Value and Fetch API Data for a Single Movie",
"#88: Handle Contact Form Data with React Router Form Component & Action",
"Final UI Upgrades: Perfecting Your React Movie Website",
"Host Your React Website on Netlify for Free",
"Complete Axios in React for Beginners in Hindi",
"Build a Full-Stack React App with Axios & Real APIs: Mastering CRUD Operations",
"#91: CRUD in React: HTTP GET Method to Fetch & Display Data with Axios + Styling",
"CRUD Operations in React Full Stack: DELETE Data with Axios",
"#93: Add Data to Real API & React Full Stack App with Axios POST Method",
"Update Data in React Full Stack App: Autofill Form with Axios and Edit Button",
"CRUD in React: Update API Data & Reflect Changes with Axios PUT",
"React JS CRUD Operation with Rest API using Axios in One Video",
"React Project🔥Dynamic Accordion in React 19",
"Create a Responsive Navbar in React JS ❤️‍🔥",
"Dynamic Contact Sections in React 🧑‍💻 Make 1000+ Lines of Codes in 10 Lines🔥",
"Build a Responsive Multi-Page React 19 Website | Dynamic Routes, Search Filters, Axios API & Deploy",
"#1: TanStack Query Tutorial in Hindi: Introduction to React Query & it's Advantages Over React❤️‍🔥",
"#2: TanStack Query v5 with React 19: Installations, Routing & Components",
"#3: QueryClient & Provider in TanStack Query",
"#4: React Query: The Only API Data Fetching Method You Need in React 19",
"#5: Stop Wasting Time: Handle API Loading & Errors Easily with React Query",
"TanStack Query DevTools: Master Your React Query Debugging",
"#7: Garbage Collection Time in React Query: Control Your Data Caching",
"#8: How to Stop Unwanted API Calls with Stale Time in React Query",
"#9: Real-Time Polling in React Query: Constantly Fetch Fresh Data, Even in the Background",
"#10: One Single Dynamic Detailed Page & Route for all 100+ API Cards in React Query 😀",
"How to Create Pagination in React Using React Query🔥",
"#12: React Query useMutation Hook: Simplify CRUD & Delete Posts Easily",
"#13: Update Post with React Query useMutation | Sync API and Local Cache",
"Create Instagram-Like Infinite Scrolling with React Query🔥",
"Infinite Scrolling in React Query with React Intersection Observer",
"Host Your React Query Website Live for Free and Paid Server",
"React Query (TanStack) Full Course Tutorial in One Video",
"React Redux Tutorial #1: Why, When, and How to Use Redux in React",
"Redux Tutorial #2: Create Reducer Functions to Add & Delete Tasks in React",
"Redux Store: Create, Dispatch & Get State in React",
"Redux with Action Creators: How to Create and Dispatch Actions Easily",
"Connect Redux with your React App | Redux Tutorial #5",
"Access Redux State in React: How to Read Data from the Redux Store using useSelector",
"How to Dispatch Actions in React using Redux: Add and Delete Tasks with useDispatch",
"Redux DevTools: Simplify State Management in React",
"Redux Thunk in React: Fetch and Add API Data to Your To-Do App",
"Currency Converter App in React Using Axios – Convert Live Rates 💯",
"Redux Toolkit Tutorial #1: Introduction & Advantages of RTK",
"Redux Toolkit Store Setup #2: configureStore & useSelector in React Explained",
"🔴Build a Live Currency Converter App in React with React Query & Axios",
"createSlice in Redux Toolkit: Simplifying Action Creators & Reducers",
"Redux Toolkit Tutorial : Add & Delete Tasks with createSlice in React App",
"How to Connect Redux Toolkit with React🔥Building a Simple Todo App UI",
"Access Redux Toolkit Store Data in React | Displaying Tasks with useSelector",
"useDispatch Hook in React to Handle RTK Actions | Add & Delete Tasks Easily",
"Professional Redux Toolkit Folder Structure in React: Organize with Features & Slices",
"React JS Series Finale: From Redux to TanStack Query - Key Takeaways & What's Next!",
"Node.js Tutorial for Beginners in Hindi #1: Introduction to Node JS",
"#2: Node.js History and Prerequisites: Everything You Need to Get Started!",
"#3: Node.js Installation Step By Step in 2025 🧑‍💻",
"#4: Node.js REPL Life Cycle Explained in Hindi with Practical Examples",
"#6: Node.js Secrets🤯 Why There’s No Window or Document in the Server-Side World!",
"#7: Node.js Modules : How to Export and Require Files in Node JS",
"#8: Named & Aggregate Exports in Node.js: Easily Export and Require Multiple Functions and Variables",
"#9: Path Module in Node.js : Learn Constants, Join Methods, and Useful Functions",
"#10: OS Module in Node.js: Methods, Properties, and Practical Examples",
"#12: FS Module in Node.js : Complete CRUD Operations & File Renaming (Sync)",
"#13: Node.js FS Module (Async):  How to Write, Read, Update, and Delete Files in Node.js",
"Node.js FS Module with Promises: Write, Read, Update & Delete Files Easily",
"#15: Node.js FS Module with Async/Await: File CRUD Operations🔥",
"#16: Node.js Event Emitters: Practical Examples & Argument Handling Explained",
"Node.js Challenge #1: Real-World Problem & Solutions Explained",
"#18: Creating a Web Server in Node.js 🔥 HTTP Module in Node JS",
"What is package.json? Learn How to Auto Restart Your Node.js App with Nodemon",
"Restart Your Node.js App Without Nodemon: The Inbuilt Solution Explained!",
"#21: ESModules in Node.js: Default, Named, and Aliased Imports Explained!",
"NPM in Node.js: Install Packages, Commands, and Versions Explained!",
"Node.js Versioning Explained: Symbols, Systematic Versions, and NPM Commands",
"NPM Commands: Install, Update, and Manage Node.js Packages",
"Global NPM Packages Explained: Manage, Update, and Remove Easily!",
"How Node.js Works behind the Scene with Live Practical Examples!",
"How Node.js Works: V8 Engine, Event Loop, and Worker Threads Explained!",
"Node.js Project #1: Build a CLI Todo App Using Node.js",
"Node JS Project #2: Create a CLI File Creation App Using Node.js",
"Create a Random Joke Generator App in Node.js",
"Node.JS Project #4: Build a Real Time Currency Converter App in Node.js",
"Node.js Project #5: Build a Weather App in Node.js | Fetch Real-Time Weather Data Using API",
"Build a URL Shortener with HTML, CSS & Node.js || P-1",
"Serving HTML & CSS File in Node ||  URL Shortener with Node.js (Part 2)",
"URL Shortener Project in Node.js (Part 3) | Handling Form Submissions in Node.js",
"🚀 Show Links in HTML by Fetching Data from Node.js | Real-time URL Display with JSON",
"Final Video 🔗 Build URL Shortener with Node.js – Truncate Text & Redirect Logic Explained!",
"🌐 How the Web Really Works! DNS, HTTP & HTTPS Explained with Animations 🚀",
"Express JS Tutorial for Beginners in Hindi 🔥 Build Your First Express JS Server from Scratch",
"Environment Variables in Node.js & Express | Setup .env Files and Best Practices",
"Fix Port Number Issues in Node.js | Check, Release, and Set Ports Using .env",
"Validate Environment Variables in Express.js Using Zod",
"Host Your Node.js App for FREE 🔥",
"How to Send Files in Express JS | Fix __dirname Not Working in Express JS",
"🔥 Serve HTML CSS & JavaScript Files in Express.js | express.static Explained",
"🚀 ES Modules in Node.js - Caveats, __dirname & __filename Fixes | Top-Level Await Explained",
"Route Parameters in Express.js | Dynamic Routes, URL Params & Handling Spaces",
"Query Parameters in Express | Real Examples & Practical Demo",
"🚀 How to Handle Form Submission in Express | GET & POST Methods Explained",
"🔴 How to Handle a 404 Error Page in Express JS",
"Express.js Project URL Shortene: Step-by-Step Guide for Beginners",
"Express Router🔥Separating routes in separate modules",
"EJS Template Engine in Express.js | Dynamic Content Made Easy",
"EJS Partials in Express: Reusable Components Like React JS",
"Controllers in Express.js: Simplify Your URL Shortener Project",
"Upgrade Your URL Shortener Project: Add Dynamic Content with EJS in Express.js",
"Streams and Buffers in Node.js | Simple File Copy Example with Events",
"Databases Introduction for Full-Stack Developers🔥",
"MongoDB & Express.js CRUD Operations Tutorial",
"Adding MongoDB to our Express URL Shortener Project",
"Mongoose with Express: Easy Setup, Schema, Model, and Data Insertion Explained",
"Mongoose Middleware Explained with Real Example 👍",
"MongoDB Mongoose Challenge: Solve It Step by Step!",
"MySQL in Hindi (2025) 🔥 | Complete Installation & Setup Guide for Beginners",
"📌 MySQL in One Video Using Workbench in Hindi",
"MySQL + Node.js Crash Course🔥Connect MySQL with Express & Perform CRUD Operations",
"Build a Project using Node.js, Express JS & MySQL🔥",
"Prisma ORM in One Video🔥Setup, Migrations, CRUD & Best Practices",
"Build a Dynamic Project with Prisma, MySQL & Express",
"Drizzle ORM Full Course Tutorial For Beginners🔥",
"Drizzle ORM with MySQL – Full Dynamic Project with Free Source Code 🚀",
"Express.js Authentication: Registration & Login Page with EJS",
"What Are COOKIES❓Storing & Accessing User Data with Cookie",
"Cookie Parser Middleware – Set and Get Cookies Easily",
"Authentication vs Authorization Explained with Real-Life Examples",
"Creating User Schema in Drizzle ORM – Backend Authentication Setup",
"Handling User Registration in Express – Storing Data in Database",
"Handling User Login in Express – Email & Password Validation + Redirection",
"Bcrypt vs Argon2 – Which is the Best Password Hashing Algorithm?",
"Secure User Authentication: Hash & Verify Passwords Using Argon2",
"Session vs JWT Authentication: Secure Your App with JSON Web Tokens",
"Verify JWT Token in Node.js: Secure Authentication with Middleware",
"🔒 How to Create a Protected Route in Express for Profile Page",
"Create a Dynamic Navbar & Logout Users in Express JS & MySQL🔥",
"Error Handling and Flash Messages in Express.js 🚀",
"🎁 Get My Premium Node.js Series + PPT & Notes – 100% FREE for You! 🚀",
"Connect Users with Short Links Table Using Foreign Key & Show Only Their Links After Login",
"Zod Validation in Node.js – Secure Forms, Handle Errors & Improve UX!",
"How to Edit & Update Shortcodes | Full CRUD Functionality in Node.js, EJS & MySQL",
"Delete ShortLinks & Manage URLs in Express & MySQL",
"Hybrid Authentication: Secure & Fast Login with Sessions  +  JWT (Access & Refresh Token)",
"Creating a Session Schema for Hybrid Authentication (Session + JWT)",
"Generating Access & Refresh Tokens After Login (Session + JWT)",
"Refreshing Access Token When It Expires (Session + JWT)",
"How to Logout Users in Express with MySQL (Session + JWT)",
"How to Keep Users Logged In After Registration (Session + JWT)",
"Implementing DRY Principle in Authentication ♻️ Reusable Function in Express.js & MySQL",
"Create a Dynamic Profile Page in Node.js with MySQL (Step-by-Step)",
"How Email Verification Works – Step-by-Step Logic",
"Creating an Email Verification Schema for Secure Authentication in Express & MySQL",
"How to Fix Drizzle Schema Migration Errors in Minutes",
"How to Build an Email Verification Page in Node.js & MySQL",
"Generate & Store 8-Digit Email Verification Token with Expiry Handling || Express & MySQL",
"Send Emails in Node.js Using Nodemailer & Ethereal – Step-by-Step",
"DBMS Transactions: Why & How to Use Transactions for Secure Email Verification",
"What is URL API? Improving our Email Verification Links with URL API",
"Verify Email by Clicking Gmail Link – Start Till End with Express & MySQL🔥",
"SQL Joins with Real-Life Examples🔥Inner, Left & Right Join Explained!",
"Improve Your App with SQL Joins – Shorter & Faster Queries Using Inner Join!",
"Send Email Verification After User Registration with Express & MySQL",
"💌 Use MJML Instead of Old HTML to Send Dynamic Email Templates in Our App",
"TAILWIND CSS V4 IS HERE! Install & Use It in React & Next.js 🔥",
"📧 Verify Emails in Official Gmail with Resend! (Node.js Email Setup 2025) 🚀",
"Edit & Update User Profile Page in Express + MySQL🔥",
"😱 OOPS! I Made This NODE.JS MISTAKE – HERE’S The QUICK FIX! 🔥",
"How to Change Password After Login in Express & MySQL - Part 1 (Step By Step)",
"Password Validation with Zod in Express & MySQL – Change Password P-2",
"Securely Update User Password after Login in Express & MySQL - Part 3",
"FINALLY! Forgot Password in Express & MySQL is HERE! 🔑 | Schema + Page Setup (Part 1)",
"🔗 Create Reset Password Link & Store Token in DB! | Forgot Password Part 2 🚀",
"📧 Beautiful Password Reset Email with MJML! | Why MJML Over HTML? (Part 3)",
"📩 Send Password Reset Email in Gmail Using Resend API! (Part 4) | Express.js",
"🔐 Reset Password Page Setup & Secure Token Verification (Part 5) | Express.js",
"🔑 Password Reset Successful! Final Step Completed in Express.js & MySQL",
"How Login with Google or OAuth Works | Simple Explanation with Sequence Diagram",
"Complete Login with Google in Node.js, OAuth & MySQL 🔥",
"GitHub OAuth Login in Node.js – Step-by-Step GitHub Authentication Tutorial",
"Set Password After Social Login in Node.js & MySQL🔥NOT Reset Password",
"Upload File in Node.js & MySQL Using Multer | Complete Image Upload Tutorial",
"Add Image Preview & Remove Button in File Upload | Node.js & MySQL Advanced File Upload",


    "",
  ];

  const videoData = videoIDs.map((id, i) => ({
    id: i + 1,
    title: `WD Video ${i + 1}`,
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
              ["HTML", "HTML", 0, 1],
              ["CSS", "CSS", 1, 3],
              ["JS", "JS", 3, 5],
              ["mongo", "mongo",5 , 6],
              ["sql", "sql", 6, 7],
              ["react", "react", 7, 146],
              ["node js", "node js", 146, 300],
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
          <h1 className="text-3xl sm:text-4xl font-bold">Web Development - Video Lectures</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute right-0 text-3xl sm:text-4xl text-white hover:text-gray-300 transition"
          >
            {sidebarOpen ? '✖' : '⋮'}
          </button>
        </div>

        {selectedSection === null && renderSection("HTML", "HTML ", 0, 1)}
        {selectedSection === null && renderSection("CSS", "CSS ", 1, 3)}
        {selectedSection === null && renderSection("JS", "JS ", 3, 5)}
        {selectedSection === null && renderSection("mongo", "mongo ", 5, 6)}
        {selectedSection === null && renderSection("sql", "sql ", 6, 7)}
        {selectedSection === null && renderSection("react", "react ", 7, 146)}
        {selectedSection === null && renderSection("node js", "node js ", 146, 315)}
        
        {selectedSection === "HTML" && renderSection("HTML", "HTML", 0, 1)}
        {selectedSection === "CSS" && renderSection("CSS", "CSS ", 1, 3)}
        {selectedSection === "JS" && renderSection("JS", "JS ", 3, 5)}
        {selectedSection === "mongo" && renderSection("mongo", "mongo ", 5, 6)}
        {selectedSection === "sql" && renderSection("sql", "sql ", 6, 7)}
        {selectedSection === "react" && renderSection("react", "react ", 7, 146)}
        {selectedSection === "node js" && renderSection("node js", "node js ", 146, 315)}
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

export default WD;
