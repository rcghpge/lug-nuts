import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log to console or show alert
    // In production, this would send to a backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gruvbox-bg text-gruvbox-fg flex flex-col items-center px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 mt-20 text-gruvbox-yellow">
        Contact Us
      </h2>

      <div className="max-w-2xl w-full">
        <div className="bg-gruvbox-dark0 p-8 rounded-lg border border-gruvbox-dark2 shadow-terminal">
          <p className="text-gruvbox-light1 mb-6 text-center">
            Have questions about Lugnuts? Want to get involved? Reach out to us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gruvbox-light1 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gruvbox-dark1 border border-gruvbox-dark2 rounded-md text-gruvbox-light1 focus:outline-none focus:ring-2 focus:ring-gruvbox-aqua focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gruvbox-light1 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gruvbox-dark1 border border-gruvbox-dark2 rounded-md text-gruvbox-light1 focus:outline-none focus:ring-2 focus:ring-gruvbox-aqua focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gruvbox-light1 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gruvbox-dark1 border border-gruvbox-dark2 rounded-md text-gruvbox-light1 focus:outline-none focus:ring-2 focus:ring-gruvbox-aqua focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gruvbox-light1 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 bg-gruvbox-dark1 border border-gruvbox-dark2 rounded-md text-gruvbox-light1 focus:outline-none focus:ring-2 focus:ring-gruvbox-aqua focus:border-transparent resize-vertical"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gruvbox-green text-gruvbox-bg font-medium rounded-md hover:bg-gruvbox-green/90 transition-colors focus:outline-none focus:ring-2 focus:ring-gruvbox-green focus:ring-offset-2 focus:ring-offset-gruvbox-bg"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gruvbox-dark2">
            <p className="text-sm text-gruvbox-light1 text-center">
              Prefer to reach us directly? Join our{' '}
              <a
                href="https://discord.gg/SJvNTGmrD5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gruvbox-aqua hover:text-gruvbox-blue underline"
              >
                Discord server
              </a>
              {' '}or check out our{' '}
              <a
                href="https://github.com/lugnuts-at-UTA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gruvbox-aqua hover:text-gruvbox-blue underline"
              >
                GitHub organization
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;