import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowRight, UserPlus, Globe, MapPin, Target, TrendingUp, Sparkles } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [startupStage, setStartupStage] = useState('Idea');
  
  const { login, register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await register(name || 'New Entrepreneur', email, password, location, skillLevel, startupStage);
      }
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Authentication failed. Please check your credentials.');
    }
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              Join the <br />
              <span className="text-primary-600">Entrepreneurial</span> <br />
              Movement.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Access the Learn, Build, and Connect pillars designed for the innovative youth and women of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe, label: 'Global Network', color: 'text-blue-500' },
              { icon: Target, label: 'Focused Growth', color: 'text-accent-500' },
              { icon: TrendingUp, label: 'Scalable Ideas', color: 'text-emerald-500' },
              { icon: Sparkles, label: 'AI Mentorship', color: 'text-amber-500' },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden"
        >
          {/* Glass background effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/10 blur-3xl rounded-full -ml-16 -mb-16" />

          <div className="relative z-10 w-full">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h3>
              <p className="text-slate-500 mt-2">
                {isLogin ? 'Enter your credentials to continue' : 'Join RAVYA and start your journey today'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
               {!isLogin && (
                <div className="space-y-4">
                  <div className="relative">
                    <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                   <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm outline-none">
                      <option disabled>Skill Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <select value={startupStage} onChange={(e) => setStartupStage(e.target.value)} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 text-sm outline-none">
                      <option disabled>Startup Stage</option>
                      <option value="Idea">Idea</option>
                      <option value="Development">Development</option>
                      <option value="Launch">Launch</option>
                    </select>
                  </div>
                </div>
              )}


              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 group">
                {isLogin ? (
                  <>Sign In <LogIn className="w-5 h-5" /></>
                ) : (
                  <>Create Account <UserPlus className="w-5 h-5" /></>
                )}
              </button>
            </form>

            <div className="my-8 flex items-center gap-4 text-slate-400 uppercase text-xs font-bold">
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
              <span>Or</span>
              <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
            </div>

            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
              <span className="font-semibold">Continue with Google</span>
            </button>

            <p className="mt-8 text-center text-slate-600 dark:text-slate-400">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary-600 font-bold hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
