import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="education" ref={ref} className="py-5">
      <div className="container">
        <motion.h2
          className="text-center mb-5 text-gradient"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <p className="lead">BTech Computer Science Engineering</p>
          <p>Dr APJ Abdul Kalam Technical University</p>
          <p>2022 - Present</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
