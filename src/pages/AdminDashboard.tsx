import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, CheckCircle, Clock, BarChart3, ShieldCheck } from 'lucide-react';
import api from '../services/api';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    users: 1250,
    courses: 24,
    ideas: 85,
    mentors: 42
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white flex items-center gap-3">
          <ShieldCheck className="w-10 h-10 text-primary-600" /> Admin Command Center
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Manage users, approve content, and monitor platform health.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Users', value: stats.users, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Courses', value: stats.courses, icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Startup Ideas', value: stats.ideas, icon: BarChart3, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Verified Mentors', value: stats.mentors, icon: CheckCircle, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} dark:bg-opacity-10 flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
           <h4 className="text-xl font-bold mb-6">Recent User Activity</h4>
           <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <div className="flex-1">
                    <p className="text-sm font-bold">User {i+1} registered</p>
                    <p className="text-xs text-slate-500">2 hours ago</p>
                  </div>
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">Entrepreneur</span>
                </div>
              ))}
           </div>
         </div>

         <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
           <h4 className="text-xl font-bold mb-6">Pending Approvals</h4>
           <div className="space-y-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/20">
                  <div className="flex-1">
                    <p className="text-sm font-bold">New Course: Startup Legalities</p>
                    <p className="text-xs text-slate-500">Submitted by Sarah M.</p>
                  </div>
                  <button className="text-xs font-bold text-white bg-primary-600 px-4 py-2 rounded-lg">Review</button>
                </div>
              ))}
           </div>
         </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
