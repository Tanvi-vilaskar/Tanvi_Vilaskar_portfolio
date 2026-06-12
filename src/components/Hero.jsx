import { motion } from 'framer-motion';
import { personal } from '../data/resume';

function WaveCanvas() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      <svg
        viewBox="0 0 1440 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%' }}
      >
        <motion.path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="rgba(26,168,154,0.15)"
          animate={{
            d: [
              'M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z',
              'M0,40 C240,20 480,80 720,40 C960,20 1200,80 1440,40 L1440,120 L0,120 Z',
              'M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,80 C360,40 720,110 1080,70 C1260,55 1380,85 1440,80 L1440,120 L0,120 Z"
          fill="rgba(14,77,110,0.3)"
          animate={{
            d: [
              'M0,80 C360,40 720,110 1080,70 C1260,55 1380,85 1440,80 L1440,120 L0,120 Z',
              'M0,90 C360,110 720,50 1080,90 C1260,105 1380,75 1440,90 L1440,120 L0,120 Z',
              'M0,80 C360,40 720,110 1080,70 C1260,55 1380,85 1440,80 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.path
          d="M0,100 C200,85 400,115 720,95 C960,78 1200,105 1440,100 L1440,120 L0,120 Z"
          fill="rgba(7,30,44,0.8)"
          animate={{
            d: [
              'M0,100 C200,85 400,115 720,95 C960,78 1200,105 1440,100 L1440,120 L0,120 Z',
              'M0,105 C200,115 400,90 720,108 C960,115 1200,95 1440,105 L1440,120 L0,120 Z',
              'M0,100 C200,85 400,115 720,95 C960,78 1200,105 1440,100 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

const particles = [
  { size: 4, left: '8%', top: '18%', duration: 8, delay: 0 },
  { size: 5, left: '18%', top: '72%', duration: 10, delay: 1 },
  { size: 3, left: '30%', top: '12%', duration: 7, delay: 2 },
  { size: 6, left: '42%', top: '58%', duration: 9, delay: 0.8 },
  { size: 4, left: '58%', top: '36%', duration: 11, delay: 1.5 },
  { size: 5, left: '72%', top: '20%', duration: 10, delay: 0.2 },
  { size: 3, left: '82%', top: '76%', duration: 8, delay: 1.3 },
  { size: 4, left: '91%', top: '61%', duration: 9, delay: 2.1 },
  { size: 3, left: '64%', top: '84%', duration: 7.5, delay: 0.4 },
  { size: 5, left: '22%', top: '48%', duration: 9.5, delay: 1.7 },
];

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-bg-image {
          position: absolute;
          inset: 0;
          background-image: url('./banner.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center 30%;
          filter: brightness(0.32) saturate(1.2);
          transform: scale(1.08);
          transform-origin: center;
          will-change: transform, background-position, filter;
          animation: heroBgFloat 18s ease-in-out infinite alternate;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 15% 20%, rgba(26,168,154,0.12), transparent 32%),
            radial-gradient(circle at 85% 80%, rgba(26,168,154,0.10), transparent 28%),
            linear-gradient(160deg, rgba(3,18,30,0.78) 0%, rgba(5,35,52,0.58) 45%, rgba(7,62,83,0.40) 100%);
          z-index: 0;
        }

        .hero-grain {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.18;
          z-index: 1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.045'/%3E%3C/svg%3E");
          background-size: 220px 220px;
        }

        .floating-statement-band {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 72px;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          white-space: nowrap;
        }

        .floating-statement-track {
          display: inline-flex;
          width: max-content;
          animation: statementMarquee 34s linear infinite;
        }

        .floating-statement-text {
          font-family: 'EB Garamond', serif;
          font-size: clamp(32px, 2vw, 67px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.07);
          padding-right: 56px;
          text-transform: uppercase;
        }

        .hero-split {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .hero-left {
          flex: 1;
          min-width: 0;
        }

        .hero-right {
          flex-shrink: 0;
          width: min(32vw, 380px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 34px;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow:
            0 10px 24px rgba(0,0,0,0.16),
            0 24px 60px rgba(0,0,0,0.20),
            0 0 0 1px rgba(26,168,154,0.08);
          backdrop-filter: blur(8px);
        }

        .hero-photo-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,168,154,0.12), rgba(14,77,110,0.08));
          z-index: 1;
          pointer-events: none;
        }

        .hero-photo-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.12);
          pointer-events: none;
          z-index: 2;
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @keyframes statementMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes heroBgFloat {
          0% {
            transform: scale(1.08) translate3d(0, 0, 0);
            background-position: 50% 30%;
            filter: brightness(0.32) saturate(1.18);
          }
          50% {
            transform: scale(1.14) translate3d(1%, -1.5%, 0);
            background-position: 52% 28%;
            filter: brightness(0.35) saturate(1.25);
          }
          100% {
            transform: scale(1.1) translate3d(-1%, 1%, 0);
            background-position: 48% 32%;
            filter: brightness(0.34) saturate(1.22);
          }
        }

        @media (max-width: 768px) {
          .floating-statement-band {
            bottom: 90px;
          }

          .floating-statement-text {
            font-size: clamp(22px, 6vw, 40px);
            padding-right: 32px;
          }

          .hero-content {
            padding: 100px 5vw 140px !important;
          }

          .hero-split {
            flex-direction: column;
            align-items: flex-start;
            gap: 36px;
          }

          .hero-right {
            width: min(78vw, 320px);
            align-self: center;
          }

          .hero-stats {
            gap: 28px !important;
            margin-top: 40px !important;
          }

          .hero-buttons a {
            padding: 12px 24px !important;
            font-size: 13px !important;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            gap: 20px !important;
          }

          .hero-photo-frame {
            border-radius: 26px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg-image,
          .floating-statement-track {
            animation: none;
          }
        }
      `}</style>

      <section
        id="hero"
        style={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#041827',
        }}
      >
        <div className="hero-bg-image" />
        <div className="hero-overlay" />
        <div className="hero-grain" />

        {particles.map((p, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              left: p.left,
              top: p.top,
              background: 'rgba(56, 220, 210, 0.35)',
              boxShadow: '0 0 12px rgba(56,220,210,0.22)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
            animate={{
              y: [0, -18, 0],
              x: [0, 6, 0],
              opacity: [0.2, 0.8, 0.25],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}

        <div className="floating-statement-band">
          <div className="floating-statement-track">
            <span className="floating-statement-text">
              FLOW LIKE THE WAVES—QUIET, STEADY, AND UNSTOPPABLE 
            </span>
            <span className="floating-statement-text">
              FLOW LIKE THE WAVES—QUIET, STEADY, AND UNSTOPPABLE 
            </span>
          </div>
        </div>

        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 3,
            maxWidth: 1200,
            margin: '0 auto',
            padding: '120px 5vw 170px',
            width: '100%',
          }}
        >
          <div className="hero-split">
            <div className="hero-left">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: 16,
                    color: 'rgba(26,168,154,0.9)',
                    letterSpacing: 4,
                    marginBottom: 18,
                  }}
                >
                  ⟡ &nbsp; Portfolio
                </p>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: 'clamp(64px, 11vw, 120px)',
                  fontWeight: 400,
                  color: 'white',
                  lineHeight: 1.05,
                  letterSpacing: 2,
                  marginBottom: 14,
                  maxWidth: 620,
                }}
              >
                Tanvi
                <br />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #1aa89a, #b8c89a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Vilaskar
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: 4,
                  textTransform: 'uppercase',
                  marginBottom: 24,
                  fontWeight: 500,
                }}
              >
                {personal.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: 20,
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: 0.5,
                  maxWidth: 560,
                  marginBottom: 48,
                  lineHeight: 1.5,
                }}
              >
                "{personal.tagline}"
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
              >
                <a
                  href="#projects"
                  style={{
                    padding: '14px 32px',
                    background: 'linear-gradient(135deg, #1aa89a, #0e4d6e)',
                    color: 'white',
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 14,
                    letterSpacing: 0.5,
                    boxShadow: '0 4px 24px rgba(26,168,154,0.35)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 30px rgba(26,168,154,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = '0 4px 24px rgba(26,168,154,0.35)';
                  }}
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  style={{
                    padding: '14px 32px',
                    border: '1.5px solid rgba(26,168,154,0.45)',
                    color: 'rgba(255,255,255,0.86)',
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 14,
                    letterSpacing: 0.5,
                    transition: 'all 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#1aa89a';
                    e.target.style.color = '#1aa89a';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(26,168,154,0.45)';
                    e.target.style.color = 'rgba(255,255,255,0.86)';
                  }}
                >
                  Get In Touch
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.05 }}
                className="hero-stats"
                style={{
                  display: 'flex',
                  gap: 48,
                  marginTop: 64,
                  flexWrap: 'wrap',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                {[
                  ['9.15', 'CGPA'],
                  ['2', 'INTERNSHIPS'],
                  ['6', 'PROJECTS'],
                  ['★', "WINNER XENIA'26"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 32,
                        fontWeight: 500,
                        color: '#1aa89a',
                        lineHeight: 1,
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.42)',
                        letterSpacing: 1.8,
                        textTransform: 'uppercase',
                        marginTop: 6,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="hero-right"
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
            >
              <div className="hero-photo-frame">
                <img
                  src="./profile4.jpg"
                  alt="Tanvi Vilaskar"
                  className="hero-photo"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <WaveCanvas />
      </section>
    </>
  );
}