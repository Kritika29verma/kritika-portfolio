import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      {/* Main cursor blob with animated rainbow gradient */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="relative h-12 w-12">
          <motion.div 
            className="absolute inset-0 rounded-full blur-2xl"
            animate={{
              background: [
                'linear-gradient(135deg, hsl(200 100% 60%), hsl(280 80% 60%))',
                'linear-gradient(135deg, hsl(280 80% 60%), hsl(340 85% 60%))',
                'linear-gradient(135deg, hsl(340 85% 60%), hsl(160 70% 50%))',
                'linear-gradient(135deg, hsl(160 70% 50%), hsl(200 100% 60%))',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ opacity: 0.7 }}
          />
          <motion.div 
            className="absolute inset-2 rounded-full"
            animate={{
              background: [
                'linear-gradient(135deg, hsl(200 100% 70%), hsl(280 80% 70%))',
                'linear-gradient(135deg, hsl(280 80% 70%), hsl(340 85% 70%))',
                'linear-gradient(135deg, hsl(340 85% 70%), hsl(160 70% 60%))',
                'linear-gradient(135deg, hsl(160 70% 60%), hsl(200 100% 70%))',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ opacity: 0.9 }}
          />
        </div>
      </motion.div>

      {/* Secondary trail blob */}
      <motion.div
        className="pointer-events-none fixed z-40 mix-blend-screen"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.2,
        }}
      >
        <motion.div 
          className="h-9 w-9 rounded-full blur-lg"
          animate={{
            background: [
              'hsl(280 80% 60%)',
              'hsl(340 85% 60%)',
              'hsl(160 70% 50%)',
              'hsl(200 100% 60%)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ opacity: 0.5 }}
        />
      </motion.div>

      {/* Tertiary trail blob */}
      <motion.div
        className="pointer-events-none fixed z-30 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 25,
          mass: 0.3,
        }}
      >
        <motion.div 
          className="h-6 w-6 rounded-full blur-md"
          animate={{
            background: [
              'hsl(340 85% 60%)',
              'hsl(160 70% 50%)',
              'hsl(200 100% 60%)',
              'hsl(280 80% 60%)',
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ opacity: 0.4 }}
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;
