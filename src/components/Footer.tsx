import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter, Linkedin, Youtube, Send, ArrowUp, Loader, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSubscription } from '../hooks/useSubscription';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const { status, message, subscribe, resetStatus } = useSubscription();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
    if (status === 'success') {
      setEmail('');
      setTimeout(() => resetStatus(), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">TechBlog</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">Your trusted source for the latest technology news, tutorials, and digital insights.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a key={social.label} href={social.href} className={`text-gray-400 ${social.color} transition-colors duration-200`} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} aria-label={social.label}>
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {['Artificial Intelligence', 'Web Development', 'Cybersecurity', 'Cloud Computing', 'Mobile Development'].map((category) => (
                <li key={category}>
                  <Link to={`/blog?category=${encodeURIComponent(category)}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">Subscribe to our newsletter for the latest tech insights.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
              <motion.button type="submit" disabled={status === 'loading'} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center disabled:from-blue-400 disabled:to-purple-400 disabled:cursor-not-allowed" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {status === 'loading' ? <Loader className="animate-spin" size={20} /> : (status === 'success' ? <CheckCircle size={20} /> : <>Subscribe <Send className="ml-2" size={16} /></>)}
              </motion.button>
            </form>
            {message && (
              <div className={`mt-3 text-xs p-2 rounded-lg flex items-center ${status === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'}`}>
                {status === 'success' ? <CheckCircle className="mr-2 flex-shrink-0" size={16} /> : <AlertTriangle className="mr-2 flex-shrink-0" size={16} />}
                <span>{message}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} TechBlog. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
