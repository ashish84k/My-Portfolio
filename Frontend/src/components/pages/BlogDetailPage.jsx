import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Heart, Bookmark } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

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

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Article Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-20 pb-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {post.desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">
                <Bookmark className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Related Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                      {relatedPost.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {relatedPost.desc}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
