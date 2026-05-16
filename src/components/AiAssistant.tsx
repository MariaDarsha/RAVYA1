import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  X,
  Bot,
  Sparkles,
  BrainCircuit
} from 'lucide-react';

import api from '../services/api';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState('');

  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text:
        "Hi! I'm your AI Entrepreneurship Mentor. How can I help you with your business learning today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    const handleOpenTutor = (e: any) => {
      setIsOpen(true);

      if (e.detail && e.detail.lessonTitle) {
        setInput(
          `I have a doubt regarding the lesson: "${e.detail.lessonTitle}". Could you help?`
        );
      }
    };

    window.addEventListener(
      'openAiTutor',
      handleOpenTutor
    );

    return () => {
      window.removeEventListener(
        'openAiTutor',
        handleOpenTutor
      );
    };
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [
      ...prev,
      userMsg
    ]);

    const currentInput = input;

    setInput('');

    setIsTyping(true);

    try {
      const response =
        await api.post(
          '/ai/mentor',
          {
            message: currentInput,
            context: {},
          }
        );

      const aiMsg: Message = {
        id: Date.now().toString(),
        text: response.data.response,
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [
        ...prev,
        aiMsg
      ]);

    } catch (err) {
      console.error(
        'AI Assistant Error:',
        err
      );

      const errorMsg: Message = {
        id: Date.now().toString(),
        text:
          "I'm sorry, I'm having trouble responding right now.",
        sender: 'ai',
        timestamp: new Date(),
      };

      setMessages((prev) => [
        ...prev,
        errorMsg
      ]);

    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={() =>
          setIsOpen(!isOpen)
        }
        className="
          fixed
          bottom-8
          right-8
          z-50
          p-4
          rounded-full
          bg-primary-600
          text-white
          shadow-2xl
          animate-glow
        "
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <BrainCircuit className="w-8 h-8" />
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 100,
              scale: 0.8,
            }}
            className="
              fixed
              bottom-24
              right-8
              z-50
              w-[350px]
              sm:w-[400px]
              h-[500px]
              bg-white
              dark:bg-slate-900
              rounded-[2rem]
              shadow-2xl
              border
              border-slate-200
              dark:border-slate-800
              flex
              flex-col
              overflow-hidden
            "
          >
            <div className="
              p-6
              bg-gradient-to-r
              from-primary-600
              to-accent-600
              text-white
              flex
              items-center
              justify-between
            ">
              <div className="flex items-center gap-3">

                <div className="p-2 bg-white/20 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h4 className="font-bold">
                    RAVYA AI Mentor
                  </h4>

                  <div className="flex items-center gap-1.5 mt-0.5">

                    <span className="
                      w-2
                      h-2
                      bg-emerald-400
                      rounded-full
                      animate-pulse
                    " />

                    <span className="
                      text-[10px]
                      text-white/80
                      uppercase
                    ">
                      Active
                    </span>

                  </div>
                </div>
              </div>

              <Sparkles className="w-5 h-5 opacity-50" />
            </div>

            <div className="
              flex-1
              overflow-y-auto
              p-6
              space-y-4
            ">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className={`flex ${
                    msg.sender === 'user'
                      ? 'justify-end'
                      : 'justify-start'
                  }`}
                >
                  <div
                    className={`
                      max-w-[80%]
                      p-4
                      rounded-2xl
                      text-sm
                      ${
                        msg.sender === 'user'
                          ? 'bg-primary-600 text-white rounded-tr-none'
                          : 'bg-slate-100 dark:bg-slate-800 rounded-tl-none'
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="
                    bg-slate-100
                    dark:bg-slate-800
                    px-4
                    py-3
                    rounded-2xl
                    rounded-tl-none
                  ">
                    <div className="flex gap-1">

                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>

                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce delay-100"></span>

                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce delay-200"></span>

                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-6 border-t">
              <div className="relative">

                <input
                  type="text"
                  value={input}
                  onChange={(e) =>
                    setInput(
                      e.target.value
                    )
                  }
                  onKeyPress={(e) =>
                    e.key === 'Enter' &&
                    handleSend()
                  }
                  placeholder="Ask about your business..."
                  className="
                    w-full
                    pl-4
                    pr-12
                    py-3
                    rounded-xl
                    bg-slate-50
                    dark:bg-slate-800
                    border
                    outline-none
                    text-sm
                  "
                />

                <button
                  onClick={handleSend}
                  disabled={isTyping}
                  className="
                    absolute
                    right-2
                    top-1/2
                    -translate-y-1/2
                    p-2
                    rounded-lg
                    bg-primary-600
                    text-white
                    hover:bg-primary-700
                    transition-all
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                  "
                >
                  <Send className="w-4 h-4" />
                </button>

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;