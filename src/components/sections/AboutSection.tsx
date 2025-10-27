import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutSectionProps {
  data: {
    about: string;
    bio: string;
  };
}

const AboutSection = ({ data }: AboutSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="flex min-h-screen items-center justify-center px-4 py-20">
      <motion.div
        className="max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="mb-8 text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="space-y-6">
          <motion.div
            className="rounded-2xl bg-card/80 p-8 shadow-elegant backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-foreground">
              {data.about}
            </p>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-gradient-primary p-8 shadow-glow"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-primary-foreground">
              {data.bio}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
