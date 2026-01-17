import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gruvbox-bg text-gruvbox-fg flex flex-col items-center px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 mt-20 text-gruvbox-yellow">
        Connect With Us
      </h2>

      <div className="max-w-4xl w-full">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Discord */}
          <div className="bg-gruvbox-dark0 p-8 rounded-lg border border-gruvbox-dark2 shadow-terminal">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gruvbox-blue rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-gruvbox-blue">Discord</h3>
            </div>
            <p className="text-gruvbox-light1 mb-6">
              Join our Discord server for real-time discussions, announcements, and community support.
              This is the best place to ask questions and connect with other members!
            </p>
            <a
              href="https://discord.gg/SJvNTGmrD5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gruvbox-blue text-gruvbox-bg font-medium rounded-md hover:bg-gruvbox-blue/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gruvbox-blue focus:ring-offset-2 focus:ring-offset-gruvbox-bg"
            >
              Join Discord Server
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gruvbox-dark0 p-8 rounded-lg border border-gruvbox-dark2 shadow-terminal">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gruvbox-orange rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🐙</span>
              </div>
              <h3 className="text-2xl font-bold text-gruvbox-orange">GitHub</h3>
            </div>
            <p className="text-gruvbox-light1 mb-6">
              Check out our GitHub organization to see our projects, contribute to open source,
              and collaborate on Linux-related development. All our code is open source!
            </p>
            <a
              href="https://github.com/lugnuts-at-UTA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gruvbox-orange text-gruvbox-bg font-medium rounded-md hover:bg-gruvbox-orange/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gruvbox-orange focus:ring-offset-2 focus:ring-offset-gruvbox-bg"
            >
              View GitHub Org
            </a>
          </div>

          {/* Email */}
          <div className="md:col-span-2 bg-gruvbox-dark0 p-8 rounded-lg border border-gruvbox-dark2 shadow-terminal">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gruvbox-green rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-2xl font-bold text-gruvbox-green">Email</h3>
            </div>
            <p className="text-gruvbox-light1 mb-6">
              For official inquiries, sponsorship requests, or other important matters,
              you can reach us directly at our club email. We typically respond within 24-48 hours.
            </p>
            <div className="bg-gruvbox-dark2 p-4 rounded-md">
              <p className="text-gruvbox-aqua font-mono text-lg">
                lugnutsClub@proton.me
              </p>
            </div>
            <p className="text-sm text-gruvbox-light1 mt-4">
              <em>Note: For general questions and community support, Discord is usually faster!</em>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gruvbox-dark0 p-8 rounded-lg border border-gruvbox-dark2 shadow-terminal">
          <h3 className="text-2xl font-bold text-gruvbox-yellow mb-6">Getting Started</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gruvbox-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1️⃣</span>
              </div>
              <h4 className="text-lg font-semibold text-gruvbox-light1 mb-2">Join Discord</h4>
              <p className="text-sm text-gruvbox-light1">
                Introduce yourself and start chatting with the community
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gruvbox-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">2️⃣</span>
              </div>
              <h4 className="text-lg font-semibold text-gruvbox-light1 mb-2">Check GitHub</h4>
              <p className="text-sm text-gruvbox-light1">
                Explore our projects and see how you can contribute
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gruvbox-aqua rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">3️⃣</span>
              </div>
              <h4 className="text-lg font-semibold text-gruvbox-light1 mb-2">Attend Events</h4>
              <p className="text-sm text-gruvbox-light1">
                Join our meetings and workshops to learn and network
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
