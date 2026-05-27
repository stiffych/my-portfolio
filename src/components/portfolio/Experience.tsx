import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { experiences, education } from "./data";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Parcours"
        title="Expérience - formation."
        subtitle="Stages, projets et études — Le chemin qui m’a mené à devenir ingénieur logiciel."
      />

      <div className="grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
            <Briefcase size={14} className="text-primary" /> Expériences
          </h3>
          <ol className="relative border-l border-border/60 pl-6 space-y-8">
            {experiences.map((e, i) => (
              <motion.li
                key={e.role + i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-primary glow ring-4 ring-background" />
                <div className="glass rounded-2xl p-5 hover:border-primary/40 transition">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-semibold">{e.role}</h4>
                    <span className="text-xs font-mono text-primary">{e.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">{e.company}</div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
            <GraduationCap size={14} className="text-primary" /> Formation
          </h3>
          <div className="space-y-4">
            {education.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-5 hover:border-primary/40 transition"
              >
                <div className="text-xs font-mono text-primary mb-1">{ed.period}</div>
                <div className="font-semibold">{ed.degree}</div>
                <div className="text-sm text-muted-foreground mt-1">{ed.school}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
