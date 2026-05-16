import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Layers, Users, ExternalLink, ChevronRight, Award, Clock, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const pillars = [
    {
      title: 'LEARN',
      description: 'Master business fundamentals with AI-guided paths.',
      icon: BookOpen,
      color: 'bg-blue-500',
      path: '/learn',
      stats: 'Courses & AI Mentor'
    },
    {
      title: 'INNOVATE',
      description: 'Submit your startup ideas and collaborate.',
      icon: Layers,
      color: 'bg-accent-500',
      path: '/innovation',
      stats: 'Innovation Lab'
    },
    {
      title: 'NETWORK',
      description: 'Connect with mentors and find opportunities.',
      icon: Users,
      color: 'bg-emerald-500',
      path: '/opportunities',
      stats: 'Opportunity Board'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-display font-bold text-slate-900 dark:text-white"
        >
          Welcome Back, {user?.name.split(' ')[0]}!
        </motion.h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Ready to take the next step in your entrepreneurial journey?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {pillars.map((pillar, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${pillar.color}/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:blur-2xl transition-all`} />
            
            <div className={`w-14 h-14 rounded-2xl ${pillar.color}/10 flex items-center justify-center mb-6`}>
              <pillar.icon className={`w-8 h-8 ${pillar.color.replace('bg-', 'text-')}`} />
            </div>

            <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {pillar.description}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{pillar.stats}</span>
              <Link 
                to={pillar.path}
                className={`p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:${pillar.color} hover:text-white transition-all duration-300`}
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Recommendations / Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-xl font-bold">Recommended for You</h4>
            <Link to="/learn" className="text-primary-600 font-bold text-sm flex items-center gap-1 hover:underline">
              View All <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              { title: 'Business Strategy 101', dur: '4h 20m', rating: 4.9, icon: Award },
              { title: 'Digital Marketing Fundamentals', dur: '6h 15m', rating: 4.8, icon: Star },
            ].map((course, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <course.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h5 className="font-bold text-sm">{course.title}</h5>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {course.dur}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-bold"><Star className="w-3 h-3 fill-amber-500" /> {course.rating}</span>
                  </div>
                </div>
                <button className="text-xs font-bold text-primary-600 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20">Start</button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[100px]" />
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" /> Your Entrepreneurial Journey
          </h4>
          <div className="space-y-8 relative">
             <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold z-10 shrink-0">1</div>
               <div>
                 <p className="font-bold mb-1">Complete Business Plan Course</p>
                 <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                   <div className="bg-primary-500 h-full w-[45%]" />
                 </div>
               </div>
             </div>
             <div className="flex items-start gap-4 opacity-50">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold z-10 shrink-0">2</div>
               <div>
                 <p className="font-bold mb-1">Build Your First MVP</p>
                 <p className="text-xs text-slate-400">Locked until course completion</p>
               </div>
             </div>
             <div className="flex items-start gap-4 opacity-50">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold z-10 shrink-0">3</div>
               <div>
                 <p className="font-bold mb-1">Apply for Market Listing</p>
                 <p className="text-xs text-slate-400">Locked</p>
               </div>
             </div>
             <div className="absolute left-4 top-8 w-0.5 h-32 bg-slate-700 -z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
