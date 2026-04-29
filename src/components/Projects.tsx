import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Injury Response Automation System",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "React", "Firebase"],
      image: "/images/injury_system.png",
      description: "A web-based emergency response platform with QR-linked medical profiles and Firebase integration.",
      links: { github: "#", demo: "#" }
    },
    {
      title: "Online Examination System",
      tech: ["Java", "MySQL", "JSP", "Spring Boot"],
      image: "/images/exam_system.png",
      description: "Full-stack exam platform with secure login, timed assessments, and automated evaluation logic.",
      links: { github: "#", demo: "#" }
    },
    {
      title: "Chatting Application",
      tech: ["Java", "Swing", "Sockets", "Networking"],
      image: "/images/chat_app.png",
      description: "Real-time communication app using socket programming for seamless client-server message exchange.",
      links: { github: "#", demo: "#" }
    }
  ];

  return (
    <section id="projects" className="section">
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
          My Portfolio
        </motion.div>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem' }}
        >
          Featured Projects
        </motion.h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="glass"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              borderRadius: '28px',
              overflow: 'hidden',
              height: '100%',
              border: '1px solid var(--card-border)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ 
              y: -12,
              borderColor: 'var(--accent-color)',
              boxShadow: '0 20px 40px -20px var(--accent-glow)'
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
              <motion.img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(3,3,3,0.9), transparent)',
              }}></div>
              
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ 
                      backgroundColor: 'rgba(59, 130, 246, 0.15)', 
                      backdropFilter: 'blur(8px)',
                      color: 'var(--accent-color)', 
                      fontSize: '0.75rem', 
                      padding: '0.4rem 0.9rem', 
                      borderRadius: '50px',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      fontWeight: 600
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{project.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a 
                  href={project.links.github} 
                  target="_blank"
                  rel="noreferrer"
                  style={{ 
                    flex: 1,
                    color: '#fff', 
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.6rem', 
                    fontSize: '0.9rem', 
                    fontWeight: 600,
                    padding: '0.8rem',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '14px',
                    transition: 'all 0.3s ease',
                    border: '1px solid var(--card-border)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                  }}
                >
                  <Github size={18} /> Code
                </a>
                <a 
                  href={project.links.demo} 
                  target="_blank"
                  rel="noreferrer"
                  style={{ 
                    flex: 1,
                    color: '#fff', 
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '0.6rem', 
                    fontSize: '0.9rem', 
                    fontWeight: 700,
                    padding: '0.8rem',
                    backgroundColor: 'var(--accent-color)',
                    borderRadius: '14px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px -5px var(--accent-glow)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px -5px var(--accent-glow)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px -5px var(--accent-glow)';
                  }}
                >
                  <ExternalLink size={18} /> Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
