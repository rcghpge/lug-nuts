import React from 'react';

function Resources() {
  return (
    <div className="min-h-screen bg-gruvboxBg text-gruvboxFg flex flex-col items-center px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 mt-20 text-gruvboxYellow">
        Linux Resources
      </h2>

      <div className="max-w-4xl w-full">
        <h3 className="text-2xl font-bold mb-4 text-gruvboxBlue">Core Distributions</h3>
        <ul className="list-disc list-inside space-y-4 mb-8">
          {[
            {name: 'Ubuntu', url: 'https://ubuntu.com/', desc: 'Beginner-friendly distribution with extensive community support'},
            {name: 'Arch Linux', url: 'https://archlinux.org/', desc: 'Minimalist rolling-release distro for advanced users'},
            {name: 'Fedora', url: 'https://getfedora.org/', desc: 'Cutting-edge distribution focused on new technologies'},
            {name: 'Debian', url: 'https://www.debian.org/', desc: 'Stable foundation for many other distributions'},
            {name: 'Gentoo', url: 'https://gentoo.org/', desc: 'Source-based distribution for ultimate customization'},
            {name: 'Linux Mint', url: 'https://linuxmint.com/', desc: 'User-friendly Ubuntu derivative with polished desktop'}
          ].map((distro, index) => (
            <li key={index} className="text-gruvboxLight1">
              <a href={distro.url} target="_blank" rel="noopener noreferrer" 
                 className="text-gruvboxOrange underline hover:text-gruvboxRed">
                {distro.name}
              </a> - {distro.desc}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-bold mb-4 text-gruvboxGreen">Specialized Distros</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            {name: 'Kali Linux', url: 'https://www.kali.org/', desc: 'Penetration testing and security auditing'},
            {name: 'Tails', url: 'https://tails.boum.org/', desc: 'Privacy-focused live system'},
            {name: 'Qubes OS', url: 'https://www.qubes-os.org/', desc: 'Security-oriented desktop OS'},
            {name: 'NixOS', url: 'https://nixos.org/', desc: 'Reproducible system configurations'},
            {name: 'Alpine', url: 'https://alpinelinux.org/', desc: 'Lightweight security-focused distro'},
            {name: 'Proxmox VE', url: 'https://www.proxmox.com/', desc: 'Enterprise virtualization platform'}
          ].map((distro, index) => (
            <div key={index} className="p-4 bg-gruvboxDark1 rounded-lg">
              <a href={distro.url} target="_blank" rel="noopener noreferrer"
                 className="text-gruvboxGreen hover:text-gruvboxYellow font-mono">
                {distro.name}
              </a>
              <p className="text-sm text-gruvboxLight1 mt-2">{distro.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gruvboxPurple">Development Tools</h3>
        <div className="space-y-4">
          {[
            {name: 'GCC', url: 'https://gcc.gnu.org/', desc: 'GNU Compiler Collection'},
            {name: 'LLVM', url: 'https://llvm.org/', desc: 'Modular compiler framework'},
            {name: 'Git', url: 'https://git-scm.com/', desc: 'Distributed version control system'},
            {name: 'Docker', url: 'https://www.docker.com/', desc: 'Containerization platform'},
            {name: 'Kubernetes', url: 'https://kubernetes.io/', desc: 'Container orchestration system'},
            {name: 'Neovim', url: 'https://neovim.io/', desc: 'Modern Vim-fork focused on extensibility'}
          ].map((tool, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-gruvboxAqua rounded-full"></div>
              <a href={tool.url} target="_blank" rel="noopener noreferrer"
                 className="text-gruvboxAqua hover:text-gruvboxBlue">
                {tool.name}
              </a>
              <span className="text-gruvboxLight1 text-sm">{tool.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;