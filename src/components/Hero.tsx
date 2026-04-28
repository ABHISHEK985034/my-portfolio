import { motion as framerMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ["Java Developer", "Backend Developer", "Fullstack Developer", "Cloud Enthusiast"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/ABHISHEK985034" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/abhishekkawde" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Mail size={20} />, href: "mailto:abhishekkawde06@gmail.com" },
  ];

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Social Sidebar */}
      <framerMotion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '50%',
          transform: 'translateY(50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 100,
          '@media (max-width: 768px)': {
            display: 'none'
          }
        } as any}
      >
        {socialLinks.map((link, i) => (
          <framerMotion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, color: 'var(--accent-color)' }}
            style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease' }}
          >
            {link.icon}
          </framerMotion.a>
        ))}
        <div style={{ width: '1px', height: '100px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '0 auto' }}></div>
      </framerMotion.div>

      {/* Animated Background Elements */}
      <framerMotion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          border: '2px solid var(--accent-color)',
          opacity: 0.2,
          zIndex: 0
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap-reverse', alignItems: 'center', justifyContent: 'center', gap: '4rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <framerMotion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'left', zIndex: 10, flex: '1 1 400px' }}
        >
          <framerMotion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '20px',
              color: 'var(--accent-color)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1.5rem'
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              display: 'inline-block',
              boxShadow: '0 0 10px #10b981'
            }}></span>
            Available for Job
          </framerMotion.div>

          <framerMotion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem', fontWeight: 500 }}
          >
            Hi, I'm
          </framerMotion.h2>

          <framerMotion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Abhishek <br /><span style={{ color: 'var(--accent-color)', opacity: 1 }}>Kawde</span>
          </framerMotion.h1>

          <framerMotion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: '1.2rem', maxWidth: '550px', minHeight: '3.6rem', marginBottom: '2.5rem', color: '#94a3b8', lineHeight: 1.6 }}
          >
            I am a <span style={{ color: '#fff', fontWeight: 600 }}>{displayText}</span><span style={{ borderRight: '2px solid var(--accent-color)', marginLeft: '2px', animation: 'blink 0.7s infinite' }}></span>. I craft robust backend solutions and intuitive frontend experiences with a focus on <span style={{ color: 'var(--accent-color)' }}>scalability</span>.
          </framerMotion.p>

          <framerMotion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}
          >
            <a href="#projects" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.2rem 2.5rem',
              backgroundColor: 'var(--accent-color)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '16px',
              fontWeight: 700,
              boxShadow: '0 15px 35px -12px var(--accent-glow)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 25px 45px -12px var(--accent-glow)';
                e.currentTarget.style.backgroundColor = 'var(--accent-secondary)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px -12px var(--accent-glow)';
                e.currentTarget.style.backgroundColor = 'var(--accent-color)';
              }}
            >
              View My Work <ArrowDown size={18} />
            </a>

            <a href="/Abhishek_Kawde_10th_April_2026.pdf" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.2rem 2.5rem',
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--card-border)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '16px',
              fontWeight: 600,
              transition: 'all 0.4s ease',
              backdropFilter: 'blur(10px)'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.borderColor = '#fff';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.borderColor = 'var(--card-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Resume <Download size={18} />
            </a>
          </framerMotion.div>
        </framerMotion.div>

        <framerMotion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: 'spring', stiffness: 100 }}
          style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Glowing Background */}
          <div style={{
            position: 'absolute',
            width: '120%',
            height: '120%',
            background: 'radial-gradient(circle at 50% 50%, var(--accent-color), transparent 60%)',
            opacity: 0.15,
            filter: 'blur(50px)',
            zIndex: -1,
            top: '-10%',
            left: '-10%',
          }} />

          {/* Decorative Elements */}
          <framerMotion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '340px',
              height: '420px',
              borderRadius: '30px',
              border: '2px dashed rgba(255,255,255,0.1)',
              zIndex: 0
            }}
          />

          {/* Image Container */}
          <framerMotion.div
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              position: 'relative',
              width: '320px',
              height: '400px',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5), 0 0 30px var(--accent-glow)',
              background: 'rgba(255,255,255,0.03)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(10px)',
              zIndex: 1
            }}
          >
            <img
              src="/images/profile1.jpg"
              alt="Abhishek Kawde"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                filter: 'contrast(1.02) brightness(1.05)',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            {/* Inner Shadow for 3D depth */}
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              pointerEvents: 'none'
            }} />
            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)',
              pointerEvents: 'none'
            }} />
          </framerMotion.div>
        </framerMotion.div>
      </div>

      {/* Scroll Indicator */}
      <framerMotion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255,255,255,0.3)'
        }}
      >
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
        <framerMotion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-color), transparent)' }}
        />
      </framerMotion.div>
    </section>
  );
}
