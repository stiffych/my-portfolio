import { motion } from "framer-motion";
import { Download, Mail, MapPin, Sparkles } from "lucide-react";
import { profile } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-24 left-1/3 size-[420px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 size-[360px] rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-8"
        >
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Disponible pour de nouvelles opportunités
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] max-w-4xl"
        >
          {profile.firstName.split(" ")[0]}{" "}
          <span className="gradient-text text-glow">
            {profile.firstName.split(" ").slice(1).join(" ")}
          </span>
          <br />
          <span className="text-muted-foreground/80 text-3xl sm:text-4xl md:text-5xl font-display font-medium">
            {profile.lastName}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 flex items-center gap-3 text-primary font-mono text-sm"
        >
          <Sparkles size={16} />
          <span>{profile.title}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow hover:scale-[1.03] transition-transform"
          >
            <Mail size={18} />
            Me contacter
            <span className="size-1.5 rounded-full bg-primary-foreground/60 group-hover:translate-x-1 transition" />
          </a>
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/5 transition"
          >
            <Download size={18} />
            Télécharger le CV
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground ml-2">
            <MapPin size={14} className="text-primary" />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden glass max-w-3xl"
        >
          {[
            ["14+", "Projets livrés"],
            ["3+", "Années de code"],
            ["2", "Stages pro"],
            ["8+", "Stacks maîtrisées"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background/40 p-5">
              <div className="text-2xl font-display font-bold text-primary">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
