import { motion } from 'framer-motion';
import { Mail, MapPin, Award, BookOpen, Code2, Database, Globe, Server, Cpu, Layers } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Code2 size={20} />, label: 'Projects', value: '5+' },
    { icon: <Award size={20} />, label: 'Experience', value: 'Intern' },
    { icon: <BookOpen size={20} />, label: 'CGPA', value: '7.8' },
  ];

  const techStack = [
    { name: 'Backend', icon: <Server size={20} />, skills: ['Java', 'Spring Boot', 'Python'] },
    { name: 'Frontend', icon: <Globe size={20} />, skills: ['React', 'TypeScript', 'Tailwind'] },
    { name: 'Database', icon: <Database size={20} />, skills: ['MySQL', 'Firebase', 'MongoDB'] },
    { name: 'Tools', icon: <Cpu size={20} />, skills: ['Git', 'Docker', 'AWS'] },
  ];

  return (
    <section id="about" className="section">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
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
          Discover
        </motion.div>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem' }}
        >
          About Me
        </motion.h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {/* Professional Image Presentation */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px', margin: '0 auto 2rem auto' }}>
            {/* Offset Background Accent */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '-20px',
              width: '100%',
              height: '100%',
              border: '2px solid var(--accent-color)',
              borderRadius: '20px',
              zIndex: 0,
              opacity: 0.4,
              transition: 'all 0.4s ease'
            }} 
            className="offset-border"
            />
            
            {/* Main Image Frame */}
            <motion.div
              whileHover={{ x: -10, y: 10 }}
              onHoverStart={() => {
                const border = document.querySelector('.offset-border') as HTMLElement;
                if(border) {
                  border.style.top = '10px';
                  border.style.left = '-10px';
                  border.style.opacity = '0.8';
                }
              }}
              onHoverEnd={() => {
                const border = document.querySelector('.offset-border') as HTMLElement;
                if(border) {
                  border.style.top = '20px';
                  border.style.left = '-20px';
                  border.style.opacity = '0.4';
                }
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '20px',
                overflow: 'hidden',
                zIndex: 1,
                boxShadow: '20px 20px 40px -15px rgba(0,0,0,0.5)',
                background: 'rgba(255,255,255,0.05)'
              }}
            >
              <img 
                src="/images/profile2.jpg" 
                alt="Abhishek Kawde - About" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%) contrast(1.1) brightness(0.9)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%) contrast(1.05) brightness(1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%) contrast(1.1) brightness(0.9)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              {/* Subtle glass overlay for premium feel */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)',
                pointerEvents: 'none'
              }} />
            </motion.div>
          </div>
          <div className="glass" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8' }}>
                I am a motivated and detail-oriented <span style={{ color: '#fff', fontWeight: 600 }}>Computer Science student</span> with hands-on experience in building scalable backend systems and modern web applications.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '1.2rem 0.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                  <div style={{ color: 'var(--accent-color)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.2rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div className="glass" style={{ padding: '2rem', borderRadius: '24px' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#94a3b8', marginBottom: '1.5rem' }}>
              My expertise lies in <span style={{ color: 'var(--accent-color)' }}>Java Ecosystem</span> and <span style={{ color: 'var(--accent-color)' }}>Cloud Technologies</span>. I thrive on solving complex architectural challenges and delivering high-performance solutions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '14px' }}>
                <MapPin size={18} color="var(--accent-color)" />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>Nagpur, Maharashtra, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '14px' }}>
                <Mail size={18} color="var(--accent-color)" />
                <span style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>abhishekkawde06@gmail.com</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {techStack.map((category, idx) => (
              <motion.div
                key={idx}
                className="glass"
                whileHover={{ y: -5, borderColor: 'var(--accent-color)' }}
                style={{ padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--card-border)' }}
              >
                <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{category.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.8rem', color: '#fff' }}>{category.name}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {category.skills.map((skill, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.6rem', borderRadius: '6px' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="glass" style={{ padding: '2rem', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05, color: 'var(--accent-color)' }}>
              <Layers size={120} />
            </div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Code2 size={20} color="var(--accent-color)" /> My Philosophy
            </h4>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1rem' }}>
              "I believe in writing clean, maintainable code that not only solves the problem at hand but also anticipates future needs. My goal is to build software that makes a tangible impact."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
