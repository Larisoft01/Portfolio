import React, { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Linkedin, Github, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // useEffect para gerenciar o tema escuro
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // useEffect para detectar seção ativa no scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'projetos', 'experiencia', 'contato'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    'JavaScript', 'React', 'Node.js', 'TypeScript', 'Python',
    'HTML/CSS', 'Git', 'Java', 'C#', 'Flutter', 'R'
  ];

  const projects = [
    {
      title: 'TCC - Lotação de Restaurante',
      description: 'Frontend em Flutter para monitoramento de lotação de restaurante em tempo real.',
      technologies: ['Flutter', 'Firebase', 'Google Cloud Functions'],
      link: 'https://github.com/Larisoft01/TCCfront'
    },
    {
      title: 'Web App - Restaurante',
      description: 'Web app para gerenciamento de funcionários em restaurante, com painel administrativo.',
      technologies: ['Javascript', 'HTML', 'CSS'],
      link: 'https://github.com/Larisoft01/equiperocket'    
    },
    
  ];

  const experiences = [
    {
      company: 'General Motors',
      role: 'Student Intern - VSM Finance – Direct Sales',
      period: '08/2023 - 08/2025',
      description: 'Automação de Processos em Excel com MACRO e VBA'
    },
    {
      company: 'Mauá Esports',
      role: 'Diretora de Marketing',
      period: '2020 - 2024',
      description: 'Responsável pelo planejamento e execução de estratégias de marketing digital para promover a equipe e engajar a comunidade de esports.',
    },
   
  ];

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Portfolio</div>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'sobre', 'projetos', 'experiencia', 'contato'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Olá, eu sou a <span className="gradient-text">Larissa Navarro</span>
          </h1>
          <p className="hero-subtitle">
            Desenvolvedora FrontEnd apaixonada por criar designs e experiências web.
          </p>
          <div className="hero-buttons">
            <a href="#contato" className="btn btn-primary">
              Entre em Contato
            </a>
            <a href="#projetos" className="btn btn-secondary">
              Ver Projetos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Sobre Mim</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Sou uma desenvolvedora frontend, com curiosidade sobre nuvem e cybersecurity. 
                Com experiência em automação de processos na área financeira e em busca de uma nova oportunidade na área de tecnologia, 
                busco sempre estar estudando novas ferramentas e tecnologias para entregar soluções inovadoras que superem as expectativas dos clientes.
                que superem as expectativas dos clientes.
              </p>
              <p>
                Minha jornada começou com a curiosidade de entender como as coisas funcionam 
                e evoluiu para uma carreira dedicada a transformar ideias em realidade através da tecnologia.
              </p>
            </div>
            <div className="skills-container">
              <h3>Habilidades</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="section">
        <div className="container">
          <h2 className="section-title">Projetos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  Ver Projeto <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experiência</h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Vamos Trabalhar Juntos?</h2>
            <p className="contact-subtitle">
              Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
            </p>
            <div className="social-links">
              <a
                href="mailto:larissa.navarro.pizarro@gmail.com"
                className="social-button"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/larissa-navarro-pizarro/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Larisoft01"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Seu Nome. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;