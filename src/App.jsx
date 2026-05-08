export default function App() {
  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-top">
          <p className="eyebrow"></p>
          <nav className="hero-nav">
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Experience</a>
            <a className="nav-link" href="#contact">Contact</a>
          </nav>
        </div>

        <div>
          <h1>Hello, I’m Shilpa Sreekumar 🧑‍💻</h1>
          <p className="hero-copy">
            
          </p>
        </div>
      </header>

      <section id="about" className="section-card">
        <h2>About Me</h2>
        <p>
          Python-focused Engineer with over a decade of experience architecting scalable, mission-critical applications within the banking and financial services sector. Expert in building robust Full-Stack applications using Python (Flask) and React, with a specialized focus on Context Engineering and high-precision RAG architectures. Technical lead experienced in bridging the gap between deep-learning backends and seamless user interfaces, including the development of dynamic, high-fidelity Outlook email templates for automated enterprise communications.
        </p>
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
