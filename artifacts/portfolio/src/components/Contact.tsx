import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import { useMagneticButton } from '@/hooks/useMagneticButton';

const ease = [0.25, 0.46, 0.45, 0.94];

function MagneticIcon({ href, icon: Icon }: { href: string, icon: any }) {
  const ref = useMagneticButton(20);
  return (
    <a
      ref={ref as any}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Failed to send. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
            Initiate <span className="text-gradient">Connection</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">Let's build something extraordinary together.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:dikshar1123@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <Mail size={20} className="group-hover:text-primary transition-colors" />
                </div>
                <span className="font-mono text-sm md:text-base">dikshar1123@gmail.com</span>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span className="font-mono text-sm md:text-base">Ghaziabad, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Digital Footprint</h4>
              <div className="flex gap-4">
                <MagneticIcon href="https://github.com/DdikshAA1" icon={Github} />
                <MagneticIcon href="https://www.linkedin.com/in/diksha-rajput-833b85331" icon={Linkedin} />
                <MagneticIcon href="#" icon={ExternalLink} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">

              {/* Success state */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl px-4 py-3 text-accent text-sm font-mono"
                  data-testid="contact-success"
                >
                  <CheckCircle size={18} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm font-mono"
                  data-testid="contact-error"
                >
                  <AlertCircle size={18} />
                  {errorMsg}
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                  placeholder="John Doe"
                  data-testid="input-contact-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm"
                  placeholder="john@example.com"
                  data-testid="input-contact-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-mono text-sm resize-none"
                  placeholder="Hello Diksha, I'd like to talk about..."
                  data-testid="input-contact-message"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                data-testid="button-contact-submit"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
