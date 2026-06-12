import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/resume';
import { IconBrain, IconGear, IconServer, IconCode, IconDatabase, IconLanguages, IconTools, IconBook } from './Icons';

const skillIconMap = {
  brain: IconBrain,
  gear: IconGear,
  server: IconServer,
  code: IconCode,
  database: IconDatabase,
  languages: IconLanguages,
  tools: IconTools,
  book: IconBook,
};

function SkillIcon({ name }) {
  const Comp = skillIconMap[name] || IconCode;
  return <Comp size={22} color="#1aa89a" />;
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" style={{ padding: '100px 5vw', background: '#071e2c', position: 'relative' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(14,77,110,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26,168,154,0.08) 0%, transparent 40%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#1aa89a', letterSpacing: 3, marginBottom: 8, fontSize: 14 }}>⟡ &nbsp; Technical Skills</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'white' }}>
            Tools of the <span style={{ fontWeight: 600, color: '#1aa89a' }}>trade</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(26,168,154,0.15)',
                borderRadius: 14,
                padding: '24px 22px',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,168,154,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(26,168,154,0.15)'; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ display: "flex", alignItems: "center" }}><SkillIcon name={group.icon} /></span>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: 'white', letterSpacing: 0.5 }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.1 + ii * 0.05 }}
                    style={{
                      padding: '5px 12px',
                      fontSize: 12,
                      fontWeight: 500,
                      borderRadius: 20,
                      background: ii < 3
                        ? 'linear-gradient(135deg, rgba(26,168,154,0.25), rgba(14,77,110,0.35))'
                        : 'rgba(255,255,255,0.06)',
                      color: ii < 3 ? '#a0e0d8' : 'rgba(255,255,255,0.65)',
                      border: `1px solid ${ii < 3 ? 'rgba(26,168,154,0.3)' : 'rgba(255,255,255,0.1)'}`,
                      letterSpacing: 0.3,
                    }}
                  >{item}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 640px) { #skills > div > div:last-child { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
