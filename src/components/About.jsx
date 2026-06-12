import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal, achievements } from '../data/resume';
import { IconLocation, IconEmail, IconPhone, IconTrophy, IconAward, IconTerminal, IconStar } from './Icons';

const achievementIconMap = {
  trophy: IconTrophy,
  award: IconAward,
  code: IconTerminal,
  star: IconStar,
};

function AchievementIcon({ name }) {
  const Comp = achievementIconMap[name] || IconStar;
  return <Comp size={20} color="#1aa89a" />;
}

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" style={{ padding: '100px 5vw', background: 'linear-gradient(180deg, var(--ocean-deep) 0%, #071e2c 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,168,154,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60 }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#1aa89a', letterSpacing: 3, marginBottom: 8, fontSize: 14 }}>⟡ &nbsp; About Me</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: 'white', lineHeight: 1.1 }}>
            Building at the intersection<br />
            <span style={{ fontWeight: 600, color: '#1aa89a' }}>of intelligence & systems</span>
          </h2>
        </motion.div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
              {personal.summary}
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 32 }}>
              My work spans three worlds — training ML models for predictive intelligence, building enterprise mainframe pipelines in COBOL/z/OS, and crafting modern web experiences with React and Node. I love building things that actually matter.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                [<IconLocation size={16} color="#1aa89a" />, 'Location', personal.location],
                [<IconEmail size={16} color="#1aa89a" />, 'Email', personal.email],
                [<IconPhone size={16} color="#1aa89a" />, 'Phone', personal.phone],
              ].map(([icon, label, val]) => (
                <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', width: 60 }}>{label}</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: 'rgba(255,255,255,0.6)', fontWeight: 400, marginBottom: 20, letterSpacing: 1 }}>
              Highlights
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14,
                    padding: '14px 18px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(26,168,154,0.15)',
                    borderRadius: 10,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", flexShrink: 0, marginTop: 1 }}><AchievementIcon name={a.icon} /></span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{a.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
