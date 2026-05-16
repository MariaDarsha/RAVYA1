import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, UploadCloud, Link as LinkIcon, CheckCircle, ExternalLink, PlayCircle, Code } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const [showFiverrModal, setShowFiverrModal] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePublish = () => {
    setIsPublishing(true);
    // Simulate API call to Fiverr
    setTimeout(() => {
      setIsPublishing(false);
      setPublished(true);
    }, 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      // Simulate backend file upload
      setTimeout(() => {
        setIsUploading(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }, 2000);
    }
  };

  return (
    <div className="space-y-12">
      {/* How to Create Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <PlayCircle className="text-primary-500 w-6 h-6" /> How to Create & Launch
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Learn the Skills', desc: 'Use our Learning Hub to master in-demand skills like coding, design, or writing.' },
            { step: '2', title: 'Build Your Project', desc: 'Apply what you learned to build a real-world project, app, or portfolio piece.' },
            { step: '3', title: 'Monetize on Fiverr', desc: 'Connect your RAVYA portfolio directly to a Fiverr gig to start earning immediately.' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {item.step}
              </div>
              <h4 className="text-lg font-bold mt-2 mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upload Creation Section */}
      <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <UploadCloud className="text-accent-500 w-6 h-6" /> Upload Your Creation
        </h3>
        <div 
          onClick={() => !isUploading && fileInputRef.current?.click()}
          className={`border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-8 text-center transition-colors cursor-pointer ${
            isUploading ? 'opacity-70' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
          }`}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            onChange={handleFileChange} 
          />
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {isUploading ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                <UploadCloud className="w-8 h-8" />
              </motion.div>
            ) : uploadSuccess ? (
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            ) : (
              <UploadCloud className="w-8 h-8" />
            )}
          </div>
          <h4 className="text-lg font-bold mb-2">
            {isUploading ? 'Uploading Project...' : uploadSuccess ? 'Upload Successful!' : 'Drag and drop your project files here'}
          </h4>
          <p className="text-sm text-slate-500 mb-6">Support for images, code zips, and PDFs (Max 50MB)</p>
          <button 
            type="button" 
            className="btn-primary" 
            disabled={isUploading}
          >
            {isUploading ? 'Processing...' : 'Browse Files'}
          </button>
        </div>
      </section>

      {/* My Projects / Fiverr Integration */}
      <section>
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="text-emerald-500 w-6 h-6" /> My Published Creations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sample Project */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-lg">
            <div className="h-40 bg-slate-100 dark:bg-slate-800 rounded-xl mb-4 overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-500 opacity-20 relative">
                <Code className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-primary-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2">E-Commerce Frontend Template</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">A fully responsive React e-commerce template ready for production.</p>
            <button 
              onClick={() => setShowFiverrModal(true)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-[#1dbf73] hover:bg-[#19a463] transition-colors"
            >
              <LinkIcon className="w-4 h-4" /> Publish as Fiverr Gig
            </button>
          </div>
        </div>
      </section>

      {/* Fiverr Simulated Workflow Modal via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {showFiverrModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-800 relative my-8"
              >
              {!published ? (
                <>
                  <div className="text-center mb-8">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg" alt="Fiverr" className="h-8 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">Connect & Publish</h3>
                    <p className="text-slate-500 mt-2">Create a gig from your RAVYA portfolio.</p>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-sm">
                    <div className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-500">Gig Title:</span>
                      <span className="font-semibold text-right">I will build a responsive React frontend template</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-500">Category:</span>
                      <span className="font-semibold">Programming & Tech</span>
                    </div>
                     <div className="flex justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-500">Starting Price:</span>
                      <span className="font-semibold text-emerald-600">$50.00</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setShowFiverrModal(false)}
                      className="flex-1 py-3 font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
                      disabled={isPublishing}
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handlePublish}
                      className="flex-1 py-3 font-bold rounded-xl text-white bg-[#1dbf73] hover:bg-[#19a463] flex justify-center items-center transition"
                      disabled={isPublishing}
                    >
                      {isPublishing ? (
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                           <UploadCloud className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        "Create Gig"
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex flex-col items-center justify-center mx-auto mb-4">
                     <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Gig Published!</h3>
                  <p className="text-slate-500 mb-8">Your creation is now live on Fiverr. Buyers can start ordering from you immediately.</p>
                  <button 
                    onClick={() => { 
                      window.open('https://www.fiverr.com', '_blank', 'noopener,noreferrer');
                      setShowFiverrModal(false); 
                      setPublished(false); 
                    }}
                    className="w-full py-3 font-bold rounded-xl text-white bg-[#1dbf73] hover:bg-[#19a463] flex justify-center items-center gap-2 transition"
                  >
                    View Gig on Fiverr <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </div>
  );
};

export default PortfolioSection;
