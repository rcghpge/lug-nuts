import React from 'react';

function TerminalCommands() {
  return (
    <div className="min-h-screen bg-gruvboxGray text-gruvboxFg flex flex-col items-center px-8 py-12">
      <div className="flex-1 w-full max-w-4xl">  {/* Added flex container */}
        <h2 className="text-4xl font-bold mb-8 mt-20 text-gruvboxDark2">
          Comprehensive Linux Terminal Commands
        </h2>

        <div className="w-full space-y-12">
          {/* File Management Section */}
          <div className="p-6 bg-gruvboxDark1 rounded-lg shadow-terminal">
            <h3 className="text-2xl font-bold mb-4 text-gruvboxYellow">File and Directory Management</h3>
            <ul className="space-y-3">
              {[
                {cmd: 'ls', desc: 'List directory contents'},
                {cmd: 'cd [dir]', desc: 'Change directory'},
                {cmd: 'mkdir [dir]', desc: 'Create new directory'},
                {cmd: 'rm -r [dir]', desc: 'Remove directory recursively'},
                {cmd: 'cp [src] [dest]', desc: 'Copy files/directories'},
                {cmd: 'mv [src] [dest]', desc: 'Move/rename files/directories'},
                {cmd: 'chmod [perms] [file]', desc: 'Change file permissions'},
                {cmd: 'find [path] -name [pattern]', desc: 'Search for files'},
              ].map((item, index) => (
                <li key={index} className="flex items-baseline space-x-3 group">
                  <code className="bg-gruvboxDark2 text-gruvboxGreen px-2 py-1 rounded font-mono group-hover:bg-gruvboxDark0 transition-colors">
                    {item.cmd}
                  </code>
                  <span className="text-gruvboxLight1">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* System Monitoring Section */}
          <div className="p-6 bg-gruvboxDark1 rounded-lg shadow-terminal">
            <h3 className="text-2xl font-bold mb-4 text-gruvboxBlue">System Monitoring</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {cmd: 'top', desc: 'Display system processes'},
                {cmd: 'htop', desc: 'Interactive process viewer'},
                {cmd: 'df -h', desc: 'Disk space in human format'},
                {cmd: 'free -m', desc: 'Memory usage statistics'},
                {cmd: 'ps aux', desc: 'Snapshot of processes'},
                {cmd: 'journalctl', desc: 'View systemd logs'},
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gruvboxDark2 rounded hover:bg-gruvboxDark0 transition-colors">
                  <code className="text-gruvboxAqua font-mono">{item.cmd}</code>
                  <p className="text-sm text-gruvboxLight1 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Networking Section */}
          <div className="p-6 bg-gruvboxDark1 rounded-lg shadow-terminal">
            <h3 className="text-2xl font-bold mb-4 text-gruvboxGreen">Networking</h3>
            <ul className="space-y-3">
              {[
                {cmd: 'ping [host]', desc: 'Test network connectivity'},
                {cmd: 'ifconfig', desc: 'Configure network interfaces'},
                {cmd: 'curl [URL]', desc: 'Transfer data from URLs'},
                {cmd: 'wget [URL]', desc: 'Download files from web'},
                {cmd: 'ssh [user@host]', desc: 'Secure shell connection'},
                {cmd: 'scp [file] [dest]', desc: 'Secure file copy'},
              ].map((item, index) => (
                <li key={index} className="flex items-baseline space-x-3 group">
                  <code className="bg-gruvboxDark2 text-gruvboxPurple px-2 py-1 rounded font-mono group-hover:bg-gruvboxDark0 transition-colors">
                    {item.cmd}
                  </code>
                  <span className="text-gruvboxLight1">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* User Management Section */}
          <div className="p-6 bg-gruvboxDark1 rounded-lg shadow-terminal">
            <h3 className="text-2xl font-bold mb-4 text-gruvboxRed">User Management</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {cmd: 'whoami', desc: 'Show current user'},
                {cmd: 'sudo adduser [user]', desc: 'Create new user'},
                {cmd: 'sudo deluser [user]', desc: 'Delete user'},
                {cmd: 'passwd [user]', desc: 'Change user password'},
                {cmd: 'groups [user]', desc: 'Show user groups'},
                {cmd: 'usermod [options]', desc: 'Modify user account'},
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gruvboxDark2 rounded hover:bg-gruvboxDark0 transition-colors">
                  <code className="text-gruvboxOrange font-mono">{item.cmd}</code>
                  <p className="text-sm text-gruvboxLight1 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminalCommands;