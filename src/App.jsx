// Portfolio Website - React + Tailwind CSS (Fixed JSX Errors & Home Page Animations)
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 pb-20 px-4 text-center">
    <div className="flex flex-col items-center justify-center px-4">
      <motion.img 
        src="/avatar.jpg"
        alt="Eduardo Avatar" 
        className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:rotate-1"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ delay: 0.2, duration: 0.6 }} 
      />


      <motion.h1 
        className="text-4xl font-bold mb-2"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Eduardo Casas-Gabirio
      </motion.h1>
      <motion.p 
        className="text-xl italic mb-4 text-yellow-300"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Creating a Better World, One Line at a Time
      </motion.p>
      <motion.div 
        className="max-w-xl text-gray-300 space-y-5 text-[1.05rem] leading-relaxed text-left"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p>
          I’m a <span className="text-yellow-300 font-semibold">Computer Science student</span> passionate about turning complex problems into elegant solutions. Whether I’m building immersive game environments with <span className="text-yellow-300">Unity</span> and <span className="text-yellow-300">Unreal Engine</span>, streamlining development through AI-driven automation, or creating predictive models in <span className="text-yellow-300">Python</span> and <span className="text-yellow-300">TensorFlow</span>, I combine creativity with analytical depth.
        </p>
        <p>
          From responsive websites using <span className="text-yellow-300">React</span> and <span className="text-yellow-300">Tailwind CSS</span> to data-powered tools, I focus on building experiences that are not just functional, but meaningful. Explore my portfolio to see how I integrate <span className="text-yellow-300">game design</span>, <span className="text-yellow-300">AI automation</span>, and <span className="text-yellow-300">data science</span> into user-centered solutions.
        </p>
      </motion.div>
      
    </div>
  </motion.div>
);

const Projects = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 pb-20 px-4">
    <motion.h1 className="text-4xl font-bold text-center mb-8" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
      My Projects
    </motion.h1>

    <div className="max-w-4xl mx-auto space-y-10">
      <motion.div className="bg-[#112233] p-6 rounded-lg shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-2">TufferUp</h2>
        <p className="text-gray-300 mb-2">An OfferUp clone tailored for CSUF students to buy and sell items within their campus community.</p>
        <ul className="list-disc list-inside text-gray-400 text-sm mb-2">
          <li><strong>Technologies:</strong> React, Firebase, Tailwind CSS</li>
          <li><strong>Challenges:</strong> User authentication, secure messaging, real-time updates</li>
          <li><strong>Outcome:</strong> A trusted platform for peer-to-peer exchanges at CSUF</li>
        </ul>
        <Link to="/projects/todo" className="text-yellow-400 underline">View More</Link>
      </motion.div>

      <motion.div className="bg-[#112233] p-6 rounded-lg shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
        <h2 className="text-2xl font-semibold mb-2">LeadChecker</h2>
        <p className="text-gray-300 mb-2">A tool for tracking and verifying the quality of marketing leads through automated analysis.</p>
        <ul className="list-disc list-inside text-gray-400 text-sm mb-2">
          <li><strong>Technologies:</strong> Node.js, Express, MongoDB, Chart.js</li>
          <li><strong>Challenges:</strong> Data visualization, lead scoring algorithm</li>
          <li><strong>Outcome:</strong> Improved conversion rates through cleaner lead pipelines</li>
        </ul>
        <Link to="/projects/weather" className="text-yellow-400 underline">View More</Link>
      </motion.div>
    </div>
  </motion.div>
);

const ProjectTodo = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 px-4">
    <motion.h1 className="text-4xl font-bold text-center mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
      TufferUp
    </motion.h1>
    <motion.p className="max-w-3xl mx-auto text-gray-300 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
      TufferUp is an OfferUp clone specifically designed for CSUF students. It enables easy, secure, and fast item trading between students within the campus.
    </motion.p>
    <motion.ul className="max-w-3xl mx-auto text-gray-400 text-sm list-disc list-inside mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
      <li><strong>Technologies Used:</strong> React, Firebase, Tailwind CSS</li>
      <li><strong>Challenges Faced:</strong> Creating authentication, real-time chat, and geo-filtered listings</li>
      <li><strong>Outcome:</strong> A safe and effective solution for student transactions and networking</li>
    </motion.ul>
    <motion.img src="/screenshots/tufferup.png" alt="TufferUp Screenshot" className="mx-auto rounded mb-6 max-w-full h-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} />
    <motion.a href="https://github.com/gwarkentin/TufferUp" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline block text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
      View GitHub Repository
    </motion.a>
  </motion.div>
);

const ProjectWeather = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 px-4">
    <motion.h1 className="text-4xl font-bold text-center mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
      LeadChecker
    </motion.h1>
    <motion.p className="max-w-3xl mx-auto text-gray-300 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
      LeadChecker is a backend-integrated web tool designed to monitor, validate, and score incoming marketing leads using smart filters and real-time dashboards.
    </motion.p>
    <motion.ul className="max-w-3xl mx-auto text-gray-400 text-sm list-disc list-inside mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}>
      <li><strong>Technologies Used:</strong> Node.js, Express, MongoDB, Chart.js</li>
      <li><strong>Challenges Faced:</strong> Backend logic for scoring, scalable API design, and UI performance</li>
      <li><strong>Outcome:</strong> Accurate and insightful lead tracking for marketing optimization</li>
    </motion.ul>
    <motion.img src="/screenshots/leadchecker.png" alt="LeadChecker Screenshot" className="mx-auto rounded mb-6 max-w-full h-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} />
    <motion.a href="https://github.com/EddySupra/Lead-Checker" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline block text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
      View GitHub Repository
    </motion.a>
  </motion.div>
);

const About = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 pb-20 px-4 text-center">
    <motion.h1 className="text-4xl font-bold mb-4" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
      About Me
    </motion.h1>
    <motion.div className="max-w-2xl mx-auto text-gray-300 space-y-5 text-[1.05rem] leading-relaxed text-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
  <p>
    I’m a 26-year-old <span className="text-yellow-300 font-semibold">Computer Science student</span> born and raised in California. I began my academic journey at Rio Hondo College before transferring to California State University, Fullerton, where I’m currently pursuing my Bachelor’s in Computer Science. I’m on track to graduate in Fall 2025, and I’ve built a strong foundation in algorithms, software engineering, and full-stack development along the way.
  </p>
  <p>
    Over the last few years, I’ve honed a broad technical toolkit—everything from <span className="text-yellow-300">Python</span>, <span className="text-yellow-300">TensorFlow</span>, and predictive modeling for data science, to <span className="text-yellow-300">C++</span>/<span className="text-yellow-300">C#</span> and <span className="text-yellow-300">Unreal</span>/<span className="text-yellow-300">Unity</span> for game development, as well as <span className="text-yellow-300">React</span>, <span className="text-yellow-300">Tailwind CSS</span>, <span className="text-yellow-300">Node.js</span>, <span className="text-yellow-300">Express</span>, <span className="text-yellow-300">Firebase</span>, and <span className="text-yellow-300">MongoDB</span> for web applications. Right now I’m deep in the development of a sports-betting AI model: early tests are very promising, and I plan to release the first version soon. I’m also continually exploring new AI-driven automation techniques to streamline workflows and boost productivity.
  </p>
  <p>
    Gaming and sports have been lifelong passions, and they inform both my creative vision and analytical drive. My near-term goals include designing and launching my own indie game and refining my sports-prediction model, while long-term I dream of traveling the world—especially to Japan—to draw inspiration from diverse cultures and experiences. Colleagues describe me as hardworking, respectful, and punctual; I thrive in collaborative settings, embrace leadership opportunities, and always stay focused on delivering clean, maintainable code and engaging user experiences.
  </p>
</motion.div>
  </motion.div>
);

const Skills = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 pb-20 px-4 text-center">
    <motion.h1 className="text-4xl font-bold mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
      My Skills
    </motion.h1>
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
      <div className="bg-[#112233] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
          <li><strong>Programming & Scripting:</strong> Python, C++, C#, JavaScript, R, Lua</li>
          <li><strong>Algorithms & Math:</strong> Linear Algebra, Statistics, Optimization, Geometry, Physics, Pathfinding</li>
          <li><strong>Libraries & Frameworks:</strong> React, Tailwind CSS, TensorFlow, PyTorch, pandas, NumPy</li>
          <li><strong>Web & Backend:</strong> Node.js, Express, RESTful APIs, JWT/OAuth</li>
          <li><strong>Databases & Cloud:</strong> MongoDB, SQL, Firebase, Redis, Cassandra</li>
          <li><strong>Visualization:</strong> Jupyter, Tableau, Power BI, Post-processing Effects</li>
        </ul>
      </div>
      <div className="bg-[#112233] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Soft Skills</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
          <li>Problem Solving</li>
          <li>Communication & Team Collaboration</li>
          <li>Adaptability & Continuous Learning</li>
          <li>Time Management & Organization</li>
          <li>Attention to Detail</li>
        </ul>
      </div>
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#0b1f33] text-white min-h-screen pt-32 px-4 text-center">
    <motion.h1 className="text-4xl font-bold mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
      Contact Me
    </motion.h1>
    <motion.form className="max-w-xl mx-auto space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} action="https://formspree.io/f/meogedwp" method="POST">
      <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700" required />
      <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700" required />
      <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded bg-gray-900 text-white border border-gray-700" rows="5" required></textarea>
      <button type="submit" className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition">Send Message</button>
    </motion.form>
    <motion.div className="mt-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
      <h2 className="text-xl font-semibold mb-2">Connect with me</h2>
      <div className="flex justify-center gap-6 text-yellow-300 text-lg">
        <a href="https://github.com/EddySupra" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/eduardo-casas-710755265/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </motion.div>
  </motion.div>
);

import { useEffect } from "react";

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
    <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/10 shadow-lg' : 'bg-white/5'} text-white px-4 py-3 flex justify-between items-center fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b border-white/20`}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-xl font-extrabold tracking-wide leading-tight">
        Eduardo Casas-Gabirio<br />
        <span className="text-sm font-medium text-gray-300">Computer Science Student</span>
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
        <div className="absolute top-full left-0 w-full bg-[#0b1f33] text-white flex flex-col items-center space-y-4 py-4 md:hidden border-t border-white">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/todo" element={<ProjectTodo />} />
        <Route path="/projects/weather" element={<ProjectWeather />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

