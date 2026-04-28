import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      title: "District-Level Kabaddi Player",
      icon: <Trophy size={28} />,
      category: "Sports",
      description: "Represented at the district level, demonstrating teamwork and endurance."
    },
    {
      title: "Best Sports Student of the Year",
      icon: <Medal size={28} />,
      category: "Recognition",
      description: "Honored for excellence in multiple athletic disciplines and sportsmanship."
    },
    {
      title: "Head Boy of the School",
      icon: <Award size={28} />,
      category: "Leadership",
      description: "Led the student body, organized events, and acted as a liaison with faculty."
    }
  ];

  return (
    <section id="achievements" className="section">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '1rem' }}
        >
          Achievements & Leadership
        </motion.h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
        {/* Image will be added here */}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="glass"
              style={{ 
                padding: '2rem',
                display: 'flex',
                gap: '1.5rem',
                border: '1px solid var(--card-border)',
                position: 'relative',
                overflow: 'hidden',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 10, borderColor: 'var(--accent-color)' }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-color)',
                flexShrink: 0
              }}>
                {item.icon}
              </div>

              <div>
                <span style={{ 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  color: 'var(--accent-color)',
                  marginBottom: '0.2rem',
                  display: 'block'
                }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>{item.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
