import React, { useState, useEffect } from 'react';
import { X, Mail, Gift, Loader, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSubscription } from '../hooks/useSubscription';

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { status, message, subscribe, resetStatus } = useSubscription();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem('newsletterModalSeen');
      if (!hasSeenModal) {
        setIsOpen(true);
      }
    }, 15000); // Show after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('newsletterModalSeen', 'true');
    resetStatus();
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
  };
  
  useEffect(() => {
    if (status === 'success') {
      setEmail('');
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  }, [status]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose}>
          <motion.div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full overflow-hidden" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative">
              <button onClick={handleClose} className="absolute top-4 right-4 text-white/80 hover:text-white"><X size={24} /></button>
              <div className="flex items-center justify-center mb-4"><div className="bg-white/20 p-3 rounded-full"><Gift size={32} /></div></div>
              <h2 className="text-2xl font-bold text-center mb-2">Join Our Newsletter!</h2>
              <p className="text-center text-blue-100">Get exclusive tech insights & early access.</p>
            </div>

            <div className="p-6">
              {status === 'success' ? (
                <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }} className="bg-green-500 text-white rounded-full p-2"><CheckCircle size={24}/></motion.div>
                    </div>
                    <h3 className="font-semibold mb-1">Welcome to TechBlog!</h3>
                    <p className="text-sm">{message}</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Join 10,000+ Tech Enthusiasts</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                    <li>✨ Weekly tech insights & tutorials</li>
                    <li>🔥 Exclusive premium content access</li>
                  </ul>
                  <div className="relative mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  <button type="submit" disabled={status === 'loading'} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center disabled:from-blue-400 disabled:to-purple-400 disabled:cursor-not-allowed">
                    {status === 'loading' ? <Loader className="animate-spin" size={24} /> : 'Get My Free Access 🚀'}
                  </button>
                  {status === 'error' && <p className="text-xs text-red-500 mt-2 text-center flex items-center justify-center"><AlertTriangle size={14} className="mr-1"/>{message}</p>}
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterModal;
