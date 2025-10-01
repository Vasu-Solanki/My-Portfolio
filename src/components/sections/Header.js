import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
// Using a simple state-based typewriter effect instead
import './Header.css';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Simple typewriter effect
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['a Data Analyst', 'an Engineer', 'a Data Scientist'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    setCurrentRole(roles[roleIndex]);
  }, [roleIndex]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Social links data
  const socialLinks = [
    { 
      name: 'Email', 
      url: 'mailto:vasusolanki1009@gmail.com', 
      icon: '📧',
      color: '#ea4335' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/vasusolanki/', 
      icon: '💼',
      color: '#0077b5' 
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Vasu-Solanki', 
      icon: '🐱',
      color: '#333' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/solanki_x_', 
      icon: '📸',
      color: '#e4405f' 
    },
    { 
      name: 'HackerRank', 
      url: 'https://www.hackerrank.com/profile/vasusolanki1009', 
      icon: '⚡',
      color: '#2ec866' 
    },
    { 
      name: 'LeetCode', 
      url: 'https://leetcode.com/u/vasusolanki1009/', 
      icon: '🧩',
      color: '#ffa116' 
    },
  ];

  return (
    <section id="header" className="header-section">
      {/* Background Video */}
      <motion.video
        className="background-video"
        src="/assets/img/background/nature.mp4"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2 }}
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />

      <div className="header-container">
        <div className="header-content">
          {/* Main Title */}
          <motion.h1
            className="header-title"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.span
              className="name-text"
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0px 0px 20px rgba(66, 133, 244, 0.6)" 
              }}
            >
              VASU SOLANKI
            </motion.span>
          </motion.h1>

          {/* Subtitle with Typewriter */}
          <motion.h2
            className="header-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            I am <span className="typing-text">{currentRole}</span>
            <span className="cursor">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="header-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Passionate about transforming data into insights and building intelligent solutions.
            <br />
            Currently pursuing BTech in Computer Science Engineering.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: `0 10px 20px ${link.color}40`
                }}
                whileTap={{ scale: 0.9 }}
                style={{ '--color': link.color }}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-label">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Email */}
          <motion.div
            className="contact-email"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.a
              href="mailto:vasusolanki1009@gmail.com"
              className="email-link"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(66, 133, 244, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              vasusolanki1009@gmail.com
            </motion.a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.div
              className="scroll-mouse"
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <div className="scroll-wheel"></div>
            </motion.div>
            <p className="scroll-text">Scroll Down</p>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-element floating-element-${i + 1}`}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Header;
