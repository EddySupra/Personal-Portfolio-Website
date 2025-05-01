import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => (
  <div
    className="min-h-screen bg-cover bg-center pt-32 pb-20 px-4 text-white"
    style={{ backgroundImage: "url('/wrv.jpg')" }}
  >
    {children}
  </div>
);

// Define Home, About, Projects, etc. using PageWrapper
// Example:
const Home = () => (
  <PageWrapper>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
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
  </PageWrapper>
);

const Projects = () => (
  <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
        <motion.h1 className="text-4xl font-bold mb-4" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
        My Projects
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
          <motion.h1 className="text-4xl font-bold text-center mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
            TufferUp
          </motion.h1>
          
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Frontend:</strong> Vue.js 3 + Vite, Vue Router, Pinia, Axios</li>
            <li><strong>Backend:</strong> Node.js + Express.js, MongoDB Atlas (via Mongoose)</li>
            <li><strong>Authentication:</strong> Passport.js, express-session, MongoDB session store</li>
            <li><strong>Notifications:</strong> Firebase Cloud Messaging (FCM)</li>
            <li><strong>SSR Auth Views:</strong> EJS templates for login/signup</li>
            <li><strong>Search:</strong> MongoDB Atlas Search (aggregate().search())</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Challenges Faced</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>CSUF-only email registration using Mongoose pre-save hook</li>
            <li>Image uploads via Base64, managed in a separate model</li>
            <li>Cross-origin sessions with CORS config and credentialed Axios requests</li>
            <li>Async threaded messaging with unread flag updates</li>
            <li>Push notification token management using FCM</li>
          </ul>

          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Outcomes</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Users can register/login, create listings with images, search, and chat</li>
            <li>Separated concerns between frontend and backend for scalability</li>
            <li>Agile collaboration using clear dev roles (Scrum Master, QA, etc.)</li>
            <li>Simple local setup using <code>npm run dev</code> and <code>node server/index.js</code></li>
          </ul>
          <Link to="/projects/todo" className="text-yellow-400 underline">View More</Link>
        </motion.div>

           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
      <motion.h1 className="text-4xl font-bold text-center mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
        LeadChecker
      </motion.h1>
      <p className="text-white-300 mb-4">A full-featured, CSUF-student-specific marketplace built using a modern Vue + Node stack with real-time chat and notifications.</p>       
      <motion.div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-[1.05rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Python 3.x:</strong> Core scripting language for orchestration, data handling, and integration.</li>
            <li><strong>Selenium WebDriver (ChromeDriver):</strong> Automates browser interactions to locate and populate form fields.</li>
            <li><strong>gspread & oauth2client:</strong> Authenticate with Google Sheets using a service account JSON.</li>
            <li><strong>matplotlib & numpy:</strong> Plotting and simple numerical analysis.</li>
            <li><strong>Pillow (PIL):</strong> Screenshots for audit/debugging.</li>
            <li><strong>Virtualenv:</strong> Reproducible isolated environments.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Challenges Faced</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Google Service Account Authentication:</strong> OAuth2 config and refresh logic in headless sessions.</li>
            <li><strong>Dynamic Form Elements:</strong> Required explicit waits to avoid timing issues and stale elements.</li>
            <li><strong>ChromeDriver Compatibility:</strong> Version syncing across environments was handled automatically.</li>
            <li><strong>Error Handling & Retries:</strong> Retry loops and logging helped reduce disruptions.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Outcomes</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>End-to-End Automation:</strong> Transformed manual spreadsheet submission into full automation.</li>
            <li><strong>Audit-Grade Records:</strong> Visual records of each form submission with statistics.</li>
            <li><strong>Modular Architecture:</strong> Easy to extend new form types and data sources.</li>
            <li><strong>Reproducible Setup:</strong> New users can start with setup instructions in minutes.</li>
          </ul>
        </div>
        </motion.div>
          <Link to="/projects/weather" className="text-yellow-400 underline">View More</Link>
        </motion.div>
      </div>
    </motion.div>
  </PageWrapper>
);


const ProjectTodo = () => (
  <PageWrapper>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
      <h2 className="text-2xl font-semibold mb-2 text-yellow-300">TufferUp</h2>
          <p className="text-gray-300 mb-4">Form-filler-Bot is a Python-based automation tool designed to streamline the process of populating web forms by programmatically injecting data sourced from a Google Sheet. It orchestrates a headless (or GUI) Chrome session via Selenium WebDriver, reads rows from a spreadsheet using the Google Sheets API (authenticated via a service account), fills out each form field in sequence, captures screenshots of each submission, and can produce basic visual reports of success/failure rates.</p>
          
          <h3 className="text-lg font-bold text-white mb-1">Technologies Used</h3>
          <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
            <li><strong>Frontend:</strong> Vue.js 3 + Vite, Vue Router, Pinia, Axios</li>
            <li><strong>Backend:</strong> Node.js + Express.js, MongoDB Atlas (via Mongoose)</li>
            <li><strong>Authentication:</strong> Passport.js, express-session, MongoDB session store</li>
            <li><strong>Notifications:</strong> Firebase Cloud Messaging (FCM)</li>
            <li><strong>SSR Auth Views:</strong> EJS templates for login/signup</li>
            <li><strong>Search:</strong> MongoDB Atlas Search (aggregate().search())</li>
          </ul>

          <h3 className="text-lg font-bold text-white mb-1">Challenges Faced</h3>
          <ul className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1">
            <li>CSUF-only email registration using Mongoose pre-save hook</li>
            <li>Image uploads via Base64, managed in a separate model</li>
            <li>Cross-origin sessions with CORS config and credentialed Axios requests</li>
            <li>Async threaded messaging with unread flag updates</li>
            <li>Push notification token management using FCM</li>
          </ul>

          <h3 className="text-lg font-bold text-white mb-1">Outcomes</h3>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            <li>Users can register/login, create listings with images, search, and chat</li>
            <li>Separated concerns between frontend and backend for scalability</li>
            <li>Agile collaboration using clear dev roles (Scrum Master, QA, etc.)</li>
            <li>Simple local setup using <code>npm run dev</code> and <code>node server/index.js</code></li>
          </ul>
      <motion.img src="/screenshots/tufferup.png" alt="TufferUp Screenshot" className="mx-auto rounded mb-6 max-w-full h-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} />
      <motion.a href="https://github.com/gwarkentin/TufferUp" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline block text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
        View GitHub Repository
      </motion.a>
    </motion.div>
    </PageWrapper>
  );

    const ProjectWeather = () => (
<PageWrapper>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
      <motion.h1 className="text-4xl font-bold text-center mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}>
        LeadChecker
      </motion.h1>
      <p className="text-white-300 mb-4">A full-featured, CSUF-student-specific marketplace built using a modern Vue + Node stack with real-time chat and notifications.</p>
      <motion.div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-[1.05rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}>
        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mb-2">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Python 3.x:</strong> Core scripting language for orchestration, data handling, and integration.</li>
            <li><strong>Selenium WebDriver (ChromeDriver):</strong> Automates browser interactions to locate and populate form fields.</li>
            <li><strong>gspread & oauth2client:</strong> Authenticate with Google Sheets using a service account JSON.</li>
            <li><strong>matplotlib & numpy:</strong> Plotting and simple numerical analysis.</li>
            <li><strong>Pillow (PIL):</strong> Screenshots for audit/debugging.</li>
            <li><strong>Virtualenv:</strong> Reproducible isolated environments.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Challenges Faced</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Google Service Account Authentication:</strong> OAuth2 config and refresh logic in headless sessions.</li>
            <li><strong>Dynamic Form Elements:</strong> Required explicit waits to avoid timing issues and stale elements.</li>
            <li><strong>ChromeDriver Compatibility:</strong> Version syncing across environments was handled automatically.</li>
            <li><strong>Error Handling & Retries:</strong> Retry loops and logging helped reduce disruptions.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-yellow-300 mt-6 mb-2">Outcomes</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>End-to-End Automation:</strong> Transformed manual spreadsheet submission into full automation.</li>
            <li><strong>Audit-Grade Records:</strong> Visual records of each form submission with statistics.</li>
            <li><strong>Modular Architecture:</strong> Easy to extend new form types and data sources.</li>
            <li><strong>Reproducible Setup:</strong> New users can start with setup instructions in minutes.</li>
          </ul>
        </div>

        <motion.img src="/screenshots/leadchecker.png" alt="LeadChecker Screenshot" className="mx-auto rounded mb-6 max-w-full h-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} />
        <motion.a href="https://github.com/EddySupra/Form-filler-Bot" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline block text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.8 }}>
          View GitHub Repository
        </motion.a>
      </motion.div>
    </motion.div>
  </PageWrapper>
  );

  const About = () => (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
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
    </PageWrapper>
  );

  const Skills = () => (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
        <motion.h1 className="text-4xl font-bold mb-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          My Skills
        </motion.h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/20 text-black backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
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
          <div className="bg-white/20 text-black backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
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
      </PageWrapper>
  );

  const Contact = () => (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}  className="bg-white/20 text-white backdrop-blur-md p-6 rounded-lg shadow-md border border-white/10">
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
          <h2 className="text-white font-semibold mb-2">Connect with me</h2>
          <div className="flex justify-center gap-6 text-yellow-300 text-lg">
            <a href="https://github.com/EddySupra" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/eduardo-casas-710755265/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
  
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
  };

// Define other pages similarly using PageWrapper...

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
