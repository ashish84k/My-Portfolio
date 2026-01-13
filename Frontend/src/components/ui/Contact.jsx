import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-white"
    >
      {/* Content */}
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
        >
          Get in <span className="text-pink-600">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 text-center mb-14 max-w-2xl mx-auto"
        >
          Have a project in mind or just want to say hi?  
          Feel free to reach out using the form or contact details below.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-pink-600 w-6 h-6" />
              <span className="text-gray-700 text-base">
                ashishshen20@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-pink-600 w-6 h-6" />
              <span className="text-gray-700 text-base">
                +91 7525847163
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-pink-600 w-6 h-6" />
              <span className="text-gray-700 text-base">
                Mau Aima, Prayagraj, Uttar Pradesh
              </span>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex items-center justify-center gap-2 w-full p-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold transition"
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
