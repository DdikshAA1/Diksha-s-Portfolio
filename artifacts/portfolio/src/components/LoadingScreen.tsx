import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function LoadingScreen() {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setLineIndex(1), 1200);
    const timer2 = setTimeout(() => setLineIndex(2), 2400);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background font-mono text-primary"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease }}
      data-testid="loading-screen"
    >
      <div className="flex flex-col items-start gap-2 text-sm md:text-base">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-secondary">{'>'}</span>
          <span>Initializing Diksha.exe</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-4 bg-primary inline-block"
          />
        </motion.div>

        {lineIndex >= 1 && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-accent"
          >
            <span className="text-secondary">{'>'}</span>
            <span>Loading Intelligence...</span>
          </motion.div>
        )}

        {lineIndex >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-white"
          >
            <span className="text-secondary">{'>'}</span>
            <span>System Ready ✓</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
