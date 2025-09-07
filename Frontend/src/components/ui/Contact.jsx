import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Background animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, -70, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Get in <span className="text-pink-500">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind? Or just want to say hi? Fill out the form
          below or reach me via email, phone, or location.
        </motion.p>

        {/* Contact Info + Form Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-pink-500 w-7 h-7" />
              <span className="text-lg">ashishshen20@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-pink-500 w-7 h-7" />
              <span className="text-lg">+91 7525847163</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-pink-500 w-7 h-7" />
              <span className="text-lg">Mau Aima Prayagraj Uttar Pradesh</span>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-white/5 border border-gray-600 focus:ring-2 focus:ring-pink-500 outline-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center justify-center gap-2 w-full p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold shadow-lg transition"
            >
              Send Message <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
