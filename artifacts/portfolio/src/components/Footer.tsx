import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm font-mono text-muted-foreground flex items-center gap-1">
          Designed & Built with <Heart size={14} className="text-destructive inline animate-pulse" /> by <span className="text-white font-bold ml-1">Diksha</span>
        </div>
        
        <div className="text-xs text-muted-foreground/60 font-mono">
          © {new Date().getFullYear()} DIKSHA. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/DdikshAA1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/diksha-rajput-833b85331" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
