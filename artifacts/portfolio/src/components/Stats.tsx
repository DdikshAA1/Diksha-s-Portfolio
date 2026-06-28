import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

const ease = [0.25, 0.46, 0.45, 0.94];

const statData = [
  { label: 'Technical Skills', value: 10, suffix: '+' },
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'Hackathons Participated', value: 3, suffix: '+' },
  { label: 'Certifications Earned', value: 4, suffix: '+' },
  { label: 'Leadership Experiences', value: 5, suffix: '+' },
];

function StatCircle({ label, value, suffix, index }: { label: string, value: number, suffix: string, index: number }) {
  const { count, elementRef } = useCountUp(value, 2000, true);

  return (
    <motion.div
      ref={elementRef as any}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-6"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mb-4 group">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
        <svg className="absolute inset-0 w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="48"
            fill="transparent"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="301.59"
            initial={{ strokeDashoffset: 301.59 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease, delay: index * 0.1 + 0.5 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tighter">
          {count}{suffix}
        </div>
      </div>
      <div className="text-sm md:text-base text-muted-foreground text-center font-medium max-w-[120px]">
        {label}
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden bg-background/50 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {statData.map((stat, i) => (
            <StatCircle key={i} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
