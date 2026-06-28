import { motion } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const skillGroups = [
  {
    title: 'Programming',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C', level: 80 },
      { name: 'C++', level: 75 }
    ]
  },
  {
    title: 'Web Dev',
    icon: '🌐',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 }
    ]
  },
  {
    title: 'AI & Data',
    icon: '🧠',
    skills: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Prompt Engineering', level: 90 },
      { name: 'AI Fundamentals', level: 85 },
      { name: 'Data Analytics', level: 80 }
    ]
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: [
      { name: 'GitHub', level: 85 },
      { name: 'Canva', level: 95 },
      { name: 'Microsoft Office', level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease, delay: groupIdx * 0.1 }}
              className="glass-card rounded-2xl p-6 group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>

              <div className="space-y-6">
                {group.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease, delay: 0.2 + (skillIdx * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
