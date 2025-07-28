import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = () => {
    if (email.trim()) {
      console.log('Newsletter subscription:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Benefits', href: '/benefits' },
    { label: 'Career', href: '/career' },
    { label: 'Pricing', href: '/pricing' },
  ];

  const helpLinks = [
    { label: 'Customer Support', href: '/support' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'Delivery Details', href: '/delivery' },
    { label: 'Privacy Policy', href: '/privacy' },
  ];

  const resourceLinks = [
    { label: 'Development Tools', href: '/dev-tools' },
    { label: 'YouTube Playlist', href: '/youtube' },
  ];

  return (
    <footer className="bg-white border-t m-4 border-gray-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">P</div>
              <span className="text-xl font-semibold text-gray-900">PetitionsPro.</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-blue-600 transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Call us</h3>
              <a href="tel:+14564603" className="text-sm text-gray-600 hover:text-blue-600 transition">
                (+1) 456 4603
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Mail us</h3>
              <a href="mailto:mail@petitionspro.com" className="text-sm text-gray-600 hover:text-blue-600 transition">
                mail@petitionspro.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wider">Subscribe to newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-lg hover:bg-blue-700 transition"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 mt-12 text-center text-sm text-gray-500">
          © 2024 PetitionsPro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
