import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../DataBase/Data";


const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Latest <span className="text-blue-600">Articles</span>
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600 mb-6">
            Sharing my learnings, tutorials, and experiences from my journey
            into web development and full-stack technologies.
          </p>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                       text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group bg-white border border-gray-200 rounded-2xl p-6
                         shadow-md hover:shadow-xl cursor-pointer
                         transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="flex items-center gap-1 text-blue-600 font-medium text-sm">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
