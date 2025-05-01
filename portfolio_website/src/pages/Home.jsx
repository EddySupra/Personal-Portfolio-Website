import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="text-center space-y-6">
      <motion.img
        src="/avatar.jpg"
        alt="Avatar"
        className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Your Name
      </motion.h1>
      <motion.p
        className="text-lg italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Building elegant web experiences.
      </motion.p>
      <div className="flex justify-center space-x-4">
        <motion.a
          href="#projects"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          View Projects
        </motion.a>
        <motion.a
          href="#contact"
          className="px-6 py-2 border border-blue-500 rounded-lg"
          whileHover={{ scale: 1.05 }}
        >
          Contact Me
        </motion.a>
      </div>
    </section>
}