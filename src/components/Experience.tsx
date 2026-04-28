import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: "Java Developer Intern",
      company: "NLT Infotech Pvt. Ltd.",
      date: "Mar 2025 – Oct 2025",
      location: "Nagpur, India",
      description: "Architected a full-stack Online Examination System using Java and Spring Boot. Optimized MySQL database schemas for better performance and implemented robust role-based access control (RBAC).",
      skills: ["Java", "Spring Boot", "MySQL", "JSP"]
    }
  ];

  const education = [
    {
      degree: "B-Tech in Computer Science",
      institution: "G.H. Raisoni College of Engineering",
      date: "2022 – 2026",
      location: "Nagpur, Maharashtra",
      details: "Current CGPA: 7.8/10. Specializing in Software Engineering and Cloud Computing. Active member of the coding community.",
      highlights: ["Core CS Fundamentals", "Cloud Computing", "Software Engineering"]
    },
    {
      degree: "Higher Secondary (XII Science)",
      institution: "Gayatri Convent and Junior College",
      date: "2020 – 2022",
      location: "Nagpur, Maharashtra",
      details: "Percentage: 77%. Focused on advanced Mathematics, Physics, and Computer Science fundamentals.",
      highlights: ["Advanced Mathematics", "Physics"]
    },
    {
      degree: "Secondary School Certificate (X)",
      institution: "Gayatri Convent",
      date: "2019 – 2020",
      location: "Nagpur, Maharashtra",
      details: "Percentage: 86%. Maharashtra State Board.",
      highlights: ["Foundation Subjects", "State Board"]
    }
  ];

  return (
    <section id="experience" className="section">
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
          My Journey
        </motion.div>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem' }}
        >
          Experience & Education
        </motion.h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem' }}>
        {/* Experience Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px' }}>
              <Briefcase color="var(--accent-color)" size={24} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>Professional Experience</h3>
          </div>
          
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '0.5rem', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--accent-color), transparent)' }}></div>
            
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ marginBottom: '3rem', position: 'relative' }}
              >
                {/* Dot */}
                <div style={{ 
                  position: 'absolute', 
                  left: '-2.45rem', 
                  top: '0.5rem', 
                  width: '18px', 
                  height: '18px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-color)',
                  border: '3px solid var(--accent-color)',
                  zIndex: 2,
                  boxShadow: '0 0 10px var(--accent-glow)'
                }}></div>

                <motion.div 
                  className="glass" 
                  whileHover={{ y: -5, borderColor: 'var(--accent-color)' }}
                  style={{ padding: '2rem', transition: 'all 0.3s ease', border: '1px solid var(--card-border)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                    <div>
                      <h4 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>{exp.role}</h4>
                      <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1rem' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                        <Calendar size={14} /> {exp.date}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748b', marginTop: '0.3rem' }}>
                        <MapPin size={14} /> {exp.location}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1rem', marginBottom: '1.5rem' }}>{exp.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {exp.skills.map((skill, si) => (
                      <span key={si} style={{ fontSize: '0.75rem', color: '#fff', background: 'rgba(59, 130, 246, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '50px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}>
              <GraduationCap color="var(--accent-secondary)" size={24} />
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>Education</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
                className="glass"
                style={{ padding: '2rem', borderLeft: '4px solid var(--accent-secondary)', borderTop: '1px solid var(--card-border)', borderRight: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)', transition: 'all 0.3s ease' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{edu.degree}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>{edu.date}</span>
                </div>
                <p style={{ color: '#cbd5e1', fontWeight: 600, fontSize: '1rem', marginBottom: '0.75rem' }}>{edu.institution}</p>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>{edu.details}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {edu.highlights.map((h, hi) => (
                    <div key={hi} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem' }}>
                      <ChevronRight size={14} color="var(--accent-secondary)" /> {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
