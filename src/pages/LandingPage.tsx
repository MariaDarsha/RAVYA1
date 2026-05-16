import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Layers, Users, Zap, CheckCircle, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 md:pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4"
          >
            <Zap className="w-4 h-4 fill-primary-600" />
            Empowering the Next Generation of Innovators
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            A Scalable AI-Based <br />
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-400 bg-clip-text text-transparent">
              Digital Ecosystem
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Accelerating Learning, Innovation, and Entrepreneurial Development among Youth and Women through intelligent mentorship and collaborative tools.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link to="/login" className="btn-primary flex items-center gap-2 text-lg">
              Get Started for Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="#features" className="px-8 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              Watch Demo
            </Link>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Entrepreneurs', value: '10K+' },
              { label: 'Mentors', value: '500+' },
              { label: 'Startups Built', value: '1.2K+' },
              { label: 'Success Rate', value: '85%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="features" className="px-4 py-20 bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">Three Pillars of Success</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Our ecosystem is built on a proven framework for entrepreneurial growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Learn */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">LEARN</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Master the fundamentals of business through AI-guided courses and personalized learning pathways.
              </p>
              <ul className="space-y-3 mb-8">
                {['Business Fundamentals', 'AI Study Assistant', 'Personalized Flow'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-primary-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Build */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-500/10 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-accent-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">BUILD</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Turn your ideas into tangible products. Get mentor feedback and professional verification.
              </p>
              <ul className="space-y-3 mb-8">
                {['Product Showcase', 'Admin Verification', 'Mentor Feedback'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-accent-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">CONNECT</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Access the marketplace and industry networks. Post directly to Fiverr and other platforms.
              </p>
              <ul className="space-y-3 mb-8">
                {['Marketplace Access', 'Fiverr API Integration', 'Seller Networking'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary-600 to-accent-700 p-8 md:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-white/5 skew-x-[-20deg] translate-x-[20%]" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Our Mission</h2>
              <p className="text-primary-100 text-lg leading-relaxed">
                RAVYA is more than a platform—it's a movement to bridge the entrepreneurial gap for women and youth. We believe that with the right tools, knowledge, and connections, anyone can become a successful innovator.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                  <Smartphone className="w-5 h-5" /> <span>Mobile Responsive</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                  <Zap className="w-5 h-5" /> <span>AI-Powered</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h4 className="text-3xl font-bold">92%</h4>
                <p className="text-sm text-primary-200">User Satisfaction</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h4 className="text-3xl font-bold">5M+</h4>
                <p className="text-sm text-primary-200">Grant Access</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h4 className="text-3xl font-bold">24/7</h4>
                <p className="text-sm text-primary-200">AI Assistance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h4 className="text-3xl font-bold">Unlimited</h4>
                <p className="text-sm text-primary-200">Growth Potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
