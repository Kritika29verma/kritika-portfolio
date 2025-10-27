import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillsSectionProps {
  data: {
    skills: Skill[];
  };
}

const SkillsSection = ({ data }: SkillsSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <motion.h2
          className="mb-12 text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {data.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="rounded-2xl bg-card/80 p-6 shadow-elegant backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow)" }}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              
              <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: index % 3 === 0 
                      ? 'var(--gradient-primary)' 
                      : index % 3 === 1 
                      ? 'var(--gradient-secondary)' 
                      : 'var(--gradient-tertiary)',
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
