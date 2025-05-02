import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/20 text-black shadow-lg' : 'bg-white/5'} text-white px-4 py-3 flex justify-between items-center fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-white/20`}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-xl font-extrabold tracking-wide leading-tight">
          Eduardo Casas-Gabirio<br />
          <span className="text-sm font-medium text-yellow-300">Computer Science Student</span>
        </motion.h1>
        <div className="hidden md:flex space-x-4 text-base font-medium">
          <Link to="/" className="hover:text-yellow-300 transition transform hover:scale-105 duration-200 ease-in-out">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition transform hover:scale-105 duration-200 ease-in-out">About</Link>
          <Link to="/projects" className="hover:text-yellow-300 transition transform hover:scale-105 duration-200 ease-in-out">Projects</Link>
          <Link to="/skills" className="hover:text-yellow-300 transition transform hover:scale-105 duration-200 ease-in-out">Skills</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition transform hover:scale-105 duration-200 ease-in-out">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white/20 text-black text-white flex flex-col items-center space-y-4 py-4 md:hidden border-t border-white">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </nav>
    );
  }

export default Navbar;