import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import api from '../services/api';

const MentorDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <Award className="w-10 h-10 text-primary-600" /> Mentor Hub
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Guide the next generation of innovators and review startup potential.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-emerald-500" /> Ideas Awaiting Feedback
            </h4>
            <div className="space-y-6">
               {[1, 2].map((_, i) => (
                 <div key={i} className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-200 transition-all group">
                   <h5 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Sustainable Fashion Platform</h5>
                   <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">A marketplace specifically for recycled and upcycled textile products targeting youth...</p>
                   <div className="flex items-center justify-between">
                     <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Users className="w-3.5 h-3.5" /> 3 Founders
                     </div>
                     <button className="text-sm font-bold text-primary-600 hover:underline">Provide Guidance</button>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white shadow-xl">
             <h4 className="text-xl font-bold mb-4">Mentor Stats</h4>
             <div className="space-y-6">
                <div>
                  <div className="text-sm opacity-80 mb-1">Students Guided</div>
                  <div className="text-3xl font-bold">128</div>
                </div>
                <div>
                  <div className="text-sm opacity-80 mb-1">Average Rating</div>
                  <div className="text-3xl font-bold">4.95 / 5</div>
                </div>
             </div>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
             <h4 className="text-xl font-bold mb-6">Mentorship Requests</h4>
             <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700" />
                       <span className="text-sm font-medium">Entrepreneur {i+1}</span>
                    </div>
                    <button className="text-xs font-bold text-primary-600">Accept</button>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
