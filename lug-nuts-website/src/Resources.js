import React from 'react';

function Resources() {
  return (
    <div className="min-h-screen bg-gruvboxBg text-gruvboxFg flex flex-col items-center justify-center px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 mt-20 text-gruvboxYellow">Linux Resources</h2>

      <ul className="list-disc list-inside space-y-4 text-left">
        {/* General Distros */}
        <li><a href="https://www.ubuntu.com/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxOrange">Ubuntu</a> - A beginner-friendly Linux distribution with extensive community support and easy-to-use interfaces.</li>
        <li><a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxOrange">Arch Linux</a> - A minimalist, rolling-release distribution that gives you full control over your system. Not for beginners.</li>
        <li><a href="https://getfedora.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxOrange">Fedora</a> - A cutting-edge Linux distribution with a focus on innovation and integration of new technologies.</li>
        <li><a href="https://www.debian.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxOrange">Debian</a> - One of the oldest and most reliable Linux distributions known for its stability and vast package repository.</li>
        <li><a href="https://gentoo.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxOrange">Gentoo</a> - Highly customizable and for advanced users who want to compile every package for maximum performance.</li>
        <li><a href="https://www.linuxmint.com/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxOrange">Linux Mint</a> - A user-friendly, desktop-focused distribution based on Ubuntu, with a sleek interface for beginners and advanced users alike.</li>
        
        {/* Niche Linux Distros */}
        <li><a href="https://nixos.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">NixOS</a> - A Linux distribution built on top of the Nix package manager, known for its declarative configuration model.</li>
        <li><a href="https://www.tinycorelinux.net/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">Tiny Core Linux</a> - A super lightweight distro with an emphasis on minimalism, perfect for resource-constrained environments.</li>
        <li><a href="https://www.slackware.com/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">Slackware</a> - One of the oldest Linux distros, famous for staying close to UNIX roots and simplicity.</li>
        <li><a href="https://tails.boum.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">Tails</a> - A privacy-focused, live Linux distribution designed to leave no trace on the system and keep your activities anonymous.</li>
        <li><a href="https://www.qubes-os.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">Qubes OS</a> - A highly secure operating system that uses virtualization to provide strong isolation between different tasks.</li>
        <li><a href="https://www.parrotsec.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">Parrot OS</a> - A security-focused Linux distribution, packed with tools for ethical hacking, cryptography, and forensics.</li>
        <li><a href="https://voidlinux.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxGreen">Void Linux</a> - A general-purpose distribution that’s entirely independent, using the runit init system and the XBPS package manager.</li>

        {/* Special Purpose Distros */}
        <li><a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxRed">Kali Linux</a> - A Linux distribution designed for digital forensics and penetration testing, loaded with security tools.</li>
        <li><a href="https://www.raspberrypi.org/software/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxRed">Raspberry Pi OS</a> - Official operating system for Raspberry Pi devices, based on Debian, great for education and DIY projects.</li>
        <li><a href="https://pop.system76.com/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxRed">Pop!_OS</a> - Developed by System76, this distro is tailored for creative professionals, gamers, and developers.</li>
        <li><a href="https://manjaro.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxRed">Manjaro</a> - A beginner-friendly Arch-based distribution that offers a more polished user experience out of the box.</li>
        <li><a href="https://www.linuxliteos.com/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxRed">Linux Lite</a> - A lightweight distribution built for simplicity, ideal for low-end hardware.</li>
        <li><a href="https://garudalinux.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxRed">Garuda Linux</a> - A performance-oriented Linux distribution with a focus on gaming and out-of-the-box optimizations.</li>

        {/* Linux Tools and Resources */}
        <li><a href="https://www.kernel.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxYellow">Kernel.org</a> - The official source for the Linux kernel. If you’re interested in building your own kernel, start here.</li>
        <li><a href="https://www.fsf.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxYellow">Free Software Foundation (FSF)</a> - Promotes free software and defends the rights of computer users worldwide.</li>
        <li><a href="https://distrowatch.com/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxYellow">DistroWatch</a> - A comprehensive resource that tracks and ranks Linux distributions, with reviews and release information.</li>
        <li><a href="https://www.linuxfoundation.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxYellow">Linux Foundation</a> - Supporting and advancing the Linux ecosystem through open-source projects and collaboration.</li>
        <li><a href="https://docs.kernel.org/" target="_blank" rel="noopener noreferrer" className="underline text-gruvboxYellow">Linux Kernel Documentation</a> - Extensive documentation covering kernel internals, development practices, and subsystem-specific information.</li>
      </ul>
    </div>
  );
}

export default Resources;
