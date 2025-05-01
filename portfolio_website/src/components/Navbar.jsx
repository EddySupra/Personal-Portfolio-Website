import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Your Name</Link>
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          <Link to="/skills" className="hover:text-blue-500">Skills</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-white/90"
        >
          <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-200">About</Link>
          <Link to="/projects" className="block px-4 py-2 hover:bg-gray-200">Projects</Link>
          <Link to="/skills" className="block px-4 py-2 hover:bg-gray-200">Skills</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-200">Contact</Link>
        </motion.div>
      )}
    </nav>
}