import React, { useEffect, useState } from 'react';
import './App.css';
import { scroller } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Donut from './Donut';
import Footer from './Footer';
import JeremiahPhoto from './assets/images/Jeremiah.png';
import BetimPhoto from './assets/images/Betim.jpg';
import CatPhoto from './assets/images/Cat.png';
import Videos from './Videos';
import Resources from './Resources';
import TerminalCommands from './TerminalCommands';

// Scroll handler hook
function useScrollToTopOrSection() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get('section');
    const navbarHeight = 0;

    if (location.pathname === '/') {
      if (section) {
        scroller.scrollTo(section, {
          duration: 600,
          smooth: 'easeInOutCubic',
          offset: -navbarHeight,
        });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
}

// Tip sidebar component
function TipSidebar({ tip }) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed right-0 top-1/2 z-50 transform -translate-y-1/2 transition-transform duration-300 ${
        isActive ? 'translate-x-0' : 'translate-x-[calc(100%-40px)]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => !isActive && setIsHovered(false)}
    >
      <div className="relative">
        <div
          className="absolute left-0 w-10 h-24 bg-gruvbox-dark2 rounded-l-lg cursor-pointer flex items-center justify-center hover:bg-gruvbox-dark1 transition-colors"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="text-gruvbox-aqua transform -rotate-90 text-sm font-bold tracking-wide">
            {isHovered || isActive ? 'TIPS' : '🐧'}
          </span>
        </div>
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

// Main App component
function App() {
  const [officers] = useState([
    {
      name: 'Jeremiah Pitts',
      role: 'President',
      photo: JeremiahPhoto,
      description: 'Linux and open-source enthusiast overseeing club operations.'
    },
    {
      name: 'Betim Hodza',
      role: 'Co-President',
      photo: BetimPhoto,
      description: 'System administration and cybersecurity expert.'
    },
    {
      name: 'Brett Boggs',
      role: 'Event Coordinator',
      photo: CatPhoto,
      description: 'Cybersecurity specialist handling event planning.'
    },
    {
      name: 'Rose Ramirez',
      role: 'Treasurer',
      photo: CatPhoto,
      description: 'Handles funds and tax info.'
    }
  ]);

  const tips = [
    'Tip: Use "cd -" to switch to previous directory',
    'Command: "cd ~" to return home',
    'Tip: Use "cd ../.." to move up two levels',
    'Command: "pwd" shows current directory',
    'Quote: "Software is like sex: it\'s better when it\'s free." - Linus Torvalds',
    'Tip: Chain commands with "&&" (e.g., cd Projects && ls)'
  ];

  return (
    <Router>
      <ScrollHandler />
      <div className="bg-gruvbox-bg text-gruvbox-fg min-h-screen font-fira-code flex flex-col">
        <nav className="fixed w-full bg-gruvbox-bg/95 backdrop-blur-sm border-b border-gruvbox-dark2 shadow-terminal z-50">
          <ul className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8 p-4">
            {['Home', 'Info', 'Officers'].map((item) => (
              <li key={item}>
                <Link
                  to={`/?section=${item.toLowerCase().replace(' ', '')}`}
                  className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
            {['Terminal Commands', 'Videos', 'Resources'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gruvbox-light1 hover:text-gruvbox-aqua px-3 py-2 rounded-md transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <TipSidebar tip={tips[Math.floor(Math.random() * tips.length)]} />

        <Routes>
          <Route path="/" element={<Home officers={officers} />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/terminal-commands" element={<TerminalCommands />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

// Scroll handler component
function ScrollHandler() {
  useScrollToTopOrSection();
  return null;
}

// Home component with terminal functionality
function Home({ officers }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentDir, setCurrentDir] = useState('~');
  const [prevDir, setPrevDir] = useState('');

  const getLsOutput = (dir) => {
    const directories = {
      '~': 'Projects  Workshops  Events  Officers  Documents',
      '~/Projects': 'kernel-hacking  ctf-tools  linux-from-scratch',
      '~/Workshops': 'intro-to-cli  git-101  vim-mastery',
      '~/Events': 'hacknight  installfest  meetup',
      '~/Officers': 'jeremiah.txt  betim.jpg  brett.png rose.webp',
      '/': 'bin  etc  usr  home  var'
    };
    return directories[dir] || `Cannot access '${dir}': No such file or directory`;
  };

  const processCdCommand = (arg, currentDir, prevDir) => {
    let newDir = currentDir;
    let output = '';

    if (!arg || arg === '~') {
      newDir = '~';
    } else if (arg === '-') {
      newDir = prevDir;
      output = `Switched to previous directory: ${prevDir}`;
    } else if (arg === '..') {
      const pathParts = currentDir.split('/').filter(p => p);
      pathParts.pop();
      newDir = pathParts.length ? pathParts.join('/') : '~';
    } else if (arg.startsWith('/')) {
      newDir = arg;
    } else {
      newDir = currentDir === '~' ? `~/${arg}` : `${currentDir}/${arg}`;
    }

    if (!getLsOutput(newDir).includes('Cannot access')) {
      return { newDir, output };
    }
    return { newDir: currentDir, output: `-bash: cd: ${arg}: No such file or directory` };
  };

  const handleCommand = (e) => {
    e.preventDefault();
    let output = '';
    let newDir = currentDir;
    
    if (terminalInput === 'ls') {
      output = getLsOutput(currentDir);
    } else if (terminalInput === 'meow') {
      output = `
/\\_/\\\n  
( o.o )\n 
 > ^ <\n
      `;
    } else if (terminalInput.startsWith('echo ')) {
      output = terminalInput.replace('echo ', '');
    } else if (terminalInput.startsWith('cd')) {
      const arg = terminalInput.split(' ')[1] || '';
      const result = processCdCommand(arg, currentDir, prevDir);
      newDir = result.newDir;
      output = result.output;
      setPrevDir(currentDir);
      setCurrentDir(newDir);
    } else if (terminalInput === 'pwd') {
      output = currentDir;
    } else if (terminalInput === 'clear') {
      setTerminalOutput([]);
      setTerminalInput('');
      return;
    } else {
      output = `Command not found: ${terminalInput}. Try "ls", "cd", "pwd", or "echo"`;
    }
    
    setTerminalOutput([
      ...terminalOutput,
      { command: terminalInput, output: output, dir: currentDir }
    ]);
    setTerminalInput('');
  };

  return (
    <>
      <section id="home" className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="terminal-header mb-8 p-6 rounded-lg bg-gruvbox-dark0 border border-gruvbox-dark2">
            <h1 className="text-5xl sm:text-6xl font-bold text-gruvbox-aqua mb-6 glitch" data-text="LUG_NUTS">
              LUG_NUTS
            </h1>
            <p className="text-xl text-gruvbox-light1 mb-6">$ sudo apt-get install knowledge</p>
            <div className="inline-block px-6 py-3 bg-gruvbox-dark2 rounded-md text-gruvbox-orange">
              <span className="blink">▋</span> University of Texas at Arlington
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-gruvbox-dark0">
        <div className="max-w-3xl mx-auto terminal-container rounded-lg overflow-hidden shadow-terminal">
          <div className="terminal-header bg-gruvbox-dark2 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-gruvbox-red"></div>
              <div className="w-3 h-3 rounded-full bg-gruvbox-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-gruvbox-green"></div>
            </div>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="terminal-output font-mono text-sm">
              {terminalOutput.map((entry, index) => (
                <div key={index} className="mb-1 text-gruvbox-light1">
                  <span className="text-gruvbox-green">lug@nuts:{entry.dir}$ </span>
                  {entry.command}
                  {entry.output && <div className="text-gruvbox-light1 mt-1">{entry.output}</div>}
                </div>
              ))}
            </div>
            <form onSubmit={handleCommand} className="flex items-center mt-2">
              <span className="text-gruvbox-green mr-2">lug@nuts:{currentDir}$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                className="flex-1 bg-transparent text-gruvbox-light1 focus:outline-none caret-gruvbox-aqua"
                placeholder='Try "cd Projects", "ls", or "pwd"...'
              />
            </form>
          </div>
        </div>
      </section>

      <section id="info" className="py-44 px-4 sm:px-8 bg-gruvbox-dark1">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gruvbox-aqua mb-8 text-center">
            [root@UTA ~]# info
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gruvbox-dark0 rounded-lg border border-gruvbox-dark2">
              <h3 className="text-xl text-gruvbox-yellow mb-4">Events & Workshops</h3>
              <ul className="space-y-3">
                {[
                  'Kernel Development Sessions',
                  'CTF Competitions',
                  'Open Source Contributions',
                  'Linux Distro Showdowns',
                  'SysAdmin Bootcamps'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gruvbox-light1">
                    <span className="text-gruvbox-green mr-2">▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-gruvbox-dark0 rounded-lg border border-gruvbox-dark2">
              <h3 className="text-xl text-gruvbox-yellow mb-4">Community Features</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gruvbox-dark2 rounded-md">
                  <h4 className="text-gruvbox-blue mb-2">Collaborative Projects</h4>
                  <p className="text-sm text-gruvbox-light1">Contribute to our GitHub organization</p>
                </div>
                <div className="p-4 bg-gruvbox-dark2 rounded-md">
                  <h4 className="text-gruvbox-blue mb-2">Mentorship Program</h4>
                  <p className="text-sm text-gruvbox-light1">Learn from experienced members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="officers" className="py-16 px-4 sm:px-8 bg-gruvbox-dark0 mb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gruvbox-aqua mb-12 text-center">sudo make leadership</h2>
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
                    <h3 className="text-lg font-bold text-gruvbox-light1">{officer.name}</h3>
                    <p className="text-sm text-gruvbox-green">{officer.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gruvbox-light1 leading-relaxed">{officer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;