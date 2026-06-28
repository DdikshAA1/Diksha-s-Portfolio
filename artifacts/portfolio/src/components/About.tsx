import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p className="leading-relaxed">
              I am a B.Tech (Hons) CSE (AI & ML) student at SDGI Global University, expected to graduate in 2028. My journey in technology is driven by a deep fascination with how Artificial Intelligence can transform data into meaningful, real-world solutions.
            </p>
            <div className="p-6 glass-card rounded-2xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-white font-medium relative z-10">
                Continuous learner | Problem solver | Innovation enthusiast
              </p>
            </div>
            <p className="leading-relaxed">
              With a strong focus on Machine Learning, Data Analytics, and Software Development, I am constantly exploring emerging technologies. I believe in the power of code to not just build applications, but to craft intelligent systems that adapt and evolve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="relative h-[400px] lg:h-[500px] w-full glass-card rounded-3xl overflow-hidden flex items-center justify-center group"
          >
            {/* Animated abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/20" />
            
            <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-mono text-secondary mb-1">Current Focus</div>
                  <div className="text-xl font-bold text-white">AI & ML</div>
                </div>
              </div>
              
              <div className="self-center w-48 h-48 rounded-full border border-white/10 relative flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(124,58,237,1)] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_rgba(0,229,255,1)] translate-x-1/2 translate-y-1/2" />
                <div className="w-32 h-32 rounded-full border border-white/5 animate-[spin_15s_linear_reverse_infinite]" />
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-sm font-mono text-accent mb-1">Graduation</div>
                  <div className="text-xl font-bold text-white">Class of 2028</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center animate-[bounce_3s_ease-in-out_infinite]">
                  <span className="text-xl">🎓</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
