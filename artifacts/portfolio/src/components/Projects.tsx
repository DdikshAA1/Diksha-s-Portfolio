import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const projects = [
  {
    id: 1,
    title: "Fake News Detection System",
    shortDesc: "Machine learning model to identify and classify fake news.",
    fullDesc: "Built a robust machine learning model using Natural Language Processing (NLP) techniques to identify and classify fake news content accurately. The system processes text data, extracts meaningful features, and applies classification algorithms to determine credibility.",
    tech: ["Python", "Machine Learning", "NLP", "Flask", "Automation"],
    github: "https://github.com/DdikshAA1",
    demo: null,
    gradient: "from-primary/40 via-secondary/20 to-background"
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    shortDesc: "Interactive dashboard for real-time data visualization.",
    fullDesc: "An exploratory project to visualize complex datasets. Utilizes modern web technologies to render charts and graphs that help in making data-driven decisions quickly and effectively.",
    tech: ["JavaScript", "HTML/CSS", "Data Analytics"],
    github: "https://github.com/DdikshAA1",
    demo: null,
    gradient: "from-secondary/40 via-accent/20 to-background"
  },
  {
    id: 3,
    title: "AI Chatbot Interface",
    shortDesc: "Conversational interface powered by prompt engineering.",
    fullDesc: "A sleek, responsive chat interface demonstrating advanced prompt engineering techniques to generate accurate, context-aware responses from language models.",
    tech: ["Python", "Prompt Engineering", "API Integration"],
    github: "https://github.com/DdikshAA1",
    demo: null,
    gradient: "from-accent/40 via-primary/20 to-background"
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsExpanded(true)}
        className="glass-card rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 relative group h-full flex flex-col"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent group-hover:opacity-40 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-50 group-hover:scale-110 transition-transform duration-500">
            {project.title.substring(0, 1)}
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-3 font-serif group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 flex-1">
            {project.shortDesc}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 3).map(t => (
              <span key={t} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 font-mono">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 font-mono">
                +{project.tech.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:bg-white/10 hover:border-primary/50 transition-all text-white text-xs font-mono"
              data-testid={`button-github-${project.id}`}
            >
              <Github size={14} /> Code
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 hover:bg-secondary/10 hover:border-secondary/60 transition-all text-secondary text-xs font-mono"
                data-testid={`button-demo-${project.id}`}
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 text-white/30 text-xs font-mono cursor-default select-none">
                <ExternalLink size={14} /> Demo Soon
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease }}
              className="relative w-full max-w-3xl glass-card bg-background/95 rounded-3xl overflow-hidden shadow-2xl z-10 border border-primary/30"
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
              </div>
              
              <div className="p-8 sm:p-10">
                <h3 className="text-3xl font-bold text-white mb-4 font-serif">
                  {project.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.fullDesc}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-mono text-secondary mb-4 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-white font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                    data-testid={`button-popup-github-${project.id}`}
                  >
                    <Github size={18} /> View Code
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full border border-secondary/40 text-secondary font-medium hover:bg-secondary/10 transition-colors"
                      data-testid={`button-popup-demo-${project.id}`}
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white/30 font-medium cursor-default">
                      <ExternalLink size={18} /> Demo Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <a href="https://github.com/DdikshAA1" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors font-mono text-sm flex items-center gap-2">
            View all on GitHub <ExternalLink size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
