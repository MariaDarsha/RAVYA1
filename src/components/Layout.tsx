import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      <CustomCursor />
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-500/10 dark:bg-primary-500/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-500/10 dark:bg-accent-500/20 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="relative z-10 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                RAVYA
              </span>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-sm">
                A Scalable AI-Based Digital Ecosystem for Learning, Innovation, and Entrepreneurial Development among Youth and Women.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500">Learn</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500">Build</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500">Connect</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500">About Us</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500">Contact</a></li>
                <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-500">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} RAVYA Digital Ecosystem. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
