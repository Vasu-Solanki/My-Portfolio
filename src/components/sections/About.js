import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-5 bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <h2 className="display-4 font-weight-bold text-gradient">About Me</h2>
        </motion.div>
        
        <div className="row align-items-center">
          <motion.div
            className="col-lg-4 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/img/about/VASU-DEADPOOL.gif"
              alt="Vasu Solanki"
              className="img-fluid rounded-circle"
              style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            />
          </motion.div>
          
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-content">
              <p className="lead mb-4">
                Hi there! 👋 I'm <strong>Vasu Solanki</strong>
              </p>
              
              <p className="mb-4">
                As a budding data enthusiast from Delhi, India, my ultimate goal is to become a data scientist. 
                I am deeply passionate about the field of data science and am committed to honing my skills in data analytics. 
                My vision is to uncover insights and make impactful contributions through the power of data, statistics, and storytelling.
              </p>
              
              <p className="mb-4">
                Currently, I am pursuing a BTech in Computer Science Engineering at I.T.S Engineering College. 
                My academic journey is focused on developing a solid foundation in data analytics while exploring various facets of computer science. 
                Outside the classroom, I indulge in strategic chess games, enjoy exploring intriguing content on YouTube, and experiment with new recipes in the kitchen.
              </p>
              
              <p>
                I take pride in my ability to observe and analyze the world around me. With a natural inclination towards helping others, 
                I am always eager to provide assistance and guidance. Whether it's through problem-solving or sharing insights, 
                I'm dedicated to continuous learning and growth. Let's connect and explore the exciting world of data together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
