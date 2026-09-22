import "./App.css";
import profileImage from "./assets/profile.png";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Sruthinlal<span>.</span>
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="hero" id="home">
          <div className="hero-container">

            <div className="hero-content">
              <div className="eyebrow">
                UI/UX · FRONTEND · WEB
              </div>

              <h1>
                Hi, I'm <span>Sruthinlal.</span>
                <br />
                UI/UX Frontend
                <br />
                Developer.
              </h1>

              <p>
                I design and build responsive, user-focused digital
                experiences, combining a designer's eye with practical
                frontend development.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Work
                </a>

                <a href="#contact" className="secondary-button">
                  Let's Connect
                </a>
              </div>
            </div>

            <div className="hero-image-area">
              <div className="image-glow"></div>

              <div className="image-card">
                <img src={profileImage} alt="Sruthinlal" />

                <div className="profile-label">
                  <strong>Sruthinlal V K</strong>
                  <span>UI/UX Frontend Developer</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <section className="section" id="about">
          <div className="section-container">
            <div className="section-heading">
              <span>ABOUT ME</span>
              <h2>Designing with purpose.</h2>
            </div>

            <p className="section-text">
              I am a UI/UX Frontend Developer with 9+ years of experience
              creating responsive and user-focused web interfaces and
              frontend applications. I combine UI design skills with
              practical frontend development to create clean and usable
              digital experiences.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <div className="section-container">
            <div className="section-heading">
              <span>SKILLS</span>
              <h2>What I work with.</h2>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <h3>React</h3>
                <p>Web & Mobile Frontend</p>
              </div>

              <div className="skill-card">
                <h3>Angular</h3>
                <p>Frontend Development</p>
              </div>

              <div className="skill-card">
                <h3>UI / UX</h3>
                <p>Responsive Interface Design</p>
              </div>

              <div className="skill-card">
                <h3>HTML / CSS</h3>
                <p>Pixel-Perfect Development</p>
              </div>

              <div className="skill-card">
                <h3>JavaScript</h3>
                <p>Modern Frontend Development</p>
              </div>

              <div className="skill-card">
                <h3>Figma</h3>
                <p>Wireframes & UI Design</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <div className="section-container">
            <div className="section-heading">
              <span>CAREER</span>
              <h2>My experience.</h2>
            </div>

            <div className="experience-item">
              <div>
                <h3>UI/UX Frontend Developer</h3>
                <p className="company">Onesoft Technologies · Kochi</p>
                <span className="date">Mar 2023 – Nov 2025</span>
              </div>

              <p>
                Worked on responsive web and mobile interfaces using
                Angular, React/React Native, HTML, CSS, JavaScript and
                Bootstrap. Converted designs into reusable UI components
                and worked on ERP, POS and Pharmacy Plus applications.
              </p>
            </div>

            <div className="experience-item">
              <div>
                <h3>Web Designer / Frontend</h3>
                <p className="company">IPride ERD Pvt Ltd</p>
                <span className="date">Nov 2020 – Feb 2023</span>
              </div>

              <p>
                Worked on web design, visual layouts and HTML/CSS/JavaScript
                implementation, including inner-page design and conversion
                work.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section" id="projects">
          <div className="section-container">
            <div className="section-heading">
              <span>WORK</span>
              <h2>Selected projects.</h2>
            </div>

            <div className="projects-grid">
              <div className="project-card">
                <span>01</span>
                <h3>Pharmacy Plus</h3>
                <p>
                  Frontend UI for pharmacy management web and mobile
                  applications.
                </p>
                <small>Angular · HTML · CSS · Bootstrap</small>
              </div>

              <div className="project-card">
                <span>02</span>
                <h3>POS Application</h3>
                <p>
                  Responsive frontend interfaces for POS and business
                  management workflows.
                </p>
                <small>Angular · HTML · CSS · Bootstrap</small>
              </div>

              <div className="project-card">
                <span>03</span>
                <h3>Academic Management System</h3>
                <p>
                  Designed and developed frontend pages and responsive
                  layouts for an academic management platform.
                </p>
                <small>HTML · CSS · JavaScript · Bootstrap</small>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <div className="section-container">
            <div className="section-heading">
              <span>CONTACT</span>
              <h2>Let's build something together.</h2>
            </div>

            <p className="section-text">
              Have a project, opportunity or idea? Let's connect and
              discuss how I can help.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="primary-button"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Sruthinlal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;