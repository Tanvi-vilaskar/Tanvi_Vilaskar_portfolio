import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { education, certifications } from '../data/resume';

export default function Education() {
  const [ref, inView] = useInView();

  return (
    <section id="education" style={{ padding: '100px 5vw', background: 'linear-gradient(180deg, #0a2232 0%, #071e2c 100%)' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60 }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#1aa89a', letterSpacing: 3, marginBottom: 8, fontSize: 14 }}>⟡ &nbsp; Education & Certifications</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'white' }}>
            Academic <span style={{ fontWeight: 600, color: '#1aa89a' }}>journey</span>
          </h2>
        </motion.div>

        <div className="edu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
          {/* Education cards */}
          <div>
            <h3 style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Degrees</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(26,168,154,0.15)',
                    borderRadius: 14,
                    padding: '24px 22px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Accent stripe */}
                  <div style={{
                    position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                    background: 'linear-gradient(180deg, #1aa89a, #0e4d6e)',
                    borderRadius: '14px 0 0 14px',
                  }} />
                  <div style={{ paddingLeft: 8 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: 'white', marginBottom: 4 }}>{edu.institution}</h3>
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 15, fontStyle: 'italic', color: '#1aa89a', marginBottom: 8 }}>{edu.degree}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{edu.period}</span>
                      <span style={{
                        padding: '3px 12px', fontSize: 13, fontWeight: 700,
                        background: 'linear-gradient(135deg, rgba(26,168,154,0.25), rgba(14,77,110,0.4))',
                        border: '1px solid rgba(26,168,154,0.3)',
                        borderRadius: 20, color: '#a0e0d8',
                      }}>{edu.score}</span>
                    </div>
                    {edu.coursework && (
                      <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 8, letterSpacing: 0.3 }}>{edu.coursework}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 style={{ fontSize: 13, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '13px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 10,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,168,154,0.3)'; e.currentTarget.style.background = 'rgba(26,168,154,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1aa89a', flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.72)' }}>{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { #education .edu-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
}
