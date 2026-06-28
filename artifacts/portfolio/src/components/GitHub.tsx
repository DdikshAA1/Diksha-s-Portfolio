import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen } from 'lucide-react';

const ease = [0.25, 0.46, 0.45, 0.94];

export default function GitHub() {
  // Generate fake heatmap data
  const generateHeatmap = () => {
    const weeks = 40;
    const days = 7;
    const grid = [];
    
    for (let w = 0; w < weeks; w++) {
      const col = [];
      for (let d = 0; d < days; d++) {
        // Random opacity between 0.1 and 1, heavily weighted towards lower values
        const rand = Math.random();
        let opacity = 0.1;
        if (rand > 0.9) opacity = 1;
        else if (rand > 0.7) opacity = 0.7;
        else if (rand > 0.4) opacity = 0.4;
        
        col.push(<div key={`${w}-${d}`} className="w-2.5 h-2.5 rounded-[2px] bg-primary" style={{ opacity }} />);
      }
      grid.push(<div key={w} className="flex flex-col gap-1">{col}</div>);
    }
    return grid;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="glass-card rounded-3xl p-8 md:p-12 border-white/10 relative overflow-hidden"
        >
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            
            {/* Left: Profile Info */}
            <div className="w-full lg:w-1/3 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/20 flex items-center justify-center">
                  <Github size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">DdikshAA1</h3>
                  <a href="https://github.com/DdikshAA1" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-secondary transition-colors font-mono">
                    github.com/DdikshAA1
                  </a>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 font-mono text-sm text-white/80">
                <BookOpen size={16} className="text-secondary" />
                Explorer | Builder | Learner
              </div>

              {/* Pinned Repo */}
              <div className="p-5 rounded-xl border border-white/10 bg-black/40 hover:border-primary/50 transition-colors group">
                <div className="flex items-center justify-between mb-2">
                  <a href="https://github.com/DdikshAA1" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <BookOpen size={16} /> fake-news-detector
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Machine learning model to identify and classify fake news accurately.
                </p>
                <div className="flex items-center gap-4 text-xs text-white/60 font-mono">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-yellow-400" /> Python
                  </span>
                  <span className="flex items-center gap-1"><Star size={14} /> 12</span>
                  <span className="flex items-center gap-1"><GitFork size={14} /> 4</span>
                </div>
              </div>
            </div>

            {/* Right: Heatmap */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center">
              <div className="mb-4 text-sm font-mono text-white/60">342 contributions in the last year</div>
              <div className="p-6 rounded-xl border border-white/5 bg-black/20 overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {generateHeatmap()}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
