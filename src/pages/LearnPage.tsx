import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, Search, Filter, BrainCircuit, Sparkles, ChevronDown, ChevronUp, MessageCircle, X } from 'lucide-react';
import AiAssistant from '../components/AiAssistant';

// Mock Data representing the Striver's Sheet structure
const TOPICS = [
  {
    id: 1,
    title: "1. Business Foundations",
    lessons: [
      { id: 101, title: "What is Entrepreneurship?", difficulty: "Beginner", videoUrl: "https://www.youtube.com/embed/ZIGvSGYeLp8", completed: true },
      { id: 102, title: "Finding your Niche", difficulty: "Beginner", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", completed: false },
      { id: 103, title: "The Lean Startup Methodology", difficulty: "Intermediate", videoUrl: "https://www.youtube.com/embed/fEvKo90qBns", completed: false }
    ]
  },
  {
    id: 2,
    title: "2. Strategic Planning",
    lessons: [
      { id: 201, title: "Writing a Business Plan", difficulty: "Beginner", videoUrl: null, completed: false },
      { id: 202, title: "Market Research & Analysis", difficulty: "Intermediate", videoUrl: null, completed: false },
      { id: 203, title: "Defining MVP (Minimum Viable Product)", difficulty: "Advanced", videoUrl: null, completed: false }
    ]
  },
  {
    id: 3,
    title: "3. Marketing & Sales",
    lessons: [
      { id: 301, title: "Social Media Strategies", difficulty: "Beginner", videoUrl: null, completed: false },
      { id: 302, title: "Sales Funnels 101", difficulty: "Intermediate", videoUrl: null, completed: false }
    ]
  }
];

const LearnPage: React.FC = () => {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(1);
  const [topicsData, setTopicsData] = useState(TOPICS);
  const [playingVideo, setPlayingVideo] = useState<{ url: string, title: string } | null>(null);

  const toggleTopic = (id: number) => {
    setExpandedTopic(expandedTopic === id ? null : id);
  };

  const calculateProgress = (lessons: any[]) => {
    const completed = lessons.filter(l => l.completed).length;
    return Math.round((completed / lessons.length) * 100);
  };

  const handleLessonCheck = (topicId: number, lessonId: number) => {
    setTopicsData(prev => prev.map(topic => {
      if (topic.id === topicId) {
        return {
          ...topic,
          lessons: topic.lessons.map(lesson => 
            lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
          )
        };
      }
      return topic;
    }));
  };

  const handleAskTutor = (lessonTitle: string) => {
    // Dispatch custom event listened by AiAssistant
    const event = new CustomEvent('openAiTutor', { detail: { lessonTitle } });
    window.dispatchEvent(event);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative pb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Learn Pillar</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Master business concepts step-by-step with structured pathways and AI guidance.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search topics or lessons..." 
              className="pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary-500 outline-none transition-all w-full md:w-64"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 transition-hover">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* AI Recommendation Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 p-8 rounded-[2.5rem] bg-gradient-to-r from-primary-600 to-accent-600 text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32" />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 bg-white/20 w-fit px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Recommended Next Step
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">Finding your Niche</h3>
            <p className="text-primary-100 mb-6 max-w-md">Pick up where you left off in the Business Foundations topic. Understanding your niche is critical for the next stage.</p>
            <button 
              onClick={() => { setExpandedTopic(1); document.getElementById('lesson-102')?.scrollIntoView({behavior: 'smooth'}) }}
              className="px-6 py-3 rounded-xl bg-white text-primary-600 font-bold hover:bg-primary-50 transition-all flex items-center gap-2"
            >
              Resume Learning <Play className="w-4 h-4 fill-primary-600" />
            </button>
          </div>
          <div className="hidden md:flex justify-center">
             <div className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 animate-glow shadow-inner">
                <BrainCircuit className="w-16 h-16 text-white" />
             </div>
          </div>
        </div>
      </motion.div>

      {/* Curriculum / Striver's Sheet Style */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Curriculum Sheet</h3>
        {topicsData.map((topic) => (
          <div key={topic.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all">
            {/* Topic Header */}
            <button 
              onClick={() => toggleTopic(topic.id)}
              className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{topic.title}</h4>
                <span className="text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {calculateProgress(topic.lessons)}% Completed
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 transition-transform">
                {expandedTopic === topic.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </div>
            </button>

            {/* Lessons List */}
            <AnimatePresence>
              {expandedTopic === topic.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border-t border-slate-200 dark:border-slate-800"
                >
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {topic.lessons.map((lesson) => (
                      <div id={`lesson-${lesson.id}`} key={lesson.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/20 group transition-colors">
                        <div className="flex items-center gap-4 flex-1">
                          {/* Checkbox */}
                          <button 
                            onClick={() => handleLessonCheck(topic.id, lesson.id)}
                            className={`w-6 h-6 rounded flex items-center justify-center transition-colors shadow-sm ${
                              lesson.completed 
                                ? 'bg-primary-500 border-primary-500 text-white' 
                                : 'border border-slate-300 dark:border-slate-600 hover:border-primary-400 bg-white dark:bg-slate-800'
                            }`}
                          >
                            {lesson.completed && <CheckCircle className="w-4 h-4" />}
                          </button>
                          
                          <div>
                            <p className={`font-medium transition-colors ${lesson.completed ? 'text-slate-500 line-through' : 'text-slate-900 dark:text-white group-hover:text-primary-600'}`}>
                              {lesson.title}
                            </p>
                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mt-1 inline-block ${
                              lesson.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-700' : 
                              lesson.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                            }`}>
                              {lesson.difficulty}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* Video Button */}
                          <button 
                            disabled={!lesson.videoUrl}
                            onClick={() => lesson.videoUrl && setPlayingVideo({ url: lesson.videoUrl, title: lesson.title })}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                              lesson.videoUrl 
                                ? 'bg-[#FF0000]/10 text-[#FF0000] hover:bg-[#FF0000] hover:text-white shadow-sm' 
                                : 'bg-slate-100 text-slate-300 cursor-not-allowed dark:bg-slate-800 dark:text-slate-600'
                            }`}
                            title={lesson.videoUrl ? 'Watch Video' : 'Video Unavailable'}
                          >
                            <Play className={`w-4 h-4 ${lesson.videoUrl ? 'fill-current' : ''}`} />
                          </button>

                          {/* AI Tutor Button */}
                          <button 
                            onClick={() => handleAskTutor(lesson.title)}
                            className="bg-primary-50 hover:bg-primary-100 text-primary-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-sm"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span className="hidden sm:inline">Ask Tutor</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-lg dark:text-white">{playingVideo.title}</h3>
                <button 
                  onClick={() => setPlayingVideo(null)}
                  className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="aspect-video bg-black relative">
                 {/* For demonstration we use an iframe. Ensure the URL is an embed setup. */}
                <iframe 
                  src={playingVideo.url} 
                  title={playingVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Assistant */}
      <AiAssistant />
    </div>
  );
};

export default LearnPage;

