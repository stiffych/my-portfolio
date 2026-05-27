import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { skills } from "./data";
import { Cpu, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const icons = [Server,Layout ,Smartphone, Database, Wrench, Cpu];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Stack"
        title="Compétences techniques."
        subtitle="Une stack polyvalente, du frontend au mobile, avec un pied solide en bases de données."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => {
          const Icon = icons[i] ?? Cpu;
          return (
            <motion.div
              key={s.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-6 hover:border-primary/40 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center">
                  <Icon size={20} />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{s.level}%</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{s.category}</h3>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground border border-border/60 group-hover:border-primary/30 transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
