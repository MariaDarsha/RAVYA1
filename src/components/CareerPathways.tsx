import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, ArrowRight, TrendingUp, CheckCircle } from 'lucide-react';

const CareerPathways: React.FC = () => {
  const pathways = [
    {
      title: 'Frontend Developer',
      icon: Code,
      color: 'bg-blue-500',
      demand: 'High',
      avgSalary: '$75k - $120k',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      milestones: [
        'Complete "Web Dev Basics" module',
        'Build and upload a Landing Page to Portfolio',
        'Complete React interactive certification',
        'Publish your first Fiverr UI Gig'
      ]
    },
    {
      title: 'UI/UX Designer',
      icon: Palette,
      color: 'bg-purple-500',
      demand: 'Very High',
      avgSalary: '$70k - $115k',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      milestones: [
        'Complete "Design Fundamentals" module',
        'Create a mobile app wireframe',
        'Conduct a user testing session',
        'Publish a Fiverr App Design Gig'
      ]
    },
    {
      title: 'Digital Marketer',
      icon: TrendingUp,
      color: 'bg-emerald-500',
      demand: 'High',
      avgSalary: '$60k - $105k',
      skills: ['SEO', 'Content Strategy', 'Social Media Ads', 'Analytics'],
      milestones: [
        'Complete "Marketing 101" module',
        'Run a sample ad campaign',
        'Analyze mock Google Analytics data',
        'Publish a Fiverr SEO Audit Gig'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-display font-bold mb-4">Map Your Future</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Explore structured career paths, track your progress, and see exactly what skills you need to learn and build to start freelancing or launching your own startup in these fields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pathways.map((path, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${path.color} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity`} />
            
            <div className={`w-14 h-14 rounded-2xl ${path.color} bg-opacity-10 flex items-center justify-center mb-6`}>
              <path.icon className={`w-7 h-7 text-${path.color.split('-')[1]}-500`} />
            </div>

            <h4 className="text-2xl font-bold mb-2">{path.title}</h4>
            
            <div className="flex items-center gap-4 text-sm font-semibold mb-6">
              <span className="text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                Demand: {path.demand}
              </span>
              <span className="text-slate-500">{path.avgSalary}</span>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">Required Skills</h5>
              <div className="flex flex-wrap gap-2">
                {path.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">Your Path</h5>
              <div className="space-y-4">
                {path.milestones.map((milestone, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 0 ? 'bg-emerald-500 text-white' : 'border-2 border-slate-300 dark:border-slate-700 text-transparent'}`}>
                        {i === 0 && <CheckCircle className="w-4 h-4" />}
                      </div>
                      {i < path.milestones.length - 1 && <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-800 my-1" />}
                    </div>
                    <p className={`text-sm ${i === 0 ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-500'}`}>
                      {milestone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full mt-8 py-4 rounded-xl font-bold border-2 border-slate-200 dark:border-slate-800 hover:border-primary-500 hover:text-primary-600 transition-colors flex items-center justify-center gap-2 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10">
              Start this Path <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerPathways;
