import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/resume';

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" style={{ padding: '100px 5vw', background: 'linear-gradient(180deg, #071e2c 0%, #0a2232 100%)', position: 'relative' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60 }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#1aa89a', letterSpacing: 3, marginBottom: 8, fontSize: 14 }}>⟡ &nbsp; Work Experience</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'white' }}>
            Where I've <span style={{ fontWeight: 600, color: '#1aa89a' }}>worked</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(180deg, #1aa89a, rgba(26,168,154,0.1))',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                style={{ paddingLeft: 56, position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: 12, top: 20,
                  width: 16, height: 16, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1aa89a, #0e4d6e)',
                  border: '2px solid #071e2c',
                  boxShadow: '0 0 12px rgba(26,168,154,0.5)',
                }} />

                <div className="exp-card" style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(26,168,154,0.15)',
                  borderRadius: 14,
                  padding: '28px 28px',
                  backdropFilter: 'blur(10px)',
                  transition: 'border-color 0.3s',
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(26,168,154,0.35)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(26,168,154,0.15)'}
                >
                  <div className="exp-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 600, color: 'white', marginBottom: 2 }}>{exp.role}</h3>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontStyle: 'italic', color: '#1aa89a', marginBottom: 4 }}>{exp.company}</p>
                      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', letterSpacing: 0.5 }}>{exp.type} &nbsp;·&nbsp; {exp.location}</p>
                    </div>
                    <span style={{
                      padding: '5px 14px', fontSize: 12, fontWeight: 500,
                      background: 'rgba(26,168,154,0.12)',
                      border: '1px solid rgba(26,168,154,0.3)',
                      borderRadius: 20, color: '#1aa89a', whiteSpace: 'nowrap',
                    }}>{exp.period}</span>
                  </div>

                  <ul style={{ listStyle: 'none', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6 }}>
                        <span style={{ color: '#1aa89a', flexShrink: 0, marginTop: 2 }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    <style>{`
        @media (max-width: 768px) {
          #experience .exp-card { padding: 20px 16px !important; }
          #experience .exp-header { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
