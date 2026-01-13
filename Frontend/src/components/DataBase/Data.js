const blogPosts = [
  {
    id: 1,
    title: "My Story",
    slug: "my-story",
    desc: "How I started my journey into tech — from curiosity in school to learning web development, internships, and working with the MERN stack.",
    date: "Sep 2025",
    readTime: "8 min read",
    author: "Ashish Patel",
    category: "Personal Journey",
    content: `
      <h2>The Beginning</h2>
      <p>My journey into technology started during my school days when I first encountered a computer. The curiosity about how websites work and how applications are built sparked my interest in programming.</p>
      
      <h2>Learning Phase</h2>
      <p>I began with basic HTML and CSS, creating simple static websites. The satisfaction of seeing my code come to life on the screen was incredible. This led me to explore JavaScript and eventually dive into modern frameworks like React.</p>
      
      <h2>First Projects</h2>
      <p>My first real project was a simple portfolio website. It wasn't perfect, but it taught me the fundamentals of web development. I learned about responsive design, user experience, and the importance of clean code.</p>
      
      <h2>MERN Stack Journey</h2>
      <p>As I progressed, I discovered the MERN stack (MongoDB, Express.js, React, Node.js). This full-stack approach opened up endless possibilities. I built several projects including a task management system and a real-time chat application.</p>
      
      <h2>Current Focus</h2>
      <p>Today, I'm focused on building scalable applications and learning new technologies. I believe in continuous learning and staying updated with the latest trends in web development.</p>
      
      <h2>Future Goals</h2>
      <p>My goal is to become a senior full-stack developer and contribute to open-source projects. I also want to mentor other aspiring developers and share my knowledge through blogging and teaching.</p>
    `,
    tags: ["Personal", "Journey", "Web Development", "MERN Stack"],
    featured: true
  },
  {
    id: 2,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    desc: "How I began learning React — from building simple components to exploring hooks and state management.",
    date: "Aug 2025",
    readTime: "6 min read",
    author: "Ashish Patel",
    category: "Tutorial",
    content: `
      <h2>Why React?</h2>
      <p>React's component-based architecture and virtual DOM made it an obvious choice for building dynamic user interfaces. The large community and extensive ecosystem were additional factors that drew me to React.</p>
      
      <h2>First Steps</h2>
      <p>I started with the official React documentation and built simple components. Understanding JSX syntax and the component lifecycle were my initial challenges.</p>
      
      <h2>State Management</h2>
      <p>Learning about state and props was crucial. I practiced with simple counter applications and todo lists to understand how data flows through components.</p>
      
      <h2>Hooks Revolution</h2>
      <p>React Hooks changed everything. useState, useEffect, and custom hooks made functional components more powerful and easier to understand.</p>
      
      <h2>Best Practices</h2>
      <p>I learned about component composition, prop drilling solutions, and performance optimization techniques like memoization.</p>
    `,
    tags: ["React", "JavaScript", "Frontend", "Tutorial"],
    featured: false
  },
  {
    id: 3,
    title: "Node.js & Express.js Basics",
    slug: "nodejs-expressjs-basics",
    desc: "Notes from my backend learning journey — REST APIs, routes, and middleware using Node.js and Express.js.",
    date: "Jul 2025",
    readTime: "7 min read",
    author: "Ashish Patel",
    category: "Backend",
    content: `
      <h2>Why Node.js?</h2>
      <p>Node.js allows JavaScript to run on the server side, enabling full-stack development with a single language. This was a game-changer for me.</p>
      
      <h2>Setting Up Express</h2>
      <p>Express.js provides a minimal and flexible web application framework. Setting up my first server was exciting and opened up the world of backend development.</p>
      
      <h2>REST API Design</h2>
      <p>I learned about RESTful API design principles, HTTP methods, status codes, and proper API documentation. This knowledge was crucial for building scalable applications.</p>
      
      <h2>Middleware Magic</h2>
      <p>Understanding middleware functions and how they work in the request-response cycle was essential. I learned about authentication, logging, and error handling middleware.</p>
      
      <h2>Database Integration</h2>
      <p>Connecting Express with databases like MongoDB taught me about data persistence and CRUD operations.</p>
    `,
    tags: ["Node.js", "Express.js", "Backend", "API"],
    featured: false
  },
  {
    id: 4,
    title: "MongoDB for Beginners",
    slug: "mongodb-for-beginners",
    desc: "My experience with MongoDB — creating databases, collections, and writing simple queries for projects.",
    date: "Jun 2025",
    readTime: "5 min read",
    author: "Ashish Patel",
    category: "Database",
    content: `
      <h2>Why MongoDB?</h2>
      <p>MongoDB's document-based structure and flexibility made it perfect for my projects. The JSON-like documents were intuitive coming from a JavaScript background.</p>
      
      <h2>Basic Operations</h2>
      <p>I started with basic CRUD operations - creating, reading, updating, and deleting documents. The MongoDB shell was my first tool for interacting with the database.</p>
      
      <h2>Schema Design</h2>
      <p>Learning about schema design and relationships between documents was crucial. I practiced with various data structures and relationships.</p>
      
      <h2>Query Optimization</h2>
      <p>Understanding indexes and query optimization helped me build more efficient applications. I learned about aggregation pipelines and advanced querying techniques.</p>
      
      <h2>Integration with Node.js</h2>
      <p>Using Mongoose ODM made database operations easier and more structured. I learned about models, schemas, and middleware.</p>
    `,
    tags: ["MongoDB", "Database", "NoSQL", "Backend"],
    featured: false
  },
  {
    id: 5,
    title: "Exploring Bun.js",
    slug: "exploring-bunjs",
    desc: "First impressions of Bun.js as a faster alternative to Node.js, and what I learned while trying it out.",
    date: "May 2025",
    readTime: "4 min read",
    author: "Ashish Patel",
    category: "Technology",
    content: `
      <h2>What is Bun?</h2>
      <p>Bun is a fast all-in-one JavaScript runtime and package manager. It's designed to be a drop-in replacement for Node.js with better performance.</p>
      
      <h2>Installation and Setup</h2>
      <p>Installing Bun was straightforward. The package manager is incredibly fast, and the built-in bundler eliminates the need for additional tools.</p>
      
      <h2>Performance Comparison</h2>
      <p>I tested Bun against Node.js with simple applications and noticed significant performance improvements, especially in package installation and script execution.</p>
      
      <h2>Compatibility</h2>
      <p>Most Node.js packages work with Bun, but I encountered some compatibility issues with certain native modules.</p>
      
      <h2>Future Potential</h2>
      <p>While Bun shows great promise, it's still relatively new. I'm excited to see how it evolves and whether it becomes a mainstream alternative to Node.js.</p>
    `,
    tags: ["Bun.js", "JavaScript", "Runtime", "Performance"],
    featured: false
  },
  {
    id: 6,
    title: "Core Java Learning Notes",
    slug: "core-java-learning-notes",
    desc: "Important topics I learned in Core Java — OOPs concepts, exception handling, and writing basic programs.",
    date: "Apr 2025",
    readTime: "9 min read",
    author: "Ashish Patel",
    category: "Programming",
    content: `
      <h2>Why Java?</h2>
      <p>Java's object-oriented nature and platform independence made it an excellent choice for learning fundamental programming concepts.</p>
      
      <h2>Object-Oriented Programming</h2>
      <p>Learning OOP concepts like encapsulation, inheritance, polymorphism, and abstraction was foundational. These concepts apply to many other programming languages.</p>
      
      <h2>Exception Handling</h2>
      <p>Understanding try-catch blocks and exception hierarchies helped me write more robust code. I learned about checked and unchecked exceptions.</p>
      
      <h2>Collections Framework</h2>
      <p>The Java Collections Framework provided powerful data structures. I practiced with ArrayList, HashMap, and other collection classes.</p>
      
      <h2>Multithreading</h2>
      <p>Learning about threads and synchronization was challenging but essential for understanding concurrent programming.</p>
      
      <h2>Best Practices</h2>
      <p>I learned about coding conventions, documentation, and design patterns that make code more maintainable and readable.</p>
    `,
    tags: ["Java", "OOP", "Programming", "Fundamentals"],
    featured: false
  }
];

const projects = [
  {
    id: 1,
    title: "Exhibition Management System",
    description: "A MERN-based system to manage exhibitions, stalls, tickets, and payments with separate admin & user panels.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    github: "https://github.com/ashish/exhibition",
    live: "#",
    features: [
      "Admin dashboard for exhibition management",
      "User-friendly ticket booking system",
      "Secure payment processing",
      "Real-time stall availability updates",
      "Multi-role authentication system"
    ],
    challenges: "Handling real-time updates & concurrent bookings. Solved using WebSocket and DB transactions.",
    learnings: "Advanced state management, WebSockets, payment integration, concurrency handling."
  },
  {
    id: 2,
    title: "Canteen Management System",
    description: "React + Node.js system for canteen orders, payments, and real-time management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Razorpay"],
    github: "https://github.com/ashishpatel102/CanteenProject",
    live: "https://canteenease84k.onrender.com/",
    features: [
      "Real-time order tracking",
      "Menu management system",
      "Payment integration",
      "Order history and analytics",
      "Push notifications"
    ],
    challenges: "Managing real-time updates & payment integration.",
    learnings: "Real-time apps, Razorpay integration, inventory & notification system."
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website with modern animations, contact form, smooth UI/UX.",
    tech: ["React", "TailwindCSS", "Framer Motion", "EmailJS", "React Router"],
    github: "https://github.com/ashish/portfolio",
    live: "#",
    features: [
      "Responsive design",
      "Dark/Light mode toggle",
      "Smooth animations",
      "Contact form with email integration",
      "SEO optimized"
    ],
    challenges: "Smooth animations without performance issues.",
    learnings: "CSS animations, performance optimization, SEO best practices."
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "Chat app using Socket.IO with online/offline status, typing indicators, and message history.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JS", "Node.js", "Socket.IO", "MongoDB", "Express"],
    github: "https://github.com/ashish84k/chat-app/",
    live: "https://chat-app-ashish84k.onrender.com/",
    features: [
      "Real-time messaging",
      "Typing indicators",
      "Message history",
      "Room-based chat",
      "User authentication"
    ],
    challenges: "Efficiently handling multiple connections and real-time messaging.",
    learnings: "WebSocket, real-time apps, user state management, scaling connections."
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Full-featured task management app with authentication, task creation, tracking, and notifications.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap", "JWT", "Nodemailer"],
    github: "https://github.com/ashish84k/taskManagement",
    live: "https://task-management-olive-six.vercel.app/",
    features: [
      "User authentication",
      "Task creation & tracking",
      "Deadline reminders",
      "Team collaboration",
      "Progress reporting"
    ],
    challenges: "Complex task dependencies & notification system.",
    learnings: "State management, notifications, team collaboration, analytics."
  }
];


const education = [
  {
    year: "2023 - 2025",
    title: "Bachelor Of Computer Applications",
    place: "Allahabad State University",
    desc: "Focused on full-stack web development, real-time applications, and modern UI/UX design using MERN stack and latest web technologies.",
  },

  {
    year: "April 2022 - June 2022",
    title: "CCC (Course on Computer Concepts)",
    place: "Direct Candidate (NIELIT)",
    desc: "Successfully completed the CCC course, covering fundamentals of computers, MS Office, internet usage, and digital communication.",
  },
  {
    year: "2017",
    title: "High School (10th)",
    place: "UP Board, Prayagraj",
    desc: "Completed high school education with focus on Science and Mathematics.",
  },
  {
    year: "2021",
    title: "Intermediate (12th) - Science",
    place: "UP Board, Prayagraj",
    desc: "Completed senior secondary education in Science stream with subjects including Physics, Chemistry, and Mathematics.",
  },
];

export { blogPosts, projects, education};