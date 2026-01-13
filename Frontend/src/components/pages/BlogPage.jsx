import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import {blogPosts} from "../DataBase/Data";


const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="relative flex flex-col items-center px-6 md:px-16 py-20 overflow-hidden bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex justify-center items-center mb-4">
            <BookOpen className="w-12 h-12 text-gray-800 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">My Stories & Articles</h1>
          </div>
          <p className="text-lg text-gray-700">
            Sharing my journey, learnings, and experiences in web development 
            and technology through detailed articles and personal stories.
          </p>
        </motion.div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Article
          </h2>

          {blogPosts.filter(post => post.featured).map(post => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden mb-12 p-8 transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {post.title}
              </h3>

              <p className="text-gray-700 mb-6 text-lg">{post.desc}</p>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            All Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>

                  <p className="text-gray-700 mb-4 text-sm">{post.desc}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline text-sm"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3" />
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

export default BlogPage;
