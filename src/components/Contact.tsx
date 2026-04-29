import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, ExternalLink, Heart, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  const socialLinks = [
    { icon: <Mail size={18} />, label: "Email", value: "abhishekkawde06@gmail.com", href: "mailto:abhishekkawde06@gmail.com" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "abhishekkawde", href: "https://linkedin.com/in/abhishekkawde" },
    { icon: <Github size={18} />, label: "GitHub", value: "ABHISHEK985034", href: "https://github.com/ABHISHEK985034" }
  ];

  return (
    <section id="contact" className="section" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5rem' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            color: 'var(--accent-color)', 
            fontSize: '0.9rem', 
            fontWeight: 700, 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em',
            marginBottom: '0.5rem'
          }}
        >
          Contact
        </motion.div>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem' }}
        >
          Get In Touch
        </motion.h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              style={{ position: 'relative', flexShrink: 0, cursor: 'pointer' }}
            >
              <img 
                src="/images/profile3.jpg" 
                alt="Contact DP" 
                style={{
                  width: '75px',
                  height: '75px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  border: '3px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 10px 25px -5px rgba(0,0,0,0.5)',
                }}
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#25D366', // WhatsApp Online Green
                  border: '3px solid var(--bg-color, #0f172a)', // Seamless border matching dark theme
                  borderRadius: '50%',
                  boxShadow: '0 0 10px rgba(37,211,102,0.4)'
                }} 
              />
            </motion.div>
            <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0 }}>
              Let's Build Something <br/><span style={{ color: 'var(--accent-color)' }}>Amazing</span>
            </h3>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '3rem' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                target="_blank" 
                rel="noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.2rem', 
                  color: '#fff', 
                  textDecoration: 'none',
                  padding: '1.2rem',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--card-border)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--accent-color)';
                  e.currentTarget.style.transform = 'translateX(10px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--accent-color)'
                }}>
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{link.label}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{link.value}</div>
                </div>
                <ExternalLink size={14} style={{ marginLeft: 'auto', opacity: 0.3 }} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '2.5rem', borderRadius: '32px', border: '1px solid var(--card-border)', position: 'relative', overflow: 'hidden' }}
        >
          {formState === 'sent' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '2rem 0' }}
            >
              <div style={{ width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: '#10b981' }}>
                <Send size={40} />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Message Sent!</h4>
              <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setFormState('idle')}
                style={{ background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', padding: '0.8rem 2rem', borderRadius: '12px', cursor: 'pointer', fontWeight: 600 }}
              >
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginLeft: '0.5rem' }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: '16px', color: '#fff', outline: 'none', transition: 'all 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginLeft: '0.5rem' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: '16px', color: '#fff', outline: 'none', transition: 'all 0.3s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginLeft: '0.5rem' }}>Your Message</label>
                <div style={{ position: 'relative' }}>
                  <MessageSquare size={18} style={{ position: 'absolute', left: '1rem', top: '1.2rem', color: '#64748b' }} />
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    style={{ width: '100%', padding: '1rem 1rem 1rem 3rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', borderRadius: '16px', color: '#fff', outline: 'none', transition: 'all 0.3s', resize: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={formState === 'sending'}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: '0.75rem', 
                  padding: '1.2rem', 
                  backgroundColor: 'var(--accent-color)', 
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '16px', 
                  fontWeight: 700, 
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 20px -10px var(--accent-glow)',
                  marginTop: '0.5rem'
                }}
                onMouseOver={(e) => {
                  if (formState === 'idle') {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px -10px var(--accent-glow)';
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px -10px var(--accent-glow)';
                }}
              >
                {formState === 'sending' ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    style={{ width: '20px', height: '20px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%' }}
                  />
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <footer style={{ marginTop: '8rem', textAlign: 'center', borderTop: '1px solid var(--card-border)', paddingTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <a href="https://github.com/ABHISHEK985034" target="_blank" rel="noreferrer" style={{ color: '#64748b', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}><Github size={20} /></a>
          <a href="https://linkedin.com/in/abhishekkawde" target="_blank" rel="noreferrer" style={{ color: '#64748b', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}><Linkedin size={20} /></a>
          <a href="mailto:abhishekkawde06@gmail.com" style={{ color: '#64748b', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}><Mail size={20} /></a>
        </div>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: 500 }}>Designed & Built with <Heart size={14} style={{ display: 'inline', color: '#ef4444', margin: '0 2px' }} /> by Abhishek Kawde</p>
        <p style={{ color: '#64748b', fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </section>
  );
}
