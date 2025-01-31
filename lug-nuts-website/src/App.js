import React, { useEffect, useState } from 'react';
import './App.css';
import { scroller } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

// Separate Pages
import Videos from './Videos';
import Resources from './Resources';
import TerminalCommands from './TerminalCommands';

// Shared Components
import Donut from './Donut';

// Officer Photos
import JeremiahPhoto from './assets/images/Jeremiah.png';
import BetimPhoto from './assets/images/Betim.jpg';
import BrettPhoto from './assets/images/Brett.png';

// ===========================
// 1) Scroll-to-section Hook
// ===========================
function useScrollToTopOrSection() {
  const location = useLocation();

  useEffect(() => {
    // If the URL has ?section=whatever, scroll to that section
    const params = new URLSearchParams(location.search);
    const section = params.get('section');

    // If you have a fixed navbar, adjust offset here:
    const navbarHeight = 0; // update if needed

    if (location.pathname === '/') {
      if (section) {
        scroller.scrollTo(section, {
          duration: 600,
          smooth: 'easeInOutCubic',
          offset: -navbarHeight,
        });
      } else {
        // If no section specified, just scroll to top
        window.scrollTo(0, 0);
      }
    } else {
      // On any other page, always scroll to top on mount
      window.scrollTo(0, 0);
    }
  }, [location]);
}

// ===========================
// 2) Tip Sidebar Component
// ===========================
function TipSidebar({ tip }) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed right-0 top-1/2 z-50 transform -translate-y-1/2 transition-transform duration-300 ${
        isActive ? 'translate-x-0' : 'translate-x-[calc(100%-40px)]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!isActive) setIsHovered(false);
      }}
    >
      <div className="relative">
        {/* Sidebar "handle" */}
        <div
          className="absolute left-0 w-10 h-24 bg-gruvbox-dark2 rounded-l-lg cursor-pointer flex items-center justify-center hover:bg-gruvbox-dark1 transition-colors"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="text-gruvbox-aqua transform -rotate-90 text-sm font-bold tracking-wide">
            {isHovered || isActive ? 'TIPS' : '🐧'}
          </span>
        </div>

        {/* Sidebar Content */}
        <div className="ml-10 bg-gruvbox-dark0 p-6 rounded-l-lg border border-gruvbox-dark2 shadow-terminal w-64">
          <h3 className="text-gruvbox-yellow mb-3 text-sm font-mono">// PRO TIP</h3>
          <p className="text-sm text-gruvbox-light1 leading-relaxed mb-4">{tip}</p>
          <div className="flex justify-center">
            <Donut />
          </div>
          {isActive && (
            <button
              className="absolute top-2 right-2 text-gruvbox-light1 hover:text-gruvbox-aqua transition-colors"
              onClick={() => setIsActive(false)}
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ===========================
// 3) Main App
// ===========================
function App() {
  // Officers Data
  const [officers] = useState([
    {
      name: 'Jeremiah Pitts',
      role: 'President',
      photo: JeremiahPhoto,
      description:
        'Jeremiah is passionate about Linux and open-source software. He oversees club operations and organizes workshops.',
    },
    {
      name: 'Betim Hodza',
      role: 'Co-President',
      photo: BetimPhoto,
      description:
        'Betim specializes in system administration and cybersecurity. He oversees club operations and organizes workshops.',
    },
    {
      name: 'Brett Boggs',
      role: 'Event Coordinator',
      photo: BrettPhoto,
      description:
        'Brett specializes in social engineering and cybersecurity. She helps with event planning and technical sessions.',
    },
  ]);

  // Random Tips
  const tips = [
    'Tip: Use "cd -" to quickly jump back to the previous directory.',
    'Command: "sudo apt-get update" to refresh package sources.',
    'Tip: Use "ls -a" to show hidden files.',
    'Command: "grep -i" for case-insensitive search in files.',
    'Quote: "Talk is cheap. Show me the code." - Linus Torvalds',
  ];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <Router>
      <ScrollHandler />
      <div className="bg-gruvbox-bg text-gruvbox-fg min-h-screen font-fira-code relative">
        {/* =====================
            Navigation
        ====================== */}
        <nav className="fixed w-full bg-gruvbox-bg/95 backdrop-blur-sm border-b border-gruvbox-dark2 shadow-terminal z-50">
          <ul className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8 p-4">
            {/* Home, What We Do, Officers are sections on the homepage */}
            <li>
              <Link
                to="/?section=home"
                className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/?section=whatwedo"
                className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
              >
                What We Do
              </Link>
            </li>
            <li>
              <Link
                to="/?section=officers"
                className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
              >
                Officers
              </Link>
            </li>

            {/* Terminal, Videos, Resources => separate pages */}
            <li>
              <Link
                to="/terminal-commands"
                className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
              >
                Terminal
              </Link>
            </li>
            <li>
              <Link
                to="/videos"
                className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
              >
                Resources
              </Link>
            </li>
          </ul>
        </nav>

        {/* Tip Sidebar */}
        <TipSidebar tip={randomTip} />

        {/* Main Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home officers={officers} randomTip={randomTip} />}
          />
          <Route path="/videos" element={<Videos />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/terminal-commands" element={<TerminalCommands />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t border-gruvbox-dark2 mt-16 py-8 text-center text-sm text-gruvbox-dark1">
          <div className="max-w-7xl mx-auto px-4">
            <p className="mb-2">LUGNUTS @ UTA - Open Source, Open Mind</p>
            <p>🚀 Powered by Linux and Vim</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function ScrollHandler() {
  useScrollToTopOrSection();
  return null;
}

export default App;

// ===========================
// 4) Home Page (with sections)
// ===========================
function Home({ officers, randomTip }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);

  const handleCommand = (e) => {
    e.preventDefault();
    let output = '';
    if (terminalInput === 'ls') {
      output = 'Projects  Workshops  Events  Officers';
    } else if (terminalInput === 'meow') {
      output = `
/\\_/\\  
( o.o ) 
 > ^ <
      `;
    } else if (terminalInput.startsWith('echo ')) {
      output = terminalInput.replace('echo ', '');
    } else {
      output = 'Command not found. Try "ls", "meow", or "echo <message>"';
    }
    setTerminalOutput([...terminalOutput, `> ${terminalInput}`, output]);
    setTerminalInput('');
  };

  return (
    <>
      {/* =====================
          Hero Section
      ====================== */}
      <section id="home" className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="terminal-header mb-8 p-6 rounded-lg bg-gruvbox-dark0 border border-gruvbox-dark2">
            <h1
              className="text-5xl sm:text-6xl font-bold text-gruvbox-aqua mb-6 glitch"
              data-text="LUG_NUTS"
            >
              LUG_NUTS
            </h1>
            <p className="text-xl text-gruvbox-light1 mb-6">
              $ sudo apt-get install knowledge
            </p>
            <div className="inline-block px-6 py-3 bg-gruvbox-dark2 rounded-md text-gruvbox-orange">
              <span className="blink">▋</span> University of Texas at Arlington
            </div>
          </div>
        </div>
      </section>

      {/* =====================
          Terminal Section
      ====================== */}
      <section className="py-16 px-4 sm:px-8 bg-gruvbox-dark0">
        <div className="max-w-3xl mx-auto terminal-container rounded-lg overflow-hidden shadow-terminal">
          {/* Terminal Header Lights */}
          <div className="terminal-header bg-gruvbox-dark2 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-gruvbox-red"></div>
              <div className="w-3 h-3 rounded-full bg-gruvbox-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-gruvbox-green"></div>
            </div>
          </div>
          {/* Terminal Body */}
          <div className="p-4 h-64 overflow-y-auto">
            <div className="terminal-output font-mono text-sm">
              {terminalOutput.map((output, index) => (
                <div key={index} className="mb-1 text-gruvbox-light1">
                  <span className="text-gruvbox-green">$</span> {output}
                </div>
              ))}
            </div>
            <form onSubmit={handleCommand} className="flex items-center mt-2">
              <span className="text-gruvbox-green mr-2">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent text-gruvbox-light1 focus:outline-none caret-gruvbox-aqua"
                placeholder='Type "ls", "meow", or "echo Hello"...'
              />
            </form>
          </div>
        </div>
      </section>

      {/* =====================
         What We Do Section
      ====================== */}
      <section id="whatwedo" className="py-16 px-4 sm:px-8 bg-gruvbox-dark1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gruvbox-aqua mb-8 text-center">
            [root@UTA ~]# what_we_do
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gruvbox-dark0 rounded-lg border border-gruvbox-dark2">
              <h3 className="text-xl text-gruvbox-yellow mb-4">
                Events & Workshops
              </h3>
              <ul className="space-y-3">
                {[
                  'Kernel Development Sessions',
                  'CTF Competitions',
                  'Open Source Contributions',
                  'Linux Distro Showdowns',
                  'SysAdmin Bootcamps',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gruvbox-light1">
                    <span className="text-gruvbox-green mr-2">▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gruvbox-dark0 rounded-lg border border-gruvbox-dark2">
              <h3 className="text-xl text-gruvbox-yellow mb-4">
                Community Features
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-gruvbox-dark2 rounded-md">
                  <h4 className="text-gruvbox-blue mb-2">Collaborative Projects</h4>
                  <p className="text-sm text-gruvbox-light1">
                    Contribute to our GitHub organization
                  </p>
                </div>
                <div className="p-4 bg-gruvbox-dark2 rounded-md">
                  <h4 className="text-gruvbox-blue mb-2">Mentorship Program</h4>
                  <p className="text-sm text-gruvbox-light1">
                    Learn from experienced members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================
         Officers Section
      ====================== */}
      <section id="officers" className="py-16 px-4 sm:px-8 bg-gruvbox-dark0">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gruvbox-aqua mb-12 text-center">
            sudo make leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {officers.map((officer, index) => (
              <div
                key={index}
                className="group bg-gruvbox-dark1 rounded-lg p-6 border border-gruvbox-dark2 hover:border-gruvbox-aqua transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={officer.photo}
                    alt={officer.name}
                    className="w-full h-64 object-cover rounded-md grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gruvbox-dark2/90 p-3">
                    <h3 className="text-lg font-bold text-gruvbox-light1">
                      {officer.name}
                    </h3>
                    <p className="text-sm text-gruvbox-green">{officer.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gruvbox-light1 leading-relaxed">
                  {officer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
