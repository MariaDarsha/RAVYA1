import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, ExternalLink, Building, Tag, ArrowRight } from 'lucide-react';
import api from '../services/api';

const OpportunityBoard: React.FC = () => {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await api.get('/opportunities');
        setOpportunities(response.data);
      } catch (err) {
        console.error('Failed to fetch opportunities:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOpportunities();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Opportunity Board</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Find startup competitions, grants, and funding opportunities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opportunities.map((opp) => (
          <motion.div
            key={opp._id}
            whileHover={{ y: -5 }}
            className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all p-8 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-6 bg-primary-50 dark:bg-primary-900/20 w-fit px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary-600">
              <Trophy className="w-3 h-3" /> {opp.type}
            </div>
            
            <h4 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{opp.title}</h4>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Building className="w-4 h-4" /> {opp.organization}
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
              {opp.description}
            </p>

            <div className="space-y-3 mb-8">
               <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                 <Calendar className="w-4 h-4 text-accent-500" /> Deadline: {new Date(opp.deadline).toLocaleDateString()}
               </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <a 
                href={opp.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityBoard;
