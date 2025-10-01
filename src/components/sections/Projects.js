import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

// Project data from GitHub repositories
const projects = [
    {
      id: 1,
      title: "Sleeping Disorder Dashboard",
      description: "Interactive Power BI dashboard exploring relationships between sleep disorders and health/lifestyle measures (BMI, heart rate, physical activity, stress levels). Includes comprehensive data cleaning and EDA in Python.",
      image: "/assets/img/projects/sleeping-disorder.jpg",
      technologies: ["Power BI", "Python", "Data Analysis", "DAX", "Jupyter Notebook"],
      github: "https://github.com/Vasu-Solanki/Sleeping-Disorder-Dashboard",
      demo: null,
      category: "data-analysis",
      language: "Power BI",
      stars: 0,
      featured: true
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description: "Personal portfolio website built with HTML, CSS, and JavaScript showcasing my projects and skills.",
      image: "/assets/img/projects/portfolio.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/Vasu-Solanki/My-Portfolio",
      demo: "https://vasu-solanki.github.io/My-Portfolio/",
      category: "web-development",
      language: "HTML",
      stars: 0,
      featured: true
    },
    {
      id: 3,
      title: "Plotly Dash Analytics",
      description: "Interactive data visualization and analytics application built with Plotly Dash framework.",
      image: "/assets/img/projects/plotly-dash.jpg",
      technologies: ["Python", "Plotly", "Dash", "Data Visualization"],
      github: "https://github.com/Vasu-Solanki/Plotly_Dash",
      demo: null,
      category: "data-analysis",
      language: "Jupyter Notebook",
      stars: 0,
      featured: false
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description: "Machine learning-based movie recommendation engine using collaborative filtering and content-based algorithms.",
      image: "/assets/img/projects/movie-recommendation.jpg",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      github: "https://github.com/Vasu-Solanki/Movie_recom",
      demo: null,
      category: "machine-learning",
      language: "Python",
      stars: 0,
      featured: true
    },
    {
      id: 5,
      title: "Diwali Sales Analysis",
      description: "Comprehensive sales data analysis for Diwali festival period with customer behavior insights and trend analysis.",
      image: "/assets/img/projects/diwali-sales.jpg",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      github: "https://github.com/Vasu-Solanki/Diwali_Sales_Analysis",
      demo: null,
      category: "data-analysis",
      language: "Jupyter Notebook",
      stars: 0,
      featured: true
    },
    {
      id: 6,
      title: "Bank Loan Analysis",
      description: "Machine learning model for predicting loan eligibility with comprehensive risk assessment and data preprocessing.",
      image: "/assets/img/projects/bank-loan.jpg",
      technologies: ["Machine Learning", "Risk Assessment", "Data Processing"],
      github: "https://github.com/Vasu-Solanki/Bank-Loan-Analysis",
      demo: null,
      category: "machine-learning",
      language: "Python",
      stars: 0,
      featured: true
    },
    {
      id: 7,
      title: "Sales & Profit Analysis",
      description: "Business intelligence dashboard for sales performance analysis and profit optimization strategies.",
      image: "/assets/img/projects/sales-profit.jpg",
      technologies: ["Business Intelligence", "Data Analysis", "Excel", "Power BI"],
      github: "https://github.com/Vasu-Solanki/Sales-and-Profit-Analysis",
      demo: null,
      category: "data-analysis",
      language: "Excel",
      stars: 0,
      featured: false
    },
    {
      id: 8,
      title: "Blinkit Dashboard",
      description: "Power BI dashboard for Blinkit delivery analytics with advanced DAX functions and interactive visualizations.",
      image: "/assets/img/projects/blinkit.jpg",
      technologies: ["Power BI", "DAX", "Data Modeling", "Business Analytics"],
      github: "https://github.com/Vasu-Solanki/Blinkit_dashboard",
      demo: null,
      category: "data-analysis",
      language: "Power BI",
      stars: 0,
      featured: true
    },
    {
      id: 9,
      title: "E-commerce Dashboard",
      description: "Comprehensive e-commerce sales analysis dashboard with customer segmentation and performance metrics.",
      image: "/assets/img/projects/ecommerce.jpg",
      technologies: ["Excel", "Power BI", "Sales Analytics", "Customer Analysis"],
      github: "https://github.com/Vasu-Solanki/Ecommerce_dashboard",
      demo: null,
      category: "data-analysis",
      language: "Excel",
      stars: 0,
      featured: false
    },
    {
      id: 10,
      title: "Vrinda Store Sales Report",
      description: "Annual sales report for 2022 with customer analysis and growth strategies for business expansion.",
      image: "/assets/img/projects/vrinda-store.jpg",
      technologies: ["Excel", "Data Analysis", "Reporting", "Business Intelligence"],
      github: "https://github.com/Vasu-Solanki/Vrinda-Store-Sales-Report",
      demo: null,
      category: "data-analysis",
      language: "Excel",
      stars: 0,
      featured: false
    },
    {
      id: 11,
      title: "Pong Game",
      description: "Classic Pong game recreation using Python and Pygame with smooth animations and collision detection.",
      image: "/assets/img/projects/pong-game.jpg",
      technologies: ["Python", "Pygame", "Game Development", "Animation"],
      github: "https://github.com/Vasu-Solanki/pong-game",
      demo: null,
      category: "game-development",
      language: "Python",
      stars: 0,
      featured: false
    },
    {
      id: 12,
      title: "Snake Game",
      description: "Nokia-style snake game built with Python featuring classic gameplay mechanics and score tracking.",
      image: "/assets/img/projects/snake-game.jpg",
      technologies: ["Python", "Pygame", "Game Logic", "UI Design"],
      github: "https://github.com/Vasu-Solanki/Snake-Game",
      demo: null,
      category: "game-development",
      language: "Python",
      stars: 0,
      featured: false
    },
    {
      id: 13,
      title: "CodSoft September Tasks",
      description: "Collection of programming tasks and projects completed during CodSoft internship program in September.",
      image: "/assets/img/projects/codsoft.jpg",
      technologies: ["Python", "Programming", "Internship", "Tasks"],
      github: "https://github.com/Vasu-Solanki/CODSOFTSEPTEMBER",
      demo: null,
      category: "programming",
      language: "Python",
      stars: 0,
      featured: false
    },
    {
      id: 14,
      title: "Academic Project",
      description: "JavaScript-based academic project showcasing web development and programming fundamentals.",
      image: "/assets/img/projects/academic.jpg",
      technologies: ["JavaScript", "Web Development", "Academic", "Frontend"],
      github: "https://github.com/Vasu-Solanki/2202220100187",
      demo: null,
      category: "web-development",
      language: "JavaScript",
      stars: 0,
      featured: false
    },
    {
      id: 15,
      title: "Movie Recommendation Engine",
      description: "Alternative implementation of movie recommendation system with enhanced features and algorithms.",
      image: "/assets/img/projects/movie-r.jpg",
      technologies: ["Machine Learning", "Recommendation System", "Data Science"],
      github: "https://github.com/Vasu-Solanki/Movie_r",
      demo: null,
      category: "machine-learning",
      language: "Python",
      stars: 0,
      featured: false
    }
];


const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const getLanguageColor = (language) => {
    const colors = {
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'HTML': '#e34c26',
      'Jupyter Notebook': '#DA5B0B',
      'Excel': '#217346',
      'Power BI': '#F2C811'
    };
    return colors[language] || '#6c757d';
  };

  return (
    <section id="projects" ref={ref} className="projects-section py-5">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-gradient mb-3">My Projects</h2>
          <p className="section-subtitle">
            A collection of my data analysis, machine learning, and development projects
          </p>
        </motion.div>


        {/* Projects Grid */}
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              layout
            >
              <motion.div
                className={`project-card ${project.featured ? 'featured' : ''}`}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <span>⭐ Featured</span>
                  </div>
                )}
                
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x250/4285f4/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>🔗 GitHub</span>
                      </motion.a>
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo-link"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <span>🚀 Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span 
                        className="language-tag"
                        style={{ backgroundColor: getLanguageColor(project.language) }}
                      >
                        {project.language}
                      </span>
                      {project.stars > 0 && (
                        <span className="stars-count">⭐ {project.stars}</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/Vasu-Solanki"
            target="_blank"
            rel="noopener noreferrer"
            className="github-cta-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(66, 133, 244, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="github-icon">🐱</span>
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;