'use client';

import { motion } from 'motion/react';
import { Terminal, Code2, Cpu, Globe } from 'lucide-react';

const AboutMe = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-primary">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border"
            >
              <Terminal className="w-8 h-8 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-3">Software Developer</h2>
              <p className="text-muted-foreground">
                Passionate about creating elegant solutions to complex problems. I specialize in modern web technologies and love exploring new frameworks and tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border"
            >
              <Code2 className="w-8 h-8 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
              <p className="text-muted-foreground">
                Proficient in React, TypeScript, Next.js, and modern frontend development. Always eager to learn and adapt to new technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border"
            >
              <Cpu className="w-8 h-8 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-3">Problem Solver</h2>
              <p className="text-muted-foreground">
                I thrive on tackling challenging problems and creating efficient, scalable solutions. Performance and clean code are always top priorities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border"
            >
              <Globe className="w-8 h-8 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-3">Always Learning</h2>
              <p className="text-muted-foreground">
                The tech world never stands still, and neither do I. Constantly learning and staying updated with the latest industry trends and best practices.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-card p-6 rounded-lg shadow-lg border border-border mt-8"
          >
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              What started as a curiosity for coding has evolved into a full-fledged passion for software development. 
              I&apos;m dedicated to creating intuitive and efficient applications that make a difference. 
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
