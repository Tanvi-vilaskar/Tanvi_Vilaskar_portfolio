import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personal } from '../data/resume';
import { IconEmail, IconLinkedIn, IconGitHub, IconLocation } from './Icons';

export default function Contact() {
  const [ref, inView] = useInView();

  const links = [
    { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, Icon: IconEmail },
    { label: 'LinkedIn', value: 'tanvi-vilaskar', href: personal.linkedin, Icon: IconLinkedIn },
    { label: 'GitHub', value: 'Tanvi-vilaskar', href: personal.github, Icon: IconGitHub },
    { label: 'Location', value: personal.location, href: null, Icon: IconLocation },
  ];

  return (
    <section id="contact" style={{ padding: '100px 5vw 60px', background: '#071e2c', position: 'relative', overflow: 'hidden' }}>
      {/* Wave top */}
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, width: '100%', height: 60 }}>
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,0 L0,0 Z" fill="#0a2232" />
      </svg>

      <div ref={ref} style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 16 }}
        >
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: '#1aa89a', letterSpacing: 3, marginBottom: 16, fontSize: 14 }}>⟡ &nbsp; Let's Connect</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 7vw, 72px)', fontWeight: 300, color: 'white', lineHeight: 1.1, marginBottom: 20 }}>
            Ready to build<br />
            <span style={{ fontWeight: 600, background: 'linear-gradient(90deg, #1aa89a, #c47a45)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              something great?
            </span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
            I'm open to internships, full-time roles, and interesting projects in ML, DevOps, or full stack. Let's talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}
        >
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '20px 16px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(26,168,154,0.4)'; e.currentTarget.style.background = 'rgba(26,168,154,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.transform = 'none'; }}
                >
                  <span style={{ marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>{(() => { const I = link.Icon; return <I size={22} color="#1aa89a" />; })()}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{link.label}</span>
                  <span style={{ fontSize: 13, color: '#a0e0d8', fontWeight: 500 }}>{link.value}</span>
                </a>
              ) : (
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  padding: '20px 16px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                }}>
                  <span style={{ marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>{(() => { const I = link.Icon; return <I size={22} color="#1aa89a" />; })()}</span>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 }}>{link.label}</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{link.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href={`mailto:${personal.email}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            background: 'linear-gradient(135deg, #1aa89a, #0e4d6e)',
            color: 'white', borderRadius: 10,
            fontWeight: 700, fontSize: 15, letterSpacing: 0.5,
            boxShadow: '0 6px 30px rgba(26,168,154,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 12px 40px rgba(26,168,154,0.45)'; }}
          onMouseLeave={e => { e.target.style.transform = 'none'; e.target.style.boxShadow = '0 6px 30px rgba(26,168,154,0.3)'; }}
        >
          Say Hello
        </motion.a>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', marginTop: 80, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 14, color: 'rgba(255,255,255,0.3)', letterSpacing: 1 }}>
          "Flow like the waves — quiet, steady, and unstoppable"
        </p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', marginTop: 8 }}>© 2026 Tanvi Vilaskar · Pune, India</p>
      </div>

      <style>{`@media (max-width: 560px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
