import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

const experiences = [
  {
    role: "Summer Internship Program",
    company: "CBSOT",
    year: "2026",
    type: "Internship"
  },
  {
    role: "Campus Ambassador",
    company: "Launched Ed",
    year: "Present",
    type: "Leadership"
  },
  {
    role: "Campus Ambassador",
    company: "Mindenious",
    year: "Present",
    type: "Leadership"
  },
  {
    role: "Core Organiser",
    company: "SGU Hackathon 2.0",
    year: "2026",
    type: "Leadership"
  },
  {
    role: "Volunteer",
    company: "SGU Hackathon",
    year: "2025",
    type: "Leadership"
  },
  {
    role: "Participant",
    company: "ResCon (Bennett University)",
    year: "2025",
    type: "Hackathon"
  },
  {
    role: "Participant",
    company: "Smart India Hackathon",
    year: "2025",
    type: "Hackathon"
  },
  {
    role: "Participant",
    company: "SHE INNOVATES Girls Hackathon (GNIOT)",
    year: "Past",
    type: "Hackathon"
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {/* Glowing vertical line effect */}
          <motion.div 
            className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 py-6 group"
            >
              {/* Node */}
              <div className="absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-background border-2 border-primary group-hover:border-secondary group-hover:scale-150 transition-all duration-300 z-10" />
              <div className="absolute left-[-9px] top-[28px] w-5 h-5 rounded-full bg-primary/20 blur-sm group-hover:bg-secondary/40 transition-colors duration-300" />
              
              <div className="glass-card p-6 rounded-2xl border border-white/5 group-hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-secondary px-3 py-1 rounded-full bg-secondary/10 w-fit">
                    {exp.year}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="font-medium text-white/80">{exp.company}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-sm">{exp.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
