import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-top">
          <p className="eyebrow">Portfolio</p>

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
            <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
            <a className="nav-link" href="#projects" onClick={closeMenu}>Experience</a>
            <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
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
          <h1>Hello, I'm Shilpa Sreekumar</h1>
          <p className="hero-copy">
            Full-stack engineer building clean, scalable products and polished user experiences for finance and enterprise.
          </p>
        </div>
      </header>

      <section id="about" className="section-card about-section">
        <h2>About Me</h2>
        <div className="experience-card about-card">
          <div className="about-background-pattern"></div>
          <p>
            Python-focused Engineer with over a decade of experience architecting scalable, mission-critical applications within the banking and financial services sector. Expert in building robust Full-Stack applications using Python (Flask) and React, with a specialized focus on Context Engineering and high-precision RAG architectures.
          </p>
          <p>
            Technical lead experienced in bridging the gap between deep-learning backends and seamless user interfaces. Specialized in designing and deploying dynamic, enterprise-grade systems with strong security, performance, and compliance standards—including development of high-fidelity templates and automated workflows for complex financial communications.
          </p>
        </div>
      </section>

      <section id="skills" className="section-card">
        <h2>Skills</h2>
        <ul className="skill-list">
          <li>React + Vite</li>
          <li>Python / Flask</li>
          <li>Context Engineering</li>
          <li>RAG Architectures</li>
          <li>UI & Web Performance</li>
        </ul>
      </section>

      <section id="deep-dive" className="section-card technical-deep-dive">
        <h2>Technical Deep Dive</h2>
        <div className="tech-icons-grid">
          <div className="tech-icon-card">
            <div className="tech-icon-wrapper python-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#3776ab" opacity="0.15" />
                <text x="50" y="60" fontSize="48" fill="#3776ab" fontWeight="bold" textAnchor="middle">Py</text>
              </svg>
            </div>
            <h3>Python</h3>
            <p>Flask, Django, ETL, Data Engineering, Backend Optimization</p>
          </div>
          <div className="tech-icon-card">
            <div className="tech-icon-wrapper react-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#61dafb" opacity="0.15" />
                <circle cx="50" cy="50" r="6" fill="#61dafb" />
                <ellipse cx="50" cy="50" rx="16" ry="8" fill="none" stroke="#61dafb" strokeWidth="2" />
                <ellipse cx="50" cy="50" rx="16" ry="8" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="16" ry="8" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 50 50)" />
              </svg>
            </div>
            <h3>React</h3>
            <p>Modern UI, Component Architecture, Performance, Redux</p>
          </div>
          <div className="tech-icon-card">
            <div className="tech-icon-wrapper rag-icon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="#9333ea" opacity="0.15" />
                <circle cx="35" cy="40" r="8" fill="#9333ea" />
                <circle cx="50" cy="30" r="8" fill="#9333ea" />
                <circle cx="65" cy="40" r="8" fill="#9333ea" />
                <circle cx="50" cy="60" r="8" fill="#9333ea" />
                <line x1="35" y1="40" x2="50" y2="30" stroke="#9333ea" strokeWidth="2" />
                <line x1="50" y1="30" x2="65" y2="40" stroke="#9333ea" strokeWidth="2" />
                <line x1="35" y1="40" x2="50" y2="60" stroke="#9333ea" strokeWidth="2" />
                <line x1="65" y1="40" x2="50" y2="60" stroke="#9333ea" strokeWidth="2" />
              </svg>
            </div>
            <h3>RAG & Context Engineering</h3>
            <p>Semantic Search, Vector Databases, LLM Integration, Data Architecture</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section-card">
        <h2>Experience</h2>
        <div className="project-grid">
          <article className="project-card experience-card">
            <h3>Infosys</h3>
            <div className="experience-copy">
              <p className="experience-role">Full-Stack Development &amp; Data Visualization</p>
              <ul className="experience-list">
                <li>Engineered a data reconciliation tool using Python, React, Redux, and Material UI.</li>
                <li>Built high-performance, dynamic data tables with AG Grid for advanced filtering, sorting, and pagination.</li>
              </ul>

              <p className="experience-role">Performance Engineering</p>
              <ul className="experience-list">
                <li>Reduced memory overhead by 25% through heap snapshot audits and Lighthouse diagnostics.</li>
                <li>Improved load speed with lazy loading, query parameter serialization, and microservices API orchestration.</li>
              </ul>

              <p className="experience-role">Conversational AI (NLU)</p>
              <ul className="experience-list">
                <li>Built an intelligent chatbot using the RASA framework.</li>
                <li>Designed 40+ intents with 95% accuracy for natural language data queries.</li>
              </ul>

              <p className="experience-role">Monitoring &amp; Compliance</p>
              <ul className="experience-list">
                <li>Maintained system health with Grafana real-time monitoring.</li>
                <li>Created 40+ compliant email templates for financial client communications.</li>
              </ul>
            </div>
          </article>
          <article className="project-card experience-card">
            <h3>TimeClick Software</h3>
            <div className="experience-copy">
              <p className="experience-role">Product Growth & Reach</p>
              <ul className="experience-list">
                <li>Expanded market presence by 20% with cross-platform mobile applications using React Native and Python.</li>
                <li>Boosted customer satisfaction by 15% through Python-led feature improvements and cross-functional coordination.</li>
              </ul>

              <p className="experience-role">UI/UX Optimization</p>
              <ul className="experience-list">
                <li>Designed and launched intuitive desktop interfaces using PyQt5.</li>
                <li>Improved user experience metrics by 25% for time-tracking software.</li>
              </ul>

              <p className="experience-role">Stakeholder Alignment & Integration</p>
              <ul className="experience-list">
                <li>Translated business requirements into seamless deployments aligned with core objectives.</li>
                <li>Enhanced product competitiveness by integrating advanced third-party APIs and new features.</li>
              </ul>
            </div>
          </article>
          <article className="project-card experience-card">
            <h3>Tech Delegates</h3>
            <div className="experience-copy">
              <p className="experience-role">Backend Engineering & Optimization</p>
              <ul className="experience-list">
                <li>Developed and managed robust APIs using Django and Flask to improve processing speed.</li>
                <li>Refactored legacy codebases using DRY principles to lower technical debt and reduce duplication.</li>
              </ul>

              <p className="experience-role">Data Engineering & ETL</p>
              <ul className="experience-list">
                <li>Designed ETL jobs to consolidate REST API data into PostgreSQL staging databases.</li>
                <li>Authored advanced MySQL queries and leveraged Django ORM for efficient data management.</li>
              </ul>

              <p className="experience-role">Full-Stack & Desktop Development</p>
              <ul className="experience-list">
                <li>Built interactive PyQt data management interfaces with seamless CRUD support.</li>
                <li>Delivered polished desktop UI features for internal and customer-facing workflows.</li>
              </ul>

              <p className="experience-role">Process Leadership & Agile Execution</p>
              <ul className="experience-list">
                <li>Acted as a bridge between clients and engineering teams to translate requirements into deployments.</li>
                <li>Maintained high reliability by troubleshooting and patching critical application issues.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="section-card">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">🧑‍💻</span>
            <div className="contact-text">
              <strong>Name</strong>
              <p>Shilpa Sreekumar</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-text">
              <strong>Email</strong>
              <p>shilpasree209@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
