import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, X, MessageSquare, Sparkles } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// System instructions to give the AI its personality and context
const systemInstruction = `
You are a highly advanced, friendly, and helpful AI assistant for Abhishek Kawde's portfolio website. 
You function like ChatGPT - you can answer general questions, write code, or just chat.

Your personality:
- Warm, professional, and engaging.
- Use emojis occasionally to stay friendly.
- If asked "hi" or "hello", respond warmly like a helpful assistant.

Your context (Abhishek Kawde):
- Abhishek is a Computer Science student and Java Developer.
- Skills: Java, Spring Boot, React, MySQL, Cloud.
- Education: B-Tech in Computer Science (2022-2026).
- Location: Nagpur, India.

If you don't know something about Abhishek, politely say so, but offer to answer general questions or help with anything else.
`;

interface Message {
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm Abhishek's AI assistant. How can I help you today? ✨", isBot: true }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || '').trim();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);

    if (!apiKey) {
      setMessages(prev => [...prev, { text: "Connection error: API Key missing. Please check .env file.", isBot: true }]);
      return;
    }

    setIsLoading(true);

    try {
      let text = "";
      
      // Try direct FETCH first (more reliable than SDK sometimes)
      try {
        const context = messages.slice(-6).map(m => `${m.isBot ? 'Assistant' : 'User'}: ${m.text}`).join('\n');
        const finalPrompt = `Instructions: ${systemInstruction}\n\nConversation Context:\n${context}\n\nUser: ${userMessage}\nAssistant:`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: finalPrompt }] }]
          })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          text = data.candidates[0].content.parts[0].text;
          console.log("Success using direct Fetch API");
        } else if (data.error) {
          throw new Error(data.error.message || "API Error");
        }
      } catch (fetchErr: any) {
        console.warn("Fetch API failed, trying SDK fallback...", fetchErr.message);
        
        // SDK Fallback
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(userMessage);
        const sdkResponse = await result.response;
        text = sdkResponse.text();
      }

      if (!text) throw new Error("Could not get a response from the AI.");
      setMessages(prev => [...prev, { text: text, isBot: true }]);

    } catch (error: any) {
      console.error("AI Error Detailed:", error);
      let errorMsg = "I'm having a little trouble connecting right now. Please try again in a moment! 🙏";
      
      const errorMessage = error?.message || "";
      const errorString = String(error);
      const keySnippet = apiKey ? `${apiKey.substring(0, 4)}...${apiKey.substring(apiKey.length - 4)}` : "NOT FOUND";

      if (errorMessage.includes('404') || errorString.includes('404')) {
        errorMsg = `Error 404: The model "gemini-1.5-flash" is not found. \n\nThis happens if your Google AI Studio project is still initializing. Please wait 2-3 minutes or check if you can use the prompt at aistudio.google.com first. \n\nKey: ${keySnippet}`;
      } else if (errorMessage.includes('API_KEY_INVALID') || errorString.includes('400')) {
        errorMsg = `Invalid API Key (${keySnippet}). Please ensure you copied the FULL key correctly.`;
      } else if (errorMessage.includes('PERMISSION_DENIED')) {
        errorMsg = "Access Denied. Please check if your API key has been restricted to certain services.";
      }
      
      setMessages(prev => [...prev, { text: errorMsg, isBot: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          background: 'var(--accent-color)',
          border: 'none',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10001,
          boxShadow: '0 10px 30px -5px var(--accent-glow)'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? '100%' : 30, scale: isMobile ? 1 : 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? '100%' : 30, scale: isMobile ? 1 : 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{
              position: 'fixed',
              bottom: isMobile ? '0' : '100px',
              right: isMobile ? '0' : '25px',
              width: isMobile ? '100%' : '400px',
              height: isMobile ? '100%' : '580px',
              background: 'rgba(10, 15, 28, 0.98)',
              backdropFilter: 'blur(20px)',
              border: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: isMobile ? '0' : '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px var(--accent-glow)',
              zIndex: 10000,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)',
              paddingTop: isMobile ? 'calc(1.5rem + env(safe-area-inset-top))' : '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ 
                  background: 'var(--accent-color)', 
                  padding: '0.6rem', 
                  borderRadius: '14px',
                  boxShadow: '0 0 15px var(--accent-glow)'
                }}>
                  <Bot size={22} color="#fff" />
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    AI Assistant <Sparkles size={14} color="var(--accent-color)" />
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>Always online to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}>
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{
                    alignSelf: msg.isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    padding: '1rem 1.2rem',
                    borderRadius: '18px',
                    background: msg.isBot ? 'rgba(255,255,255,0.05)' : 'var(--accent-color)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    borderBottomLeftRadius: msg.isBot ? '4px' : '18px',
                    borderBottomRightRadius: !msg.isBot ? '4px' : '18px',
                    boxShadow: msg.isBot ? 'none' : '0 5px 15px -5px var(--accent-glow)'
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isLoading && (
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '1rem 1.2rem',
                  borderRadius: '18px',
                  background: 'rgba(255,255,255,0.05)',
                  borderBottomLeftRadius: '4px',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}>
                  <div className="typing-dot" style={{ animationDelay: '0s' }} />
                  <div className="typing-dot" style={{ animationDelay: '0.2s' }} />
                  <div className="typing-dot" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div style={{
              padding: '1.2rem',
              paddingBottom: isMobile ? 'calc(1.2rem + env(safe-area-inset-bottom))' : '1.2rem',
              background: 'rgba(10, 15, 28, 1)',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              gap: '0.8rem'
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '14px',
                  padding: '0.8rem 1.2rem',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'var(--accent-color)',
                  border: 'none',
                  borderRadius: '14px',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                  opacity: isLoading || !input.trim() ? 0.6 : 1,
                  transition: 'all 0.2s ease'
                }}
              >
                <Send size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
