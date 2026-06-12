import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowDown } from './Icons';

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: scrolled ? 'rgba(7,30,44,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,168,154,0.2)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 5vw',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1aa89a, #0e4d6e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              fontWeight: 700,
              color: 'white',
              letterSpacing: 0.5,
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            TV
          </div>
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: 26,
              fontWeight: 400,
              color: '#a0e0d8',
              letterSpacing: 1.5,
              lineHeight: 1,
            }}
          >
            Tanvi Vilaskar
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{ display: 'flex', gap: 32, alignItems: 'center' }}
          className="nav-desktop"
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: 0.5,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#1aa89a')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link}
            </a>
          ))}

          <a
            href="https://drive.google.com/file/d/1A5LTK9HK8w0GGlU-Dsy__zLy4wzPBIMt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px',
              borderRadius: 6,
              background: 'linear-gradient(135deg, #1aa89a, #0e4d6e)',
              color: 'white',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 0.5,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Resume <IconArrowDown size={13} color="white" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'none',
          }}
        >
          <div
            style={{
              width: 22,
              height: 2,
              background: 'white',
              marginBottom: 5,
              transition: 'all 0.3s',
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: 'white',
              marginBottom: 5,
              opacity: open ? 0 : 1,
              transition: 'all 0.3s',
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: 'white',
              transition: 'all 0.3s',
              transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(7,30,44,0.97)',
              borderTop: '1px solid rgba(26,168,154,0.2)',
              padding: '16px 24px',
            }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '10px 0',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 15,
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1A5LTK9HK8w0GGlU-Dsy__zLy4wzPBIMt/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                marginTop: 14,
                padding: '12px 16px',
                borderRadius: 6,
                background: 'linear-gradient(135deg, #1aa89a, #0e4d6e)',
                color: 'white',
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 0.5,
              }}
            >
              Resume <IconArrowDown size={14} color="white" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}