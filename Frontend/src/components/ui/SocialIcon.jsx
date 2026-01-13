import React from "react";
import { motion } from "framer-motion";
import {FaGithub} from "react-icons/fa";
const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/black_mode_on_102/",
    hover: "hover:bg-pink-500/20 hover:text-pink-400",
    svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5">
        <path
          fill="currentColor"
          d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.6.6.7.3 1.2.7 1.8 1.3.6.6 1 1.1 1.3 1.8.4.7.5 1.4.6 2.6.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.6 2.6-.3.7-.7 1.2-1.3 1.8-.6.6-1.1 1-1.8 1.3-.7.4-1.4.5-2.6.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.6-.6-.7-.3-1.2-.7-1.8-1.3-.6-.6-1-1.1-1.3-1.8-.4-.7-.5-1.4-.6-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.6-2.6.3-.7.7-1.2 1.3-1.8.6-.6 1.1-1 1.8-1.3.7-.4 1.4-.5 2.6-.6C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 3.8.8 2.8 1.2 2 1.8 1.2 2.6.4 3.4-.2 4.2.2 5.2c-.4.9-.6 1.9-.7 3.2C-.6 9.7-.6 10.3-.6 12s0 2.3.1 3.6c.1 1.3.3 2.3.7 3.2.4.9 1 1.7 1.8 2.6.8.8 1.6 1.4 2.6 1.8.9.4 1.9.6 3.2.7C8.3 24 8.7 24 12 24s3.7 0 5-.1c1.3-.1 2.3-.3 3.2-.7.9-.4 1.7-1 2.6-1.8.8-.8 1.4-1.6 1.8-2.6.4-.9.6-1.9.7-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.7-3.2-.4-.9-1-1.7-1.8-2.6C21.7 1 20.9.4 19.9 0c-.9-.4-1.9-.6-3.2-.7C15.7-.6 15.3-.6 12-.6 8.7-.6 8.3-.6 7-.5 5.7-.4 4.7-.2 3.8.2 2.9.6 2.1 1.2 1.3 2.1.5 2.9-.1 3.7.3 4.7c-.4 1-.6 2-.7 3.3C-.6 9.3-.6 9.7-.6 13s0 3.7.1 5c.1 1.3.3 2.3.7 3.2.4.9 1 1.7 1.8 2.6.8.8 1.6 1.4 2.6 1.8.9.4 1.9.6 3.2.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.3 3.2-.7.9-.4 1.7-1 2.6-1.8.8-.8 1.4-1.6 1.8-2.6.4-.9.6-1.9.7-3.2.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.7-3.2-.4-.9-1-1.7-1.8-2.6C21.7 1 20.9.4 19.9 0c-.9-.4-1.9-.6-3.2-.7C15.7-.6 15.3-.6 12-.6Z"
        />
        <path
          fill="currentColor"
          d="M12 5.8A6.2 6.2 0 1 0 18.2 12 6.2 6.2 0 0 0 12 5.8Zm0 10.2A4 4 0 1 1 16 12a4 4 0 0 1-4 4Z"
        />
        <circle cx="18.4" cy="5.6" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ashishjena.offecial",
    hover: "hover:bg-blue-500/20 hover:text-blue-400",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <path
          fill="currentColor"
          d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.7c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-patel-2b2b702a9/",
    hover: "hover:bg-sky-600/20 hover:text-sky-400",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3.5 8.98h2.96V20H3.5zM9.02 8.98h2.84v1.51h.04c.4-.76 1.38-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.62V20h-2.96v-4.53c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.4V20H9.02z"
        />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    href: "https://twitter.com/",
    hover: "hover:bg-sky-500/20 hover:text-sky-400",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <path
          fill="currentColor"
          d="M18.9 2H22l-7.2 8.2L23 22h-7.1l-5.5-7.2L3.1 22H0l7.7-8.7L1 2h7.2l5 6.6L18.9 2Zm-2.5 18h2L7.7 4h-2l10.7 16Z"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@blackCoder234",
    hover: "hover:bg-red-600/20 hover:text-red-500",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden>
        <path
          fill="currentColor"
          d="M23.5 7.1a3.5 3.5 0 0 0-2.4-2.5C19.2 4 12 4 12 4s-7.2 0-9.1.6A3.5 3.5 0 0 0 .5 7.1 36.6 36.6 0 0 0 0 12c0 1.7.2 3.3.5 4.9a3.5 3.5 0 0 0 2.4 2.5C4.8 20 12 20 12 20s7.2 0 9.1-.6a3.5 3.5 0 0 0 2.4-2.5c.3-1.6.5-3.2.5-4.9s-.2-3.3-.5-4.9ZM9.6 15.3V8.7l6.1 3.3-6.1 3.3Z"
        />
      </svg>
    ),
  },
  {
    name: "Github",
    href: "https://github.com/ashish84k",
    hover: "hover:bg-red-600/20 hover:text-red-500",
    svg: (
      <FaGithub className="w-6 h-6" />
    ),
  },
  
];

function SocialIcon() {
  return (
    <>
      {/* Social Icons with Neon Glow */}
      <div className="mt-5 flex flex-wrap gap-3">
        {socials.map((s) => (
          <motion.a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.name}
            whileHover={{ y: -2, rotate: 0 }}
            whileTap={{ scale: 0.95 }}
            className={`group ${s.hover} transition-colors duration-200 p-3 rounded-full bg-white/5 text-gray-500 ring-1 ring-white/10`}
          >
            {s.svg}
          </motion.a>
        ))}
      </div>
    </>
  );
}

export default SocialIcon;
