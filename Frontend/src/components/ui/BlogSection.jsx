import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
const blogPosts = [
  {
    id: 1,
    title: "My Story",
    desc: "How I started my journey into tech — from curiosity in school to learning web development, internships, and working with the MERN stack.",
    date: "Sep 2025",
    link: "#",
  },
  {
    id: 2,
    title: "Getting Started with React",
    desc: "How I began learning React — from building simple components to exploring hooks and state management.",
    date: "Aug 2025",
    link: "#",
  },
  {
    id: 3,
    title: "Node.js & Express.js Basics",
    desc: "Notes from my backend learning journey — REST APIs, routes, and middleware using Node.js and Express.js.",
    date: "Jul 2025",
    link: "#",
  },
  {
    id: 4,
    title: "MongoDB for Beginners",
    desc: "My experience with MongoDB — creating databases, collections, and writing simple queries for projects.",
    date: "Jun 2025",
    link: "#",
  },
  {
    id: 5,
    title: "Exploring Bun.js",
    desc: "First impressions of Bun.js as a faster alternative to Node.js, and what I learned while trying it out.",
    date: "May 2025",
    link: "#",
  },
  {
    id: 6,
    title: "Core Java Learning Notes",
    desc: "Important topics I learned in Core Java — OOPs concepts, exception handling, and writing basic programs.",
    date: "Apr 2025",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative SVG background */}
      <svg
        className="absolute top-0 left-0 w-64 h-64 text-blue-500/10 dark:text-blue-400/10 animate-pulse"
        viewBox="0 0 200 200"
      >
        <path
          fill="currentColor"
          d="M39.6,-66.4C53.5,-60.4,68.8,-53.8,74.2,-42.1C79.6,-30.3,75.1,-13.6,68.9,-0.5C62.7,12.6,54.7,22.1,46.2,32.4C37.6,42.6,28.4,53.6,16.7,60.7C4.9,67.9,-9.3,71.3,-23.6,69.2C-37.9,67.1,-52.2,59.5,-63.7,47.1C-75.2,34.7,-83.8,17.3,-82.8,0.6C-81.8,-16.2,-71.3,-32.4,-58.1,-42.5C-44.9,-52.6,-29.1,-56.6,-13.3,-62.1C2.6,-67.7,18.4,-74.7,39.6,-66.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center mb-4">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest{" "}
              <span className="text-blue-600 dark:text-blue-400">Articles</span>
            </h2>
          </div>
          <p>
            Sharing my learnings, tutorials, and experiences from my journey
            into web development and full-stack technologies.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {post.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
                <motion.a
                  href={post.link}
                  className="flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowRight className="ml-1 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
