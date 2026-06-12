import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/resume';

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? 'rgba(26,168,154,0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16,
        padding: '28px 26px',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'none',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        overflow: 'hidden',
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 6,
          gap: 12,
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: 'white',
              marginBottom: 2,
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 15,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            {project.subtitle}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
          <span
            style={{
              padding: '4px 10px',
              fontSize: 11,
              fontWeight: 600,
              background: project.badgeColor,
              borderRadius: 5,
              color: 'white',
              whiteSpace: 'nowrap',
            }}
          >
            {project.badge}
          </span>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
            {project.period}
          </span>
        </div>
      </div>

      {/* Tech tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          marginBottom: 16,
          marginTop: 12,
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              padding: '3px 10px',
              fontSize: 11,
              background: 'rgba(26,168,154,0.12)',
              border: '1px solid rgba(26,168,154,0.25)',
              borderRadius: 20,
              color: '#8dd5ce',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: 'rgba(255,255,255,0.62)',
          lineHeight: 1.65,
          marginBottom: 18,
        }}
      >
        {project.description}
      </p>

      {/* Highlights */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 8,
          marginTop: 'auto',
          marginBottom: project.link ? 18 : 0,
        }}
      >
        {project.highlights.map((h, hi) => (
          <div
            key={hi}
            style={{
              display: 'flex',
              gap: 6,
              alignItems: 'flex-start',
            }}
          >
            <span style={{color:'#1aa89a',marginTop:3,flexShrink:0,lineHeight:1}}>
              <svg viewBox="0 0 10 10" style={{width:8,height:8,fill:'#1aa89a',display:'block'}}><polygon points="5,0 10,5 5,10 0,5"/></svg>
            </span>
            <span
              style={{
                fontSize: 12,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.4,
              }}
            >
              {h}
            </span>
          </div>
        ))}
      </div>

      {/* Project link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 18,
            alignSelf: 'flex-start',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 14px',
            borderRadius: 10,
            background: 'rgba(26,168,154,0.12)',
            border: '1px solid rgba(26,168,154,0.28)',
            color: '#9be7df',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.3,
            textDecoration: 'none',
            position: 'relative',
            zIndex: 2,
          }}
        >
          GitHub Repo <svg viewBox="0 0 24 24" style={{width:13,height:13,display:'inline-block',fill:'none',stroke:'currentColor',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round',marginLeft:2,verticalAlign:'middle'}}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </a>
      )}

      {/* Hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: 16,
              background:
                'radial-gradient(circle at 50% 0%, rgba(26,168,154,0.07) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section
      id="projects"
      style={{
        padding: '100px 5vw',
        background: '#071e2c',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 70% 60%, rgba(26,168,154,0.06) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              color: '#1aa89a',
              letterSpacing: 3,
              marginBottom: 8,
              fontSize: 14,
            }}
          >
            ⟡ &nbsp; Projects
          </p>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              color: 'white',
            }}
          >
            Things I've <span style={{ fontWeight: 600, color: '#1aa89a' }}>built</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
            position: 'relative',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #projects > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}