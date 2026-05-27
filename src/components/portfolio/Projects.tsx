import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { projects } from "./data";
import { ArrowUpRight, GitBranch } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Travaux sélectionnés"
        title="Projets récents."
        subtitle="Une sélection d'applications livrées en stage et en projet personnel — web, desktop et mobile."
      />
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 2) * 0.08 }}
            className="group relative glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="font-mono text-5xl font-bold text-foreground/15 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="absolute top-4 right-4 size-9 rounded-full glass grid place-items-center opacity-0 group-hover:opacity-100 transition">
                <ArrowUpRight size={16} className="text-primary" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/stiffych"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full glass hover:bg-white/5 transition"
                >
                  <GitBranch size={14} /> Code
                </a>
                {/* <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground hover:opacity-90 transition"
                >
                  Démo <ArrowUpRight size={14} />
                </a> */}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
