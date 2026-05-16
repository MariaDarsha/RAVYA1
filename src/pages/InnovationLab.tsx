import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Plus, MessageCircle, ThumbsUp, User, Tag, Rocket, Briefcase, TrendingUp } from 'lucide-react';
import api from '../services/api';
import PortfolioSection from '../components/PortfolioSection';
import CareerPathways from '../components/CareerPathways';

const InnovationLab: React.FC = () => {
  const [ideas, setIdeas] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'ideas' | 'portfolio' | 'career'>('ideas');
  
  // New Idea Submission State
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newStage, setNewStage] = useState('idea');

  const fetchIdeas = async () => {
    try {
      const response = await api.get('/ideas');
      setIdeas(response.data);
    } catch (err) {
      console.error('Failed to fetch ideas:', err);
    }
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  const handleIdeaSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post('/ideas', {
        title: newTitle,
        description: newDescription,
        imageUrl: newImageUrl,
        category: newCategory,
        stage: newStage
      });
      setShowSubmitModal(false);
      
      // Reset form
      setNewTitle('');
      setNewDescription('');
      setNewImageUrl('');
      setNewCategory('');
      setNewStage('idea');

      // Refresh ideas
      await fetchIdeas();
    } catch (err) {
      console.error('Failed to submit idea', err);
      alert('Failed to submit your idea. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tabs = [
    { id: 'ideas', label: 'Idea Board', icon: Lightbulb },
    { id: 'portfolio', label: 'My Portfolio & Creations', icon: Briefcase },
    { id: 'career', label: 'Career & Freelance Paths', icon: TrendingUp },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Innovation Lab</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Submit your startup ideas, showcase creations, and chart your career path.</p>
        </div>
        {activeTab === 'ideas' && (
          <button onClick={() => setShowSubmitModal(true)} className="btn-primary flex items-center gap-2">
            <Plus className="w-5 h-5" /> Submit New Idea
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 border-b border-slate-200 dark:border-slate-800 mb-12 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-bold transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50 dark:bg-primary-900/10'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'ideas' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ideas.map((idea) => (
                <div
                  key={idea._id}
                  className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col"
                >
                  {idea.imageUrl && (
                    <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative">
                      <img src={idea.imageUrl} alt={idea.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{idea.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <User className="w-3.5 h-3.5" /> {idea.author?.name || 'Anonymous'}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-wider">
                      {idea.stage}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {idea.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                     <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 text-xs font-bold">
                       <Tag className="w-3 h-3" /> {idea.category}
                     </span>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
                        <ThumbsUp className="w-4 h-4" /> 0
                      </button>
                      <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary-600 transition-colors">
                        <MessageCircle className="w-4 h-4" /> {idea.comments?.length || 0}
                      </button>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-bold text-primary-600 hover:underline">
                      Collaborate <Rocket className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

          {activeTab === 'portfolio' && <PortfolioSection />}
          
          {activeTab === 'career' && <CareerPathways />}
        </motion.div>
      </AnimatePresence>

      {/* Submit Idea Modal via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showSubmitModal && (
            <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 py-10 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-slate-200 dark:border-slate-800 my-8"
              >
              <h3 className="text-2xl font-bold mb-6">Submit Your Idea</h3>
              <form onSubmit={handleIdeaSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="E.g., Next-Gen Sustainable Delivery"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Image URL (Proof of Creation)</label>
                  <input
                    type="url"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="https://example.com/my-creation.png"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Description</label>
                  <textarea
                    required
                    rows={4}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Describe the problem and your solution..."
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Category</label>
                    <input
                      type="text"
                      required
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="E.g., EdTech"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Stage</label>
                    <select
                      value={newStage}
                      onChange={(e) => setNewStage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="idea">Idea / Concept</option>
                      <option value="mvp">Working MVP</option>
                      <option value="scaling">Scaling</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setShowSubmitModal(false)}
                    className="flex-1 py-3 font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Publishing...' : 'Publish Idea'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </div>
  );
};

export default InnovationLab;
