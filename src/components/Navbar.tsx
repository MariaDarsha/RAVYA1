import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { Sun, Moon, Rocket, User, LogOut, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary-600 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                RAVYA
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/learn" className="nav-link">Learn</Link>
                <Link to="/innovation" className="nav-link">Innovate</Link>
                <Link to="/opportunities" className="nav-link">Network</Link>
              </>
            ) : (
              <>
                <Link to="/#features" className="nav-link">Features</Link>
                <Link to="/#about" className="nav-link">About</Link>
              </>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5 text-slate-600" /> : <Sun className="w-5 h-5 text-slate-400" />}
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <User className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span className="text-sm font-medium">{user.name.split(' ')[0]}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">
                Get Started
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 mr-2"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/" className="block py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Home</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="block py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Dashboard</Link>
                  <Link to="/learn" className="block py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Learn</Link>
                  <Link to="/innovation" className="block py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Innovate</Link>
                  <Link to="/opportunities" className="block py-3 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800" onClick={() => setIsOpen(false)}>Network</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-3 px-4 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="block py-3 px-4 font-bold text-primary-600" onClick={() => setIsOpen(false)}>Get Started</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
