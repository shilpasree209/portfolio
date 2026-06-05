import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="hero">
        <div className="hero-top">
          <p className="eyebrow">Shilpa Sreekumar</p>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`hero-nav ${menuOpen ? 'open' : ''}`}>
            <a className="nav-link" href="#about"    onClick={closeMenu}>About</a>
            <a className="nav-link" href="#skills"   onClick={closeMenu}>Skills</a>
            <a className="nav-link" href="#projects" onClick={closeMenu}>Experience</a>
            <a className="nav-link" href="#pivot"    onClick={closeMenu}>Building</a>
            <a className="nav-link" href="#contact"  onClick={closeMenu}>Contact</a>
          </nav>
        </div>

        <div className="hero-copy-wrap">
          <div className="hero-avatar-wrap">
            <svg className="hero-avatar" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#4f46e5', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#9333ea', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              <circle cx="60" cy="35" r="18" fill="#fbbf24" />
              <rect x="45" y="56" width="30" height="35" rx="6" fill="url(#avatarGrad)" />
              <rect x="20" y="60" width="22" height="8" rx="4" fill="#fbbf24" />
              <rect x="78" y="60" width="22" height="8" rx="4" fill="#fbbf24" />
              <rect x="32" y="68" width="28" height="18" rx="2" fill="#1f2937" />
              <rect x="33" y="69" width="26" height="14" rx="1" fill="#4f46e5" opacity="0.8" />
              <text x="38" y="78" fontSize="6" fill="#fff" fontWeight="bold">&lt; /&gt;</text>
            </svg>
          </div>

          {/* Value-driven headline: seniority + niche + trajectory */}
          <p className="hero-label">Senior Full-Stack Engineer</p>
          <h1>10 years of Python.<br />Now shipping AI-powered products.</h1>
          <p className="hero-copy">
            Django · FastAPI · React · LLM Orchestration · RAG Architectures
          </p>
          <p className="hero-location">📍 Houston, TX · Open to remote</p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get in touch</a>
            <a href="#projects" className="btn-ghost">View experience</a>
          </div>
        </div>
      </header>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="section-card about-section">
        <h2>About Me</h2>
        <div className="experience-card about-card">
          <div className="about-background-pattern"></div>

          {/* Three-act narrative: origin → depth → trajectory */}
          <p>
            My engineering career started where mistakes cost real money: financial services.
            For a decade, I built reconciliation platforms, NLU-powered chatbots, and ETL
            pipelines at companies like Infosys — systems that had to be correct, fast, and
            compliant with no margin for error. That environment shaped how I think about
            every system I design.
          </p>
          <p>
            A few years ago, I noticed every interesting engineering challenge had an AI layer
            waiting to be unlocked. So I went deep — RAG architectures, vector databases,
            context engineering, and LLM orchestration. I'm not a data scientist dabbling
            in software. I'm a senior engineer who treats AI as infrastructure: something to be
            designed, measured, and maintained like any other production system.
          </p>
          <p>
            I'm also expanding into Ruby on Rails — drawn by its convention-over-configuration
            philosophy and the strong indie SaaS ecosystem around it. Coming from Django, the
            mental model transfers cleanly; the fresh perspective is intentional.
          </p>
          <p className="about-location-note">
            Based in Houston, TX. Open to remote roles at SaaS companies where engineering
            fundamentals and AI literacy both matter.
          </p>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────── */}
      <section id="skills" className="section-card">
        <h2>Skills</h2>
        <p className="section-subhead">Honest depth tiers — not a keyword dump.</p>

        <div className="skills-tiers">

          <div className="skill-tier expert">
            <h3 className="tier-label">Expert</h3>
            <div className="skill-pills">
              {['Python', 'Django', 'FastAPI', 'Flask', 'React', 'PostgreSQL',
                'REST APIs', 'ETL / Data Engineering', 'Full-Stack Architecture'].map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-tier proficient">
            <h3 className="tier-label">Proficient</h3>
            <div className="skill-pills">
              {['Ruby on Rails', 'LLM Orchestration', 'RAG Architectures',
                'Context Engineering', 'React Native', 'Redux'].map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-tier familiar">
            <h3 className="tier-label">Familiar</h3>
            <div className="skill-pills">
              {['PyQt5', 'AG Grid', 'Material UI', 'Grafana', 'RASA NLU',
                'Vector Databases', 'Pinecone', 'pgvector'].map(s => (
                <span key={s} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────── */}
      {/* Each bullet: [What it does] + [tech stack] + [measurable outcome] */}
      <section id="projects" className="section-card">
        <h2>Experience</h2>
        <div className="project-grid">

          <article className="project-card experience-card">
            <h3>Infosys</h3>
            <p className="experience-role-title">Senior Software Engineer · Banking &amp; Financial Services</p>

            <p className="experience-role">Full-Stack Engineering</p>
            <ul className="experience-list">
              <li>
                Built a financial data reconciliation platform using Python, React, Redux,
                and AG Grid — delivering advanced filtering, sorting, and pagination across
                enterprise-scale banking datasets.
              </li>
              <li>
                Cut frontend memory overhead by <strong>25%</strong> through heap snapshot
                audits and Lighthouse diagnostics; improved load speed via lazy loading
                and microservices API orchestration.
              </li>
            </ul>

            <p className="experience-role">Conversational AI</p>
            <ul className="experience-list">
              <li>
                Engineered a natural-language query interface for financial data using the
                RASA NLU framework — 40+ intents trained to <strong>95% classification
                accuracy</strong> in production.
              </li>
            </ul>

            <p className="experience-role">Compliance &amp; Monitoring</p>
            <ul className="experience-list">
              <li>
                Delivered 40+ compliant email templates for regulated financial client
                communications; maintained system health with Grafana real-time dashboards.
              </li>
            </ul>
          </article>

          <article className="project-card experience-card">
            <h3>TimeClick Software</h3>
            <p className="experience-role-title">Full-Stack Engineer · SaaS / Time Tracking</p>

            <p className="experience-role">Product Growth</p>
            <ul className="experience-list">
              <li>
                Built cross-platform mobile apps using React Native and Python, expanding
                market presence by <strong>20%</strong> across iOS and Android.
              </li>
              <li>
                Drove a <strong>15% increase in customer satisfaction</strong> through
                Python-led feature improvements and cross-functional product coordination.
              </li>
            </ul>

            <p className="experience-role">Desktop UI / UX</p>
            <ul className="experience-list">
              <li>
                Designed and shipped PyQt5 desktop interfaces for time-tracking software,
                improving measured UX metrics by <strong>25%</strong>.
              </li>
              <li>
                Integrated third-party APIs and aligned engineering deliverables with
                product roadmap, shipping on schedule across multiple release cycles.
              </li>
            </ul>
          </article>

          <article className="project-card experience-card">
            <h3>Tech Delegates</h3>
            <p className="experience-role-title">Backend Engineer · Data &amp; Systems</p>

            <p className="experience-role">Backend &amp; API Engineering</p>
            <ul className="experience-list">
              <li>
                Built and maintained production REST APIs using Django and Flask; refactored
                legacy codebases using DRY principles to measurably reduce duplication
                and ongoing maintenance cost.
              </li>
            </ul>

            <p className="experience-role">Data Engineering</p>
            <ul className="experience-list">
              <li>
                Designed ETL pipelines to consolidate REST API data into PostgreSQL staging
                databases using Django ORM and raw MySQL — improving downstream data
                reliability for reporting workflows.
              </li>
            </ul>

            <p className="experience-role">Desktop Development</p>
            <ul className="experience-list">
              <li>
                Built PyQt5 data management interfaces with full CRUD support for both
                internal tooling and customer-facing desktop workflows.
              </li>
            </ul>
          </article>

        </div>
      </section>

      {/* ── CURRENTLY BUILDING ─────────────────────────────────── */}
      {/* Frames the Rails + AI pivot as intentional, not remedial */}
      <section id="pivot" className="section-card pivot-section">
        <h2>Currently Building</h2>
        <p className="section-subhead">
          Senior engineers pick up new tools deliberately. Here's what I'm focused on now.
        </p>
        <div className="pivot-grid">

          <div className="pivot-card">
            <div className="pivot-icon">🛤️</div>
            <h3>Ruby on Rails</h3>
            <p>
              Working through Rails' convention-over-configuration philosophy coming from
              a decade of Django. The mental model transfers; the opinionated structure
              aligns with how I think about application architecture. Focused on the
              full-stack Rails workflow and the indie SaaS patterns built around it.
            </p>
          </div>

          <div className="pivot-card">
            <div className="pivot-icon">🔍</div>
            <h3>Production RAG Pipelines</h3>
            <p>
              Building retrieval-augmented generation systems with pgvector and Pinecone,
              using the OpenAI and Anthropic APIs. Focused on retrieval precision, latency
              budgets, and re-ranking strategies that hold up under real query distributions —
              not just demos.
            </p>
          </div>

          <div className="pivot-card">
            <div className="pivot-icon">🧠</div>
            <h3>Context Engineering &amp; Agent Orchestration</h3>
            <p>
              Designing multi-step prompt chains, tool-use patterns, and agent workflows
              for complex tasks. Treating context as a first-class engineering problem:
              what to include, what to compress, and how to structure information so
              models reason correctly.
            </p>
          </div>

        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" className="section-card">
        <h2>Let's Talk</h2>
        <p className="section-subhead">
          Open to senior full-stack and AI engineering roles — remote preferred,
          Houston-local welcome.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-text">
              <strong>Email</strong>
              <a href="mailto:shilpasree209@gmail.com" className="contact-link">
                shilpasree209@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-text">
              <strong>Location</strong>
              <p>Houston, TX · Open to remote</p>
            </div>
          </div>
          {/* Add your LinkedIn and GitHub URLs below */}
          <div className="contact-item">
            <span className="contact-icon">💼</span>
            <div className="contact-text">
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/shilpa-sreekumar-081125200/" className="contact-link" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/shilpa-sreekumar
              </a>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🐙</span>
            <div className="contact-text">
              <strong>GitHub</strong>
              <a href="https://github.com/shilpasree209" className="contact-link" target="_blank" rel="noopener noreferrer">
                github.com/shilpasree209
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
