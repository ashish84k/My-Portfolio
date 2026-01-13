import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Share2, Heart, Bookmark } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { blogPosts } from "../DataBase/Data";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <FaArrowLeft size={14} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-800">
      <Navbar />

      {/* ================= HEADER ================= */}
      <section className="pt-20 pb-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6"
            >
              <FaArrowLeft size={12} />
              Back to Blog
            </Link>

            <div className="flex gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              {post.desc}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-2">
                <User size={16} /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition text-sm font-medium">
                <Heart size={18} />
                Like
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition text-sm font-medium">
                <Bookmark size={18} />
                Save
              </button>
              <button className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition text-sm font-medium">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              prose prose-lg max-w-none
              prose-headings:text-gray-900
              prose-p:text-gray-700
              prose-p:leading-relaxed
              prose-h2:mt-10 prose-h2:mb-4
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ================= RELATED ================= */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 hover:shadow-md transition"
                >
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    {relatedPost.category}
                  </span>

                  <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                    {relatedPost.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4">
                    {relatedPost.desc}
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mb-4">
                    <span>{relatedPost.date}</span>
                    <span>{relatedPost.readTime}</span>
                  </div>

                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </Link>
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
