import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const systemInstruction = `
You are a highly advanced, friendly, and helpful AI assistant for Abhishek Kawde's portfolio website. You are capable of answering any question the user has, just like ChatGPT. 

If a user asks how you are, respond warmly (e.g., "I'm doing great! I hope your day is going well.") and keep a friendly, conversational tone throughout.

While you are a general-purpose AI that can answer anything, your primary role here is to represent Abhishek Kawde. If asked about him, his portfolio, or his skills, use the following information:

Abhishek Kawde is a motivated and detail-oriented Computer Science student with hands-on experience in building scalable backend systems and modern web applications.
He specializes in the Java Ecosystem and Cloud Technologies.

Contact:
- Location: Nagpur, Maharashtra, India
- Email: abhishekkawde06@gmail.com

Education:
- B-Tech in Computer Science, G.H. Raisoni College of Engineering (2022-2026), CGPA 7.8/10. Active member of coding community.
- Higher Secondary (XII Science), Gayatri Convent and Junior College (2020-2022), 77%.
- Secondary School Certificate (X), Gayatri Convent (2019-2020), 86%.

Experience:
- Java Developer Intern at NLT Infotech Pvt. Ltd. (Mar 2025 – Oct 2025). Architected an Online Examination System using Java and Spring Boot. Optimized MySQL schemas, RBAC. Skills: Java, Spring Boot, MySQL, JSP.

Skills:
- Backend: Java, Spring Boot, Python
- Frontend: React, TypeScript, Tailwind
- Database: MySQL, Firebase, MongoDB
- Tools: Git, Docker, AWS

Projects:
- Portfolio Website: High-performance 3D portfolio using React, Three.js, Framer Motion, and Gemini AI.

Always be polite, engaging, and ready to assist the user with any question they have, whether it's related to Abhishek or entirely general knowledge.
`;

interface Message {
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Abhishek's AI assistant. How can I help you learn more about his background and skills?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    
    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "My API key is missing! Please configure the VITE_GEMINI_API_KEY in the .env file.", 
          isBot: true 
        }]);
      }, 500);
      return;
    }

    setIsLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-flash-latest",
        systemInstruction: systemInstruction 
      });

      // Format previous messages for Gemini context
      const history = messages.slice(1).map(msg => ({
        role: msg.isBot ? "model" : "user",
        parts: [{ text: msg.text }]
      }));

      const chat = model.startChat({
        history: history,
      });

      const result = await chat.sendMessageStream(userMessage);
      
      let fullText = "";
      setMessages(prev => [...prev, { text: fullText, isBot: true }]);
      
      for await (const chunk of result.stream) {
        setIsLoading(false);
        const chunkText = chunk.text();
        fullText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { text: fullText, isBot: true };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, { text: "Sorry, I encountered an error while processing your request. Please try again later.", isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{
              position: 'fixed',
              bottom: '80px',
              right: '20px',
              width: '350px',
              maxWidth: 'calc(100vw - 40px)',
              height: '500px',
              maxHeight: 'calc(100vh - 100px)',
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--accent-color)',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px var(--accent-glow)',
              zIndex: 9998,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: 'var(--accent-color)', padding: '0.5rem', borderRadius: '50%' }}>
                  <Bot size={20} color="#fff" />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>AI Assistant</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Ask me about Abhishek</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: '#94a3b8', 
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {messages.map((msg, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    padding: '0.8rem 1rem',
                    borderRadius: '16px',
                    background: msg.isBot ? 'rgba(255,255,255,0.05)' : 'var(--accent-color)',
                    color: '#fff',
                    borderBottomLeftRadius: msg.isBot ? '4px' : '16px',
                    borderBottomRightRadius: !msg.isBot ? '4px' : '16px',
                    fontSize: '0.95rem',
                    lineHeight: '1.5'
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isLoading && (
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '0.8rem 1rem',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  borderBottomLeftRadius: '4px',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center',
                  height: '42px'
                }}>
                  <div className="typing-dot" style={{ animationDelay: '0s' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '0.2s' }}></div>
                  <div className="typing-dot" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{
              padding: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              gap: '0.5rem'
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask something..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  padding: '0.75rem 1rem',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                style={{
                  background: 'var(--accent-color)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '0 1rem',
                  color: '#fff',
                  cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                  opacity: isLoading || !input.trim() ? 0.7 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity 0.2s'
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '25px',
          background: 'var(--accent-color)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px var(--accent-glow)',
          zIndex: 9999
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
      <style>{`
        .typing-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-color);
          border-radius: 50%;
          animation: typingBounce 1.4s infinite ease-in-out both;
        }
        @keyframes typingBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
      `}</style>
    </>
  );
}
