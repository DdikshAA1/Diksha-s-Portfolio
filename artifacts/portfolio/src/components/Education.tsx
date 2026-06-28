import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden bg-background/50 backdrop-blur-sm border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            Academic <span className="text-gradient">Foundation</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 border-primary/20 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-mono text-primary mb-6">
                Expected Graduation: 2028
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 font-serif">
                B.Tech (Hons) Computer Science & Engineering
              </h3>
              <h4 className="text-xl md:text-2xl text-secondary mb-6">
                Specialization in AI & ML
              </h4>
              <p className="text-lg text-muted-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                SDGI Global University
              </p>
            </div>
            
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/5 flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-2 border border-secondary/30 rounded-full animate-[spin_15s_linear_reverse_infinite]" />
              <span className="text-5xl md:text-7xl">🎓</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
