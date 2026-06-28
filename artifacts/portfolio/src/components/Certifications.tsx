import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const certs = [
  {
    name: "Canva Design Bootcamp",
    issuer: "LetsUpgrade",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Prompt Engineering Bootcamp",
    issuer: "LetsUpgrade",
    icon: "🤖",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "AI Agents Workshop",
    issuer: "Microsoft Learn × K.A.M.A.L.A",
    icon: "⚙️",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "Python Programming",
    issuer: "GeeksforGeeks",
    icon: "🐍",
    gradient: "from-orange-500 to-yellow-500"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            Verified <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.15 }}
              className="relative h-64 w-full group [perspective:1000px]"
            >
              <div className="w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute inset-0 w-full h-full glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                  <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-3xl bg-gradient-to-br ${cert.gradient}`}>
                    {cert.icon}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 w-full h-full glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary/10 border-primary/30">
                  <div className="text-4xl mb-4">🏆</div>
                  <div className="text-sm font-mono text-secondary mb-2">Verified Credential</div>
                  <p className="text-sm text-white/80">Successfully completed the requirements for {cert.name}.</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
