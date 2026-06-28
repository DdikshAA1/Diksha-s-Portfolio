import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import NeuralCanvas from './NeuralCanvas';

const roles = [
  "AI & ML Enthusiast",
  "Aspiring Data Scientist",
  "Software Developer",
  "Future AI Engineer",
  "Problem Solver"
];

const ease = [0.25, 0.46, 0.45, 0.94];

function MagneticBtn({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) {
  const ref = useMagneticButton(30);
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      ref={ref as any}
      href={href}
      className={`px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center ${className}`}
      style={{ boxShadow: '0 0 20px rgba(124, 58, 237, 0.0)' }}
    >
      {children}
    </Tag>
  );
}

export default function Hero() {
  const typedRole = useTypingEffect(roles, 50, 30, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <NeuralCanvas />
      
      {/* Aurora blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-[aurora-1_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] animate-[aurora-2_15s_ease-in-out_infinite]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 3.5 }} // delay after loading screen
          className="flex-1 text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 text-sm font-mono text-secondary"
          >
            System initialized. User found.
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter mb-4">
            <span className="text-white">I am </span>
            <br className="hidden md:block" />
            <span className="text-gradient">DIKSHA</span>
          </h1>
          
          <div className="h-10 md:h-12 mb-6">
            <h2 className="text-xl md:text-3xl font-mono text-muted-foreground">
              {'>'} {typedRole}
              <span className="w-3 h-6 md:h-8 bg-primary inline-block ml-2 animate-pulse align-middle" />
            </h2>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Curious and self-driven Computer Science Engineering (AI & ML) student passionate about Artificial Intelligence, Data Analytics, Software Development, and building impactful technology solutions that solve real-world problems.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <MagneticBtn href="#projects" className="bg-primary text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              View Projects
            </MagneticBtn>
            <MagneticBtn href="#contact" className="glass-card hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]">
              Contact Me
            </MagneticBtn>
            <MagneticBtn className="border border-white/10 hover:bg-white/5">
              Download Resume
            </MagneticBtn>
          </div>
        </motion.div>

        {/* Visual / Profile representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 4 }}
          className="flex-1 flex justify-center relative w-full max-w-md aspect-square"
        >
          {/* Central orb */}
          <div className="absolute inset-0 m-auto w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] shadow-[0_0_50px_rgba(0,229,255,0.3)]">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />
              <span className="text-7xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50">
                D
              </span>
            </div>
          </div>
          
          {/* Orbiting tech icons */}
          <div className="absolute inset-0 animate-[orbit_20s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl">🐍</div>
          </div>
          <div className="absolute inset-0 animate-[orbit_25s_linear_infinite]" style={{ animationDelay: '-5s' }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl">⚡</div>
          </div>
          <div className="absolute inset-0 animate-[orbit_30s_linear_infinite]" style={{ animationDelay: '-15s' }}>
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl">🧠</div>
          </div>
          <div className="absolute inset-0 animate-[orbit_22s_linear_infinite]" style={{ animationDelay: '-10s' }}>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 glass-card rounded-full flex items-center justify-center text-xl">📊</div>
          </div>
          
          {/* Code snippets */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-10 md:-right-20 glass-card p-3 rounded-lg text-xs font-mono text-accent hidden md:block"
          >
            model.fit(X_train, y_train)
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -left-10 md:-left-20 glass-card p-3 rounded-lg text-xs font-mono text-secondary hidden md:block"
          >
            import tensorflow as tf
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
