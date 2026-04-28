import { motion } from 'framer-motion';
import { Terminal, Database, Wrench, Heart } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: <Terminal size={20} />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Backend & DB",
      icon: <Database size={20} />,
      skills: [
        { name: "Spring Boot", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 70 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Frontend & Tools",
      icon: <Wrench size={20} />,
      skills: [
        { name: "React", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 65 },
        { name: "Postman", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem' }}
        >
          Technical Proficiency
        </motion.h2>
        <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, var(--accent-color), var(--accent-secondary))', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {categories.map((category, idx) => (
          <motion.div 
            key={idx}
            className="glass"
            style={{ 
              padding: '2.5rem', 
              border: '1px solid var(--card-border)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ borderColor: 'var(--accent-color)', transform: 'translateY(-8px)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ color: 'var(--accent-color)', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: '14px' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{category.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem', color: '#fff' }}>
                    <span style={{ fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-color)', opacity: 0.8 }}>{skill.level}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent-color), var(--accent-secondary))', borderRadius: '10px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
