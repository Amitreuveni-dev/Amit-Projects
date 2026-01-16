import { motion, type Variants } from 'framer-motion';
import {
  Code2,
  Database,
  Server,
  Globe,
  Layers,
  Terminal,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Hero.module.scss';

interface TechItem {
  name: string;
  Icon: LucideIcon;
}

const TECH_STACK: TechItem[] = [
  { name: 'React', Icon: Code2 },
  { name: 'Node.js', Icon: Server },
  { name: 'TypeScript', Icon: Terminal },
  { name: 'MongoDB', Icon: Database },
  { name: 'SQL', Icon: Layers },
  { name: 'REST APIs', Icon: Globe },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const techItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const Hero = (): React.JSX.Element => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.greeting} variants={itemVariants}>
            Hello, I&apos;m
          </motion.span>

          <motion.h1 className={styles.title} variants={itemVariants}>
            Amit Reuveni
          </motion.h1>

          <motion.h2 className={styles.subtitle} variants={itemVariants}>
            Full Stack Developer
          </motion.h2>

          <motion.p className={styles.description} variants={itemVariants}>
            Fast learning and highly motivated developer with a passion for
            building modern web applications. Focused on writing clean,
            maintainable code that delivers exceptional user experiences.
          </motion.p>

          <motion.div className={styles.techStack} variants={itemVariants}>
            <span className={styles.techLabel}>Tech Stack</span>
            <div className={styles.techGrid}>
              {TECH_STACK.map((tech) => (
                <motion.div
                  key={tech.name}
                  className={styles.techItem}
                  variants={techItemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tech.Icon size={24} className={styles.techIcon} />
                  <span className={styles.techName}>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className={styles.cta} variants={itemVariants}>
            <a href="#projects" className={styles.primaryButton}>
              View My Work
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.decoration}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.decorCircle} />
          <div className={styles.decorCircleOuter} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
