import { useState, useEffect } from 'react'
import {
  Moon,
  Sun,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function Portfolio() {
  /**
   * Controle de tema (claro / escuro)
   * useState é utilizado para armazenar o estado atual do tema
   */
  const [darkMode, setDarkMode] = useState(false)

  /**
   * Controle do menu mobile
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Seção ativa para navegação com destaque
   */
  const [activeSection, setActiveSection] = useState('home')

  /**
   * useEffect responsável por aplicar o tema no body
   * Efeito colateral: manipulação do DOM
   */
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  /**
   * useEffect responsável por detectar a seção ativa durante o scroll
   * Atualiza o estado de navegação dinamicamente
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'sobre', 'projetos', 'experiencia', 'contato']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const { offsetTop, offsetHeight } = element
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'HTML/CSS',
    'Git',
    'Java',
    'C#',
    'Flutter',
    'R'
  ]

  const projects = [
    {
      title: 'TCC - Lotação de Restaurante',
      description:
        'Frontend em Flutter para monitoramento de lotação de restaurante em tempo real.',
      technologies: ['Flutter', 'Firebase', 'Google Cloud Functions'],
      link: 'https://github.com/Larisoft01/TCCfront'
    },
    {
      title: 'Web App - Restaurante',
      description:
        'Web app para gerenciamento de funcionários em restaurante, com painel administrativo.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/Larisoft01/equiperocket'
    }
  ]

  const experiences = [
    {
      company: 'General Motors',
      role: 'Student Intern - VSM Finance – Direct Sales',
      period: '08/2023 - 08/2025',
      description: 'Automação de processos financeiros utilizando Excel, VBA e Macros.'
    },
    {
      company: 'Mauá Esports',
      role: 'Diretora de Marketing',
      period: '2020 - 2024',
      description:
        'Planejamento e execução de estratégias de marketing digital e gestão de equipe.'
    }
  ]

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Portfolio</div>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'sobre', 'projetos', 'experiencia', 'contato'].map(item => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${
                    activeSection === item ? 'active' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              onClick={() => setDarkMode(prev => !prev)}
              className="theme-toggle"
              aria-label="Alternar tema"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="menu-toggle"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Olá, eu sou <span className="gradient-text">Larissa Navarro</span>
          </h1>
          <p className="hero-subtitle">
            Desenvolvedora Front-End focada em experiências web modernas.
          </p>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Sobre Mim</h2>
          <p>
            Desenvolvedora Front-End com experiência em automação de processos e
            interesse em cloud e cybersecurity.
          </p>

          <div className="skills-grid">
            {skills.map(skill => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <div className="container">
          <h2 className="section-title">Projetos</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
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

      {/* EXPERIÊNCIA */}
      <section id="experiencia" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experiência</h2>
          {experiences.map(exp => (
            <div key={exp.company} className="experience-card">
              <h3>{exp.role}</h3>
              <p>{exp.company}</p>
              <span>{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="section">
        <div className="container">
          <h2 className="section-title">Contato</h2>
          <div className="social-links">
            <a href="mailto:larissa.navarro.pizarro@gmail.com">
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/larissa-navarro-pizarro/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Larisoft01"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Larissa Navarro</p>
      </footer>
    </div>
  )
}

export default Portfolio
